import {AppLayout} from '@/components';
import {Home} from '@/pages';
import '@/styles/App.css';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
