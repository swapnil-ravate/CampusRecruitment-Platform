import React from 'react'
import { FaTwitter, FaYoutube, FaFacebook, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
      {/* Charming top gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      {/* Ethereal Background Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 pt-6 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand Identity Section */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="p-2 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 shadow-lg group-hover:bg-white/10 transition-all duration-500 transform group-hover:rotate-3">
                <img src="/assets/logo2.png" alt="Logo" className="h-8 w-auto" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-white tracking-tighter leading-none">
                  Campus<span className="text-primary italic">Recruit</span>
                </span>
                <span className="text-[9px] text-slate-500 uppercase tracking-[0.3em] font-semibold mt-1">Future Ready</span>
              </div>
            </div>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm font-medium opacity-80">
              The elite gateway to professional brilliance. We don't just find jobs; we engineer career trajectories by uniting top-tier talent with world-class visionaries.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaTwitter />, color: 'hover:text-[#1DA1F2]', label: 'Twitter' },
                { icon: <FaYoutube />, color: 'hover:text-[#FF0000]', label: 'YouTube' },
                { icon: <FaFacebook />, color: 'hover:text-[#1877F2]', label: 'Facebook' },
                { icon: <FaLinkedin />, color: 'hover:text-[#0A66C2]', label: 'LinkedIn' },
                { icon: <FaInstagram />, color: 'hover:text-[#E4405F]', label: 'Instagram' }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 transition-all duration-500 ${social.color} hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 shadow-xl group`}
                  aria-label={social.label}
                >
                  <span className="transform transition-transform duration-500 group-hover:scale-110">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="md:col-span-5 grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-white font-semibold text-xs uppercase tracking-[0.25em] relative inline-block pb-2">
                Solutions
                <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-primary"></span>
              </h4>
              <ul className="space-y-5">
                {['Resume Master', 'Smart Matching', 'Career Coaching', 'Direct Access'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 text-[15px] font-medium flex items-center group">
                      <span className="w-0 group-hover:w-3 h-[1px] bg-primary mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-white font-semibold text-xs uppercase tracking-[0.25em] relative inline-block pb-2">
                Company
                <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-secondary"></span>
              </h4>
              <ul className="space-y-5">
                <li><Link to="/about" className="text-slate-400 hover:text-white transition-all duration-300 text-[15px] font-medium block">Our Mission</Link></li>
                <li><Link to="/contactus" className="text-slate-400 hover:text-white transition-all duration-300 text-[15px] font-medium block">Get in Touch</Link></li>
                <li><Link to="/jobSection" className="text-slate-400 hover:text-white transition-all duration-300 text-[15px] font-medium block">Opportunities</Link></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-all duration-300 text-[15px] font-medium block">Legal Ethics</a></li>
              </ul>
            </div>
          </div>

          {/* Elite Newsletter Section */}
          <div className="md:col-span-3 space-y-8 p-8 bg-white/[0.02] rounded-[2rem] border border-white/5 backdrop-blur-sm">
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.25em] text-center">Join the Vanguard</h4>
            <p className="text-slate-500 text-sm text-center font-medium">Be the first to secure elite roles and exclusive insights.</p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Ex. hello@premium.com"
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 px-5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-600 font-medium"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-primary rounded-xl text-white hover:bg-primary-focus transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95">
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>
        </div>

        {/* Sophisticated Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[13px] font-medium tracking-wide">
            © 2025 <span className="text-slate-400 font-semibold">Campus Recruitment</span>. Defined by impact.
          </p>
          <div className="flex gap-10 text-[13px] font-medium text-slate-600">
            <a href="#" className="hover:text-white transition-colors duration-300 underline-offset-4 hover:underline">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors duration-300 underline-offset-4 hover:underline">Data Protection</a>
            <a href="#" className="hover:text-white transition-colors duration-300 underline-offset-4 hover:underline">Platform Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
