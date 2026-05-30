import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../../redux/api/authApi'
import { toast } from 'react-hot-toast'
import { IoMdEye, IoIosEyeOff } from "react-icons/io"

const UserRegistration = () => {
  const [register, { isSuccess, isError, error, isLoading }] = useRegisterMutation()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState('')

  const navigate = useNavigate()

  // Password strength calculator
  const calculatePasswordStrength = (password) => {
    if (!password) return ''
    if (password.length < 6) return 'weak'

    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumbers = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    const conditions = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar].filter(Boolean).length

    if (password.length >= 8 && conditions >= 3) return 'strong'
    if (password.length >= 6 && conditions >= 2) return 'medium'
    return 'weak'
  }

  const validationSchema = yup.object({
    name: yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    number: yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
    education: yup.string()
      .required('Educational qualification is required'),
    password: yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
      .required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    role: yup.string()
      .required('Role is required')
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      education: "",
      password: "",
      confirmPassword: "",
      role: "user"
    },
    validationSchema,
    onSubmit: (values) => {
      // Remove confirmPassword before sending to backend
      const { confirmPassword, ...registerData } = values
      register(registerData)
    }
  })

  // Update password strength when password changes
  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(formik.values.password))
  }, [formik.values.password])

  useEffect(() => {
    if (isSuccess) {
      toast.success('Registered Successfully! Please login with your credentials.')
      formik.resetForm()
      navigate('/userLogin')
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError && error) {
      const errorMessage = error?.data?.message || error?.error || 'Registration failed. Please try again.'
      toast.error(errorMessage)
    }
  }, [isError, error])

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 'weak': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'strong': return 'bg-green-500'
      default: return 'bg-gray-300'
    }
  }

  return <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen px-6 py-12 lg:px-8">
      <div className="sm:w-full sm:max-w-md">
        <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Your Account
        </h2>

        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Your Name
              </label>
              <div className="mt-2">
                <input
                  {...formik.getFieldProps('name')}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="mt-1 text-xs text-red-600">{formik.errors.name}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Your Email Address
              </label>
              <div className="mt-2">
                <input
                  {...formik.getFieldProps('email')}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-xs text-red-600">{formik.errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  {...formik.getFieldProps('number')}
                  id="phone"
                  name="number"
                  type="tel"
                  autoComplete="tel"
                  placeholder="1234567890"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.number && formik.errors.number && (
                  <p className="mt-1 text-xs text-red-600">{formik.errors.number}</p>
                )}
              </div>
            </div>

            {/* Education */}
            <div>
              <label htmlFor="education" className="block text-sm font-medium leading-6 text-gray-900">
                Educational Qualification
              </label>
              <div className="mt-2">
                <select
                  {...formik.getFieldProps('education')}
                  id="education"
                  name="education"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select Qualification</option>
                  <option value="high_school">High School</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Postgraduate</option>
                </select>
                {formik.touched.education && formik.errors.education && (
                  <p className="mt-1 text-xs text-red-600">{formik.errors.education}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  {...formik.getFieldProps('password')}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 py-1.5 px-2 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <IoIosEyeOff size={20} /> : <IoMdEye size={20} />}
                </button>
              </div>
              {formik.values.password && (
                <div className="mt-1">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-gray-200 rounded">
                      <div className={`h-1 rounded transition-all ${getStrengthColor()}`} style={{ width: passwordStrength === 'strong' ? '100%' : passwordStrength === 'medium' ? '66%' : '33%' }}></div>
                    </div>
                    <span className="text-xs capitalize">{passwordStrength}</span>
                  </div>
                </div>
              )}
              {formik.touched.password && formik.errors.password && (
                <p className="mt-1 text-xs text-red-600">{formik.errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2 relative">
                <input
                  {...formik.getFieldProps('confirmPassword')}
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 py-1.5 px-2 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <IoIosEyeOff size={20} /> : <IoMdEye size={20} />}
                </button>
              </div>
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-600">{formik.errors.confirmPassword}</p>
              )}
            </div>

            {/* Role */}
            <div className="col-span-2">
              <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                Role
              </label>
              <div className="mt-2">
                <select
                  {...formik.getFieldProps('role')}
                  id="role"
                  name="role"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select Role</option>
                  <option value="user">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                </select>
                {formik.touched.role && formik.errors.role && (
                  <p className="mt-1 text-xs text-red-600">{formik.errors.role}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </>
              ) : (
                'Create an Account'
              )}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to='/userLogin' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log in here
          </Link>
        </p>
      </div>
    </div>
    <Footer />
  </>
}

export default UserRegistration
