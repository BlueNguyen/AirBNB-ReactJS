import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { locationServ } from '../api/api'

const initialState = {
    arrViTri: [],
}

export const getAllViTri = createAsyncThunk("useGetAllViTri/getAllViTri",
    async (dataLocal = "", { _, dispatch }) => {
        const res = await locationServ.getAllLocations();
        return res.data.content
    }
)

const useGetAllViTri = createSlice({
    name: "useGetAllViTri",
    initialState,
    reducers: {
        handleAllViTri: (state, action) => {
            state.arrViTri = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllViTri.fulfilled, (state, action) => {
            state.arrViTri = action.payload
        })
    }
})

export const { handleAllViTri } = useGetAllViTri.actions

export default useGetAllViTri.reducer;