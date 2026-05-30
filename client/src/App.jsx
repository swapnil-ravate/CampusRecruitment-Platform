import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import UserDashboard from './pages/userPages/UserDashboard'
import UserRegistration from './pages/userPages/UserRegistration'
import About from './pages/Shared/About'
import JobDetails from './pages/publicPages/JobDetails.jsx'
import UserLogin from './pages/userPages/userLogin'
import UserProfile from './pages/userPages/UserProfile'
import UserNavbar from './Component/userComponent/UserNavbar'
import JobSection from './pages/publicPages/JobSection'
import AdminDashboard from './pages/AdminPages/AdminDashboard'
import AdminJobPost from './pages/AdminPages/AdminJobPost'
import AdminJobReview from './pages/AdminPages/AdminJobReview'
import AdminUsers from './pages/AdminPages/AdminUsers'
import { Toaster } from 'react-hot-toast'
import EnterPrenuer from './pages/Shared/Entrepreneur'
import AdminProtected from './share/AdminProtected'
import AdminNavbar from './Component/adminComponent/AdminNavbar'
import Footer from './Component/Footer'
import UserProtected from './share/UserProtected'
import TeacherProtected from './share/TeacherProtected'
import TeacherDashboard from './pages/teacherPages/TeacherDashboard'
import TeacherNavbar from './Component/teacherComponent/TeacherNavbar'
import ContactUs from './pages/Shared/ContactUs'
import HigherEducation from './pages/Shared/HigherEducation'
import Navbar from './Component/Navbar'

const App = () => {
  return <>
    <div><Toaster
      position="top-right"
      reverseOrder={true}
    /></div>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='userLogin' element={<UserLogin />} />
          <Route path='userRegister' element={<UserRegistration />} />
          <Route path='jobDetails/:id' element={<JobDetails />} />
          <Route path='jobSection' element={<JobSection />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='higheredu' element={<HigherEducation />} />
          <Route path='about' element={<About />} />
          <Route path='entrepreneur' element={<EnterPrenuer />} />
        </Route>

        <Route path='/user' element={<> <UserProtected compo={<><UserNavbar /> <Outlet /> <Footer /></>} /></>}>
          <Route index element={<UserDashboard />} />
          <Route path='profile' element={<UserProfile />} />
        </Route>

        <Route path='/teacher' element={<> <TeacherProtected compo={<><TeacherNavbar /> <Outlet /> <Footer /></>} /></>}>
          <Route index element={<TeacherDashboard />} />
        </Route>

        <Route path='/admin' element={<><AdminProtected compo={<><AdminNavbar /> <Outlet /> <Footer /></>} /> </>}>
          <Route index element={<AdminDashboard />} />
          <Route path='/admin/jobPost' element={< AdminJobPost />} />
          <Route path='/admin/review' element={< AdminJobReview />} />
          <Route path='/admin/users' element={< AdminUsers />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
