import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import ActividadDetalle from "./pages/ActividadDetalle";
import BlogDetail from "./pages/BlogDetail";
import EventDetail from "./pages/EventDetail";
import AboutPage from "./pages/AboutPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import EventsPage from "./pages/EventsPage";
import BlogPage from "./pages/BlogPage";

// Componente para la página principal (todas las secciones juntas)
const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Activities />
      <Events />
      <Blog />
      <Contact />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Página principal con todas las secciones */}
        <Route path="/" element={<HomePage />} />
        
        {/* Páginas individuales */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/actividades" element={<ActivitiesPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quienes-somos" element={<AboutPage />} />
        
        {/* Páginas de detalle */}
        <Route path="/actividades/:id" element={<ActividadDetalle />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/eventos/:id" element={<EventDetail />} />
        
        {/* Ruta por defecto - redirige a home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;