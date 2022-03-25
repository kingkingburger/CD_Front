import styles from "../css/Layout.module.css";
import Header from "./Header";
import Content from "./Content";
import SubHeader from "./SubHeader";
import SideBar from "./SideBar";
import Basket from "./Basket";

const Layout = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Content />
    </div>
  );
};

export default Layout;
