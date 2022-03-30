import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          기타 상품
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
