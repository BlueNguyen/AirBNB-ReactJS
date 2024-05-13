import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { roomServ } from '../api/api'

const initialState = {
    arrRooms: [],
}

export const getAllRooms = createAsyncThunk("useRoomModal/getAllRooms",
    async (dataLocal = "", { _, dispatch }) => {
        const res = await roomServ.getAllRooms(dataLocal);
        return res.data.content
    }
)

const useRoomModal = createSlice({
    name: "useRoomModal",
    initialState,
    reducers: {
        handleAllRooms: (state, action) => {
            state.arrRooms = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllRooms.fulfilled, (state, action) => {
            state.arrRooms = action.payload
        })
    }
})

export const { handleAllRooms } = useRoomModal.actions

export default useRoomModal.reducer;