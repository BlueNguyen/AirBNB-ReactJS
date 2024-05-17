import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { roomServ } from '../api/api';

const initialState = {
    roomById: [],
}

export const getRoomById = createAsyncThunk("useGetRoomById/getRoomById",
    async (dataLocal, { _, dispatch }) => {
        const res = await roomServ.getRoomById(dataLocal);
        return res.data.content
    }
)

const useGetRoomById = createSlice({
    name: "useGetRoomById",
    initialState,
    reducers: {
        handleGetRoomById: (state, action) => {
            state.roomById = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRoomById.fulfilled, (state, action) => {
            state.roomById = action.payload
        })
    }
})

export const { handleGetRoomById } = useGetRoomById.actions

export default useGetRoomById.reducer;