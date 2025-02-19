# API Documentation

## Endpoints

### POST /user/register

#### Description
Registers a new user.

#### Request Body
```json
{
  "fullName": {
    "firstName": "string",
    "lastName": "string"
  },
  "email": "string",
  "password": "string"
}
```

#### Response

##### Success (200)
```json
{
  "success": true,
  "message": {
    "token": "string",
    "user": {
      "_id": "string",
      "fullName": {
        "firstName": "string",
        "lastName": "string"
      },
      "email": "string",
      "socketId": "string"
    }
  }
}
```

##### Error (400)
```json
{
  "error": [
    {
      "msg": "string",
      "param": "string",
      "location": "string"
    }
  ]
}
```

#### Validation Errors
- `email`: Must be a valid email address.
- `fullName.firstName`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

### POST /user/login

#### Description
Logs in an existing user.

#### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```

#### Response

##### Success (200)
```json
{
  "success": true,
  "message": {
    "user": {
      "_id": "string",
      "fullName": {
        "firstName": "string",
        "lastName": "string"
      },
      "email": "string",
      "socketId": "string"
    },
    "token": "string"
  }
}
```

##### Error (400)
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

#### Validation Errors
- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.

### GET /user/profile

#### Description
Fetches the profile of the authenticated user.

#### Response

##### Success (200)
```json
{
  "success": true,
  "message": {
    "_id": "string",
    "fullName": {
      "firstName": "string",
      "lastName": "string"
    },
    "email": "string",
    "socketId": "string"
  }
}
```

##### Error (400)
```json
{
  "success": false,
  "message": "string"
}
```

### POST /user/logout

#### Description
Logs out the authenticated user.

#### Response

##### Success (200)
```json
{
  "success": true,
  "message": "logout successfully"
}
```

##### Error (400)
```json
{
  "success": false,
  "message": "unauthorized"
}
```
