import styles from "./ContentDetail.module.css";
import { useEffect, useState } from "react";
import moment from "moment";
import Timer from "../../util/Timer";
import { Link } from "react-router-dom";

const ContentDetail = ({ data }) => {
  let imgg = require(`../../images${data.imgsrc}`); // 웹 팩에서 데이터를 가져오기
  const url = `/item/${data.id}`;
  return (
    <div className="container col p-0">
      <Link
        to={{ pathname: url, state: { data: data } }}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.card_photo}>
          <img className={styles.img} alt="contentpull" src={imgg} />
        </div>

        <div className="d-flex justify-content-center ">
          <div>
            <Timer />
          </div>
        </div>
        <div className="d-flex justify-content-between pt-2 ">
          <div className={styles.result_title}>{data.title}</div>
        </div>
        <div className="d-flex justify-content-between">
          <div className={styles.result_location}>{data.location}</div>
        </div>
        <div className="d-flex justify-content-end">
          <div className={styles.result_price}>현재가격: {data.price}</div>
        </div>
        <div className="d-flex justify-content-end">
          <div className={styles.result_price}>
            즉시구매가격: {data.immediately}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContentDetail;
