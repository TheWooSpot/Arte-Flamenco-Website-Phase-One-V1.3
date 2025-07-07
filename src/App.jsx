import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Performances from './pages/Performances';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Shop from './pages/Shop';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="classes" element={<Classes />} />
        <Route path="programs" element={<Classes />} />
        <Route path="performances" element={<Performances />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
