import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1"}/admin`,
        credentials: 'include'
    }),
    tagTypes: ["jobs", "users"],
    endpoints: (builder) => {
        return {

            addjob: builder.mutation({
                query: jobData => {
                    return {
                        url: "/jobPost",
                        method: "POST",
                        body: jobData
                    }
                },
                transformResponse: data => data.result,
                invalidatesTags: ["jobs"]
            }),
            getAdminStats: builder.query({
                query: () => {
                    return {
                        url: "/stats",
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["jobs"]
            }),
            deleteJob: builder.mutation({
                query: id => {
                    return {
                        url: `/job/delete/${id}`,
                        method: "DELETE"
                    }
                },
                invalidatesTags: ["jobs"]
            }),
            getAllUsers: builder.query({
                query: () => {
                    return {
                        url: "/users",
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["users"]
            }),
            deleteUser: builder.mutation({
                query: id => {
                    return {
                        url: `/user/delete/${id}`,
                        method: "DELETE"
                    }
                },
                invalidatesTags: ["users"]
            })

        }
    }
})

export const { useAddjobMutation, useGetAdminStatsQuery, useDeleteJobMutation, useGetAllUsersQuery, useDeleteUserMutation } = adminApi
