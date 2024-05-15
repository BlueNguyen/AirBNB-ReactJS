import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
};

const useRegisterModal = createSlice({
  name: "useRegisterModal",
  initialState,
  reducers: {
    handleOpen: state => {
      state.isOpen = true;
    },
    handleClose: state => {
      state.isOpen = false;
    }
  }
});

export const { handleOpen, handleClose } = useRegisterModal.actions;

export default useRegisterModal.reducer;