import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/UserModifyinfo.module.css";

const UserModifyInfo = () => {
  const [text, setText] = useState({ name: "", pw: "", phone: "", email: "" });
  const onChange = (e) => {
    const { value } = e.target;
    setText({ ...text, [e.target.name]: value });
  };
  return (
    <div className="d-sm-table-cell col-7 m-5">
      <div className={`col-12`}>
        <div className={styles.content}>
          <div className={styles.wrap}>
            <div className={styles.account_box}>
              <div className={styles.title}>
                <h2 className={styles.title_text}>
                  내 프로필
                  <Link
                    to={`/MyPage`}
                    state={{
                      info: text,
                    }}
                    className={styles.btn_edit}
                  >
                    <span className={styles.text}>확인</span>
                  </Link>
                </h2>
              </div>
              <ul className={styles.account_row}>
                <li>
                  <div className={styles.row_item_name}>
                    <span className={styles.item_text}>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder={`이름`}
                        name="name"
                        onChange={onChange}
                      />
                    </span>
                  </div>
                </li>

                <li>
                  <div className={styles.row_item_pw}>
                    <span className={styles.item_text}>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder={`비밀번호`}
                        name="pw"
                        onChange={onChange}
                      />
                    </span>
                  </div>
                </li>

                <li>
                  <div className={styles.row_item_phone}>
                    <span className={styles.item_text}>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder={`휴대전화`}
                        name="phone"
                        onChange={onChange}
                      />
                    </span>
                  </div>
                </li>

                <li>
                  <div className={styles.row_item_email}>
                    <span className={styles.item_text}>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder={`e-mail`}
                        name="email"
                        onChange={onChange}
                      />
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

export default UserModifyInfo;
