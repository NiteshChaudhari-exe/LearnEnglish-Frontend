import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useStore } from './store';
import './index.css';

// Pages
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import VocabularyPage from './pages/VocabularyPage';
import ProgressPage from './pages/ProgressPage';

function App() {
  const { user, loadUser, showNepali } = useStore();

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <BrowserRouter>
      <Toaster 
        position="top-center"
        theme="light"
        richColors
        closeButton
      />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={user?.id ? <HomePage /> : <LoginPage />} />
        <Route path="/lessons" element={user?.id ? <LessonsPage /> : <LoginPage />} />
        <Route path="/vocabulary" element={user?.id ? <VocabularyPage /> : <LoginPage />} />
        <Route path="/progress" element={user?.id ? <ProgressPage /> : <LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
