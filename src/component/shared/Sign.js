import { Link } from "react-router-dom";
import font from "../css/Font.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [text, setText] = useState({ email: "", passwd: "" });
  const onChange = (e) => {
    const { value } = e.target;
    setText({ ...text, [e.target.name]: value });
  };

  const url = "http://localhost:8080/api/login";
  // const throw_data = () => {
  //   axios.post(url, text).then((res) => {
  //     if(res.data)
  //   });
  // };
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
    console.log("ID : ", inputId);
    console.log("PW : ", inputPw);
    axios
      .post("http://localhost:8080/api/login", {
        email: inputId,
        passwd: inputPw,
      })
      .then((res) => {
        console.log(res);
        console.log("res.data.userId :: ", res.data.userId);
        console.log("res.data.msg :: ", res.data.msg);
        if (res.data.email === undefined) {
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
          console.log("======================", res.data.msg);
          alert("입력하신 id 가 일치하지 않습니다.");
        } else if (res.data.email === null) {
          // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
          console.log(
            "======================",
            "입력하신 비밀번호 가 일치하지 않습니다."
          );
          alert("입력하신 비밀번호 가 일치하지 않습니다.");
        } else if (res.data.email === inputId) {
          // id, pw 모두 일치 userId = userId1, msg = undefined
          console.log("======================", "로그인 성공");
          sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
          sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
          sessionStorage.setItem("passwd", res.data.passwd); // sessionStorage에 id를 user_id라는 key 값으로 저장
          sessionStorage.setItem("phone", res.data.phone); // sessionStorage에 id를 user_id라는 key 값으로 저장
        }
        // 작업 완료 되면 페이지 이동(새로고침)
        document.location.href = "/";
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
                name="input_id"
                value={inputId}
                onChange={handleInputId}
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
                name="input_pw"
                value={inputPw}
                onChange={handleInputPw}
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
