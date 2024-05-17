import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { binhLuanServ } from '../api/api';

const initialState = {
    arrBinhLuan: [],
}

export const getBinhLuanById = createAsyncThunk("useGetBinhLuanById/getBookedById",
    async (dataLocal, { _, dispatch }) => {
        const res = await binhLuanServ.getAllBinhLuanById(dataLocal);
        return res.data.content
    }
)

const useGetBinhLuanById = createSlice({
    name: "useGetBinhLuanById",
    initialState,
    reducers: {
        handleGetBinhLuanById: (state, action) => {
            state.arrBinhLuan = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBinhLuanById.fulfilled, (state, action) => {
            state.arrBinhLuan = action.payload
        })
    }
})

export const { handleGetBinhLuanById } = useGetBinhLuanById.actions

export default useGetBinhLuanById.reducer;