import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          도서/교육/음반
        </a>
        <a className="col" href="#">
          백화점/제화상품권
        </a>
        <a className="col" href="#">
          여행/항공권
        </a>
        <a className="col" href="#">
          e쿠폰/모바일상품권
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
