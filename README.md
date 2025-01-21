Online Training Portal

Project Overview

The Online Training Portal is a web-based application designed to provide a seamless experience for users to register, log in, explore services, and contact support.
The application is developed using React for the frontend and Spring Boot for the backend. 
The system is designed to handle user authentication, manage services, and facilitate user communication with the support team.

Development Environment

Frontend

Framework: React
Dependencies: React Router, Axios
Development Server: http://localhost:5173

Backend

Framework: Spring Boot
Language: Java
Database: MySQL
Dependencies: Spring Data JPA, Spring Web, Lombok
API Base URL: http://localhost:8080/api/users


Backend

Directory Structure
main/java/com/trainingportal/onlinetraining/
├── Controller/
│   ├── AuthController.java
│   ├── ContactController.java
│   ├── ServiceController.java
├── CustomResponse/
│   └── ResponseApi.java
├── Models/
│   ├── AuthModels.java
│   ├── ContactModels.java
│   ├── ServiceModels.java
├── Repository/
│   ├── Contactrepo.java
│   ├── Onlinetrainingrepo.java
│   ├── Servicesrepo.java
├── Service/
│   ├── AuthService.java
│   ├── ContactService.java
│   ├── CourseService.java
└── OnlinetrainingApplication.java

Key Controllers

AuthController.java
Handles user authentication, registration, and login.
GET /api/users/register/{userName}: Fetch user details by username.
POST /api/users/postuser: Register a new user.
POST /api/users/loginUser: Log in a user.

ContactController.java
Manages user messages.
GET /api/users/contact/{userName}: Fetch messages by username.
POST /api/users/contactus: Post a new message.

ServiceController.java
Manages training services.
GET /api/users/services: Fetch all services.
POST /api/users/postservices: Add a list of services.
PUT /api/users/updateservices/{id}: Update a service by ID.
DELETE /api/users/deleteservice/{id}: Delete a service by ID.

Custom Response
ResponseApi.java: A generic response wrapper to standardize API responses.

Models
AuthModels.java: Represents user authentication details.
ContactModels.java: Represents user contact messages.
ServiceModels.java: Represents service details.

Repositories
Contactrepo.java: Handles contact message data.
Onlinetrainingrepo.java: Handles user data.
Servicesrepo.java: Handles service data.

Services
AuthService.java: Handles authentication logic.
ContactService.java: Handles contact message logic.
CourseService.java: Handles service-related logic.

Frontend

Directory Structure
Onlinetrainingclient/
├── public/
├── src/
│   ├── Components/
│   │   ├── Headerandfooter/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Logout.jsx
│   │   ├── Register.jsx
│   │   ├── Services.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx

Key Components

About.jsx: Displays information about the platform.
Contact.jsx: Allows users to send messages to the support team.
Error.jsx: Displays error pages for incorrect routes.
Home.jsx: Landing page with an overview of the portal.
Login.jsx: Handles user login functionality.
Logout.jsx: Handles user logout functionality.
Register.jsx: Enables user registration.
Services.jsx: Displays available training services.

Getting Started
Prerequisites

Node.js and npm (for frontend)
Java JDK 8+ (for backend)
MySQL Server

Setup
Frontend:
Navigate to Onlinetrainingclient/.

Install dependencies:
npm install

Start the development server:
npm start

Backend:
Import the project into your IDE (e.g., IntelliJ IDEA or Eclipse).
Configure the MySQL database in application.properties.
Run the OnlinetrainingApplication.java file.

API Endpoints

User Authentication
GET /api/users/register/{userName}
POST /api/users/postuser
POST /api/users/loginUser

Contact Management
GET /api/users/contact/{userName}
POST /api/users/contactus

Service Management
GET /api/users/services
POST /api/users/postservices
PUT /api/users/updateservices/{id}
DELETE /api/users/deleteservice/{id}

Additional Information
Ensure CORS configuration matches the frontend URL.
Use Postman or Swagger for API testing.
Maintain proper error handling and logging for debugging purposes.
