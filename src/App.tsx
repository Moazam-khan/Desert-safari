import { AppLayout } from '@/components';
import { Home } from '@/pages';
import '@/styles/App.css';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/components/AboutUs';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
