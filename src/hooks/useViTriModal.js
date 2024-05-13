import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { locationServ } from '../api/api'

const initialState = {
    arrViTri: [],
}

export const getAllViTri = createAsyncThunk("useViTriModal/getAllViTri",
    async (dataLocal = "", { _, dispatch }) => {
        const res = await locationServ.getPagination(dataLocal);
        console.log(res.data.content)
        return res.data.content.data
    }
)

const useViTriModal = createSlice({
    name: "useViTriModal",
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

export const { handleAllViTri } = useViTriModal.actions

export default useViTriModal.reducer;