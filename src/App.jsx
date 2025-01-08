import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import MyAppointments from "./pages/MyAppointments";
import MyProfil from "./pages/MyProfil";
import About from "./pages/About";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myappointments" element={<MyAppointments />} />
        <Route path="/myprofil" element={<MyProfil />} />
      </Routes>
    </div>
  );
};

export default App;
