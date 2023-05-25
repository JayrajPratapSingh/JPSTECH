
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header';

import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";

import "./Styles/App.scss"
import "./Styles/Header.scss"
import "./Styles/Home.scss"
import "./Styles/Footer.scss"
import "./Styles/Contact.scss"
import "./Styles/mediaquery.scss"


const App =() =>{
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
