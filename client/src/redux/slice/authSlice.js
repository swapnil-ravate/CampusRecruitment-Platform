import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { userApi } from "../api/userApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: JSON.parse(sessionStorage.getItem("auth"))
    },
    reducers: {
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.logout.matchFulfilled, (state, { payload }) => {
            state.user = null
        })
        .addMatcher(userApi.endpoints.updateProfile.matchFulfilled, (state, { payload }) => {
            state.user = payload
            sessionStorage.setItem("auth", JSON.stringify(payload))
        })


})

export default authSlice.reducer