import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../../redux/api/authApi'
import { toast } from 'react-hot-toast'
const UserNavbar = () => {
  const { user } = useSelector(state => state.user)
  const [logout, { isSuccess }] = useLogoutMutation()

  const navigate = useNavigate()
  useEffect(() => {
    if (isSuccess) {
      navigate("/")
      toast.success("Logged Out Successfully")
    }
  }, [isSuccess])
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink end to='/user' className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
              <li><NavLink to='/jobSection' className={({ isActive }) => isActive ? 'active' : ''}>All Jobs</NavLink></li>
              <li><NavLink to='/user/profile' className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
          <Link to='/' className="flex items-center gap-2 ml-6 group transition-all duration-500 hover:scale-[1.01]">
            <div className="p-1.5 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 shadow-lg group-hover:bg-white/10 group-hover:border-purple-300 transition-all duration-500">
              <img src="/assets/logo2.png" alt="Logo" className="h-6 md:h-8 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter leading-none bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Campus<span className="italic text-purple-600">Recruit</span>
              </span>
              <span className="text-[8px] font-bold text-slate-400 tracking-[0.2em] uppercase">User Portal</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><NavLink end to='/user' className={({ isActive }) => `text-lg hover:text-purple-600 transition-all ${isActive ? 'font-bold text-purple-600 border-b-2 border-purple-600' : ''}`}>Dashboard</NavLink></li>
            <li><NavLink to='/jobSection' className={({ isActive }) => `text-lg hover:text-purple-600 transition-all ${isActive ? 'font-bold text-purple-600 border-b-2 border-purple-600' : ''}`}>All Jobs</NavLink></li>
            <li><NavLink to='/user/profile' className={({ isActive }) => `text-lg hover:text-purple-600 transition-all ${isActive ? 'font-bold text-purple-600 border-b-2 border-purple-600' : ''}`}>Profile</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" m-1 p-4 rounded-md bg-black text-white">{`Welcome ${user?.name}`}</div>
            <ul tabIndex={0} className="dropdown-content z-[20] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/user/profile' onClick={() => {
                const elem = document.activeElement;
                if (elem) { elem?.blur() };
              }}>View Profile</Link></li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
              {/* <li><a>Item 2</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar
