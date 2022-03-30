import styles from "../css/SubHeader.module.css";
import { useState } from "react";

const SubHeader_list = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <a className="col" href="#">
          휘트니스/수영
        </a>
        <a className="col" href="#">
          스포츠의류/운동화
        </a>
        <a className="col" href="#">
          골프
        </a>
        <a className="col" href="#">
          등산/아웃도어
        </a>
        <a className="col" href="#">
          캠핑/낚시
        </a>
        <a className="col" href="#">
          구기/라켓
        </a>
        <a className="col" href="#">
          자전거/보드/기타레저
        </a>
      </div>
    </div>
  );
};
export default SubHeader_list;
