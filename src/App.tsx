import React from 'react';
import { AppLayout } from '@/components';
import { Home} from '@/pages'; // Assuming About is correctly exported from '@/pages'
import '@/styles/App.css';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <AppLayout>
      <Routes>


        <Route path="*" element={<Home />} /> {/* Fallback route */}
      </Routes>
    </AppLayout>
  );
};

export default App;
