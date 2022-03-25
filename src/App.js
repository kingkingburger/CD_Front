import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DetailPage from "./page/DetailPage";
import SignUpPage from "./page/SignUpPage";
import UploadPage from "./page/UploadPage";
import MyPage from "./page/MyPage";
import BasketPage from "./page/BasketPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<DetailPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/uploadPage" element={<UploadPage />} />
      <Route path="/MyPage" element={<MyPage />} />
      <Route path="/BasketPage" element={<BasketPage />} />
    </Routes>
  );
}

export default App;
