import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1"}/auth`,
        credentials: 'include'
    }),
    tagTypes: ["authapi"],
    endpoints: (builder) => {
        return {
            register: builder.mutation({
                query: userData => {
                    return {
                        url: "/register",
                        method: "POST",
                        body: userData
                    }
                },
                providesTags: ["authapi"]
            }),
            login: builder.mutation({
                query: userData => {
                    return {
                        url: "/login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    sessionStorage.setItem("auth", JSON.stringify(data.result))
                    return data.result
                },
                invalidatesTags: ["authapi"]
            }),
            logout: builder.mutation({
                query: () => {
                    return {
                        url: "/logout",
                        method: "POST"
                    }
                },
                transformResponse: (data) => {
                    sessionStorage.removeItem("auth")
                    return data
                }

            }),

        }
    }
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi
