// import React, { useState, useEffect } from "react";
import Header from "../component/shared/Header";
import SideBar from "../component/shared/SideBar";
import UserInfo from "../component/mypage/Userinfo";
import { useLocation } from "react-router-dom";

const UserPage = () => {
  const data = useLocation();
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideBar />
        <UserInfo key={data.name} userinfo={data.state} />
      </div>
    </div>
  );
};

export default UserPage;
