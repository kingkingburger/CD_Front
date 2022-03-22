import styles from "../css/DetailContent.module.css";
import userdata from "../../data/userdata.json";
import { useParams } from "react-router-dom";
import Timer from "../../util/Timer";
import ContentDetail from "./ContentDetail";
import Moving_slid from "../detailcontent_element/Moving_slid";

const DetailContent = ({ data }) => {
  // const { id } = useParams();
  //id에 맞는 item 가져오기
  const user = data;
  let imgg = require(`../../images${user.imgsrc}`); // 웹 팩에서 데이터를 가져오기
  return (
    <div>
      <div className={`container d-flex justify-content-center `}>
        <div className={styles.background}>
          <div className="d-flex flex-column px-5">
            <Moving_slid data={imgg} />
            <div className="text-center">
              남은시간 : <Timer />
            </div>

            <div className={`${styles.profile}`}>
              <div className="mt-1">{user.username}</div>
              <div className={`${styles.result_location}`}>{user.location}</div>
            </div>

            <div className={`${styles.result_title} mt-4 `}>{user.title}</div>

            <div className={styles.center_line_up}></div>
            <div>상세내용</div>
            <div className={`${styles.article_counts} mt-3`}>관심0 조회수0</div>
            <div>현재 가격: {user.price}</div>
            <div>즉시 구매가: {user.immediately}</div>

            <p className="text-end">평균 거래가: 26,000</p>

            <div className="text-end">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                입찰하기
              </button>
            </div>
          </div>
          <hr style={{ height: "3px" }}></hr>
          <div className="mt-1">다른 상품 정보</div>
          <div>
            {userdata["data"].map((item) => {
              return (
                <div className={styles.flat_card}>
                  <ContentDetail key={item.id} data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
