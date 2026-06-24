import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Sectors } from './pages/Sectors';
import { Projects } from './pages/Projects';
import { Career } from './pages/Career';
import { ContactUs } from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sector" element={<Sectors />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
