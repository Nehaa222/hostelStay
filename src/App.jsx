import React from "react";
import Pagenotfound from "./pages/Pagenotfound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Hostelpage from "./pages/Hostelpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="signup" element={<Signuppage />} />
          <Route path="hostel" element={<Hostelpage />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
