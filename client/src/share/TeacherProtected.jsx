import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const TeacherProtected = ({ compo }) => {
    const { user } = useSelector(state => state.user)
    return <>
        {
            (user && user.role === "teacher") ? compo : <Navigate to='/userLogin' />
        }
    </>
}

export default TeacherProtected
