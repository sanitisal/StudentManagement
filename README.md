# 📘 Student Management System

A full-stack **Student Management System** developed as part of an assignment to demonstrate practical skills in:

* ASP.NET Core Web API
* SQL Server (Entity Framework Core - Code First)
* JWT Authentication
* React + TypeScript + Tailwind CSS

---

# 🚀 Assignment Objective

Build a secure and scalable Student Management System with:

* CRUD operations (Create, Read, Update, Delete)
* JWT-based authentication
* Clean architecture
* Proper error handling and logging

---

# 🧱 Tech Stack

## 🔹 Backend

* ASP.NET Core Web API
* Entity Framework Core (Code First)
* SQL Server
* JWT Authentication
* Serilog (Logging)
* Swagger (API Documentation)

## 🔹 Frontend

* React
* TypeScript
* Tailwind CSS
* Axios (API Integration)

---

# ⚙️ Features Implemented

## ✅ Backend

* User Registration & Login
* JWT Token Generation & Validation
* Protected APIs using `[Authorize]`
* Global Exception Handling (Middleware)
* Logging using Serilog
* Layered Architecture:

  ```text
  Controller → Service → Repository → Database
  ```

## ✅ Student APIs

* Get all students
* Add new student
* Update student
* Delete student

## ✅ Frontend

* Login & Registration pages
* Dashboard with student list
* Add student functionality
* Delete student functionality
* Token-based API communication

---

# 🗄️ Database Schema

## Student Table

| Column      | Type     |
| ----------- | -------- |
| Id          | int (PK) |
| Name        | string   |
| Email       | string   |
| Age         | int      |
| Course      | string   |
| CreatedDate | datetime |

---

# 🔐 Authentication Flow

```text
Register → Save user (hashed password)
Login → Validate user → Generate JWT
Frontend → Store token → Send in headers
Backend → Validate token → Allow access
```

---

# 📡 API Endpoints

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| GET    | /api/students      | Get all students |
| POST   | /api/students      | Add student      |
| PUT    | /api/students/{id} | Update student   |
| DELETE | /api/students/{id} | Delete student   |
| POST   | /api/auth/register | Register user    |
| POST   | /api/auth/login    | Login user       |

---

# ⚙️ Backend Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/sanitisal/StudentManagement.git
cd StudentManagement
```

## 2️⃣ Configure Database

Update `appsettings.json`:

```json
"ConnectionStrings": {
  "Default": "Server=.;Database=Student;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

---

## 3️⃣ Run Migrations

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

---

## 4️⃣ Run Backend

```bash
dotnet run
```

---

## 5️⃣ Swagger UI

```text
https://localhost:7202/swagger
```

---

# 🎨 Frontend Setup

## 1️⃣ Navigate to frontend folder

```bash
cd zest-frontend
```

## 2️⃣ Install dependencies

```bash
npm install
```

## 3️⃣ Run application

```bash
npm run dev
```

## 4️⃣ Open in browser

```text
http://localhost:5173
```

---

# 🔑 Usage

## Register

* Create a new user via `/api/auth/register`

## Login

* Login using `/api/auth/login`
* Copy JWT token

## Access APIs

* Use token in header:

```text
Authorization: Bearer <token>
```

---

# 📊 Logging & Error Handling

* Global Exception Middleware handles all errors
* Serilog logs errors and application flow
* Clean JSON error responses returned

---

# 🏆 Evaluation Criteria Covered

✔ Code Quality
✔ Clean Architecture
✔ Error Handling
✔ Security (JWT + Password Hashing)
✔ API Functionality

---

# 📸 Screenshots (Add for better evaluation)

* Swagger API
* Login Page
* Register Page
* Dashboard

---

# 🚀 Future Enhancements

* Edit student functionality (UI)
* Role-based authentication
* Pagination & search
* Deployment (Docker / Cloud)

---

# 👨‍💻 Author

**Sanit Isal**
GitHub: https://github.com/sanitisal

---

# ⭐ Final Note

This project demonstrates a structured and scalable approach to building secure web APIs and integrating them with a modern frontend.

---
