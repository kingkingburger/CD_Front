import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          계절가전
        </a>
        <a className="col" href="#">
          주방가전
        </a>
        <a className="col" href="#">
          생활/미용가전
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
