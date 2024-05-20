import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/Home/MainPage';
import DetailPage from './components/Tweet/DetailPage';

function App() {
  return (
    <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
