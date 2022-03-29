import Receipt from "../component/receipt/Receipt";
import Header from "../component/shared/Header";
import SideBar from "../component/shared/SideBar";

const ReceiptPage = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideBar />
        <Receipt />
      </div>
    </div>
  );
};

export default ReceiptPage;
