
architecture tasks based on layers:
## Setup
- [X] Initialize Express server
- [] Setup JWT strategy (Passport)
- [X] Setup Prisma (init + schema)
- [X] Create feature-based folder structure
- [] Configure environment variables


## Database(prismaORM)
- []Create models
    - [] User
    - [] Role
    - [] Post
    - [] Comment
- []Migrate
    - [] Run intial migration
    - [] seed roles (user, author)

## Services
- []user Services
    - [] createUser
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
- [] Register logic (hash password)
- [] Login logic (verify password)
- [] JWT generation
- [] JWT validation middleware

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
- [] 404 not foind 
- [] 500 server error
- [] global error middleware

## Routers
- [] authRouter
- [] usersRouter
- [] postsRouter
- [] commentsRouter
## Controllers
- [] authController
    - [] registerUser
    - [] loginUser

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

