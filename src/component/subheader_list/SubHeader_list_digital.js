import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          카메라
        </a>
        <a className="col" href="#">
          음향기기
        </a>
        <a className="col" href="#">
          게임
        </a>
        <a className="col" href="#">
          모바일/태블릿
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
