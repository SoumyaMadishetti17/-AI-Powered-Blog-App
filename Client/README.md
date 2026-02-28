# 🎨 AI Blog Platform – Frontend

Frontend for the **AI Enabled Full Stack Blog Platform**, built using **React + Vite**.
This application provides a fast, responsive interface for users to explore blogs and a powerful admin panel for managing AI-generated content.

🔗 **Live Demo:** https://ai-powered-blogs.netlify.app/

---

## 🚀 Overview

This frontend connects with a Node.js backend to deliver:

* AI-powered blog creation
* Admin content management
* Image handling via CDN
* Public blog browsing experience

The project is designed with a clean architecture, reusable components, and production-ready performance.

---

## ✨ Features

### 🌐 Public Interface

* Browse all published blogs
* View detailed blog content
* Responsive design for mobile, tablet, and desktop
* Fast loading and optimized UI

### 🔐 Admin Panel

* Secure admin login
* Create new blog posts
* Generate blog content using AI (Gemini)
* Upload and preview blog images
* Edit existing blogs
* Delete blogs
* Manage content from dashboard

---

## 🧠 AI Capability

The frontend integrates with backend AI APIs to:

* Generate full blog content instantly
* Speed up content creation workflow
* Assist admins with automated writing

---

## ⚛️ Tech Stack

* React JS
* Vite
* React Router DOM
* Axios
* Tailwind CSS
* ImageKit (via backend)
* Netlify (Deployment)

---

## 📂 Project Structure

```
Client/
│
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Public pages (Home, Blog, etc.)
│   ├── admin/           # Admin dashboard pages
│   ├── services/        # API configuration & calls
│   ├── assets/          # Images & static files
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔌 API Integration

The frontend communicates with backend services for:

* Admin authentication
* Blog CRUD operations
* Comments handling
* AI content generation
* Dashboard data

API base URL is configured in:

```
src/services/api.js
```

---

## ⚙️ Local Setup

### 1. Navigate to frontend folder

```
cd Client
```

### 2. Install dependencies

```
npm install
```

### 3. Start development server

```
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

## 🌐 Environment Variables

Create a `.env` file inside the **Client** folder:

```
VITE_API_BASE_URL=http://localhost:5000
```

For production, update it to your deployed backend URL.

---

## 📦 Build for Production

```
npm run build
```

Preview production build:

```
npm run preview
```

---

## 🚀 Deployment

This frontend is deployed on **Netlify**.

Steps to deploy:

1. Run build
2. Upload `dist` folder to Netlify
   or connect GitHub repository
3. Set environment variable:

   ```
   VITE_API_BASE_URL=your_backend_url
   ```

---

## 🎯 Highlights

* Clean component-based architecture
* Admin + Public interface separation
* Optimized API handling with Axios
* Fast Vite build performance
* Fully responsive UI
* Production-ready structure

---

## 👨‍💻 Author

**Soumya Madishetti**
Frontend Developer | MERN | AI Integration
