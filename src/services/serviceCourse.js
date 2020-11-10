import axios from "axios";

const service = axios.create({

  baseURL: process.env.REACT_APP_API_BASE_URL
});

export const getCourseData = (id) => {
  return service
    .get('/courses')
    .then((response) => response.data)
    .catch((err) => err);
};


export const deleteCourse = (id) => {
  return service
    .get(`/courses/delete'${id}`)
    .then((response) => response.data)
    .catch((err) => err);
};


export const createCourse = (id) => {

  console.log("create course")
  return service
    .post('/courses/create', id)
    .then((response) => response.data)
    .catch((err) => err);
}


export const updateCourse = (id, course) => {

  return service
    .post(`/courses/update/${id}`, course)
    .then((response) => response.data)
    .catch((err) => err);
};

