import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DetailPage from "./page/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
