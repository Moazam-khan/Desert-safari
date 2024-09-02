import React from 'react';
import { AppLayout } from '@/components';
import { Home } from '@/pages';
import AboutUs from '@/pages/AboutUs';
import DesertSafariDubai from '@/pages/DesertSafari/DesertSafariDubai';


import Blog from '@/pages/Blog';
import ContactUs from '@/pages/ContactUs'; // Ensure Contact Us page is correctly exported*/}
import '@/styles/App.css';
import { Route, Routes } from 'react-router-dom';
import AllPackages from './pages/AllPackages';


const App: React.FC = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/about-us" element={<AboutUs />} /> {/* About Us page */}
        <Route path="/DubaiDesertSafari" element={<DesertSafariDubai />} /> {/* Desert Safari Dubai page */}

     

          <Route path="/pages/AllPackages" element={<AllPackages />} />

        {/* Blog and Contact Us pages */}
         <Route path="/ContactUs" element={<ContactUs />} />
         <Route path="/blog" element={<Blog />} />




        <Route path="*" element={<Home />} /> {/* Fallback route */}
      </Routes>
    </AppLayout>
  );
};

export default App;
