# M3 - 🗿 Moai

<br>

# Quick Compo

<br>

## Description

Student platform, where you can find all the programming and design documentation created and shared by students.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** User can create profile to share information
-  **Login:** To share an element you need login
-  **Logout:** Log out of your account
-  **Search:** Find information in the application
-  **Create course** Create a new course
-  **Add course** Add a course
-  **Edit course** Edit a course
-  **Delete course** Delete a course


## Backlog

User profile:
- See my profile
- Rating course
- Comments course
- Share course
- Promotion course


<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                     |
| ------------------------- | -------------------- | --------------------------- | ------------------------------------------------------------ |
| `/`                       | SplashPage           | public `<Route>`            | Home page                                                    |
| `/signup`                 | SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup|
| `/login`                  | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login |
| `/Search`                 | Coursesearch         | user only `<PrivateRoute>`  | Shows all course in a list                                |
| `/course/add`             | CourseAdd            | user only `<PrivateRoute>`  | Add a course                                              |
| `/course/edit`            | Courseedit           | user only `<PrivateRoute>`  | Details of a course to edit                               |
| `/course/delete`          | CourseDelete         | user only `<PrivateRoute>`  | Delete course                                             |
| `/course/Create`          | CourseCreate         | user only  `<PrivateRoute>` | Create of course                                          |


- LoginPage

- CoursePage

- ProfilePage

- RanksPage

- Navbar


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()

- Course Service
  - course.list()
  - course.detail(id)
  - course.add(id)
  - course.delete(id)
  


<br>


# Server / Backend


## Models

User model

```javascript
{
  firstName: {type: String, required: true, unique: true},
  lastName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
}
```



Course model

```javascript
 {
   user: {type: String, required: true},
   title: {type: String},
   description: {type: String},
 }
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/course`                     |                              |                | 400          | Show all course                                        |
| POST        | `/course/add-course`          | {}                           | 201            | 400          | Create and save a new course                            |
| PUT         | `/course/edit/:id`            | {name,img,players}           | 200            | 400          | edit course                                             |
| DELETE      | `/course/delete/:id`          | {id}                         | 201            | 400          | delete course                                            |
| GET         | `/course`                    |                              |                | 400            | show 


<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/veWRyu9x/m3-project-%F0%9F%97%BF-moai) 
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Rodrigohernandezsan/client-moai)

[Server repository Link](https://github.com/Rodrigohernandezsan/server-moai)

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)




