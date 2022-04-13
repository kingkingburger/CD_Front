import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import font from "../css/Font.module.css";
import Cookies from "universal-cookie";

const SignUp = () => {
  let navigate = useNavigate();
  let cookie = new Cookies();

  const [text, setText] = useState({
    memberLoginid: "",
    memberName: "",
    memberPassword: "",
    memberPhone: "",
  });

  const onChange = (e) => {
    const { value } = e.target;
    setText({ ...text, [e.target.name]: value });
  };

  const onClickSign = () => {
    axios
      .post("http://localhost:8080/add", text, { withCredentials: true })
      .then((res) => {
        console.log(res);
        console.log(cookie.get("JSESSIONID"));
        navigate("/");
      })
      .catch((err) => alert("중복된 Id 입니다."));
  };
  console.log(text);
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="d-flex flex-column">
        <h1 className={`text-primary text-center py-4 ${font.SignLogo}`}>
          Silk Road
        </h1>
        <span className="p">회원정보를 입력해주세요.</span>

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
              type="text"
              className="form-control"
              placeholder="Enter loginID"
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

        <div className="mb-3">
          <div className="input-group input-group-lg mb-3">
            <div
              className="input-group-tex
              t p-0"
            >
              <img
                width="40px"
                height="100%"
                src="./static/img/name.png"
                alt="email"
              />
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="memberName"
              onChange={onChange}
            />
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
                  src="./static/img/handphone.png"
                  alt="email"
                />
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter mobile number"
                name="memberPhone"
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 p-3 w-100 btn btn-primary"
          onClick={onClickSign}
        >
          동의하고 가입하기
        </button>
      </div>
    </div>
  );
};
export default SignUp;
