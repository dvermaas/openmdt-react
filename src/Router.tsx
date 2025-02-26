import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Dashboard from '@/app/dashboard/page.tsx';
import Citizens from '@/app/citizens/page.tsx';
import Reports from '@/app/reports/page.tsx';
import Legislation from '@/app/legislation/page.tsx';
import Login from '@/app/login/page.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/citizens" element={<Citizens/>}/>
                <Route path="/reports" element={<Reports/>}/>
                <Route path="/legislation" element={<Legislation/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
