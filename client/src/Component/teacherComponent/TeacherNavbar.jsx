import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLogoutMutation } from '../../redux/api/authApi'
import { toast } from 'react-hot-toast'
import { FaSignOutAlt, FaHome, FaChalkboardTeacher } from 'react-icons/fa'

const TeacherNavbar = () => {
  const { user } = useSelector(state => state.user)
  const [logout, { isSuccess }] = useLogoutMutation()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logout Successful")
      navigate('/')
    }
  }, [isSuccess])

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/teacher">Dashboard</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
          <Link to='/' className="flex items-center gap-2 ml-2 group transition-all duration-500 hover:scale-[1.01]">
            <div className="p-1.5 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 shadow-lg group-hover:bg-white/10 group-hover:border-blue-400 transition-all duration-500">
              <img src="/assets/logo2.png" alt="Logo" className="h-6 md:h-8 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter leading-none bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Campus<span className="italic text-blue-600">Recruit</span>
              </span>
              <span className="text-[8px] font-bold text-slate-400 tracking-[0.3em] uppercase">Mentor Panel</span>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 font-medium hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink end to="/teacher" className={({ isActive }) => `flex items-center gap-2 font-medium hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                <FaChalkboardTeacher /> Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {user && (
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-sm font-bold text-gray-800">{user.name}</span>
              <span className="text-xs text-gray-500 uppercase">{user.role}</span>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="btn btn-error btn-sm text-white rounded-lg flex items-center gap-2"
          >
            <FaSignOutAlt /> <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeacherNavbar
