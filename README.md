# Simple CRUD Application

This is a Simple CRUD Application designed to manage student records efficiently. It allows users to perform the following operations:

- **Create**: Add new student records.
- **Read**: View existing student records.
- **Update**: Modify existing student records.
- **Delete**: Remove student records based on the input ID.

I utilize MongoDB to store student information, ensuring data persistence and easy management. The application is user-friendly and includes validation for input fields. RESTful APIs are implemented to handle CRUD operations.

## Technologies used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for data storage.
- **Git**: Version control system.

## Example Student Records

### Sample Student Record Structure

```json
{
    "_id": "60c72b2f5f1b2c001f8e4e2b",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword",
    "branch": "Computer Science",
    "mobileNo": "1234567890",
    "year": 3,
    "semester": 6,
    "memberOfClub": "Coding Club",
    "memberOfActivities": ["Hackathon", "Workshop"]
}


### POST METHOD

### Request

{
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "securepassword123",
    "branch": "Information Technology",
    "mobileNo": "0987654321",
    "year": 2,
    "semester": 4,
    "memberOfClub": "Robotics Club",
    "memberOfActivities": ["Competition", "Seminar"]
}

### Response
{
    "message": "Student record created successfully.",
    "student": {
        "_id": "60c72b2f5f1b2c001f8e4e2c",
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "password": "securepassword123",
        "branch": "Information Technology",
        "mobileNo": "0987654321",
        "year": 2,
        "semester": 4,
        "memberOfClub": "Robotics Club",
        "memberOfActivities": ["Competition", "Seminar"]
    }
}


### GET method
Response
{
    "_id": "60c72b2f5f1b2c001f8e4e2b",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword",
    "branch": "Computer Science",
    "mobileNo": "1234567890",
    "year": 3,
    "semester": 6,
    "memberOfClub": "Coding Club",
    "memberOfActivities": ["Hackathon", "Workshop"]
}
{
 "_id": "60c72b2f5f1b2c001f8e4e2c",
 "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "securepassword123",
    "branch": "Information Technology",
    "mobileNo": "0987654321",
    "year": 2,
    "semester": 4,
    "memberOfClub": "Robotics Club",
    "memberOfActivities": ["Competition", "Seminar"]

}


### PATCH
### Request

{
    
        "_id": "60c72b2f5f1b2c001f8e4e2c",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "securepassword123",
    "branch": "Information Technology",
    "mobileNo": "0987654321",
    "year": 2,
    "semester": 4,
    "memberOfClub": "Robotics Club",
    "memberOfActivities": ["Competition", "Seminar"]
}

### Response
{
    

        "_id": "60c72b2f5f1b2c001f8e4e2c",
        "name": "Jane Smith",
        "email": "smith@example.com",
        "password": "securepassword123",
        "branch": "Information Technology",
        "mobileNo": "0987654321",
        "year": 2,
        "semester": 4,
        "memberOfClub": "Robotics Club",
        "memberOfActivities": ["Competition", "Seminar"]
    
}



### DELETE

### Request

{
    
        "_id": "60c72b2f5f1b2c001f8e4e2c",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "securepassword123",
    "branch": "Information Technology",
    "mobileNo": "0987654321",
    "year": 2,
    "semester": 4,
    "memberOfClub": "Robotics Club",
    "memberOfActivities": ["Competition", "Seminar"]
}

"Response"
"message": "STudent Records deleted successfully"

