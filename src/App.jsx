import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import Experties from "./pages/Experties"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Assignments from "./pages/Assignments"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/about" exact={true} element={<About />} />
      <Route path="/experties" exact={true} element={<Experties />} />
      <Route path="/projects" exact={true} element={<Projects />} />
      <Route path="/contact" exact={true} element={<Contact />} />
      <Route path="/assignments" exact={true} element={<Assignments />} />
    </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
