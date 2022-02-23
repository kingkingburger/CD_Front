import styles from "./ContentDetail.module.css";

const ContentDetail = ({ data }) => {
  let imgg = require(`../../images${data.imgsrc}`); // 웹 팩에서 데이터를 가져오기
  // let imgg = require(`${data.imgsrc}`); // 웹 팩에서 데이터를 가져오기
  console.log(data.imgsrc);
  console.log(imgg);
  console.log(`../../images${data.imgsrc}`);

  return (
    <div className="container col p-0">
      <div className={styles.card_photo}>
        <img className={styles.img} alt="contentpull" src={imgg} />
      </div>
      <div className="d-flex justify-content-between ">
        <div>남은 시간: 75:00</div>
        <div>조회수 1085</div>
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
    </div>
  );
};

export default ContentDetail;
