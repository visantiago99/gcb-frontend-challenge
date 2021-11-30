import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandPage from './pages/LandPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandPage />} />
      </Routes>
    </div>
  );
}

export default App;
