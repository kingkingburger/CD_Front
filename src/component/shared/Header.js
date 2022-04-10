import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/Header.module.css";
import font from "../css/Font.module.css";
import Cookies from "universal-cookie";
import axios from "axios";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLogin, setIsLogin] = useState(false); //로그인 관리
  const [name, setName] = useState("");
  const onClick = () => setIsActive(!isActive);
  const img_click = () => {};
  const cookie = new Cookies();

  //로그아웃 기능
  const onLogout = () => {
    axios
      .post("http://localhost:8080/logout", {}, { withCredentials: true })
      .then((res) => console.log(res), cookie.remove("JSESSIONID"));

    document.location.href = "/";
  };

  useEffect(() => {
    let log = true;
    const axiosdata = async () => {
      // 로그인 상태 변경
      await axios
        .post(
          "http://localhost:8080/check",
          // { session: cookie.get("mySessionId") },
          { withCredentials: true }
        )
        .then((res) => setName(res.data.memberLoginid));
      if (log) {
        setIsLogin(true);
      }
    };
    axiosdata();
    return () => {
      log = false;
    };
  }, []);
  console.log(name);
  return (
    <nav className="navbar-expand-xxl navbar-dark bg-danger float-left">
      <div className="container px-5 ">
        <div className="row justify-content-center">
          <Link to={`/`} className={`${font.logo} text-white col-2`}>
            Silk Road
          </Link>
          <form className="col-5">
            <div className="row">
              <select className=" border border-4 border-primary col-3">
                <option>전체</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>

              <input
                type="text"
                size="50"
                className=" border-start-0 border-end-0  border-primary border-4 col-6"
                placeholder="검색"
              />
              <button
                className="btn rounded-0 bg-white border-start-0 border-primary border-4 col-3"
                type="button "
              >
                <img
                  className={`${styles.fill}`}
                  src={require(`../../images/돋보기.png`)}
                />
              </button>
            </div>
          </form>
          <button
            className="navbar-toggler my-1 "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
            onClick={onClick}
          >
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>

          <div className="col" id="mynavbar">
            <ul className="navbar-nav align-items-center">
              <li></li>
              <div className="d-flex">
                <li className="nav-item mx-1 d-flex align-items-center">
                  {/* 로그인이 되어있다면 */}
                  {isLogin ? (
                    <Link to={`/MyPage`} className="nav-link text-white">
                      {name}
                    </Link>
                  ) : (
                    <Link to={`/Sign`} className="nav-link text-white">
                      로그인
                    </Link>
                  )}
                </li>
                <li className="nav-item mx-1 d-flex align-items-center">
                  <Link to={`/BasketPage`} className="nav-link text-white">
                    장바구니
                  </Link>
                </li>
                <li className="nav-item mx-1 d-flex align-items-center">
                  <Link to={`/MyPage`} className="nav-link text-white">
                    마이페이지
                  </Link>
                </li>
                <li className="nav-item mx-1 d-flex align-items-center">
                  <Link to={`/uploadPage`} className="nav-link text-white">
                    판매하기
                  </Link>
                </li>
                <li className="nav-item mx-1 d-flex align-items-center">
                  <button
                    className="nav-link text-white"
                    type="button"
                    onClick={onLogout}
                  >
                    로그아웃
                  </button>
                </li>
                <li>
                  <img
                    src={require("../../images/bell.png")}
                    className="nav-link"
                    onMouseEnter={img_click}
                  />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
