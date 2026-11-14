import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './Components/MainLayout/MainLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Triage from './Pages/Triage/Triage';
import Biomarkers from './Pages/Biomarkers/Biomarkers';
import System from './Pages/System/System';
import Telemetry from './Pages/Telemetry/Telemetry';
import Security from './Pages/Security/Security';
import Settings from './Pages/Settings/Settings';
import Emergency from './Components/Emergency/Emergency';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {/* Asosiy sahifa (faqat bitta index bo'lishi kerak) */}
                    <Route index element={<Dashboard />} />

                    {/* Triage sahifasi alohida path ga ega bo'lishi shart */}
                    <Route path="triage" element={<Triage />} />
                    <Route path="biomarkers" element={<Biomarkers />} />
                    <Route path="system" element={<System />} />
                    <Route path="telemetry" element={<Telemetry />} />
                    <Route path="security" element={<Security />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="emergency" element={<Emergency />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;