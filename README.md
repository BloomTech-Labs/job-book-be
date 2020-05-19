# API Documentation

#### Code Climate

[![Maintainability](https://api.codeclimate.com/v1/badges/fb3f5b13a4e14009a587/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/job-book-be/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/fb3f5b13a4e14009a587/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/job-book-be/test_coverage)

#### 1️⃣ Backend delpoyed at [Heroku](https://dashboard.heroku.com/apps) <br>

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm server** to start the local server
- **npm test** to start server using testing environment

### Backend framework Sqlite3 (Development) PostgreSQL(Production)

- Point One - This framework has a high level of scalability as the project grows.
- Point Two - This is an accessible framework for developers early in their career to use.

## 2️⃣ Endpoints

#### Base URL https://staging-save-this-job.herokuapp.com/

#### Job posts Routes

| Method | Endpoint               | Access Control | Description                                   |
| ------ | ---------------------- | -------------- | --------------------------------------------- |
| GET    | `/users/jobs`          | User logged in | Returns all job posts for that user.          |
| POST   | `/users/addJob`        | User Logged in | Adds job to User profile                      |
| DELETE | `/users/removeJob/:id` | User Logged in | Delete a Job Post                             |
| PUT    | `/users/updateJob/:id` | User logged in | Updates a job for the logged in user.         |
| GET    | `/users/columns`       | User logged in | Returns column titles for the logged in user. |

#### Tags Routes

| Method | Endpoint                    | Access Control | Description                                  |
| ------ | --------------------------- | -------------- | -------------------------------------------- |
| GET    | `/users/tags`               | User logged in | Returns all job tags for that user.          |
| POST   | `/users/tags/addTag/:id`    | User Logged in | Adds tag to job on User profile              |
| DELETE | `/users/tags/removeTag/:id` | User Logged in | Delete a tag from job post                   |
| PUT    | `/users/tags/updateTag/:id` | User logged in | Updates a tag for the logged in user.        |

#### Tasks Routes

| Method | Endpoint                      | Access Control | Description                                   |
| ------ | ----------------------------- | -------------- | --------------------------------------------- |
| GET    | `/users/tasks/:jobId`         | User logged in | Returns all tasks for the job of the user.    |
| GET    | `/users/tasks/:jobId/:taskId` | User logged in | Returns one task for the job of the user.     |
| POST   | `/users/tasks/:jobId/addTask` | User Logged in | Adds task to job on User profile              |
| PUT    | `/users/tasks/:jobId/:taskId` | User logged in | Updates a task for the logged in user.        |
| DELETE | `/users/tasks/:taskId`        | User Logged in | Delete a task from job post                   |

# Data Model

#### USERS

---

```
{
  id: UUID
  firstName: STRING
  lastName: STRING
  email: STRING
}
```

#### Job posts

---

```
{
  id: UUID
  jobTitle: STRING
  urlText: TEXT
  logo: STRING
  companyTitle: STRING
  companyUrl: STRING
  users_id: INTEGER
  column_id: STRING
  index: INTEGER
  applicationDeadline: DATE
  rating: INTEGER
  description: TEXT
  location: STRING
  notes: TEXT
  latitude: FLOAT
  longitude: FLOAT
}
```

#### Job tags

---

```
{
  id: UUID
  tagName: STRING
  jobPosts_id: INTEGER
}
```

#### Job tasks

---

```
{
  id: UUID
  taskName: STRING
  date: DATE
  job_id: INTEGER
  completed: BOOLEAN
}
```

## 2️⃣ Actions

#### Users

`find()` -> Returns all users, if no param.

`findBy(filter)` -> Returns a user by filter(choice)

`add(user)` -> Creates a user

`findById(email)` -> Finds a user by email.

#### Job posts

`findJob()` -> Returns all Jobs

`addJob(job, id)` -> Add a Job

`findJobById(id)` -> Returns a Job post by Job id

`findJobByUser(users_id)` -> Finds all users Jobs.

`removeJob(id)` -> Deletes a Job

`updateJob(id, job_update)` -> Updates a job

`findColumn()` -> Finds column id

#### Tags

`findTags()` -> Returns all job tags

`findTagsByUser(userId)` -> Returns all job tags for specific user

`findTagById(id)` -> Returns one job tag

`addTag(newTag,id)` -> Adds a new tag to job post

`removeTag(id)` -> Removes a tag from a job post

`updateTag(id, tag_update)` -> Updates a tag

#### Tasks

`getTasks()` -> Returns all tasks for job post

`getTaskById(jobId, taskId)` -> Returns one task for specific job

`addTask(jobId, newTask)` -> Adds a new task to job post

`updateTask(jobId, taskId, updates)` -> Updates a task

`deleteTask(taskId)` -> Deletes a task from a job

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

- NODE_ENV = set to "development" until ready for "production"

- OKTA_AUTH_TOKEN = okta profile web token

- OKTA_ORG = okta resource server issuer url

- OKTA_CLIENT_ID = xxxx

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/Lambda-School-Labs/job-book-fe/blob/master/README.md) for details on the fronend of our project.
