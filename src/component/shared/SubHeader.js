import styles from "../css/SubHeader.module.css";
import { useState } from "react";
import SubHeader_list_wear from "../subheader_list/SubHeader_list_wear";
import SubHeader_list_beauty from "../subheader_list/SubHeader_list_beauty";
import SubHeader_list_book from "../subheader_list/SubHeader_list_book";
import SubHeader_list_child from "../subheader_list/SubHeader_list_child";
import SubHeader_list_computer from "../subheader_list/SubHeader_list_computer";
import SubHeader_list_digital from "../subheader_list/SubHeader_list_digital";
import SubHeader_list_etc from "../subheader_list/SubHeader_list_etc";
import SubHeader_list_furniture from "../subheader_list/SubHeader_list_furniture";
import SubHeader_list_goods from "../subheader_list/SubHeader_list_goods";
import SubHeader_list_leisure from "../subheader_list/SubHeader_list_leisure";
import SubHeader_list_tool from "../subheader_list/SubHeader_list_tool";
import SubHeader_list_life from "../subheader_list/SubHeader_list_life";

const SubHeader = () => {
  const [visible, setVisible] = useState("");
  return (
    <div>
      <div className="container mt-3 d-flex justify-content-center">
        <div className="row g-auto justify-content-md-center">
          <div className={`col-xl-6 d-flex justify-content-md-center`}>
            <div
              className=" p-2 flex border "
              onMouseEnter={() => setVisible("의류")}
            >
              <a className={` ${styles.aTag}`} href="#">
                <img
                  className="text-center"
                  src={require(`../../images/의류.png`)}
                  width="62px"
                  height="70px"
                ></img>
                <div className="text-center text-dark ">의류</div>
              </a>
            </div>
            <div
              className="p-2 flex border"
              onMouseEnter={() => setVisible("잡화")}
            >
              <a className={styles.aTag} href="#">
                <img
                  className="text-center"
                  src={require(`../../images/뷰티_잡화.png`)}
                  width="62px"
                  height="70px"
                ></img>
                <div className="text-center text-dark">뷰티 잡화</div>
              </a>
            </div>
            <div
              className="p-2 flex border"
              onMouseEnter={() => setVisible("유아용품")}
            >
              <a className={styles.aTag} href="#">
                <img
                  className="text-center"
                  src={require(`../../images/유아용품.png`)}
                  width="62px"
                  height="70px"
                ></img>
                <div className="text-center text-dark">유아용품</div>
              </a>
            </div>
            <div
              className="p-2 flex border"
              onMouseEnter={() => setVisible("가구")}
            >
              <a className={styles.aTag} href="#">
                <img
                  className="text-center"
                  src={require(`../../images/가구.png`)}
                  width="62px"
                  height="70px"
                ></img>
                <div className="text-center text-dark">가구 생활</div>
              </a>
            </div>
            <div
              className="p-2 flex border"
              onMouseEnter={() => setVisible("디지털")}
            >
              <a className={styles.aTag} href="#">
                <img
                  className="text-center"
                  src={require(`../../images/디지털.png`)}
                  width="70px"
                  height="70px"
                ></img>
                <div className="text-center text-dark">디지털</div>
              </a>
            </div>
            <div
              className="p-2 flex border"
              onMouseEnter={() => setVisible("컴퓨터")}
            >
              <a className={styles.aTag} href="#">
                <img
                  className="text-center"
                  src={require(`../../images/컴퓨터.png`)}
                  width="62px"
                  height="70px"
                ></img>
                <div className="text-center text-dark">컴퓨터</div>
              </a>
            </div>
          </div>
          <div className={`col-xl-6 d-flex justify-content-md-center`}>
            <div
              className="p-2 flex border"
              onMouseEnter={() => setVisible("레저")}
            >
              <a className={styles.aTag} href="#">
                <img
                  className="text-center"
                  src={require(`../../images/스포츠_레저.png`)}
                  width="62px"
                  height="70px"
                ></img>
                <div className="text-center text-dark">레저</div>
              </a>
            </div>
            <div
              className="p-2 flex border"
              onMouseEnter={() => setVisible("뷰티")}
            >
              <a className={styles.aTag} href="#">
                <img
                  className="text-center"
                  src={require(`../../images/뷰티.png`)}
                  width="62px"
                  height="70px"
                ></img>
                <div className="text-center text-dark">뷰티</div>
              </a>
            </div>
            <div
              className="p-2 flex border"
              onMouseEnter={() => setVisible("생활")}
            >
              <a className={styles.aTag} href="#">
                <img
                  className="text-center"
                  src={require(`../../images/생활_가전.png`)}
                  width="62px"
                  height="70px"
                ></img>
                <div className="text-center text-dark">생활 가전</div>
              </a>
            </div>
            <div
              className="p-2 flex border"
              onMouseEnter={() => setVisible("공구")}
            >
              <a className={styles.aTag} href="#">
                <img
                  className="text-center"
                  src={require(`../../images/자동차_공구.png`)}
                  width="62px"
                  height="70px"
                ></img>
                <div className="text-center text-dark">공구</div>
              </a>
            </div>
            <div
              className="p-2 flex border"
              onMouseEnter={() => setVisible("도서")}
            >
              <a className={styles.aTag} href="#">
                <img
                  className="text-center "
                  src={require(`../../images/도서_기타.png`)}
                  width="62px"
                  height="70px"
                ></img>
                <div className="text-center text-dark">도서 기타</div>
              </a>
            </div>
            <div
              className="p-2 flex border"
              onMouseEnter={() => setVisible("기타")}
            >
              <a className={styles.aTag} href="#">
                <img
                  className="text-center "
                  src={require(`../../images/도서_기타.png`)}
                  width="62px"
                  height="70px"
                ></img>
                <div className="text-center text-dark">도서 기타</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>{visible === "의류" ? <SubHeader_list_wear /> : null}</div>
      <div>{visible === "잡화" ? <SubHeader_list_goods /> : null}</div>
      <div>{visible === "유아용품" ? <SubHeader_list_child /> : null}</div>
      <div>{visible === "가구" ? <SubHeader_list_furniture /> : null}</div>
      <div>{visible === "디지털" ? <SubHeader_list_digital /> : null}</div>
      <div>{visible === "컴퓨터" ? <SubHeader_list_computer /> : null}</div>
      <div>{visible === "레저" ? <SubHeader_list_leisure /> : null}</div>
      <div>{visible === "뷰티" ? <SubHeader_list_beauty /> : null}</div>
      <div>{visible === "생활" ? <SubHeader_list_life /> : null}</div>
      <div>{visible === "공구" ? <SubHeader_list_tool /> : null}</div>
      <div>{visible === "도서" ? <SubHeader_list_book /> : null}</div>
      <div>{visible === "기타" ? <SubHeader_list_etc /> : null}</div>
    </div>
  );
};
export default SubHeader;
