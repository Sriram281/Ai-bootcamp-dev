import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import page components
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProgramsPage from './pages/Programs';
import CoursesPage from './pages/Courses';
import InstructorsPage from './pages/Instructors';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/instructors" element={<InstructorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;