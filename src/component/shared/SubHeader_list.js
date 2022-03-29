import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          Link 1
        </a>
        <a className="col" href="#">
          Link 2
        </a>
        <a className="col" href="#">
          Link 3
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
