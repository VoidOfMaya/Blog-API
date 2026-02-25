
architecture tasks based on layers:
## Setup
- [X] Initialize Express server
- [X] Setup JWT strategy (Passport)
- [X] Setup Prisma (init + schema)
- [X] Create feature-based folder structure
- [X] Configure environment variables


## Database(prismaORM)
- [X]Create models
    - [X] User
    - [X] Role
    - [X] Post
    - [X] Comment
- [X]Migrate
    - [X] Run intial migration
    - [X] seed roles (user, author)

## Services
- [X]user Services
    - [X] createUser
    - [X] getUserById
    - [X] getCurrentUser

- [X]post services:-
    - [X]getPublishedPostsPreview
    - [X]getAllPosts(author)
    - [X]getPostById(with comments) 
    - [X]createPost
    - [X]updatePost
    - [X]togglePublishedStatus
    - [X]deletePost

- [X] comment services:-
    - [X]createComment
    - [X]updateComment
    - [X]deleteComment

## Authentication
- [X] Register logic (hash password)
- [X] Login logic (verify password)
- [X] JWT generation
- [X] JWT validation middleware

## Input validation
- [X] Login validation
- [X] Register validation
- [] Post validation
- [X] Comment validation

## Error handelling
- [X]standradize sending error messages with {code: "error_code", err: "relevant error message"}
- [X] 400 validation error
- [X] 401 unauthorized
- [X] 403 forbidden
- [X] 404 not found 
- [X] 500 server error
- [X] global error middleware

## Routers
- [X] indexRouter 
- [X] authRouter
- [X] usersRouter
- [X] postsRouter
- [X] commentsRouter
## Controllers
- [X] authController
    - [X] registerUser
    - [X] login
    - [-] logout(logout removes token stored in local storage, front ends responssibility )

- [X] usersController
    - [X] getCurrentUser
    - [X] enableAuthorMode

- [X] postsController
    - [X] getAllPosts
    - [X] getPostByid(and read related comments)
    - [X] createPost
    - [X] togglePublishStatus
    - [X] updatePost
    - [X] deletePost

- [X] commentsController
    - [X] createComment
    - [X] updateComment
    - [X] deleteComment

## Middleware
- [X] isAuthenticatedjwt cerfication()
- [X] isAuthor(role check)
- [X] validation Middleware
- [discontinued] centralized error handler

