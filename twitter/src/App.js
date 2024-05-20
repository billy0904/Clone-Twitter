import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/Home/MainPage';
import DetailPage from './components/Tweet/DetailPage';
import ProfilePage from './components/Profile/ProfilePage';

function App() {
  return (
    <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
