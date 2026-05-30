import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1"}/user`,
        credentials: 'include'
    }),
    tagTypes: ["userApi"],
    endpoints: (builder) => {
        return {
            getAllJobs: builder.query({
                query: () => {
                    return {
                        url: "/getJobs",
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["userApi"]
            }),
            updateProfile: builder.mutation({
                query: (userData) => {
                    return {
                        url: "/updateProfile",
                        method: "PUT",
                        body: userData
                    }
                },
                transformResponse: data => data.result,
                invalidatesTags: ["userApi"]
            })


        }
    }
})

export const { useGetAllJobsQuery, useUpdateProfileMutation } = userApi
