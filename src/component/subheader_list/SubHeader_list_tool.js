import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          자동차용품
        </a>
        <a className="col" href="#">
          공구/안전/산업용품
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
