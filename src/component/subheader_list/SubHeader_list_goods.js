import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          신발
        </a>
        <a className="col" href="#">
          가방/패션잡화
        </a>
        <a className="col" href="#">
          쥬얼리/시계/선글라스
        </a>
        <a className="col" href="#">
          수입명품
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
