import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loaded page components (named exports resolution)
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Sectors = lazy(() => import('./pages/Sectors').then(module => ({ default: module.Sectors })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const Career = lazy(() => import('./pages/Career').then(module => ({ default: module.Career })));
const ContactUs = lazy(() => import('./pages/ContactUs').then(module => ({ default: module.ContactUs })));

const pageMetadata = {
  '/': {
    title: 'RoadX Infrastructure Solutions | Infrastructure Engineering',
    description:
      'RoadX Infrastructure Solutions delivers innovative infrastructure engineering and project solutions that support communities and economic growth.',
  },
  '/about': {
    title: 'About RoadX | Infrastructure Engineering',
    description:
      'Learn about RoadX Infrastructure Solutions, our experience, capabilities, and commitment to delivering quality infrastructure projects.',
  },
  '/sector': {
    title: 'Infrastructure Sectors | RoadX',
    description:
      'Explore the infrastructure sectors served by RoadX, including roads, bridges, urban infrastructure, and related engineering services.',
  },
  '/project': {
    title: 'Infrastructure Projects | RoadX',
    description:
      'Explore infrastructure engineering projects and delivery experience from RoadX Infrastructure Solutions.',
  },
  '/career': {
    title: 'Careers at RoadX | Infrastructure Solutions',
    description:
      'Discover career opportunities and join the RoadX team working on infrastructure engineering and development.',
  },
  '/contactus': {
    title: 'Contact RoadX | Infrastructure Solutions',
    description:
      'Contact RoadX Infrastructure Solutions to discuss infrastructure engineering, project services, and business enquiries.',
  },
};

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata['/'];
    const canonicalUrl = `https://roadxinfra.co.in${pathname}`;

    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
  }, [pathname]);

  return null;
}

// Loading fallback spinner using brand primary color
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] w-full">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary"></div>
  </div>
);

function App() {
  return (
    <Router>
      <PageMetadata />
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
