//styles
import "./App.css";
//dependecies
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<></>}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
