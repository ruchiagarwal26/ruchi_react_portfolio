import React from "react";
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Section from "./components/Section";
import Contact from "./components/Contact";
//About Me, Portfolio, Contact, and Resume

// function App() {
//   return (
//     <div className="App">
//        <Header/>
//        <Main/>
//        <Section/>
//        <Contact/>
       
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/section" element={<Section />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;