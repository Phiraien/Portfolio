import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { lazy, Suspense } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Threads from './components/Threads';
import Noise from './components/Noise';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const PMVikas = lazy(() => import('./pages/PMVikas'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <div className="bg-fx" aria-hidden="true">
        <Threads color={[0.42, 0.42, 0.94]} amplitude={1} distance={0} enableMouseInteraction />
        <Noise />
      </div>
      <Nav />
      <main>
        <Suspense fallback={null}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/pmvikas" element={<PMVikas />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
