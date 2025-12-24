# Frontend JWT Authentication Project

## Overview

This project demonstrates **user authentication using JSON Web Tokens (JWT)** entirely on the **frontend**.  
It simulates a real-world e-commerce login system without building a backend by leveraging a **demo JWT API**.

- **Frontend Framework:** React
- **HTTP Client:** Axios
- **Routing:** React Router DOM
- **Token Storage:** LocalStorage

---

## Features

1. **Login Functionality**
   - Users can log in using a real demo JWT API.
   - Email and password are validated by the API.
   - On successful login, the server returns a **signed JWT**.

2. **JWT Storage & Handling**
   - JWT is securely stored in **localStorage**.
   - Token expiration is checked before rendering protected pages.
   - Token is used in API headers for protected routes.

3. **Protected Dashboard**
   - Displays **user details** decoded from JWT.
   - Only accessible if a valid token exists.

4. **Logout**
   - Removes token from localStorage.
   - Redirects users to the login page.

5. **Error Handling**
   - Invalid credentials display an error message.
   - Expired tokens redirect to login.

---

## Demo API

The project uses the **Platzi Fake Store API** for login:
- https://api.escuelajs.co/api/v1/auth/login

- **Demo Credentials:**
  - Email: `john@mail.com`
  - Password: `changeme`
- Returns a **real signed JWT** (`access_token`) used in the frontend.

---

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
