import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<h1>/</h1>} />
    <Route path="*" element={<h1>*</h1>} />
  </Routes>
);

export default App;
