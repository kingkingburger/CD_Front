import styles from "../css/Layout.module.css";
import Header from "./Header";
import Content from "./Content";
import SubHeader from "./SubHeader";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <SideBar />
    </div>
  );
};

export default Layout;
