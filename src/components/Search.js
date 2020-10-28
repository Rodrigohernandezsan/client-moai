import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  state = {
    searchParams: "",
    results: [],
  };

  handleOnChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.searchCourse();
      }
    );
  };

  searchCourse = () => {
    // console.log("test")
    this.setState({
      results: this.props.courses.filter((course) =>
      course.name
          .toLocaleLowerCase()
          .includes(this.state.searchParams.toLocaleLowerCase())
      ),
    });
  };

  render() {
    const results = this.state.results;
    return (
      <div className="container">
        <h3>Search</h3>
        <div className="control">
          <input
            className="input is-primary"
            type="text"
            placeholder="Search"
            name="searchParams"
            value={this.state.searchParams}
            onChange={this.handleOnChange}
          />
        </div>
        <div>

          {results.map((course) => (
            <div className="card" key={course._id}>
              <img src={course.image.medium} alt={course.name} />
              <div className="course-details">
                <h2>{course.name}</h2>
                <div className="course">
                  <strong>Resources:</strong> {course.name}
                 
                </div>

                <Link to={`/courses/${course._id}`}>Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


