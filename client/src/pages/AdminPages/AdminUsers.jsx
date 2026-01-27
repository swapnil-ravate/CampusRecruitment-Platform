import React from 'react'
import { useGetAllUsersQuery, useDeleteUserMutation } from '../../redux/api/adminApi'
import { toast } from 'react-hot-toast'

const AdminUsers = () => {
    const { data: users, isLoading } = useGetAllUsersQuery()
    const [deleteUser, { isSuccess }] = useDeleteUserMutation()

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            deleteUser(id)
        }
    }

    React.useEffect(() => {
        if (isSuccess) {
            toast.success("User Deleted Successfully")
        }
    }, [isSuccess])

    if (isLoading) return <div className='text-center mt-10'>Loading...</div>

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-2xl font-bold mb-6">Manage Users</h2>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className={`badge ${user.role === 'teacher' ? 'badge-primary' : 'badge-secondary'}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn btn-sm btn-error text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {users && users.length === 0 && <p className="text-center mt-4">No users found.</p>}
        </div>
    )
}

export default AdminUsers
