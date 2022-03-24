import styles from "../css/ContentDetail.module.css";
import Timer from "../../util/Timer";
import { Link } from "react-router-dom";

const ContentDetail = ({ data }) => {
  let imgg = require(`../../images${data.imgsrc}`); // 웹 팩에서 데이터를 가져오기
  const url = `/item/${data.id}`;
  return (
    <div className="container row p-0">
      <Link
        to={url}
        state={{
          id: data.id,
          date: data.date,
          category: data.category,
          username: data.username,
          price: data.price,
          immediately: data.immediately,
          title: data.title,
          location: data.location,
          imgsrc: data.imgsrc,
        }}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.card_photo}>
          <img
            className={`${styles.img} mx-auto`}
            alt="contentpull"
            src={imgg}
          />
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
          <div className={styles.result_price}>
            현재가격:{" "}
            {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className={styles.result_price}>
            즉시구매:{" "}
            {data.immediately.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContentDetail;
