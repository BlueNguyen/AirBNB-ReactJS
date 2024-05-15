import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { bookingSer } from '../api/api';

const initialState = {
    bookedRoom: [],
}

export const getBookedById = createAsyncThunk("useGetBookedById/getBookedById",
    async (dataLocal, { _, dispatch }) => {
        const res = await bookingSer.getBookedById(dataLocal);
        return res.data.content
    }
)

const useGetBookedById = createSlice({
    name: "useGetBookedById",
    initialState,
    reducers: {
        handleGetBookedById: (state, action) => {
            state.bookedRoom = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBookedById.fulfilled, (state, action) => {
            state.bookedRoom = action.payload
        })
    }
})

export const { handleGetBookedById } = useGetBookedById.actions

export default useGetBookedById.reducer;