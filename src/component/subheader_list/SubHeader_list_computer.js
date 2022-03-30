import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          노트북/PC
        </a>
        <a className="col" href="#">
          모니터/프린터
        </a>
        <a className="col" href="#">
          PC주변기기
        </a>
        <a className="col" href="#">
          저장장치
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
