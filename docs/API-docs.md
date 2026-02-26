# Blog-API:

This API provides authentication and role-based access control for a blogging platform with:
- Users
- Authors
- Posts
- Comments

Authentication is handled using Passport (Local + JWT strategy).
After login, users receive a JWT token which must be included in protected requests.

* KEYNOTE: All protected routes require:
           Authorization: Bearer <JWT_KEY>
_____
## Public resource: (public route)
### router paths:
1. get all published posts GET:/
2. get single published post GET:/:id
### Get all posts:
- success response:
```JSON
{
    "id": "number",
    "title":"string",
    "publishedAt": "Date",
}
```
### get post by id:
1. server expects id from params
2. success response:
```JSON
{
    "id": "number",
    "title":"string",
    "content": "string",
    "publishedAt": "Date",
    "updatedAt": "Date",
    "comments[]": "a list of comment objects(read only)"
}
```

## Authentication resource: (public route)
### router paths:
1. register user POST:/auth/register
2. log in user POST:/auth/login
### Register:-
1. Register Route,POST/auth/register
2. Server expects:
```JSON
{
    "email": "john@example.com",    
    "firstName": "string",
    "lastName": "string",
    "password": "string",
    "confirmPassword": "string"

}
```
3. success response: 
```JSON
 {"message": "User created successfully"} 
 ```
### Login Flow:-
1. User logs in via /auth/login
2. Server expects:
```JSON
{
    "email": "string",
    "password": "string"
}
```
3. success response:
```JSON
{
  "user": {
    "id": 1,
    "email": "john@example.com",
    "firstName": "string",
    "lastName": "string",
    "roleId": "number"
  },
  "token": "JWT_TOKEN_HERE"
}
```

## User Resource: (auth protected)
note: userId is derived from the JWT token
### Router paths:
1. Gets current user GET:/
2. Enables author mode PUT:/

### Get current user info
- success response:
```JSON
{
    "id" : "number",
    "email": "john@example.com",
    "firstName": "string",
    "lastName": "string",
    "roleId": "number",
}
```
### Enable author mode
- success response:
```JSON
{"message": "User is now an author"}
```

## Comment Resource: (auth protected)
- note: -comment router is nested within the indexRouter
        route params are merged
        -userId is derived from the JWT token
### Router pathes:
1. create comment POST:/:postId/comment 
2. update comment PUT:/:postId/comment/:id
3. delete comment DELETE:/:postId/comment/:id

### Create comment:
1. server expects:
```JSON
"params"
{"postId":"number"}

{ "content":"string"}
```
2.success response:
```JSON
{"message": "Comment created successfully!" }
```
### Update comment:
1. server expects:
```JSON
"params"
{"commentId":"number"},
{"content":"string"}
```
2.success response:
```JSON
{"message": "Comment updated successfully!" }
```
### Delete comment:
1. server expects:
```JSON
"params"
{"commentId":"number"}
```
2.success response:
```JSON
{"message": "Comment deleted" }
```

## Post Resource: (auth protected + access authorized for authors only):
note: userId is derived from the JWT token
### router pathes:
1. Get all posts GET: /All
2. Create post   POST: /
3. Publish post  PUT: /publish/:id
4. Update post   PUT: /update/:id
5. Delete post   DELETE: /:id

### Get all posts:
- success response:
```JSON
{
    "id": "number",
    "title": "string",
    "content": "string",
    "isPublished": "boolean",
    "createdAt": "Date",
    "publishedAt": "Date",
    "updatedAt":  "date",
    "userId": "number"
}
```
### Create post:
1. server expects:
```JSON
{
    "title": "string",
    "content":"string"
}
```
2. success response:
```JSON
{"message": "post created successfully"}
```
### Publish post:
1. server expects:
```JSON
"params"
{"postId":"number"}
```
2. success response:
```JSON
{"message": "post published successfully"}
```
### Update post:
1. server expects:
```JSON
"params:"
{  "postId":"number"}
,
{
    "title?": "String",
    "content?": "string"
   
}
```
note: update post requires  psotid and one or both of  title and content !
2. success response:
```JSON
{"message": "post updated successfully"}
```
### Delete post:
1. server expects:
```JSON
"params:"
{"postId":"number"}
```
2. success response: status 204 No Content