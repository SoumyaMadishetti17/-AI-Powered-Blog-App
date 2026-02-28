# ⚙️ Backend – AI Blog Platform (Node + Express)

This backend powers the **AI Enabled Blog Platform**, providing secure REST APIs for admin management, blog operations, AI content generation, image uploads, comments moderation, and dashboard analytics.

Built with a modular and scalable architecture suitable for production deployment.

---

## 🚀 Core Responsibilities

* Admin authentication & authorization (JWT)
* Blog creation, update, delete, and publish control
* AI-powered content generation (Google Gemini)
* Image upload handling (Multer → ImageKit)
* Comment system with approval workflow
* Admin dashboard statistics

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Multer (File Upload)
* Google Gemini API
* ImageKit
* dotenv, CORS

---

## 📂 Project Structure

```
Server/
│
├── controllers/      # Business logic
├── routes/           # API routes
├── models/           # Database schemas
├── middleware/       # Auth & upload middleware
├── config/           # DB & external service configs
├── utils/            # AI utilities
└── server.js         # Entry point
```

---

# 🔑 Important API Routes (Highlighted)

## Admin Routes (`/api/admin`)

| Method | Endpoint           | Description                          |
| ------ | ------------------ | ------------------------------------ |
| POST   | `/login`           | Admin login (returns JWT)            |
| GET    | `/dashboard`       | Dashboard statistics (protected)     |
| GET    | `/blogs`           | Get all blogs for admin panel        |
| GET    | `/comments`        | Get all comments (including pending) |
| POST   | `/approve-comment` | Approve a comment                    |
| POST   | `/delete-comment`  | Delete a comment                     |

**Note:** All routes except `/login` require authentication.

---

## Blog Routes (`/api/blog`)

### 📝 Blog Management

| Method | Endpoint          | Description                           |
| ------ | ----------------- | ------------------------------------- |
| POST   | `/add`            | Create new blog (Image upload + Auth) |
| GET    | `/all`            | Get all published blogs (public)      |
| GET    | `/:blogId`        | Get blog details by ID                |
| POST   | `/delete`         | Delete blog (Admin only)              |
| POST   | `/toggle-publish` | Publish/Unpublish blog                |

---

### 🤖 AI Content Generation

| Method | Endpoint    | Description                                    |
| ------ | ----------- | ---------------------------------------------- |
| POST   | `/generate` | Generate blog content using Gemini (Protected) |

---

### 💬 Comment System

| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| POST   | `/add-comment` | Add a comment (Public)  |
| POST   | `/comments`    | Get comments for a blog |

**Workflow:**

1. User adds comment
2. Comment status = Pending
3. Admin approves via `/approve-comment`

---

## 🔐 Middleware Highlights

* **auth.js** → Protects admin routes using JWT
* **multer.js** → Handles image uploads before sending to ImageKit

---

## ⚙️ Local Setup

### 1. Install dependencies

```
cd Server
npm install
```

### 2. Run server

```
npm run server
```

Server runs on:

```
http://localhost:5000
```

---

## 🌐 Environment Variables

Create `.env` inside **Server**:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

GEMINI_API_KEY=your_gemini_key

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url
```

---

## ☁️ Deployment Notes

* Enable CORS for frontend domain
* Add environment variables in hosting platform (Render/Railway)
* Start command:

```
node server.js
```

---

## 🎯 Key Backend Highlights

* JWT-protected admin APIs
* AI-powered content generation endpoint
* Image upload pipeline (Multer → CDN)
* Comment moderation workflow
* Publish/Unpublish blog control
* Dashboard analytics for admin
* Clean modular architecture

---

## 👨‍💻 Author

**Soumya Madishetti**
Backend Developer | MERN | AI Integration

