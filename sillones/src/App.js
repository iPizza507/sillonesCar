//styles
import "./App.css";
//dependecies
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<></>}></Route>
          <Route exact path="/services" element={<></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
