import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../components/SearchBar';


export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourses: [],
      srchResults: [],
      unhandledError: false,
      searchParam: ""
    }
    this.getCourseData();
  }


  
  getCourseData = () => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}`)
      .then(res => {
        this.setState({
          
          allCourses: res.data,
          srchResults: res.allCourses,

        });

      })
      .catch(err => {
        this.setState({
          unhandledError: true
          
        });
      });
  }


  //SearchBar

  handleSearch = (value) => {

    // console.log("test")
    this.setState({
      searchParam: value
    })
 
  };

  

  render() {
    
    
    //const { srchResults, allCourses } = this.state;4
     
    console.log("err");  const courseData = this.state.allCourses.filter(course => course.title.toLowerCase().includes(this.state.searchParam.toLowerCase()) ).map(course => {
      
      
      return (<div className="grid-33" key={course._id}>
        <Link className="course--module course--link" to={`/courses/${course._id}`}>
          <h4 className="course--label">Resources</h4>
          <h3 className="course--title">{course.title}</h3>
          
        </Link>
      </div>)})



    return (
      (this.state.unhandledError)

        ? <Redirect to="/error" />
        :
        
        <div className="bounds">
          
        <SearchBar onHandleSearch={this.handleSearch}/>

          {courseData}
          <div className="grid-33">
            <Link className="course--module course--add--module" to="/create">
              <h3 className="course--add--title">
                <svg version="1.1"  x="0px" y="0px" viewBox="0 0 13 13" className="add">
                  {/* <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon> */}
                </svg>🚩 New Resources  </h3>
            </Link>
          </div>
        </div>
    )
  }
}

