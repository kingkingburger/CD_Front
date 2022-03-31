import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          가구/DIY
        </a>
        <a className="col" href="#">
          조명/인테리어
        </a>
        <a className="col" href="#">
          침구/커튼
        </a>
        <a className="col" href="#">
          생활용품
        </a>
        <a className="col" href="#">
          주방용품
        </a>
        <a className="col" href="#">
          신선식품
        </a>
        <a className="col" href="#">
          건강식품
        </a>
        <a className="col" href="#">
          커피/음료
        </a>
        <a className="col" href="#">
          가공식품
        </a>
        <a className="col" href="#">
          생필품
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
