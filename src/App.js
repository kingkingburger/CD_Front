import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import DetailPage from "./page/DetailPage";
import UploadPage from "./page/UploadPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<DetailPage />} />
      <Route path="/uploadPage" element={<UploadPage />} />
    </Routes>
  );
}

export default App;
