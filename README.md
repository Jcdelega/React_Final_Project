# 🐦 Simplified Twitter Clone with Authentication

This project is a **simplified Twitter clone** built using **React**. The app allowed users to interact with a timeline and post tweets, it has access control. To enhance the user experience and app security, we are now integrating a **simulated authentication system**.

---

## 🎯 Objective

The main objective of this project is to **add a robust (simulated) authentication system** to our Twitter-like application. This will ensure that only registered users can access and interact with protected features and pages.

---

## 🔐 Key Features

- ✅ **User Registration** – Allow new users to create an account.
- ✅ **User Login** – Let existing users log in using their credentials.
- ✅ **Authentication State Management** – Maintain user session with secure state handling (e.g. using `Context API`, `localStorage`, or `useReducer`).
- ✅ **Protected Routes** – Restrict access to certain views/pages unless the user is logged in.
- ✅ **Conditional Rendering** – Display UI elements (e.g., tweet box, logout button) only to authenticated users.
- ✅ **Logout Functionality** – Let users log out and clear session data.

---

## 🧱 Technologies Used

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Context API](https://reactjs.org/docs/context.html) for global auth state
- Optional: `localStorage` or `sessionStorage` to persist auth state

---

## 🚀 Getting Started

### 🛠 Installation

```bash
git clone https://github.com/your-username/twitter-clone-auth.git
cd twitter-clone-auth
npm install
npm run dev
```

The app should be running at `http://localhost:5173`, depending on your configuration.

---

## 🧩 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── TweetList.jsx
│   ├── TweetForm.jsx
│   └── Tweet.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx
│   └── ThemeContext.jsx
├── App.jsx
└── main.jsx
```

---

## 🔐 Authentication Flow

1. **Register** → create account and set session state.
2. **Login** → validate credentials and access protected pages.
3. **Access Control** → if unauthenticated, redirect to login.
4. **Logout** → clear session and restrict access again.

---

## 📱 Screens

- 🔓 Public Home
- 🔐 Login / Register
- 🧾 Timeline (authenticated)
- ➕ Post a Tweet (authenticated only)

---

## 👨‍💻 Author

Developed by **Jcdelega**  
Focused on learning and applying secure frontend architectures with `React`.

