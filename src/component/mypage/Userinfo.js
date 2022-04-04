import { Link } from "react-router-dom";
import styles from "./css/Userinfo.module.css";
import { useEffect, useState } from "react";

const UserInfo = ({ userinfo }) => {
  //유저 정보가 넘어온 공간
  const [isActive, setIsActive] = useState(false);
  const [isLogin, setIsLogin] = useState(false); //로그인 관리
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    if (sessionStorage.getItem("name") === null) {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
    } else {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
    }
  });
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
    <div className="d-sm-table-cell col-7 m-5">
      <div className={`col-12`}>
        <div className={styles.content}>
          <div className={styles.wrap}>
            <div className={styles.account_box}>
              <div className={styles.title}>
                <h2 className={styles.title_text}>
                  내 프로필
                  <Link to={`/MyPageModify`} className={styles.btn_edit}>
                    <span className={styles.text}>수정</span>
                  </Link>
                </h2>
              </div>
              <ul className={styles.account_row}>
                <li>
                  <div className={styles.row_item_name}>
                    <span className={styles.item_text}>
                      {isLogin ? (
                        <div>{sessionStorage.getItem("name")}</div>
                      ) : (
                        "이름"
                      )}
                    </span>
                  </div>
                </li>

                <li>
                  <div className={styles.row_item_pw}>
                    <span className={styles.item_text}>
                      {isLogin ? (
                        <div>{sessionStorage.getItem("passwd")}</div>
                      ) : (
                        "비밀번호"
                      )}
                    </span>
                  </div>
                </li>

                <li>
                  <div className={styles.row_item_phone}>
                    <span className={styles.item_text}>
                      {isLogin ? (
                        <div>{sessionStorage.getItem("phone")}</div>
                      ) : (
                        "전화번호"
                      )}
                    </span>
                  </div>
                </li>

                <li>
                  <div className={styles.row_item_email}>
                    <span className={styles.item_text}>
                      {isLogin ? (
                        <div>{sessionStorage.getItem("user_id")}</div>
                      ) : (
                        "email"
                      )}
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

export default UserInfo;
