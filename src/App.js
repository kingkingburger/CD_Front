import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DetailPage from "./page/DetailPage";
import SignUpPage from "./page/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<DetailPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
