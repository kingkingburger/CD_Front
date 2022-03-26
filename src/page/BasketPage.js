import Basket from "../component/mypage/Basket";
import Header from "../component/shared/Header";
import SideBar from "../component/shared/SideBar";

const BasketPage = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideBar />
        <Basket />
      </div>
    </div>
  );
};

export default BasketPage;
