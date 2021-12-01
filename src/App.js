import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandPage from './pages/LandPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
