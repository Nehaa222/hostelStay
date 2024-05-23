// import React from "react";
// import Pagenotfound from "./pages/Pagenotfound";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import Loginpage from "./pages/Loginpage";
// import Signuppage from "./pages/Signuppage";
// import Hostelpage from "./pages/Hostelpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AdminDashboard from "./components/AdminDashboard";
// import Booking from "./components/Booking";
// import Booknow from "./components/Booknow";
import Profile from "./components/Profile";
// import Messagetable from "./components/Messagetable";
// import Changepassword from "./components/Changepassword";
// import Bnotify from "./components/Bnotify";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="signup" element={<Signuppage />} />
        <Route path="hostel" element={<Hostelpage />} />
        <Route path="*" element={<Pagenotfound />} /> */ }
         {/* <Route path="/" element={<AdminDashboard />} /> */}
         {/* <Route path="/booking" element={<Booking />} /> */}
        {/* <Route path="/" element={<Booknow />} /> */}
        <Route path="/" element={<Profile />} />
        {/* <Route path="/Messagetable" element={<Messagetable/>} /> */}
        {/* //  <Route path="/" element={<Changepassword />} />  */}
         {/* <Route path="/" element={< Bnotify/>} /> */}
         
      </Routes>
    </BrowserRouter>
  );
};

export default App;
