import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
};

const useUploadUserInfoModal = createSlice({
    name: "useUploadUserInfoModal",
    initialState,
    reducers: {
        handleOpenUploadInfo: state => {
            state.isOpen = true;
        },
        handleCloseUploadInfo: state => {
            state.isOpen = false;
        }
    }
});

export const { handleOpenUploadInfo, handleCloseUploadInfo } = useUploadUserInfoModal.actions;

export default useUploadUserInfoModal.reducer;