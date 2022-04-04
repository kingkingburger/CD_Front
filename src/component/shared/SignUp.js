import axios from "axios";
import { useState } from "react";
import font from "../css/Font.module.css";
const SignUp = () => {
  const [text, setText] = useState({
    email: "",
    passwd: "",
    name: "",
    phone: "",
  });
  const onChange = (e) => {
    const { value } = e.target;
    setText({ ...text, [e.target.name]: value });
  };

  const onClickSign = () => {
    console.log("click login");
    axios
      .post("http://localhost:8080/api/save", text)
      .then((res) => {
        console.log(res);
      })
      .catch();
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
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
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
              name="passwd"
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
              name="name"
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
                name="phone"
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
