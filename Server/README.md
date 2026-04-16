<div align="center">

# ⚙️ DevBlogs — Backend

[![API Live](https://img.shields.io/badge/API-Live-brightgreen?style=for-the-badge&logo=render)](https://ai-powered-blog-app-e28x.onrender.com)
[![Node](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![JWT](https://img.shields.io/badge/JWT-Auth-orange?style=for-the-badge&logo=jsonwebtokens)](https://jwt.io)

**Node.js + Express REST API for the DevBlogs AI-powered blogging platform.**

[🌐 Live API](https://ai-powered-blog-app-e28x.onrender.com) &nbsp;•&nbsp; [📂 Frontend Docs](../Client/README.md) &nbsp;•&nbsp; [🏠 Main README](../README.md)

</div>

---

## 📁 Project Structure

```
Server/
│
├── configs/
│   ├── db.js                   # MongoDB Atlas connection
│   ├── gemini.js               # Google Gemini AI client setup
│   └── imageKit.js             # ImageKit SDK configuration
│
├── controllers/
│   ├── adminController.js      # Admin login, blog mgmt, comments
│   ├── blogController.js       # Blog CRUD + comment creation
│   └── userController.js       # User register, login, profile
│
├── middleware/
│   ├── auth.js                 # JWT verification + role guards
│   └── multer.js               # Multipart file upload parsing
│
├── models/
│   ├── Admin.js                # Admin schema
│   ├── Blog.js                 # Blog schema
│   ├── Comment.js              # Comment schema
│   └── User.js                 # User schema (bcrypt hashed)
│
├── routes/
│   ├── adminRoutes.js          # Admin protected routes
│   ├── blogRoutes.js           # Blog public + admin routes
│   └── userRoutes.js           # User auth routes
│
├── .env                        # Environment variables (never commit)
├── server.js                   # Express app entry point
└── package.json
```

---

## 🌐 API Reference

Base URL: `https://ai-powered-blog-app-e28x.onrender.com`

### 👤 User Routes — `/api/user`

| Method | Endpoint | Auth | Body | Description |
|--------|----------|------|------|-------------|
| `POST` | `/register` | Public | `{ name, email, password }` | Register new user |
| `POST` | `/login` | Public | `{ email, password }` | User login |
| `GET` | `/profile` | User JWT | — | Get logged-in user profile |

**Register response:**
```json
{
  "success": true,
  "token": "eyJhbGci...",
  "user": {
    "id": "64f1a2b3...",
    "name": "Soumya",
    "email": "soumya@example.com"
  }
}
```

---

### 📝 Blog Routes — `/api/blog`

| Method | Endpoint | Auth | Body | Description |
|--------|----------|------|------|-------------|
| `GET` | `/all` | Public | — | Get all published blogs |
| `GET` | `/:id` | Public | — | Get single blog by ID |
| `POST` | `/add` | Admin JWT | `FormData` | Create new blog with image |
| `POST` | `/delete` | Admin JWT | `{ id }` | Delete blog |
| `POST` | `/toggle-publish` | Admin JWT | `{ id }` | Publish / unpublish blog |
| `POST` | `/comment` | Public | `{ blog, name, content }` | Add comment to blog |

**Get all blogs response:**
```json
{
  "success": true,
  "blogs": [
    {
      "_id": "64f1a2b3...",
      "title": "How AI is changing content creation",
      "category": "Technology",
      "image": "https://ik.imagekit.io/...",
      "isPublished": true,
      "createdAt": "2025-07-25T10:30:00.000Z"
    }
  ]
}
```

---

### 🔑 Admin Routes — `/api/admin`

| Method | Endpoint | Auth | Body | Description |
|--------|----------|------|------|-------------|
| `POST` | `/login` | Public | `{ email, password }` | Admin login |
| `GET` | `/dashboard` | Admin JWT | — | Stats + recent blogs |
| `GET` | `/comments` | Admin JWT | — | All comments |
| `POST` | `/approve-comment` | Admin JWT | `{ id }` | Approve comment |
| `POST` | `/delete-comment` | Admin JWT | `{ id }` | Delete comment |
| `GET` | `/all-blogs` | Admin JWT | — | All blogs (incl. drafts) |

**Dashboard response:**
```json
{
  "success": true,
  "dashboardData": {
    "blogs": 5,
    "comments": 4,
    "drafts": 0,
    "recentBlogs": [...]
  }
}
```

---

## 🗄️ Database Models

### User
```js
{
  name:      String  — required
  email:     String  — required, unique
  password:  String  — bcrypt hashed, never plain text
  createdAt: Date    — auto
  updatedAt: Date    — auto
}
```

### Blog
```js
{
  title:       String   — required
  content:     String   — rich HTML from Quill editor
  category:    String   — Technology | Startup | Lifestyle | Finance
  image:       String   — ImageKit CDN URL
  isPublished: Boolean  — default false
  createdAt:   Date     — auto
}
```

### Comment
```js
{
  blog:       ObjectId  — ref: Blog
  name:       String    — commenter name
  content:    String    — comment text
  isApproved: Boolean   — default false (admin must approve)
  createdAt:  Date      — auto
}
```

### Admin
```js
{
  email:    String  — required, unique
  password: String  — stored as entered (use strong password)
}
```

---

## 🔐 Authentication & Authorization

### How it works

Every protected route passes through JWT middleware before reaching the controller.

```
Request → Route → Middleware → Controller → Response
              ↓
         auth.js checks:
         1. Token exists in Authorization header?
         2. Token is valid (not expired, not tampered)?
         3. Role matches required role?
              ↓
         Sets req.userId + req.role
         Calls next() → controller runs
```

### Middleware functions

```js
// General — any valid JWT
auth(req, res, next)

// Admin only — role must be 'admin'
adminOnly(req, res, next)

// User only — role must be 'user'
userOnly(req, res, next)
```

### Token structure

```js
// User token
jwt.sign({ id: user._id, role: 'user' }, JWT_SECRET, { expiresIn: '7d' })

// Admin token
jwt.sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '1d' })
```

### Sending tokens from frontend

```js
// All protected requests send token in Authorization header
axios.defaults.headers.common['Authorization'] = token;
```

---

## 🤖 AI Integration — Google Gemini

The `/api/admin/generate` endpoint uses Gemini to generate blog content.

```
Admin clicks "Generate"
        │
        ▼
POST /api/admin/generate
        │
        ├── Sends topic/title to Gemini API
        ├── Receives generated content
        ├── Returns { title, content } to frontend
        └── Admin reviews → publishes
```

**Error handling:**
- Gemini API failures return `{ success: false, message }` — never crash the server
- Frontend shows error toast and keeps the form editable

---

## 🖼️ Image Upload Pipeline

```
Admin selects image
        │
        ▼
Multer parses multipart/form-data
        │
        ▼
File buffer sent to ImageKit
        │
        ▼
ImageKit returns CDN URL
        │
        ▼
URL saved in Blog.image field
        │
        ▼
Image served from global CDN edge
```

**Why ImageKit over direct S3?**
Built-in image optimization (resize, compress, format conversion) with zero extra configuration — saves bandwidth and improves page load speed.

---

## ⚙️ Configuration

### Environment Variables — `Server/.env`

```env
# Server
PORT=5000

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/devblogs

# Authentication
JWT_SECRET=your_strong_random_secret_min_32_chars

# Admin credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_strong_password

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
```

> ⚠️ Never commit `.env` to GitHub. It is already in `.gitignore`.

---

## 🚀 Local Setup

### Prerequisites
```
Node.js v18+
MongoDB Atlas account (free tier)
Google Gemini API key (free)
ImageKit account (free tier)
```

### Install & Run
```bash
cd Server
npm install
npm run server
```

API runs at `http://localhost:5000` ✅

### Test the API
```bash
# Health check
curl http://localhost:5000/

# Register user
curl -X POST http://localhost:5000/api/user/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","password":"test123"}'

# Get all blogs
curl http://localhost:5000/api/blog/all
```

---

## ☁️ Render Deployment

### Setup (one time)
1. Go to [render.com](https://render.com) → New Web Service
2. Connect GitHub repo
3. Set:

| Setting | Value |
|---------|-------|
| Root directory | `Server` |
| Runtime | `Node` |
| Build command | `npm install` |
| Start command | `npm run server` |

4. Add all environment variables from `.env` in Render dashboard
5. Click **Deploy** ✅

### Auto-deploy
Every `git push origin main` triggers automatic redeployment on Render.

> **Note:** Free tier Render services spin down after 15 minutes of inactivity. First request after spin-down takes ~30 seconds. Handle this with a loading state on the frontend.

---

## 🐛 Common Issues

| Error | Cause | Fix |
|-------|-------|-----|
| `MongoServerError: bad auth` | Wrong MONGO_URI | Check Atlas username/password in URI |
| `JsonWebTokenError: invalid token` | Token malformed or expired | Re-login to get fresh token |
| `MulterError: Unexpected field` | Wrong field name in FormData | Match field name with `multer.single('fieldName')` |
| `Cannot GET /api/user/login` | Route not registered | Check `userRouter` is imported in `server.js` |
| `Gemini API error` | Invalid API key or quota exceeded | Check key in `.env` and Gemini dashboard |
| `CORS error` | Frontend origin blocked | Add `cors()` middleware before routes in `server.js` |

---

## 📈 Scalability Notes

| Concern | Current Approach | Production Upgrade |
|---------|-----------------|-------------------|
| Auth | JWT stateless | Add refresh token + blacklist |
| Rate limiting | None | Add `express-rate-limit` |
| File uploads | Multer in-memory | Already using ImageKit CDN ✅ |
| DB queries | Basic Mongoose | Add indexes on `email`, `isPublished` |
| Security headers | Basic CORS | Add `helmet` middleware |
| Logging | `console.log` | Add `winston` or `morgan` |

---

## 🔮 Future Backend Improvements

- [ ] Refresh token system with token blacklisting
- [ ] Rate limiting on login and register routes
- [ ] `helmet` for HTTP security headers
- [ ] Input validation with `express-validator`
- [ ] Full-text search with MongoDB Atlas Search
- [ ] Email notifications with Nodemailer
- [ ] Unit tests with Jest + Supertest

---

<div align="center">

[🏠 Main README](../README.md) &nbsp;•&nbsp; [📂 Frontend README](../Client/README.md)

**Part of the [DevBlogs](https://ai-powered-blogs.netlify.app) project by [Soumya Madishetti](https://github.com/SoumyaMadishetti17)**

</div>