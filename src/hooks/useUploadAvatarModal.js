import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
};

const useUploadAvatarModal = createSlice({
    name: "useUploadAvatarModal",
    initialState,
    reducers: {
        handleOpenUpload: state => {
            state.isOpen = true;
        },
        handleCloseUpload: state => {
            state.isOpen = false;
        }
    }
});

export const { handleOpenUpload, handleCloseUpload } = useUploadAvatarModal.actions;

export default useUploadAvatarModal.reducer;