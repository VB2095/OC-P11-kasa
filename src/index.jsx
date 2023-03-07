import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home/Home";
import About from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";
import Error from "./components/404";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    
    
  </React.StrictMode >,
 document.getElementById('root')
);
