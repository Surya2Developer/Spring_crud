# Spring_crud
#  Spring Boot + Angular Task Manager

A full-stack CRUD (Create, Read, Update, Delete) web application built using **Spring Boot**, **Angular**, **MySQL**, and **REST APIs**.

This project demonstrates modern full-stack development practices including frontend-backend communication, database integration, RESTful API design, and responsive user interface development.

---

##  Project Overview

The Task Manager application allows users to create, view, update, and delete tasks through an intuitive web interface.

The frontend is built with Angular and communicates with a Spring Boot REST API. Task data is stored persistently in a MySQL database using Spring Data JPA.

---

##  Features

* ✅ Create new tasks
* ✅ View all tasks
* ✅ Update existing tasks
* ✅ Delete tasks
* ✅ RESTful API integration
* ✅ MySQL database persistence
* ✅ Angular standalone components
* ✅ Responsive Bootstrap UI
* ✅ Form validation and user interaction
* ✅ Cross-Origin Resource Sharing (CORS) configuration

---
## Screenshot
<img width="763" height="475" alt="Image" src="https://github.com/user-attachments/assets/b21c2473-db82-47b9-b8ee-58fdf3f1758a" />
---
## 🛠️ Technology Stack

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* Bootstrap
* RxJS

### Backend

* Spring Boot
* Spring Web
* Spring Data JPA
* Maven

### Database

* MySQL

### Tools

* Eclipse IDE
* Visual Studio Code
* Postman
* Git & GitHub

---

##  Architecture

```text
Angular Frontend
        │
        │ HTTP Requests (REST API)
        ▼
Spring Boot Backend
        │
        │ Spring Data JPA
        ▼
MySQL Database
```

---

## REST API Endpoints

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| POST   | /api/tasks      | Create Task   |
| GET    | /api/tasks      | Get All Tasks |
| PUT    | /api/tasks/{id} | Update Task   |
| DELETE | /api/tasks/{id} | Delete Task   |

---

## 📂 Project Structure

```text
Frontend
└── Angular
    ├── Components
    ├── Services
    ├── Models
    └── Bootstrap UI

Backend
└── Spring Boot
    ├── Controllers
    ├── Services
    ├── Repositories
    ├── Entities
    └── REST APIs

Database
└── MySQL
```

---

## 🚀 Getting Started

### Backend

```bash
git clone <repository-url>
cd todo-backend
```

Configure MySQL credentials in:

```properties
application.properties
```

Run:

```bash
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

### Frontend

```bash
cd todo-frontend
npm install
ng serve
```

Frontend runs on:

```text
http://localhost:4200
```

---

##  Skills Demonstrated

* Full-Stack Development
* Angular Component Architecture
* REST API Development
* Spring Boot Application Development
* Database Design & Integration
* CRUD Operations
* HTTP Client Communication
* Dependency Injection
* Object-Oriented Programming
* MVC Architecture
* Git Version Control

---

## Future Improvements

* User Authentication & Authorization
* JWT Security
* Pagination & Sorting
* Search & Filtering
* Docker Containerization
* Unit & Integration Testing
* CI/CD Pipeline Deployment
* Cloud Deployment (AWS/Azure)

---

## 👨‍💻 Author

**Magesh Surya Ambikapathi**

Software Engineer | Full-Stack Developer

Tech Stack: Java • Spring Boot • Angular • JavaScript • TypeScript • SQL • REST APIs

Always learning, building, and exploring modern software engineering practices.
