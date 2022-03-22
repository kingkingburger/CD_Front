import styles from "./Layout.module.css";
import Header from "./Header";
import Content from "./Content";
import SubHeader from "./SubHeader";
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
