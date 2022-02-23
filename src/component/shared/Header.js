import styles from "./Header.module.css";
import img from "../../images/logo.png";
const Header = () => {
  return (
    <div className="container navbar navbar-expand-sm navbar-light bg-light justify-content-sm-center bg-white border-bottom">
      <div className="col-md-8">
        <div
          className="collapse navbar-collapse justify-content-between"
          id="mynavbar"
        >
          <a className="navbar-brand">
            <img alt="logo" src={img} />
          </a>

          <form className="d-flex col-md-7 me-4">
            <input className="form-control" type="text" placeholder="Search" />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form>

          <div className="navbar-nav ">
            <button className="btn btn-primary " type="button">
              로그인
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse text-primary justify-content-sm-center">
          경기도 의왕시 근처를 검색하고 있어요.
        </div>
      </div>
    </div>
  );
};

export default Header;
