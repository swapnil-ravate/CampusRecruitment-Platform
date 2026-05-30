import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLogoutMutation } from '../../redux/api/authApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'


const AdminNavbar = () => {
  const [logout, { isSuccess, error, isError }] = useLogoutMutation()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
      toast.success("Admin Logout Successfully")
    }
  }, [isSuccess, navigate])
  return (
    <div>

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link to='/' className="flex items-center gap-2 ml-6 group transition-all duration-500 hover:scale-[1.01]">
            <div className="p-1.5 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 shadow-lg group-hover:bg-white/10 group-hover:border-red-400 transition-all duration-500">
              <img src="/assets/logo2.png" alt="Logo" className="h-6 md:h-8 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter leading-none bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Campus<span className="italic text-red-600">Recruit</span>
              </span>
              <span className="text-[8px] font-bold text-slate-400 tracking-[0.3em] uppercase">Admin Hub</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><NavLink to='/' className={({ isActive }) => `text-lg hover:text-blue-600 transition-all ${isActive ? 'font-bold text-blue-600 border-b-2 border-blue-600' : ''}`}>Home</NavLink></li>
            <li><NavLink end to='/admin' className={({ isActive }) => `text-lg hover:text-blue-600 transition-all ${isActive ? 'font-bold text-blue-600 border-b-2 border-blue-600' : ''}`}>Dashboard</NavLink></li>
            <li><NavLink to='/admin/jobPost' className={({ isActive }) => `text-lg hover:text-blue-600 transition-all ${isActive ? 'font-bold text-blue-600 border-b-2 border-blue-600' : ''}`}>Post a Job</NavLink></li>
            <li><NavLink to='/admin/review' className={({ isActive }) => `text-lg hover:text-blue-600 transition-all ${isActive ? 'font-bold text-blue-600 border-b-2 border-blue-600' : ''}`}>Review Applications</NavLink></li>
            <li><NavLink to='/admin/users' className={({ isActive }) => `text-lg hover:text-blue-600 transition-all ${isActive ? 'font-bold text-blue-600 border-b-2 border-blue-600' : ''}`}>Manage Users</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Logout</button>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello Admin</h3>
              <p className="py-4">Are you sure you want to Logout</p>
              <div className="modal-action">
                <form method="dialog">

                  <button onClick={handleLogout} className="btn btn-error mx-4">Yes</button>
                  <button className="btn btn-success">No</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar
