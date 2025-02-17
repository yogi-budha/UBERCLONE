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
