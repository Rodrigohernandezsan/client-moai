import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "./contex";
import { Redirect, Link } from "react-router-dom";



export default class UpdateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      materials: "",
      time: "",
      validationErrors: false,
      notFound: false,
      forbidden: false,
      unhandledError: false
    }
    this.getCourseData();
  }

  getCourseData = () => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}${this.props.match.params.id}`)
      .then(res => {
        if (res.data.user._id === localStorage.getItem("id")) {
          this.setState({
            title: res.data.title,
            description: res.data.description,
            materials: res.data.materialsNeeded,
            time: res.data.estimatedTime
          });
        } else {
          this.setState({
            forbidden: true
          });
        }
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({
            notFound: true
          });
        } else {
          this.setState({
            unhandledError: true
          });
        }
      });
  }

  updateCourse = (auth) => {
    const formData = {
      "title": this.state.title,
      "description": this.state.description,
      "materialsNeeded": this.state.materials,
      "estimatedTime": this.state.time
    }
    axios.put(`${process.env.REACT_APP_API_BASE_URL}/${this.props.match.params.id}`, formData, { headers: { "Authorization": auth } })
      .then(res => console.log(res))
      .catch(err => {
        if (err.response.status === 400) {
          this.setState({
            validationErrors: err.response.data.split(",")
          });
        } else {
          this.setState({
            unhandledError: true
          });
        }
      });
  }

  handleChange = (e, state) => {
    this.setState({
      [state]: e.target.value
    });
  }


  render() {
    return (
      (this.state.unhandledError)
        ? <Redirect to="/error" />
        :
        (this.state.forbidden)
          ? <Redirect to="/forbidden" />
          :
          (this.state.notFound) 
            ? <Redirect to="/notfound" />
            :
            <Consumer>
              {context => {
                const auth = context.auth;
                return (
                  <div className="bounds course--detail">
                    <h1>Update Resources</h1>
                    {
                      (!this.state.validationErrors) 
                        ? null
                        : <div>
                          <h2 className="validation--errors--label">Validation errors</h2>
                          <div className="validation-errors">
                            <ul>
                              {context.actions.validationErrors(this.state.validationErrors)}
                            </ul>
                          </div>
                        </div>
                    }
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      this.updateCourse(auth);
                    }}>
                      <div className="grid-66">
                        <div className="course--header">
                          <h4 className="course--label">Resources</h4>
                          <div>
                            <input id="title" name="title" type="text" className="input-title course--title--input"
                              placeholder="Course Title" value={this.state.title} onChange={(e) => this.handleChange(e, "title")} />
                          </div>
                          <p>{context.firstName} {context.lastName}</p>
                        </div>
                        <div className="course--description">
                          <div>
                            <textarea id="description" name="description" className="" placeholder="Course description..."
                              value={this.state.description} onChange={(e) => this.handleChange(e, "description")} />
                          </div>
                        </div>
                      </div>
                      <div className="grid-25 grid-right">
                        <div className="course--stats">
                          <ul className="course--stats--list">
                            <li className="course--stats--list--item">
                              <h4>MODULE</h4>
                              <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                                placeholder="Hours" value={this.state.time} onChange={(e) => this.handleChange(e, "time")} />
                              </div>
                            </li>
                            <li className="course--stats--list--item">
                              <h4>FEATURES ⭐️⭐️⭐️</h4>
                              <div>
                                <textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..."
                                  value={this.state.materials} onChange={(e) => this.handleChange(e, "materials")} />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid-100 pad-bottom">
                        <button className="button" type="submit">Update Course</button>
                        <Link className="button button-secondary" to={`/courses/${this.props.match.params.id}`}>Cancel</Link>
                      </div>
                    </form>
                  </div>
                )
              }}
            </Consumer>)
  }
}
