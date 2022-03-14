import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DetailContent from "./page/DetailContent";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<DetailContent />} />
    </Routes>
  );
}

export default App;
