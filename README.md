# 🎓 Campus Recruitment & Entrepreneurship System

A modern full-stack MERN (MongoDB, Express, React, Node) application designed to streamline the campus hiring process while providing resources to foster student entrepreneurship.

## 🚀 Tech Stack

- **Frontend**: React (Vite), Redux Toolkit, Tailwind CSS, DaisyUI, Formik, Yup
- **Backend**: Node.js, Express.js, Mongoose (MongoDB ODM), JWT, BcryptJS, Zod

---

## 🛠️ Quick Start Guide

### 1. Backend Setup (`/server`)
1. Navigate to the `server` directory and install dependencies:
   ```bash
   cd server
   npm install
   ```
2. Create a `.env` file in `/server`:
   ```env
   PORT=5000
   MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/CampusRecruitment
   JWT_KEY=your_jwt_secret_key_here
   NODE_ENV=development
   ```
3. Seed the default administrator account (Optional):
   ```bash
   node seedAdmin.js
   ```
   *Default Credentials:* `admin@example.com` / `adminpassword123`
4. Start the development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup (`/client`)
1. Navigate to the `client` directory and install dependencies:
   ```bash
   cd client
   npm install
   ```
2. Start the development client:
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:5173`.

---

## 📂 Project Structure

```text
CampusRecruitment-main/
├── client/          # React SPA Frontend (Vite)
│   ├── src/
│   │   ├── Component/  # Layout elements (Navbars, Footer)
│   │   ├── pages/      # Pages (Admin, User, Teacher dashboard & Public routes)
│   │   └── redux/      # RTK Query API slices and Redux store
├── server/          # Express API Backend (Node)
│   ├── controllers/ # Request handlers
│   ├── models/      # Mongoose schemas (User, Jobs)
│   ├── routes/      # API endpoints
│   └── validations/ # Zod request validation schemas
```

---

## 👥 User Roles & Portals

- **👔 Admin Hub**: Post, update, and manage job listings; view user statistics and registrations.
- **👨‍🏫 Mentor/Teacher Panel**: Verify student credentials and validate eligibility.
- **🎓 User Portal**: Dual dashboards for students seeking traditional placements or exploring entrepreneurship resources.
