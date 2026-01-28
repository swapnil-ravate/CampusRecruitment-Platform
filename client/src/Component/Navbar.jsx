import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../redux/api/authApi'
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify'
import theme from '../theme'

const Navbar = () => {
  const { user } = useSelector(state => state.user)
  const [logout, { isSuccess, error, isError }] = useLogoutMutation()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logout Successful")
    }
  }, [isSuccess])

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
  }, [isSuccess])


  return <>
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink end to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
              <li><NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About US</NavLink></li>
              <li><NavLink to='/jobSection' className={({ isActive }) => isActive ? 'active' : ''}>Jobs</NavLink></li>
              <li><NavLink to='/enterprenuer' className={({ isActive }) => isActive ? 'active' : ''}>EnterPrenuer</NavLink></li>
              <li><NavLink to='/higheredu' className={({ isActive }) => isActive ? 'active' : ''}>Higher Education</NavLink></li>
              <li><NavLink to='/contactus' className={({ isActive }) => isActive ? 'active' : ''}>Contact US</NavLink></li>
            </ul>
          </div>
          <Link to='/' className="flex items-center gap-2 ml-6 group transition-all duration-500 hover:scale-[1.01]">
            <div className="p-1.5 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 shadow-lg group-hover:bg-white/10 group-hover:border-primary/30 transition-all duration-500">
              <img src="/assets/logo2.png" alt="Logo" className="h-6 md:h-8 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-semibold tracking-tighter leading-none bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Campus<span className="italic">Recruit</span>
              </span>
              <span className="text-[8px] font-semibold text-slate-400 tracking-[0.2em] uppercase">Talent Bridge</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><NavLink end to='/' className={({ isActive }) => `text-lg font-medium hover:text-blue-600 transition-all ${isActive ? 'font-semibold text-blue-600 border-b-2 border-blue-600' : ''}`}>Home</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) => `text-lg font-medium hover:text-blue-600 transition-all ${isActive ? 'font-semibold text-blue-600 border-b-2 border-blue-600' : ''}`}>About US</NavLink></li>
            <li><NavLink to='/jobSection' className={({ isActive }) => `text-lg font-medium hover:text-blue-600 transition-all ${isActive ? 'font-semibold text-blue-600 border-b-2 border-blue-600' : ''}`}>Jobs</NavLink></li>
            <li><NavLink to='/entrepreneur' className={({ isActive }) => `text-lg font-medium hover:text-blue-600 transition-all ${isActive ? 'font-semibold text-blue-600 border-b-2 border-blue-600' : ''}`}>Entrepreneur</NavLink></li>
            <li><NavLink to='/higheredu' className={({ isActive }) => `text-lg font-medium hover:text-blue-600 transition-all ${isActive ? 'font-semibold text-blue-600 border-b-2 border-blue-600' : ''}`}>Higher Education</NavLink></li>
            <li><NavLink to='/contactus' className={({ isActive }) => `text-lg font-medium hover:text-blue-600 transition-all ${isActive ? 'font-semibold text-blue-600 border-b-2 border-blue-600' : ''}`}>Contact US</NavLink></li>
            {user && <li><NavLink end to={user.role === 'admin' ? '/admin' : user.role === 'teacher' ? '/teacher' : '/user'} className={({ isActive }) => `text-lg font-medium hover:text-blue-600 transition-all ${isActive ? 'font-semibold text-blue-600 border-b-2 border-blue-600' : ''}`}>Dashboard</NavLink></li>}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {/* Register */}
          {/* <Link to='/userRegister'> <button className='btn btn-warning' >Register </button> </Link> */}

          {/* Login */}
          {
            user ? <div className='flex gap-2 items-center'>
              <button onClick={handleLogout} className={`btn btn-${theme.btn}`}>Logout</button>
            </div>
              : <Link to='/userLogin'> <button className={`btn btn-${theme.btn}`} >SignIn</button></Link>
          }


        </div>
      </div>

    </div>



  </>

}

export default Navbar
