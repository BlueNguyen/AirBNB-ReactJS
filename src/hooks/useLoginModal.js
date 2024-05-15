import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
};

const useLoginModal = createSlice({
    name: "useLoginModal",
    initialState,
    reducers: {
        handleOpenLogin: state => {
            state.isOpen = true;
        },
        handleCloseLogin: state => {
            state.isOpen = false;
        }
    }
});

export const { handleOpenLogin, handleCloseLogin } = useLoginModal.actions;

export default useLoginModal.reducer;