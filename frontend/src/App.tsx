import { Route, Routes } from 'react-router-dom';
import LinksConstructor from './pages/LinksConstructor';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<LinksConstructor />} />
    <Route path="*" element={<LinksConstructor />} />
  </Routes>
);

export default App;
