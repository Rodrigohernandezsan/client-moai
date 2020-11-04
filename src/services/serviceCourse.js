import axios from "axios";

const service = axios.create({

  baseURL: process.env.REACT_APP_API_BASE_URL ||  "http://localhost:5000/api/courses",
});

export const getCourseData = (id) => {
  console.log ('all Course')
  return service
    .get('/course')
    .then((response) => response.data)
    .catch((err) => err);
};


export const deleteCourse = (id) => {
  console.log ('delete Course')
  return service
    .get(`/courses/delete'${id}`)
    .then((response) => response.data)
    .catch((err) => err);
};


export const createCourse = (id) => {

  console.log ("create course")
  return service
    .post('/courses/create',id)
    .then((response) => response.data)
    .catch((err) => err);
  }



export const updateCourse = (id, course) => {
  
  return service
    .post(`/courses/update/${id}`,course)
    .then((response) => response.data)
    .catch((err) => err);
};

