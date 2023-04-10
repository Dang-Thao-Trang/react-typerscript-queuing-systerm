import React from "react";
import "./UseName.scss";
import AvatarUser from "../../assets/unsplash_Fyl8sMC2j2Q.png";
import { FaBell } from "react-icons/fa";

const UseName = () => {
  return (
    <div className="user">
      <div className="icon">
        <FaBell className="img_icon" />
      </div>
      <img src={AvatarUser} alt="AvatarUser" />
      <div className="nameUser">
        <span>Xin chào</span>
        <p>Lê Quỳnh Ái Vân</p>
      </div>
    </div>
  );
};

export default UseName;
