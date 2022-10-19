//styles
import "./App.css";
//dependecies
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/services" element={<></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
