import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          출산/육아
        </a>
        <a className="col" href="#">
          장난감/완구
        </a>
        <a className="col" href="#">
          유아동의류
        </a>
        <a className="col" href="#">
          유아동신발/잡화
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
