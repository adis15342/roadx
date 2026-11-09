import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loaded page components (named exports resolution)
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Sectors = lazy(() => import('./pages/Sectors').then(module => ({ default: module.Sectors })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const Career = lazy(() => import('./pages/Career').then(module => ({ default: module.Career })));
const ContactUs = lazy(() => import('./pages/ContactUs').then(module => ({ default: module.ContactUs })));

// Loading fallback spinner using brand primary color
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] w-full">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sector" element={<Sectors />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
