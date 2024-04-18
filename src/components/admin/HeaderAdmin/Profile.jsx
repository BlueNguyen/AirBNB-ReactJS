import React, { useState } from "react";
import { userAdminLocalStorage } from "../../../api/localService";
// import ConfimLogoutModal from "./ConfimLogoutModal";
import ProfileModal from "./ProfileModal";

const Profile = ({ isProfileMenuOpen, toggleProfileMenu }) => {
  const [user, setUser] = useState(userAdminLocalStorage.get());

  const [isUpdate, setIsUpdate] = useState(false);

  const [isChangeAvatar, setIsChangeAvatar] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "gender") {
      let val = true;

      e.target.value === "NAM" ? (val = true) : (val = false);

      setUser({ ...user, gender: val });

      return;
    }

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateProfile = () => {
    // update normal

    if (!user.name || !user.email || !user.phone || !user.birthday) {
      message.error("Tất cả các trường không được để trống");

      return;
    }

    if (!user.email.includes("@")) {
      message.error("Email không đúng định dạng");

      return;
    }

    if (user.phone.length != 10) {
      message.error("Số điện thoại phải có 10 ký số");

      return;
    }

    //   update avtar

    if (isChangeAvatar) {
      const input = document.querySelector("#avatar");

      var dataAvt = new FormData();

      dataAvt.append("formFile", input.files[0]);

      userServ

        .updateAvatar(dataAvt)

        .then((response) => {
          const avatar = response.data.content.avatar;

          userAdminLocalStorage.set({ ...user, avatar });

          setIsChangeAvatar(false);
        })

        .catch((error) => {
          console.log(error);

          message.error(error.response.data.content);
        });
    }

    userServ

      .updateUser(user)

      .then((response) => {
        message.info(
          `Người dùng ${response.data.content.name} được cập nhật thành công.`
        );

        // cap nhat lai localStorage

        userAdminLocalStorage.set({ ...user });

        setIsUpdate(false);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const changeAvatar = (evt) => {
    let files = evt.target.files;

    let f = files[0];

    // show preview

    let reader = new FileReader();

    reader.readAsDataURL(f);

    reader.onload = function (oFREvent) {
      document.getElementById("showAvatar").src = oFREvent.target.result;
    };

    setIsChangeAvatar(true);
  }; 
};

export default Profile;
