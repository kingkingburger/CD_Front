import userdata from "../../data/userdata.json";
import styles from "./ContentDetail.module.css";

const ContentDetail = ({ data }) => {
  return (
    <div class="container col p-0">
      <div class="text-center">
        <img width="200" height="250" alt="contentpull" src={data.imgsrc} />
      </div>
      <div class="d-flex justify-content-between ">
        <div>남은 시간: 75:00</div>
        <div>조회수 1085</div>
      </div>
      <div class="d-flex justify-content-between pt-2 ">
        <div className={styles.result_title}>{data.title}</div>
      </div>
      <div class="d-flex justify-content-between">
        <div className={styles.result_location}>{data.location}</div>
      </div>
      <div class="d-flex justify-content-end">
        <div className={styles.result_price}>현재가격: {data.price}</div>
      </div>
      <div class="d-flex justify-content-end">
        <div className={styles.result_price}>
          즉시구매가격: {data.immediately}
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
