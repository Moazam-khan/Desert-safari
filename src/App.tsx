import React from 'react';
import { AppLayout } from '@/components';
import { Home} from '@/pages'; // Assuming About is correctly exported from '@/pages'
import '@/styles/App.css';
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import AboutUs from './pages/AboutUs';
import AllPackages from './pages/AllPackages';
import DesertSafariDubai from './pages/DesertSafari/DesertSafariDubai';
=======
>>>>>>> staging

const App: React.FC = () => {
  return (
    <AppLayout>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/desert-safari-dubai" element={<DesertSafariDubai />} />
        <Route path="/all-packages" element={<AllPackages />} />
        <Route path="*" element={<Home />} />
=======


        <Route path="*" element={<Home />} /> {/* Fallback route */}
>>>>>>> staging
      </Routes>
    </AppLayout>
  );
};

export default App;
