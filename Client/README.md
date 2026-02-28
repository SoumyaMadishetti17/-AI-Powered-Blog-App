# Frontend – AI Blog App (React)

This is the frontend of the AI Blog Platform built using **React.js**. It provides a responsive user interface for reading blogs and an admin panel for managing content.

---

## ⚛️ Tech Stack

* React JS
* React Router
* Axios
* Tailwind CSS
* Vite

---

## ✨ Features

### Public

* Home page with blog list
* Blog details page
* Comment system
* Responsive design

### Admin Panel

* Secure login
* Create blog post
* Generate content using AI
* Upload blog images
* Edit/Delete blogs
* Dashboard overview

---

## 📂 Folder Structure

```
client/
│
├── src
│   ├── pages
│   ├── components
│   ├── admin
│   ├── services
│   ├── App.jsx
│   └── main.jsx
```

---

## 🔌 API Integration

Frontend communicates with backend APIs for:

* Authentication
* Blog CRUD operations
* Comments
* Dashboard data
* AI content generation

Base URL can be configured in:

```
src/services/api.js
```

---

## 🚀 Setup

```
cd client
npm install
npm run dev
```

---

## 🌐 Environment Variables (.env)

```
VITE_API_BASE_URL=http://localhost:5000
```

---

## 📦 Build

```
npm run build
```

---

## 🎯 Highlights

* Clean UI architecture
* Component-based structure
* API abstraction
* Admin + Public interface
* Production ready

---
