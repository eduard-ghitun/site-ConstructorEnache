import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SeoManager from './components/SeoManager';
import ScrollManager from './components/ScrollManager';
import { navLinks } from './data/siteContent';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LocalLandingPage from './pages/LocalLandingPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <>
      <SeoManager />
      <ScrollManager />
      <Navbar links={navLinks} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/despre" element={<AboutPage />} />
          <Route path="/servicii" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/proiecte" element={<ProjectsPage />} />
          <Route path="/suceava" element={<LocalLandingPage cityKey="suceava" />} />
          <Route path="/botosani" element={<LocalLandingPage cityKey="botosani" />} />
        </Routes>
      </main>
      <Footer links={navLinks} />
    </>
  );
}

export default App;
