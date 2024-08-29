import { AppLayout } from '@/components';
import { Home } from '@/pages';
import '@/styles/App.css';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import DesertSafariDubai from './pages/DesertSafari/DesertSafariDubai';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/desert-safari-dubai" element={<DesertSafariDubai />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
