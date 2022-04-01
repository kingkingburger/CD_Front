import { Link } from "react-router-dom";
import font from "../css/Font.module.css";
const SignUp = () => {
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="d-flex flex-column">
        <h1 className={`text-primary text-center py-4 ${font.SignLogo}`}>
          Silk Road
        </h1>
        <span className="p">회원정보를 입력해주세요.</span>

        <form action="/action_page.php" style={{ width: "400px" }}>
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
              />
            </div>
          </div>

          <Link to={`/SignUP`} className="nav-link ">
            회원이 아니신가요?
          </Link>

          <button type="submit" className="mt-5 p-3 w-100 btn btn-primary">
            확인
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
