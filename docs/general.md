## api core responsibilities:
- authenticates users
- auhorizes users with jwt
- handels role based access functionalities
- serves posts and relevant comments to the end user
- validates incoming data
- serves meaningfull error messages when errors happen
- manages database

## api clients:
- 1.blogApp
- 2.blogApp/authors-dashboard

## database:
User        |   Role        |   Poste       |   Comment     |
------------|---------------|---------------|---------------|
id Pk       |   id  pk      |   id pk       |   id pk       |
first_name  |   role_name   |   user_id fk  |   user_id fk  |
Last_name   |               |   title       |   post_id fk  |
UserName    |               |   content     |   content     |
Password    |               |   is_published|   created_at  |
role Fk --->|               |   created_at  |   updated_at  |
            |               |   published_at|               |
            |               |   updated_at  |               |
#### queries
--- seed Role with user and author roles
* users:-
    - createUser
    - getUserByid
    - checkRole
    
* postss:-
    -  getAllPosts
    -  editPostById
    -  getOnlyPublishedPosts
    -  getPostById(include comments)
* comments:-
    - createCommentbypostId

## access roles
#### Guest
- can only access unprotected routes
- vew only published posts
- view post details
- view comments
- CAN NOT poat content(posts comments)
- CAN NOT login
#### user   
- can only access unprotected and user routes
- access to all guest privelages
- can login
- can edit delete own comments
- CAN NOT create /edit/publish/delete posts
#### author
- can access all routes
- access to all guest and user privillages
- can log in
- can create posts
- can update posts
- can publish and unpublish posts
- can delete posts
- can moderate comments


## Middleware
- authorizationMiddleware
- RoleauthorizationMiddleware
## Routes

#### (unauthenticated guests)
Middleware infocement: none
- GET(/api/posts)
- GET(/api/posts/:id)
- POST(api/auth/login)
- POST(/api/auth/register)

#### (authenticated normal user)
Middleware infocement: authorizationMiddleware
- GET(/api/users/me)
- GET(/api/posts)
- GET(/api/posts/:id)
- POST(/api/:postId/comments)
- PUT(/api/comments/:id)
- DELETE(/api/comments/:id)

#### (auhtenticated Author users)
Middleware infocement: RoleauthorizationMiddleware
- GET(/api/posts)
- PUT(/api/posts/:id)
- PUT(/api/posts/:id/publish)
- PUT(/api/comments/:id)
- POST(/api/posts) Create a post
- POST(/api/posts/:postid/comments)
- DELETE(/api/comments/:id)
- DELETE(/api/posts/:id)




