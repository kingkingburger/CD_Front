import { Link } from "react-router-dom";
import styles from "./css/Userinfo.module.css";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
// import IsLogin from "../../util/IsLogin";
const UserInfo = () => {
  //유저 정보가 넘어온 공간
  const [isLogin, setIsLogin] = useState(false); //로그인 관리
  const [info, setInfo] = useState({});
  const cookie = new Cookies();
  useEffect(() => {
    let log = true;
    const axiosdata = async () => {
      // 로그인 상태 변경
      await axios
        .post(
          "http://localhost:8080/check",

          { withCredentials: true }
        )
        .then((res) => setInfo(res));
      if (log) {
        setIsLogin(true);
      }
    };
    axiosdata();
    return () => {
      log = false;
    };
  }, []);

  console.log(info.data);
  console.log(isLogin);

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
                      {isLogin ? <div>{info.data.memberName}</div> : "이름"}
                    </span>
                  </div>
                </li>

                <li>
                  <div className={styles.row_item_pw}>
                    <span className={styles.item_text}>
                      {isLogin ? (
                        <div>{info.data.memberPassword}</div>
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
                        <div>{info.data.memberPhone}</div>
                      ) : (
                        "전화번호"
                      )}
                    </span>
                  </div>
                </li>

                <li>
                  <div className={styles.row_item_email}>
                    <span className={styles.item_text}>
                      {isLogin ? <div>{info.data.memberRank}</div> : "email"}
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
