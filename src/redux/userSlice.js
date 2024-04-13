import { createSlice } from "@reduxjs/toolkit";
import { userAdminLocalStorage,  } from "../api/localService";

const initialState = {
  // admin page
  userAdmin: userAdminLocalStorage.get(),
  allUsers: null,
  totalUsers: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
      setLoginAdmin: (state, action) => {
      state.userAdmin = action.payload;
    },
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setTotalUsers: (state, action) => {
      state.totalUsers = action.payload;
    },
  },
});

export const { setLogin,  setLoginAdmin, getAllUsers, setTotalUsers } = userSlice.actions;
export default userSlice.reducer;
