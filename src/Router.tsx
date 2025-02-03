import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Dashboard from './app/dashboard/page.tsx';
import Login from './app/login/page.tsx';
import FallbackToDjango from "@/components/fallback.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<FallbackToDjango />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
