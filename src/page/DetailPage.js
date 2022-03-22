import { useLocation } from "react-router-dom";
import DetailContent from "../component/shared/DetailContent";
import Header from "../component/shared/Header";

const DetailPage = () => {
  const location = useLocation();
  return (
    <div>
      <Header />

      <DetailContent key={location.id} data={location.state} />
    </div>
  );
};

export default DetailPage;
