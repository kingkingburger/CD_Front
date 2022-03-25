import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import font from "../css/Font.module.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

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
                  <a className="nav-link text-white " href="#">
                    로그인
                  </a>
                </li>
                <li className="nav-item mx-1 d-flex align-items-center">
                  <Link to={`/SignUp`} className="nav-link text-white">
                    회원가입
                  </Link>
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
                  <a className="nav-link text-white" href="/uploadPage">
                    판매하기
                  </a>
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
