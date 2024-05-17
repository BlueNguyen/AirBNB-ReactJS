import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { roomServ } from '../api/api';

const initialState = {
    roomByViTri: [],
}

export const getRoomByViTri = createAsyncThunk("useGetRoomByViTri/getRoomByViTri",
    async (dataLocal, { _, dispatch }) => {
        const res = await roomServ.getRoomByViTri(dataLocal);
        return res.data.content
    }
)

const useGetRoomByViTri = createSlice({
    name: "useGetRoomByViTri",
    initialState,
    reducers: {
        handleGetRoomByViTri: (state, action) => {
            state.roomByViTri = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRoomByViTri.fulfilled, (state, action) => {
            state.roomByViTri = action.payload
        })
    }
})

export const { handleGetRoomByViTri } = useGetRoomByViTri.actions

export default useGetRoomByViTri.reducer;