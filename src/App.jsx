import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SeoManager from './components/SeoManager';
import ScrollManager from './components/ScrollManager';
import { navLinks } from './data/siteContent';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <>
      <SeoManager />
      <ScrollManager />
      <Navbar links={navLinks} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proiecte" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer links={navLinks} />
    </>
  );
}

export default App;
