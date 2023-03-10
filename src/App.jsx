import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home/Home";
import About from "./pages/about";
import Error from "./components/404";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/location/:id" element={<Location />} /> */}
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
