import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';


export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourses: [],
      unhandledError: false
    }
    this.getCourseData();
  }

  //sets course state with data from api


  
  getCourseData = () => {
    axios.get('http://localhost:5000/api/courses')
      .then(res => {
        this.setState({
          allCourses: res.data
        });
      })
      .catch(err => {
        this.setState({
          unhandledError: true
        });
      });
  }


  render() {
    
    const courseData = this.state.allCourses.map(course =>
      <div className="grid-33" key={course._id}>
        <Link className="course--module course--link" to={`/courses/${course._id}`}>
          <h4 className="course--label">Resources</h4>
          <h3 className="course--title">{course.title}</h3>
        </Link>
      </div>)


    //renders the courses to the page
    return (
      (this.state.unhandledError)
        ? <Redirect to="/error" />
        :
        <div className="bounds">
          {courseData}
          <div className="grid-33">
            <Link className="course--module course--add--module" to="/create">
              <h3 className="course--add--title">
                <svg version="1.1"  x="0px" y="0px" viewBox="0 0 13 13" className="add">
                  <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                </svg>New Resources</h3>
            </Link>
          </div>
        </div>
    )
  }
}

