import '@/app/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
