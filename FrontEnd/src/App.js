import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Ruby from "./Pages/Ruby/Ruby.js";
import Image from "./Pages/Image/image.js";
import Show from "./Pages/Image/Show.js"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/img" element={<Image />} />
        <Route path="/simg" element={<Show />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thanhtoan" element={<Ruby />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
