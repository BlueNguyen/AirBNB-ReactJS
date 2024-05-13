import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/userSlice";
import spinnerSlice from "./redux/spinnerSlice";
import roomSlice from "./redux/roomSlice";
import locationSlice from "./redux/locationSlice";

import "alpinejs";
import useRegisterModal from "./hooks/useRegisterModal.js";
import useLoginModal from "./hooks/useLoginModal.js";
import useRoomModal from "./hooks/useRoomModal.js";
import useViTriModal from "./hooks/useViTriModal.js";
import useGetUserById from "./hooks/useGetUserById.js";
import useGetBookedById from "./hooks/useGetBookedById.js";
import useUploadAvatarModal from "./hooks/useUploadAvatarModal.js";
import useUploadUserInfoModal from "./hooks/useUploadUserInfoModal.js";
import useGetRoomByViTri from "./hooks/useGetRoomByViTri.js";
import useGetRoomById from "./hooks/useGetRoomById.js";
import useGetBinhLuanById from "./hooks/useGetBinhLuanById.js";

export const store = configureStore({
  reducer: {
    userSlice,
    spinnerSlice,
    roomSlice,
    locationSlice,
    useRegisterModal,
    useLoginModal,
    useRoomModal,
    useViTriModal,
    useGetUserById,
    useGetBookedById,
    useUploadAvatarModal,
    useUploadUserInfoModal,
    useGetRoomByViTri,
    useGetRoomById,
    useGetBinhLuanById
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
