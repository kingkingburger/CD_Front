import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          화장품/향수
        </a>
        <a className="col" href="#">
          바디/헤어
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
