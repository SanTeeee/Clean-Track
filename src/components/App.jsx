import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Authentication/Login";
import Error404 from "./Error404";
import Navbar from "./LandingPage/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
