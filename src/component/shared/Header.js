import styles from "./Header.module.css";

const Header = () => {
  return (
    <div class="container-fluid navbar navbar-expand-sm navbar-light bg-light justify-content-sm-center">
      <div class="col-md-8">
        <div
          class="collapse navbar-collapse justify-content-between"
          id="mynavbar"
        >
          <a class="navbar-brand" href="javascript:void(0)">
            Logo
          </a>

          <form class="d-flex col-md-7 me-4">
            <input class="form-control" type="text" placeholder="Search" />
            <button class="btn btn-primary" type="button">
              Search
            </button>
          </form>

          <div class="navbar-nav ">
            <button class="btn btn-primary " type="button">
              로그인
            </button>
          </div>
        </div>

        <div class="collapse navbar-collapse text-primary justify-content-sm-center">
          경기도 의왕시 근처를 검색하고 있어요.
        </div>
      </div>
    </div>
  );
};

export default Header;
