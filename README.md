# 🎓 Campus Recruitment & Entrepreneurship System

A comprehensive full-stack MERN application designed to revolutionize the campus recruitment process while fostering entrepreneurship among students. This platform bridges the gap between educational institutions, students, employers, and aspiring entrepreneurs.

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [System Workflow](#-system-workflow)
- [Tech Stack](#️-tech-stack)
- [Project Architecture](#-project-architecture)
- [Database Schema](#-database-schema)
- [Installation Guide](#️-installation-guide)
- [Environment Configuration](#-environment-configuration)
- [API Endpoints](#-api-endpoints)
- [User Roles & Permissions](#-user-roles--permissions)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Overview

The **Campus Recruitment & Entrepreneurship System** is a multi-role platform that streamlines campus hiring processes while providing dedicated resources for student entrepreneurs. It serves three primary user roles:

- **👔 Admin**: Manage job postings, review applications, and oversee the recruitment cycle
- **👨‍🏫 Teacher**: Authenticate student credentials and validate eligibility
- **🎓 Student**: Access dual dashboards for traditional placements and entrepreneurship opportunities

### Why This Platform?

- **Centralized Management**: All recruitment activities in one place
- **Role-Based Access Control**: Secure, permission-based system for different user types
- **Dual Focus**: Supports both traditional placement seekers and aspiring entrepreneurs
- **Real-Time Updates**: Toast notifications for immediate feedback
- **Modern UI/UX**: Built with React, Tailwind CSS, and DaisyUI for a responsive design
- **Scalable Backend**: RESTful API architecture with MongoDB for flexibility

---

## ✨ Key Features

### 🔐 **Authentication & Security**
- **JWT-Based Authentication**: Secure token-based login system
- **Password Encryption**: Bcrypt hashing for enhanced security
- **Role-Based Access Control (RBAC)**: Three distinct user roles (Admin, Teacher, Student)
- **Protected Routes**: Client-side and server-side route protection
- **Cookie-Based Session Management**: Secure HTTP-only cookies

### 👔 **Admin Features**
| Feature | Description |
|---------|-------------|
| **Job Management** | Post new job openings with detailed requirements |
| **Application Review** | Review and manage student applications |
| **User Management** | View all registered users and their details |
| **Dashboard Analytics** | Track recruitment metrics and system usage |
| **Job Editing** | Update or remove existing job postings |

### 👨‍🏫 **Teacher Features**
| Feature | Description |
|---------|-------------|
| **Student Verification** | Authenticate student credentials |
| **Eligibility Validation** | Verify student qualifications for job applications |
| **Dashboard** | Monitor student progress and recruitment activities |
| **Profile Management** | Update personal information |

### 🎓 **Student Features**

#### Regular Dashboard (Traditional Placements)
- **Job Portal**: Browse and search through available job opportunities
- **Advanced Filtering**: Filter jobs by location, salary, skills, experience
- **Job Details**: View comprehensive job descriptions and requirements
- **One-Click Apply**: Submit applications directly through the platform
- **Profile Management**: Update resume, skills, education, and experience
- **Application Tracking**: Monitor application status

#### Entrepreneurship Dashboard
- **Startup Resources**: Access curated articles, videos, and workshops
- **Startup Database**: Explore startup opportunities and networking
- **Pitching Platform**: Present business ideas to mentors and admins
- **Entrepreneurship Hub**: Connect with like-minded student entrepreneurs
- **Resource Library**: Educational content for budding entrepreneurs

### 🌐 **Public Features**
- **Home Page**: Landing page with platform overview
- **About Page**: Information about the platform and its mission
- **Contact Us**: Communication channel for queries
- **Higher Education**: Resources for further studies
- **Job Listings**: Public view of available positions

---

## 🔄 System Workflow

### 1️⃣ **Student Registration & Login**
```mermaid
graph LR
    A[Student Visits Platform] --> B[Register Account]
    B --> C[Email & Password]
    C --> D[Profile Setup]
    D --> E[Education, Skills, Resume]
    E --> F[Dashboard Access]
    F --> G{Choose Path}
    G -->|Traditional| H[Regular Dashboard]
    G -->|Startup| I[Entrepreneurship Dashboard]
```

### 2️⃣ **Job Application Workflow**
```mermaid
graph TD
    A[Admin Posts Job] --> B[Job Appears in Portal]
    B --> C[Student Browses Jobs]
    C --> D[Filters & Searches]
    D --> E[Views Job Details]
    E --> F[Student Applies]
    F --> G[Teacher Verification]
    G --> H{Credentials Valid?}
    H -->|Yes| I[Admin Reviews Application]
    H -->|No| J[Application Rejected]
    I --> K{Application Accepted?}
    K -->|Yes| L[Student Notified]
    K -->|No| M[Application Declined]
```

### 3️⃣ **Admin Job Management Workflow**
```mermaid
graph LR
    A[Admin Login] --> B[Admin Dashboard]
    B --> C{Action}
    C -->|Post Job| D[Fill Job Form]
    C -->|Review Applications| E[View Submissions]
    C -->|Manage Users| F[User List]
    D --> G[Job Published]
    E --> H[Accept/Reject]
    F --> I[View Profiles]
```

### 4️⃣ **Teacher Validation Workflow**
```mermaid
graph TD
    A[Teacher Login] --> B[Teacher Dashboard]
    B --> C[View Pending Verifications]
    C --> D[Student Profile Review]
    D --> E{Validate Credentials}
    E -->|Approved| F[Student Eligible]
    E -->|Rejected| G[Student Notified]
```

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Purpose | Version |
|------------|---------|---------|
| **React.js** | UI Library | 18.2.0 |
| **Vite** | Build Tool & Dev Server | 4.4.5 |
| **Redux Toolkit** | State Management | 2.0.1 |
| **React Router DOM** | Client-side Routing | 6.21.3 |
| **Tailwind CSS** | Utility-first CSS Framework | 3.4.1 |
| **DaisyUI** | Tailwind Component Library | 4.6.0 |
| **Formik** | Form Management | 2.4.5 |
| **Yup** | Form Validation Schema | 1.3.3 |
| **React Hot Toast** | Toast Notifications | 2.4.1 |
| **React Icons** | Icon Library | 5.0.1 |
| **React Spring** | Animation Library | 9.7.3 |
| **Typewriter Effect** | Text Animation | 2.21.0 |

### **Backend**
| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | JavaScript Runtime | - |
| **Express.js** | Web Framework | 4.18.2 |
| **MongoDB** | NoSQL Database | - |
| **Mongoose** | MongoDB ODM | 8.1.1 |
| **JSON Web Token** | Authentication | 9.0.2 |
| **Bcrypt.js** | Password Hashing | 2.4.3 |
| **Validator** | Data Validation | 13.11.0 |
| **CORS** | Cross-Origin Resource Sharing | 2.8.5 |
| **Cookie Parser** | Cookie Handling | 1.4.6 |
| **Dotenv** | Environment Variables | 16.4.1 |
| **Express Async Handler** | Async Error Handling | 1.2.0 |

### **Development Tools**
- **Nodemon**: Auto-restart server on changes
- **ESLint**: Code linting and quality
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

---

## 🏗️ Project Architecture

```text
CampusRecruitment-main/
│
├── client/                          # React Frontend (Vite)
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── Component/               # Reusable UI Components
│   │   │   ├── adminComponent/      # Admin-specific components
│   │   │   │   └── AdminNavbar.jsx
│   │   │   ├── teacherComponent/    # Teacher-specific components
│   │   │   │   └── TeacherNavbar.jsx
│   │   │   ├── userComponent/       # Student-specific components
│   │   │   │   └── UserNavbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── pages/                   # Page Components
│   │   │   ├── AdminPages/          # Admin dashboard pages
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── AdminJobPost.jsx
│   │   │   │   ├── AdminJobReview.jsx
│   │   │   │   └── AdminUsers.jsx
│   │   │   │
│   │   │   ├── teacherPages/        # Teacher dashboard pages
│   │   │   │   └── TeacherDashboard.jsx
│   │   │   │
│   │   │   ├── userPages/           # Student dashboard pages
│   │   │   │   ├── UserDashboard.jsx
│   │   │   │   ├── UserLogin.jsx
│   │   │   │   ├── UserProfile.jsx
│   │   │   │   └── UserRegistration.jsx
│   │   │   │
│   │   │   ├── publicPages/         # Public pages
│   │   │   │   ├── JobDetailsPage.jsx
│   │   │   │   └── JobSection.jsx
│   │   │   │
│   │   │   ├── Shared/              # Shared pages
│   │   │   │   ├── About.jsx
│   │   │   │   ├── ContactUs.jsx
│   │   │   │   ├── Entrepreneur.jsx
│   │   │   │   └── HigherEducation.jsx
│   │   │   │
│   │   │   └── Home.jsx             # Landing page
│   │   │
│   │   ├── redux/                   # Redux State Management
│   │   │   ├── slices/              # Redux slices
│   │   │   └── store.js             # Redux store configuration
│   │   │
│   │   ├── share/                   # Shared utilities
│   │   │   ├── AdminProtected.jsx   # Admin route protection
│   │   │   ├── TeacherProtected.jsx # Teacher route protection
│   │   │   └── UserProtected.jsx    # Student route protection
│   │   │
│   │   ├── App.jsx                  # Main App component with routing
│   │   ├── main.jsx                 # React entry point
│   │   ├── index.css                # Global styles
│   │   └── theme.js                 # Theme configuration
│   │
│   ├── index.html                   # HTML template
│   ├── package.json                 # Frontend dependencies
│   ├── vite.config.js               # Vite configuration
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   ├── postcss.config.js            # PostCSS configuration
│   └── .eslintrc.cjs                # ESLint configuration
│
├── server/                          # Node.js Express Backend
│   ├── controllers/                 # Request handlers
│   │   ├── adminController.js       # Admin logic
│   │   ├── authController.js        # Authentication logic
│   │   └── userController.js        # User logic
│   │
│   ├── models/                      # Database schemas
│   │   ├── user.js                  # User model (students, teachers, admins)
│   │   └── Jobs.js                  # Job model
│   │
│   ├── routes/                      # API routes
│   │   ├── authroute.js             # Authentication routes
│   │   ├── adminRoute.js            # Admin routes
│   │   └── userRoute.js             # User routes
│   │
│   ├── middleware/                  # Custom middleware
│   │   └── protected.js             # JWT verification middleware
│   │
│   ├── index.js                     # Express server entry point
│   ├── seedAdmin.js                 # Admin seeding script
│   ├── package.json                 # Backend dependencies
│   └── .env                         # Environment variables (not in repo)
│
├── seed_job.js                      # Job seeding script
├── requirement.md                   # Original project requirements
└── README.md                        # Project documentation (this file)
```

---

## 💾 Database Schema

### **User Model** (`user.js`)
```javascript
{
  name: String (required),
  email: String (required, unique),
  number: String (required),
  password: String (required, hashed),
  role: String (enum: ["user", "teacher", "admin"]),
  
  // Optional Profile Fields
  education: String,
  skills: String,           // Comma-separated values
  resume: String,           // URL or path
  location: String,
  experience: String,
  about: String,
  
  timestamps: true          // createdAt, updatedAt
}
```

### **Job Model** (`Jobs.js`)
```javascript
{
  jobTitle: String (required),
  company: String (required),
  experience: String (required),
  jobDesc: String (required),
  salary: String (required),
  location: String (required),
  skills: String (required),  // Comma-separated values
  
  timestamps: true             // createdAt, updatedAt
}
```

---

## ⚙️ Installation Guide

### **Prerequisites**
Before you begin, ensure you have installed:
- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** (local installation or MongoDB Atlas account) - [Download](https://www.mongodb.com/try/download/community)
- **Git** (optional, for cloning) - [Download](https://git-scm.com/)

### **Step 1: Clone the Repository**
```bash
# Using Git
git clone <repository-url>
cd CampusRecruitment-main

# Or download and extract the ZIP file
```

### **Step 2: Backend Setup**

#### 2.1 Install Dependencies
```bash
cd server
npm install
```

#### 2.2 Configure Environment Variables
Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/campus_recruitment
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
```

> **Note**: For production, use a strong, randomly generated JWT secret.

#### 2.3 Seed Admin User (Optional)
```bash
# Create a default admin account
node seedAdmin.js
```

Default admin credentials (change after first login):
- **Email**: `admin@example.com`
- **Password**: Check `seedAdmin.js` file

#### 2.4 Start Backend Server
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

The backend server will run at: `http://localhost:5000`

### **Step 3: Frontend Setup**

#### 3.1 Install Dependencies
```bash
cd ../client
npm install
```

#### 3.2 Start Development Server
```bash
npm run dev
```

The frontend will run at: `http://localhost:5173`

### **Step 4: Access the Application**
Open your browser and navigate to:
```
http://localhost:5173
```

---

## 🔧 Environment Configuration

### **Backend Environment Variables** (`.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server port | `5000` |
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017/campus_recruitment` |
| `JWT_SECRET` | Secret key for JWT signing | `mySecretKey123!@#` |

### **MongoDB Connection Options**

#### Local MongoDB
```env
MONGO_URL=mongodb://localhost:27017/campus_recruitment
```

#### MongoDB Atlas (Cloud)
```env
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/campus_recruitment?retryWrites=true&w=majority
```

---

## 📡 API Endpoints

### **Authentication Routes** (`/api/v1/auth`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/login` | User login (all roles) | Public |
| POST | `/register` | User registration | Public |
| POST | `/logout` | User logout | Private |

### **Admin Routes** (`/api/v1/admin`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/dashboard` | Admin dashboard data | Admin |
| POST | `/jobs` | Create new job posting | Admin |
| GET | `/jobs` | Get all jobs | Admin |
| PUT | `/jobs/:id` | Update job posting | Admin |
| DELETE | `/jobs/:id` | Delete job posting | Admin |
| GET | `/applications` | View all applications | Admin |
| GET | `/users` | Get all registered users | Admin |

### **User Routes** (`/api/v1/user`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/profile` | Get user profile | Private (Student/Teacher) |
| PUT | `/profile` | Update user profile | Private (Student/Teacher) |
| GET | `/jobs` | Browse available jobs | Private (Student) |
| GET | `/jobs/:id` | Get specific job details | Private (Student) |
| POST | `/apply/:jobId` | Apply for a job | Private (Student) |

---

## 👥 User Roles & Permissions

### **Admin** 
- ✅ Post, edit, and delete job listings
- ✅ Review and manage student applications
- ✅ View all registered users
- ✅ Access system analytics
- ✅ Full CRUD operations on jobs

### **Teacher**
- ✅ Verify student credentials
- ✅ Validate student eligibility for jobs
- ✅ View student profiles
- ✅ Update own profile
- ❌ Cannot post jobs or manage applications

### **Student**
- ✅ Browse and search job listings
- ✅ Apply for jobs
- ✅ Update profile (resume, skills, education)
- ✅ Access entrepreneurship resources
- ✅ View application status
- ❌ Cannot post jobs or validate other students

---

## 📸 Screenshots

> **Note**: Add screenshots of your application here to showcase the UI

```markdown
### Home Page
![Home Page](screenshots/home.png)

### Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)

### Student Dashboard
![Student Dashboard](screenshots/student-dashboard.png)

### Job Portal
![Job Portal](screenshots/job-portal.png)
```

---

## 🚀 Deployment on Vercel

This project is deployed as **two separate Vercel projects** — one for the backend API and one for the React frontend. This is the recommended approach for MERN apps on Vercel.

---

### Step 1 — Deploy the Backend (API)

The `server/` directory is a **Node.js Serverless Function** on Vercel.

#### 1.1 Create a new Vercel project for the backend

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your Git repository
3. Set the **Root Directory** to `server`
4. Vercel will auto-detect it as a Node.js project

#### 1.2 Set environment variables

In Vercel dashboard → Project Settings → **Environment Variables**, add:

| Variable | Value |
|----------|-------|
| `MONGO_URL` | Your **MongoDB Atlas** connection string (e.g. `mongodb+srv://user:pass@cluster.mongodb.net/campus`) |
| `JWT_KEY` | A long random secret (generate with: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`) |
| `CLIENT_URL` | Your frontend Vercel URL (e.g. `https://campus-recruitment.vercel.app`) — set after Step 2 |
| `NODE_ENV` | `production` |

> ⚠️ **MONGO_URL must be a MongoDB Atlas URL** (`mongodb+srv://...`). Local MongoDB (`localhost`) will not work on Vercel.

#### 1.3 Deploy

Click **Deploy**. Note your backend URL (e.g. `https://campus-api.vercel.app`).

---

### Step 2 — Deploy the Frontend (React)

The `client/` directory is a **Vite SPA** deployed as a static site.

#### 2.1 Create a new Vercel project for the frontend

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import the same Git repository
3. Set the **Root Directory** to `client`
4. Framework Preset: **Vite**
5. Build Command: `npm run build` (auto-detected)
6. Output Directory: `dist` (auto-detected)

#### 2.2 Set environment variables

| Variable | Value |
|----------|-------|
| `VITE_API_URL` | `https://<your-backend-app>.vercel.app/api/v1` |

#### 2.3 Deploy

Click **Deploy**. Note your frontend URL (e.g. `https://campus-recruitment.vercel.app`).

---

### Step 3 — Link the two projects

1. Go back to your **backend** Vercel project
2. Update the `CLIENT_URL` environment variable to your **frontend URL**
3. Redeploy the backend (Deployments → Redeploy)

---

### ✅ Post-Deploy Checklist

- [ ] Test user registration → login → view jobs
- [ ] Test admin login → create a job posting
- [ ] Verify cookies are sent (HTTPS + `sameSite: none` + `secure: true`)
- [ ] Check the browser console for any CORS errors
- [ ] Seed an admin account: run `node seedAdmin.js` locally pointing to your Atlas DB

---

### Seeding Admin Locally (pointing to Atlas)

```bash
cd server
# Temporarily set MONGO_URL in your shell:
$env:MONGO_URL="mongodb+srv://..."   # PowerShell
node seedAdmin.js
```



---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### **Contribution Guidelines**
- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Update documentation for new features
- Add tests for new functionality
- Ensure all tests pass before submitting PR

---

## 🐛 Known Issues & Roadmap

### **Current Limitations**
- Application tracking system not fully implemented
- Email notifications pending
- Interview scheduling feature in development

### **Future Enhancements**
- [ ] Email notifications for job applications
- [ ] Real-time chat between students and recruiters
- [ ] Advanced analytics dashboard
- [ ] Resume parsing and matching algorithms
- [ ] Interview scheduling system
- [ ] Mobile application (React Native)
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced search filters with AI recommendations

---

## 📄 License

This project is licensed under the **ISC License**.

```
Copyright (c) 2024

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
```

---

## 👨‍💻 Authors & Acknowledgments

### **Development Team**
- Your Name/Team Name

### **Acknowledgments**
- Thanks to all contributors who helped build this platform
- Inspired by modern recruitment platforms and entrepreneurship ecosystems

---

## 📞 Support & Contact

For questions, issues, or suggestions:

- **Email**: your-email@example.com
- **GitHub Issues**: [Create an issue](../../issues)
- **Documentation**: [Wiki](../../wiki)

---

## 🌟 Show Your Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs and issues
- 💡 Suggesting new features
- 🔀 Contributing code improvements

---

<div align="center">

**Built with ❤️ using MERN Stack**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

</div>
