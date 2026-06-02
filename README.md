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
   CLIENT_URL=http://localhost:5173
   CLIENT_URLS=http://localhost:5173,http://127.0.0.1:5173
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

3. Optional `.env` in `/client` for separate backend host:
   ```env
   VITE_API_URL=http://localhost:5000/api/v1
   ```

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

---

## ☁️ Vercel Deployment (Production)

This repo is deployment-ready for a split setup:
- `server` as a Vercel Node.js API project
- `client` as a Vercel static frontend project

### API project (`/server`)

1. Create a Vercel project with root directory set to `server`.
2. Ensure `server/vercel.json` is included (already configured).
3. Set environment variables in Vercel:
   - `MONGO_URL` (required)
   - `JWT_KEY` (required)
   - `NODE_ENV=production` (required)
   - `CLIENT_URL` (required, your frontend production URL)
   - `CLIENT_URLS` (optional, comma-separated list for additional domains/previews)
4. Deploy and verify:
   - `https://<api-domain>/api/health` returns `{ "status": "ok" }`
   - API endpoints are available under `/api/v1/*`

### Frontend project (`/client`)

1. Create a second Vercel project with root directory set to `client`.
2. Framework preset: `Vite` (auto-detected).
3. Set environment variable:
   - `VITE_API_URL=https://<your-api-domain>/api/v1`
4. Keep `client/vercel.json` for SPA rewrites so client-side routes resolve.
5. Redeploy frontend after setting/updating env vars.

---

## ✅ Deployment Checklist

- [ ] `server/vercel.json` exists and routes all requests to `index.js`
- [ ] `client/vercel.json` exists and rewrites SPA routes to `index.html`
- [ ] No hardcoded localhost API URLs in frontend production code
- [ ] `VITE_API_URL` set on frontend Vercel project
- [ ] `MONGO_URL`, `JWT_KEY`, `NODE_ENV`, `CLIENT_URL` set on API project
- [ ] `CLIENT_URLS` configured for extra domains/previews (if used)
- [ ] API CORS allows only configured origins
- [ ] Cookie auth works cross-site (`secure` + `sameSite=none` in production)
- [ ] API health endpoint responds (`/api/health`)
- [ ] MongoDB cluster network access and DB user permissions are configured for Vercel
