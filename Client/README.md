<div align="center">

# 📂 DevBlogs — Frontend

[![Live](https://img.shields.io/badge/Live-tangerine--sunburst--abaad0.netlify.app-brightgreen?style=for-the-badge&logo=netlify)](https://tangerine-sunburst-abaad0.netlify.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

**React + Vite frontend for the DevBlogs AI-powered blogging platform.**

[🌐 Live Site](https://tangerine-sunburst-abaad0.netlify.app) &nbsp;•&nbsp; [⚙️ Backend Docs](../Server/README.md) &nbsp;•&nbsp; [🏠 Main README](../README.md)

</div>

---

## 📸 Screenshots

<div align="center">

| Home Page | Single Blog Post |
|-----------|-----------------|
| ![Home](../screenshots/home.png) | ![Blog](../screenshots/blog.png) |

| User Login | Create Account |
|-----------|---------------|
| ![Login](../screenshots/login.png) | ![Register](../screenshots/register.png) |

| Admin Dashboard | Blog Management |
|----------------|----------------|
| ![Dashboard](../screenshots/dashboard.png) | ![Blog List](../screenshots/bloglist.png) |

</div>

---

## 📁 Project Structure

```
Client/
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── QuickBlog-Assets/
│   │       └── assets.js           # Static assets (images, icons)
│   │
│   ├── components/
│   │   ├── admin/
│   │   │   ├── Login.jsx           # Admin login form
│   │   │   ├── Sidebar.jsx         # Admin navigation sidebar
│   │   │   ├── BlogTableItem.jsx   # Single blog row in table
│   │   │   └── CommentTableItem.jsx # Single comment row
│   │   │
│   │   ├── BlogCard.jsx            # Blog preview card (home grid)
│   │   ├── BlogList.jsx            # Blog grid with filters
│   │   ├── Footer.jsx              # Site footer
│   │   ├── Header.jsx              # Hero section with search
│   │   ├── Loader.jsx              # Loading spinner
│   │   ├── Navbar.jsx              # Top nav with auth state
│   │   └── NewLetter.jsx           # Newsletter signup section
│   │
│   ├── context/
│   │   └── AppContext.jsx          # Global state (auth + blogs)
│   │
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── Layout.jsx          # Admin layout wrapper
│   │   │   ├── Dashboard.jsx       # Stats + recent blogs
│   │   │   ├── AddBlog.jsx         # AI-powered blog creation
│   │   │   ├── ListBlog.jsx        # Manage all blogs
│   │   │   └── Comments.jsx        # Manage comments
│   │   │
│   │   ├── Home.jsx                # Public home page
│   │   ├── Blog.jsx                # Single blog view
│   │   └── UserLogin.jsx           # User register / login
│   │
│   ├── index.css                   # Global styles
│   └── main.jsx                    # React entry point
│
├── .env                            # Environment variables
├── index.html                      # HTML entry point
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint rules
└── package.json
```

---

## 🧭 Routing

| Path | Component | Access | Description |
|------|-----------|--------|-------------|
| `/` | `Home.jsx` | Public | Blog listing with search and filters |
| `/blog/:id` | `Blog.jsx` | Public | Single blog post view |
| `/login` | `UserLogin.jsx` | Public | User register / login |
| `/admin` | `Login.jsx` | Public | Admin login (redirects if no token) |
| `/admin` | `Layout.jsx` | Admin JWT | Admin layout wrapper |
| `/admin/` | `Dashboard.jsx` | Admin JWT | Stats and recent blogs |
| `/admin/addBlog` | `AddBlog.jsx` | Admin JWT | Create blog with AI |
| `/admin/listBlog` | `ListBlog.jsx` | Admin JWT | Manage all blogs |
| `/admin/comments` | `Comments.jsx` | Admin JWT | Manage comments |

---

## 🧠 State Management

All global state lives in `AppContext.jsx` — no Redux needed for this scale.

```
AppContext
│
├── Admin Auth
│   ├── token              — Admin JWT from localStorage
│   ├── setToken()         — Set on admin login
│   └── logoutAdmin()      — Clear token + redirect
│
├── User Auth
│   ├── userToken          — User JWT from localStorage
│   ├── user               — { id, name, email }
│   ├── setUserToken()     — Set on user login
│   ├── setUser()          — Set user object
│   └── logoutUser()       — Clear + redirect to home
│
└── Blog State
    ├── blogs              — All fetched blogs array
    ├── setBlogs()         — Update blog list
    └── input              — Search input string
```

### How auth persists across page refresh:
```js
// On app load, AppContext restores both tokens from localStorage
const savedToken = localStorage.getItem("token");       // admin
const savedUserToken = localStorage.getItem("userToken"); // user

// Sets axios default header so every request is authenticated
axios.defaults.headers.common['Authorization'] = token;
```

---

## 🔐 Authentication Flow

```
User visits site
      │
      ├── No token → Public pages only
      │
      ├── userToken found → "Hi, Soumya" in Navbar + Logout button
      │
      └── token (admin) found → "Dashboard" button in Navbar

/login page
      │
      ├── Toggle: Login ↔ Register
      │
      ├── Register → POST /api/user/register → JWT → home
      │
      └── Login → POST /api/user/login → JWT → home

/admin page
      │
      ├── No admin token → Show Login form
      │
      └── Admin token exists → Show Layout + Dashboard
```

---

## 🧩 Key Components

### `Navbar.jsx`
Renders differently based on auth state:
- Logged-in user → `Hi, {name}` + Logout button
- Guest → Login button → navigates to `/login`
- Always shows Admin button → navigates to `/admin`

### `AppContext.jsx`
Central state provider wrapping the entire app. Handles:
- Token restoration on page load
- axios default Authorization header
- Logout functions for both user and admin

### `UserLogin.jsx`
Single page handling both register and login with a toggle. Key decisions:
- `type='button'` on toggle to prevent accidental form submission
- Loading state during API call to prevent double submissions
- Redirects to `/` on success

### `AddBlog.jsx`
Most complex component — integrates:
- Quill.js rich text editor
- Google Gemini AI generation trigger
- ImageKit image upload
- Form submission to backend

### `BlogList.jsx`
Handles category filtering and search entirely on the frontend — no extra API calls needed since all blogs are fetched once in `AppContext`.

---

## ⚡ Performance Decisions

| Decision | Reason |
|----------|--------|
| Vite over CRA | 10x faster HMR and build times |
| Blogs fetched once in Context | Avoids redundant API calls on every page |
| Tailwind CSS | No runtime CSS-in-JS overhead |
| ImageKit CDN | Images served from edge — faster load globally |
| React Router v6 | Client-side navigation — no full page reloads |

---

## 🛠️ Setup & Installation

### Prerequisites
```
Node.js v18+
npm v9+
```

### Install
```bash
cd Client
npm install
```

### Environment Variables
Create `Client/.env`:
```env
VITE_BASE_URL=http://localhost:5000
```

> For production, set `VITE_BASE_URL` to your Render backend URL in Netlify environment variables.

### Run locally
```bash
npm run dev
```
Opens at `http://localhost:5173` ✅

### Build for production
```bash
npm run build
```
Output in `Client/dist/` — deploy this folder to Netlify.

---

## ☁️ Netlify Deployment

### Auto-deploy (recommended)
1. Connect GitHub repo to Netlify
2. Set build settings:

| Setting | Value |
|---------|-------|
| Base directory | `Client` |
| Build command | `npm run build` |
| Publish directory | `Client/dist` |

3. Add environment variable in Netlify dashboard:
```
VITE_BASE_URL = https://ai-powered-blog-app-e28x.onrender.com
```
4. Every `git push` auto-deploys ✅

### Manual deploy
```bash
npm run build
# Drag Client/dist to app.netlify.com/drop
```

---

## 🐛 Common Issues

| Error | Cause | Fix |
|-------|-------|-----|
| `Failed to resolve import` | Wrong relative path | Check `../../` vs `../` based on file location |
| `404 on API calls` | Wrong `VITE_BASE_URL` | Check `.env` has correct backend URL |
| `Blank page on Netlify` | Missing `_redirects` file | Add `Client/public/_redirects` with `/* /index.html 200` |
| `Login not persisting` | localStorage not set | Check `AppContext` restores token on mount |

> **Fix blank page on Netlify** — create `Client/public/_redirects`:
> ```
> /* /index.html 200
> ```
> This ensures React Router handles all routes correctly on Netlify.

---

## 🔮 Future Frontend Improvements

- [ ] Dark mode toggle
- [ ] Skeleton loading screens
- [ ] Infinite scroll on blog list
- [ ] Blog reading progress bar
- [ ] User profile page
- [ ] Bookmark saved blogs locally

---

<div align="center">

[🏠 Main README](../README.md) &nbsp;•&nbsp; [⚙️ Backend README](../Server/README.md)

**Part of the [DevBlogs](https://tangerine-sunburst-abaad0.netlify.app) project by [Soumya Madishetti](https://github.com/SoumyaMadishetti17)**

</div>
