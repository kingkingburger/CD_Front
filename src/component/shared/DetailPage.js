import styles from "./DetailPage.module.css";
import userdata from "../../data/userdata.json";
import { useParams } from "react-router-dom";
import Timer from "./Timer";
import ContentDetail from "./ContentDetail";
function DetailPage() {
  const { id } = useParams();
  //id에 맞는 item 가져오기
  const user = userdata["data"].filter((word) => word.id === id)[0];

  let imgg = require(`../../images${user.imgsrc}`); // 웹 팩에서 데이터를 가져오기
  return (
    <div>
      <div className="container d-flex justify-content-center bg-light  ">
        <div className="d-flex flex-column">
          <div
            id="demo"
            className="carousel slide "
            data-bs-ride="carousel"
            style={{ maxWidth: "700px" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="2"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={imgg}
                  width="700px"
                  alt="nikeShoes1"
                  className="d-block "
                />
              </div>
              <div className="carousel-item">
                <img
                  src={imgg}
                  width="700px"
                  alt="nikeShoes2"
                  className="d-block "
                />
              </div>

              <div className="carousel-item">
                <img
                  src={imgg}
                  width="700px"
                  alt="nikeShoes3"
                  className="d-block "
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>

          <div className="text-center">
            남은시간 : <Timer />
          </div>
          <div className="mt-4">판매자: {user.username}</div>
          <div className="mt-4">{user.title}</div>
          <div className="mt-4">{user.location}</div>

          <div className={styles.center_line_up}>
            -------------------------상세 정보-----------------------
          </div>

          <div>관심0 조회수0</div>
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
          <hr style={{ height: "3px" }}></hr>
          <div className="mt-1">다른 상품 정보</div>
          <div className={styles.card_background}>
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
}

export default DetailPage;
