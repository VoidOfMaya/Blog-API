# Blog-API
A RESTful API built as the backend service for a 3-part full-stack blog application.

This API serves two separate frontend clients:
- A public-facing blog application (consumer)
- An author/admin dashboard

(note: folder structure is feature based/scoped)
## Architecture

This project follows a decoupled architecture:
![simple-diagram](./docs/BlogAPI%20Data%20Flow%20Model-2026-02-22-140247.png)

The API handles authentication, authorization, validation, and data persistence.


## Features

- RESTful routing
- JWT authentication using Passport.js
- Role-based authorization (guest / user / author)
- CRUD operations for:
  - Posts
  - Comments
- Server-side validation
- Structured error handling
- CORS configuration
- Secure password hashing (bcrypt)
- PostgreSQL database integration via Prisma

## development noter:
 - #### [API-OVerview](./docs/general.md)
 - #### [implementation-plan](./docs/implementation-plan.md)  
### tech stack for this project(PERN)
-   PostgreSQL
-   Express
-   Node
(React will be used for client facing applicaitons)
### tooling& dependancies:-
- express
- dotenv
- cors
- passport.js(jwt strategy)
- @prisma/adapter-pg
- @prisma/client
- bcryptjs
- express-validator
- curl/postman

## Related Project Requirement

Project specification from The Odin Project:
https://www.theodinproject.com/lessons/node-path-nodejs-blog-api