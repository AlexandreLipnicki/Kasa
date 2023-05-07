import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="logement/:id" element={<Logement />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;