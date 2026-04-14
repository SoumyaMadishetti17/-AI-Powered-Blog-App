<div align="center">

# 🚀 DevBlogs — AI-Powered Blog Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=netlify)](https://ai-powered-blogs.netlify.app)
[![Backend](https://img.shields.io/badge/API-Live-blue?style=for-the-badge&logo=render)](https://ai-powered-blog-app-e28x.onrender.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://mongodb.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![Node](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)

**A production-ready, full stack blogging platform with AI-generated content, role-based authentication, cloud media storage, and full CI/CD deployment.**

[🌐 Live Demo](https://ai-powered-blogs.netlify.app) • [📂 Frontend Docs](./Client/README.md) • [⚙️ Backend Docs](./Server/README.md) • [🐛 Report Bug](https://github.com/SoumyaMadishetti17/-AI-Powered-Blog-App/issues)

</div>

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
![Home Page](screenshots/home.png)

### 📊 Admin Dashboard
![Admin Dashboard](screenshots/dashboard.png)

### 🔐 User Login & Register
![User Login](screenshots/login.png)
![User Register](screenshots/register.png)

### 📋 Blog Management
![Blog List](screenshots/bloglist.png)

</div>

---

## 🌐 Live Demo

| Service | URL | Status |
|---------|-----|--------|
| 🌐 Frontend | https://ai-powered-blogs.netlify.app | ![Live](https://img.shields.io/badge/status-live-brightgreen) |
| ⚙️ Backend API | https://ai-powered-blog-app-e28x.onrender.com | ![Live](https://img.shields.io/badge/status-live-brightgreen) |

### 🔑 Demo Credentials

| Role | Email | Password | Access |
|------|-------|----------|--------|
| 👤 User | Register any account | Any password | Read blogs, comment |
| 🔑 Admin | admin@example.com | dev | Full dashboard access |

---

## 📌 What Is This?

DevBlogs is a full stack MERN blogging platform where:

- **Admins** create and manage blogs using **Google Gemini AI** to generate titles and content instantly
- **Users** register, log in, read blogs, and leave comments
- **Everyone** gets a fast, responsive, modern UI with category filters and search

Built with real-world production architecture — JWT role-based auth, bcrypt password hashing, ImageKit CDN, and full cloud deployment on Netlify + Render.

---

## ✨ Features

### 👤 User Features
- 📖 Browse and read all published blogs
- 🔍 Search blogs by keyword
- 🏷️ Filter by category (Technology, Startup, Lifestyle, Finance)
- 💬 Comment on blog posts
- 🔐 Register and login securely with JWT
- 📱 Fully responsive on all devices

### 🔑 Admin Features
- 🤖 AI-generated blog titles and full content via **Google Gemini**
- ✍️ Create, publish, unpublish, and delete blog posts
- 🖼️ Upload and optimize images via **ImageKit CDN**
- 💬 View, approve, and delete comments
- 📊 Dashboard with live blog, comment, and draft stats
- 🔑 Secure role-based admin authentication

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React.js 18 | UI framework |
| React Router v6 | Client-side routing |
| Tailwind CSS | Styling |
| Axios | HTTP requests |
| Quill.js | Rich text editor |
| React Hot Toast | Notifications |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js 18+ | Runtime |
| Express.js | Web framework |
| MongoDB + Mongoose | Database + ODM |
| JWT | Authentication |
| bcryptjs | Password hashing |
| Multer | File upload handling |

### External Services
| Service | Purpose |
|---------|---------|
| 🤖 Google Gemini API | AI content generation |
| 🖼️ ImageKit | Image upload, optimization & CDN |
| 🍃 MongoDB Atlas | Cloud database |
| 🌐 Netlify | Frontend deployment |
| 🚀 Render | Backend deployment |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT (React + Vite)                   │
│                     Netlify Deployment                      │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌───────────────────┐   │
│  │  Public     │  │  User Auth  │  │  Admin Dashboard  │   │
│  │  Home/Blog  │  │  Login/     │  │  (Protected by    │   │
│  │  Pages      │  │  Register   │  │   JWT role check) │   │
│  └─────────────┘  └─────────────┘  └───────────────────┘   │
│                         │                                   │
│              AppContext (Global State)                      │
│         token | userToken | user | blogs                    │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS REST API
                           │ Authorization: Bearer <JWT>
┌──────────────────────────▼──────────────────────────────────┐
│                  SERVER (Node.js + Express)                  │
│                    Render Deployment                         │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌───────────────────┐   │
│  │ /api/blog   │  │ /api/user   │  │   /api/admin      │   │
│  │ GET all     │  │ POST login  │  │ POST login        │   │
│  │ GET single  │  │ POST        │  │ GET dashboard     │   │
│  │ POST add    │  │ register    │  │ POST add blog     │   │
│  │ DELETE      │  │ GET profile │  │ DELETE blog       │   │
│  └─────────────┘  └─────────────┘  └───────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              JWT Auth Middleware                    │    │
│  │         role: 'admin' | role: 'user'                │    │
│  │    adminOnly() | userOnly() | auth()                │    │
│  └─────────────────────────────────────────────────────┘    │
└──────────────┬───────────────────┬──────────────────────────┘
               │                   │
   ┌───────────▼──────┐  ┌────────▼──────────────────────┐
   │  MongoDB Atlas   │  │     External APIs             │
   │  Collections:    │  │  🤖 Google Gemini API         │
   │  • blogs         │  │     AI content generation     │
   │  • users         │  │                               │
   │  • admins        │  │  🖼️  ImageKit CDN              │
   │  • comments      │  │     Image upload & optimize   │
   └──────────────────┘  └───────────────────────────────┘
```

---

## 🔐 Authentication Flow

```
👤 USER FLOW                          🔑 ADMIN FLOW
─────────────────                     ─────────────────
POST /api/user/register               POST /api/admin/login
        │                                     │
        ├── Validate input                    ├── Find admin in DB
        ├── Check email exists                ├── Verify password
        ├── Hash password (bcrypt)            └── Sign JWT
        ├── Save to MongoDB                       { email, role: 'admin' }
        └── Sign JWT
            { id, role: 'user' }

     Both tokens stored in localStorage
     Sent via Authorization header on every request
```

---

## 📂 Project Structure

```
AI-Powered-Blog-App/
│
├── 📁 Client/                          # React Frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   │   ├── Login.jsx           # Admin login form
│   │   │   │   ├── Sidebar.jsx         # Admin navigation
│   │   │   │   ├── BlogTableItem.jsx   # Blog row component
│   │   │   │   └── CommentTableItem.jsx
│   │   │   ├── BlogCard.jsx            # Blog preview card
│   │   │   ├── BlogList.jsx            # Blog grid listing
│   │   │   ├── Navbar.jsx              # Nav with user/admin auth
│   │   │   ├── Header.jsx              # Hero section
│   │   │   ├── Footer.jsx
│   │   │   └── NewLetter.jsx           # Newsletter signup
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── Layout.jsx          # Admin layout wrapper
│   │   │   │   ├── Dashboard.jsx       # Stats + recent blogs
│   │   │   │   ├── AddBlog.jsx         # AI-powered blog creation
│   │   │   │   ├── ListBlog.jsx        # Manage all blogs
│   │   │   │   └── Comments.jsx        # Manage comments
│   │   │   ├── Home.jsx                # Public home page
│   │   │   ├── Blog.jsx                # Single blog view
│   │   │   └── UserLogin.jsx           # User register/login
│   │   ├── context/
│   │   │   └── AppContext.jsx          # Global state management
│   │   └── main.jsx
│   └── README.md
│
├── 📁 Server/                          # Node.js + Express Backend
│   ├── configs/
│   │   ├── db.js                       # MongoDB Atlas connection
│   │   ├── gemini.js                   # Google Gemini AI setup
│   │   └── imageKit.js                 # ImageKit configuration
│   ├── controllers/
│   │   ├── adminController.js          # Admin auth + management
│   │   ├── blogController.js           # Blog CRUD operations
│   │   └── userController.js           # User register/login
│   ├── middleware/
│   │   ├── auth.js                     # JWT verification + roles
│   │   └── multer.js                   # File upload handling
│   ├── models/
│   │   ├── Admin.js                    # Admin schema
│   │   ├── Blog.js                     # Blog schema
│   │   ├── Comment.js                  # Comment schema
│   │   └── User.js                     # User schema (bcrypt)
│   ├── routes/
│   │   ├── adminRoutes.js              # Admin protected routes
│   │   ├── blogRoutes.js               # Blog routes
│   │   └── userRoutes.js               # User auth routes
│   ├── server.js                       # Express app entry point
│   └── README.md
│
├── 📁 screenshots/                     # App screenshots
└── README.md                           # You are here ✅
```

---

## 🌐 API Reference

### User Routes
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/user/register` | Public | Register new user |
| `POST` | `/api/user/login` | Public | User login |
| `GET` | `/api/user/profile` | User JWT | Get user profile |

### Blog Routes
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/api/blog/all` | Public | Get all published blogs |
| `GET` | `/api/blog/:id` | Public | Get single blog |
| `POST` | `/api/blog/add` | Admin JWT | Create new blog |
| `POST` | `/api/blog/delete` | Admin JWT | Delete blog |
| `POST` | `/api/blog/comment` | Public | Add comment |

### Admin Routes
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/admin/login` | Public | Admin login |
| `GET` | `/api/admin/dashboard` | Admin JWT | Dashboard stats |
| `GET` | `/api/admin/comments` | Admin JWT | All comments |
| `POST` | `/api/admin/approve-comment` | Admin JWT | Approve comment |
| `POST` | `/api/admin/delete-comment` | Admin JWT | Delete comment |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SoumyaMadishetti17/-AI-Powered-Blog-App.git
cd -AI-Powered-Blog-App
```

### 2. Install dependencies
```bash
cd Server && npm install
cd ../Client && npm install
```

### 3. Configure environment variables

**`Server/.env`**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=dev
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

**`Client/.env`**
```env
VITE_BASE_URL=http://localhost:5000
```

### 4. Run locally
```bash
# Terminal 1 — Backend
cd Server && npm run server

# Terminal 2 — Frontend
cd Client && npm run dev
```

Open `http://localhost:5173` in your browser ✅

---

## ☁️ Deployment

| Service | Platform | Trigger |
|---------|----------|---------|
| Frontend | Netlify | Auto on `git push` |
| Backend | Render | Auto on `git push` |
| Database | MongoDB Atlas | Always on |
| Images | ImageKit CDN | Always on |

```bash
# Deploy everything in one command
git add .
git commit -m "your message"
git push origin main
```

---

## 🧠 Key Technical Decisions

**Why JWT over sessions?**
Stateless auth scales horizontally — no shared session store needed.

**Why bcryptjs?**
Industry standard for password hashing with salt rounds — protects against rainbow table attacks.

**Why ImageKit over direct S3?**
Built-in CDN + image optimization with zero extra config.

**Why Google Gemini?**
Free tier is generous with fast response times and excellent long-form content generation.

---

## 🔮 Future Improvements

- [ ] ❤️ Like and bookmark system
- [ ] 👤 User profiles and avatars
- [ ] 🔔 Email notifications
- [ ] 🔄 Refresh token system
- [ ] 🛡️ Rate limiting on all routes
- [ ] 📈 AI-powered SEO optimization
- [ ] 📊 Advanced analytics dashboard

---

## 👨‍💻 Author

<div align="center">

**Soumya Madishetti**
Full Stack Developer · MERN · AI Integration

[![GitHub](https://img.shields.io/badge/GitHub-SoumyaMadishetti17-black?style=flat&logo=github)](https://github.com/SoumyaMadishetti17)
[![Live](https://img.shields.io/badge/Live-DevBlogs-brightgreen?style=flat&logo=netlify)](https://ai-powered-blogs.netlify.app)

*Building scalable web apps with modern technologies*

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

⭐ **Star this repo if you found it helpful!** ⭐

</div>
