import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Classes from './pages/Classes';
import About from './pages/About';
import Placeholder from './pages/Placeholder';

function App() {
  const location = useLocation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (!cursorVisible) setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorVisible]);

  return (
    <>
      {cursorVisible && (
        <div 
          className="cursor-follow hidden md:block"
          style={{
            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          }}
        />
      )}
      <div className="noise"></div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="classes" element={<Classes />} />
            <Route path="performances" element={<Placeholder title="Performances" />} />
            <Route path="gallery" element={<Placeholder title="Gallery" />} />
            <Route path="contact" element={<Placeholder title="Contact" />} />
            <Route path="shop" element={<Placeholder title="Shop" />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
