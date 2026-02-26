# Blog-API:

This API provides authentication and role-based access control for a blogging platform with:
- Users
- Authors
- Posts
- Comments

Authentication is handled using Passport (Local + JWT strategy).
After login, users receive a JWT token which must be included in protected requests.

* KEYNOTE: include JWT_KEY in every request for a protected rout
_____
## Public resource: (public rout)
### router pathes:
1. GET:/ (get all published posts)
2. GET:/:id(get published post by id)
### Get all posts:
- success response:
```JSON
{
    "id": "number",
    "title":"string",
    "publishedAt": "dateTime",
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
    "publishedAt": "datetime",
    "updatedAt": "datetime",
    "comments[]": "a list of comment objects(read only)"
}
```

## Authentication resource: (public rout)
### router pathes:
1. POST:/auth/register
2. POST:/auth/login
### Register:-
1. Register Route,POST/auth/register
2. Server expects:
```JSON
{
    "email": "john@example.com",    
    "firstName": "string",
    "lastName": "string",
    "password": "string",
    "confirmPaswword": "string"

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
### Router pathes:
1. GET:/ (gets current user info)
2. PUT:/ (enables author mode)

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
### Enabke author mode
- success response:
```JSON
{"message": "User is now an author"}
```

## Comment Resource: (auth protected)
- note: comment router is nested within the indexRouter
        route params are merged
### Router pathes:
1. create comment POST:/:postId/comment 
2. update comment PUT:/:postId/comment/:id
3. delete comment DELETE:/:postId/comment/:id

### Create comment:
1. server expects:
```JSON
{
    "userId":"number",
    "postId":"number", 
    "content":"content"
}
```
2.success response:
```JSON
{"message": "Comment created successfully!" }
```
### Update comment:
1. server expects:
```JSON
{
    "commentId":"number",
    "content":"content"
}
```
2.success response:
```JSON
{"message": "Comment updated successfully!" }
```
### Delete comment:
1. server expects:
```JSON
{
    "commentId":"number",

}
```
2.success response:
```JSON
{"message": "Comment deleted" }
```

## Post Resource: (auth protected + access authorized for authors only):
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
    "userId":"number",
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
{"postId":"number"}
```
2. success response:
```JSON
{"message": "post published successfully"}
```
### Update post:
1. server expects:
```JSON
{
    "postId":"number",
    "title?": "String",
    "content?": "string"
    
}
```
2. success response:
```JSON
{"message": "post updated successfully"}
```
### Delete post:
1. server expects:
```JSON
{"postId":"number"}
```
2. success response:
```Js
res.status(204);
```