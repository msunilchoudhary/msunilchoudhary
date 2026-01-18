import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Header = lazy(()=> import('./components/Header'))
const Footer = lazy(()=> import('./components/Footer'))
const Home = lazy(() => import('./pages/Home'));
const About = lazy(()=> import('./pages/About'))
const Projects = lazy(()=> import('./pages/Projects'))
const Experties = lazy(()=> import('./pages/Experties'))
const Assignments = lazy(()=> import('./pages/Assignments'))
const Contact = lazy(()=> import('./pages/Contact'))

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
