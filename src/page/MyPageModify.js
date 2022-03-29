// import React, { useState, useEffect } from "react";
import Header from "../component/shared/Header";
import SideBar from "../component/shared/SideBar";
import UserModifyInfo from "../component/mypage/UserModifyInfo";

const UserModify = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideBar />
        <UserModifyInfo />
      </div>
    </div>
  );
};

export default UserModify;
