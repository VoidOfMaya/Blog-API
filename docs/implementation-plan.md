
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
- [pending]user Services
    - [X] createUser
    - [] getUserById
    - [] getCurrentUser

- []post services:-
    - []getPublishedPosts
    - []getAllPosts(author)
    - []getPostById(with comments)
    - []createPost
    - []updatePost
    - []togglePublishedStatus
    - []deletePost

- [] comment services:-
    - []createComment
    - []updateComment
    - []deleteComment

## Authentication
- [X] Register logic (hash password)
- [X] Login logic (verify password)
- [X] JWT generation
- [X] JWT validation middleware

## Input validation
- [] Login validation
- [] Register validation
- [] Post validation
- [] Comment validation

## Error handelling
- []standradize sending error messages with {code: "error_code", err: "relevant error message"}
- [] 400 validation error
- [] 401 unauthorized
- [] 403 forbidden
- [] 404 not found 
- [] 500 server error
- [] global error middleware

## Routers
- [X] authRouter
- [] usersRouter
- [] postsRouter
- [] commentsRouter
## Controllers
- [pending] authController
    - [X] registerUser
    - [X] login
    - [-] logout(logout removes token stored in local storage, front ends responssibility )

- [] usersController
    - [] getCurrentUser

- [] postsController
    - [] getAllPosts
    - [] getPostByid
    - [] createPost
    - [] togglePublishStatus
    - [] updatePost
    - [] deletePost

- [] commentsController
    - [] createComment
    - [] updateComment
    - [] deleteComment

## Middleware
- [] isAuthenticatedjwt cerfication()
- [] isAuthor(role check)
- [] validation Middleware
- [] centralized error handler

