import { Link, useNavigate } from "react-router-dom";
import font from "../css/Font.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { setCookie } from "../../util/Cookie";
import Cookies from "universal-cookie";

const SignUp = () => {
  axios.defaults.withCredentials = true; // withCredentials 전역 설정

  const [text, setText] = useState({ memberLoginid: "", memberPassword: "" });
  let navigate = useNavigate();
  let cookie = new Cookies();

  //화면에 글자 입력을 받는 함수
  const onChange = (e) => {
    const { value } = e.target;
    setText({ ...text, [e.target.name]: value });
  };

  //확인 버튼 클릭시
  const onClickLogin = () => {
    axios
      .post("http://localhost:8080/login", text, { withCredentials: true })
      .then((res) => {
        console.log(res);

        if (res.data[0] != null) {
          // 들어온 값이 모두 다르다면 서버에서 data[0]값을 보내준다.
          alert(res.data[0].defaultMessage);
        } else {
          // 로그인 정보가 정확하다면
          navigate("/");
        }
      })
      .catch();
  };

  // useEffect(() => {
  //   axios
  //     .get("/user_inform/login")
  //     .then((res) => console.log(res))
  //     .catch();
  // }, []);

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="d-flex flex-column">
        <h1 className={`text-primary text-center py-4 ${font.SignLogo}`}>
          Silk Road
        </h1>
        <span className="p">회원정보를 입력해주세요.</span>

        <div style={{ width: "400px" }}>
          <div className="mb-3 mt-3">
            <div className="input-group input-group-lg">
              <div
                className="input-group-tex
              t p-0"
              >
                <img
                  width="40px"
                  height="100%"
                  src="./static/img/email.png"
                  alt="email"
                />
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="memberLoginid"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-group input-group-lg mb-3">
              <div
                className="input-group-tex
              t p-0"
              >
                <img
                  width="40px"
                  height="100%"
                  src="./static/img/password.png"
                  alt="email"
                />
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="memberPassword"
                onChange={onChange}
              />
            </div>
          </div>

          <Link to={`/SignUP`} className="nav-link ">
            회원이 아니신가요?
          </Link>

          <button
            type="button"
            className="mt-5 p-3 w-100 btn btn-primary"
            onClick={onClickLogin}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
