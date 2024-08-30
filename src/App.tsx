import React from 'react';
import { AppLayout } from '@/components';
import { Home } from '@/pages';
import AboutUs from '@/pages/AboutUs';
import DesertSafariDubai from '@/pages/DesertSafari/DesertSafariDubai';
import EveningDesertSafari from '@/pages/DesertSafari/EveningDesertSafari';

import Blog from '@/pages/Blog';
import ContactUs from '@/pages/ContactUs'; // Ensure Contact Us page is correctly exported*/}
import '@/styles/App.css';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import AllPackages from './pages/AllPackages';
import DesertSafariDubai from './pages/DesertSafari/DesertSafariDubai';

const App: React.FC = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/about-us" element={<AboutUs />} /> {/* About Us page */}
        <Route path="/DubaiDesertSafari" element={<DesertSafariDubai />} /> {/* Desert Safari Dubai page */}

        {/* Sub-routes for Desert Safari */}
       <Route path="/DubaiDesertSafari/evening-desert-safari" element={<EveningDesertSafari />} />
       {/*   <Route path="/DubaiDesertSafari/morning-desert-safari" element={<MorningDesertSafari />} />
        <Route path="/DubaiDesertSafari/overnight-desert-safari" element={<OvernightDesertSafari />} />
        <Route path="/DubaiDesertSafari/private-desert-safari" element={<PrivateDesertSafari />} />
        <Route path="/DubaiDesertSafari/vip-desert-safari" element={<VipDesertSafari />} />
        <Route path="/DubaiDesertSafari/luxury-desert-safari" element={<LuxuryDesertSafari />} />
        <Route path="/DubaiDesertSafari/desert-safari-quad-bike" element={<DesertSafariQuadBike />} />

        {/* Sub-routes for All Packages */}
       {/*  <Route path="/all-packages/dubai-sightseeing-tours" element={<DubaiSightseeingTours />} />
        <Route path="/all-packages/abu-dhabi-tour-packages" element={<AbuDhabiTourPackages />} />
        <Route path="/all-packages/combo-tours" element={<ComboTours />} />
        <Route path="/all-packages/dubai-city-tour-packages" element={<DubaiCityTourPackages />} />
        <Route path="/all-packages/cruise-dinner" element={<CruiseDinner />} />
        <Route path="/all-packages/quad-biking-dubai" element={<QuadBikingDubai />} />

        {/* Blog and Contact Us pages */}
         <Route path="/ContactUs" element={<ContactUs />} />
         <Route path="/blog" element={<Blog />} />




        <Route path="*" element={<Home />} /> {/* Fallback route */}
      </Routes>
    </AppLayout>
  );
};

export default App;
