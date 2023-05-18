import React from "react";
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import SectionDisplay from "./components/SectionDisplay"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/section" element={<Section />} />
          <Route path="/sectionId/:id" element={<SectionDisplay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;