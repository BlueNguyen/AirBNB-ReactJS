import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { userServ } from '../api/api';

const initialState = {
    user: [],
}

export const getUserById = createAsyncThunk("useGetUserById/getUserById",
    async (dataLocal, { _, dispatch }) => {
        const res = await userServ.getUserByID(dataLocal);
        return res.data.content
    }
)

const useGetUserById = createSlice({
    name: "useGetUserById",
    initialState,
    reducers: {
        handleGetUserById: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})

export const { handleGetUserById } = useGetUserById.actions

export default useGetUserById.reducer;