//import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/Home/MainPage';
import DetailPage from './components/Tweet/DetailPage';
import ProfilePage from './components/Profile/ProfilePage';
import SignupPage from './components/Profile/SignupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/post/:id" element={<DetailPage />} />
      <Route path="/account/:id" element={<ProfilePage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;

