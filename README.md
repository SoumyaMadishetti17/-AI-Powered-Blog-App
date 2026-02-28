# 🚀 AI Enabled Full Stack Blog Platform (MERN + Gemini)

An intelligent, production-ready blogging platform built using the MERN Stack that enables admins to create, manage, and publish blogs with AI-generated content, optimized media, and a powerful admin dashboard.

This project demonstrates real-world full-stack architecture with AI integration, secure authentication, cloud deployment, and scalable backend design — making it ideal for modern developer portfolios.

---

## 🔗 Live Demo & Repository

🌐 Live: https://ai-powered-blogs.netlify.app  
📂 GitHub: https://github.com/SoumyaMadishetti17/-AI-Powered-Blog-App

---

## 🚀 Live Features

* AI-powered blog content generation using Google Gemini
* Admin dashboard for full blog management
* Create, update, delete blog posts
* Image upload & optimization via ImageKit
* Blog comments system
* Secure admin authentication
* Responsive modern UI
* Fully deployed on cloud

---

## 🧠 AI Integration (Google Gemini)

The platform integrates Google Gemini API to:

✨ Generate blog titles
📝 Create full-length blog content
⚡ Speed up content creation for admins
💡 Assist with idea generation and writing support

---

## 🛠 Tech Stack

### Frontend

* React JS
* React Router
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### External Services

* Google Gemini API (AI Content Generation)
* ImageKit API (Image Upload & Optimization)
* Netlify (Frontend Deployment)
* Render (Backend Deployment)

---

## 📂 Project Structure

```
AI-Blog-App
│
├── client        # React Frontend
├── server        # Node/Express Backend
├── README.md
```

---

## 🔐 Admin Capabilities

The admin dashboard allows:

* 🔑 Secure login authentication
* ➕ Publish new blog posts
* 🤖 Generate content using AI
* 🖼 Upload and manage blog images
* ✏️ Edit or update existing blogs
* ❌ Delete blogs
* 💬 View and manage comments
* 📊 Access dashboard analytics


---

## 👥 User Features

* 📖 Browse all blogs on homepage
* 🔍 View detailed blog content
* 💬 Add comments on posts
* 📱 Fully responsive UI for all devices

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/SoumyaMadishetti17/-AI-Powered-Blog-App.git
cd -AI-Powered-Blog-App
```

Install dependencies:

```
cd client
npm install

cd ../server
npm install
```

Run the application:

```
# Backend
npm run server

# Frontend
npm run dev
```

---

## 🌐 Environment Variables

### Backend (.env)

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret

# AI
GEMINI_API_KEY=your_gemini_key

# ImageKit
IMAGEKIT_PUBLIC_KEY=xxx
IMAGEKIT_PRIVATE_KEY=xxx
IMAGEKIT_URL_ENDPOINT=xxx
```

---

## 🚀 Deployment

### Frontend – Netlify

* Build Command: `npm run build`
* Publish Directory: `dist`
* Environment Variable:

```
VITE_API_BASE_URL=https://your-render-backend-url.onrender.com
```

### Backend – Render

* Runtime: Node.js
* Build Command: `npm install`
* Start Command: `npm run server`
* Add environment variables in Render dashboard:

  * MONGO_URI
  * JWT_SECRET
  * GEMINI_API_KEY
  * IMAGEKIT keys

---

## 🎯 Why This Project?

This project demonstrates:

* Full-stack MERN development
* AI integration in real applications
* REST API design
* Authentication & authorization
* Cloud deployment (Netlify + Render)
* Media handling with CDN
* Production-level architecture

Perfect for **Full Stack / MERN / AI-enabled developer portfolios**.

---

## 🔮 Future Improvements

* 👤 User authentication & profiles
* ❤️ Like / Bookmark system
* 🖊 Rich text editor (Markdown/Editor)
* 🔍 Blog search & category filters
* 📈 AI-powered SEO optimization
* 📊 Advanced analytics dashboard

---

## 👨‍💻 Author

**Soumya Madishetti**
Full Stack Developer | MERN | AI Integration

## 📌 Building scalable web apps with modern technologies.
