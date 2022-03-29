import { Link } from "react-router-dom";
import styles from "./css/Chating.module.css";

const Chating = ({ userinfo }) => {
  //유저 정보가 넘어온 공간
  let user;

  if (!userinfo) {
    //처음 들어갔을 때 정보가 없다면 공백으로
    userinfo = { name: "", pw: "", phone: "", email: "" };
    user = userinfo;
  } else {
    //있다면 넘어온 props로
    user = userinfo.info;
  }

  return (
    <div className="d-sm-table-cell col-7">
      <div className={`col-12`}>
        <div className={styles.content}>
          <div className={styles.wrap}>
            <div className={styles.account_box}>
              <div className={styles.title}>
                <h2 className={styles.title_text}>채팅방</h2>
              </div>
              <ul className={styles.account_row}>
                <li>
                  <div className={styles.row_item_name}>
                    <span className={styles.item_text}>
                      {`물품 명 `}
                      <span> 이용자 이름</span>
                      <Link to={`/MyPageModify`} className={styles.btn_edit}>
                        <span className={styles.text}>입장</span>
                      </Link>
                    </span>
                  </div>
                </li>

                <li>
                  <div className={styles.row_item_name}>
                    <span className={styles.item_text}>
                      {`물품 명 `}
                      <span> 이용자 이름</span>
                      <Link to={`/MyPageModify`} className={styles.btn_edit}>
                        <span className={styles.text}>입장</span>
                      </Link>
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.row_item_name}>
                    <span className={styles.item_text}>
                      {`물품 명 `}
                      <span> 이용자 이름</span>
                      <Link to={`/MyPageModify`} className={styles.btn_edit}>
                        <span className={styles.text}>입장</span>
                      </Link>
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.row_item_name}>
                    <span className={styles.item_text}>
                      {`물품 명 `}
                      <span> 이용자 이름</span>
                      <Link to={`/MyPageModify`} className={styles.btn_edit}>
                        <span className={styles.text}>입장</span>
                      </Link>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chating;
