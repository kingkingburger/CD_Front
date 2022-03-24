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
          <div className="mb-3">
            <div className="input-group input-group-lg mb-3">
              <div
                className="input-group-tex
              t p-0"
              >
                <img
                  width="40px"
                  height="100%"
                  src="./static/img/passwordCheck.png"
                  alt="email"
                />
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter password"
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
                />
              </div>
            </div>
          </div>
          <div className="form-check mb-3">
            <label
              className="form-check-la
            bel"
            >
              <input
                className="form-check-inpu
              t"
                type="checkbox"
                name="remember"
              />
              Remember me
            </label>
          </div>
          <button type="submit" className="mt-5 p-3 w-100 btn btn-primary">
            동의하고 가입하기
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
