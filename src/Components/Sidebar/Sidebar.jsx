import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    Activity,
    Users,
    HeartPulse,
    Cpu,
    Radio,
    ShieldCheck,
    Settings as SettingsIcon,
    AlertTriangle
} from 'lucide-react';

const Sidebar = ({ isOpen, closeSidebar }) => {
    const { t } = useTranslation();

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>

            {/* MENYULAR (Logotip Header'ga o'tgani uchun, to'g'ridan-to'g'ri menyu boshlanadi) */}
            <nav className="nav-menu">
                <div className="nav-group">
                    <span className="nav-title">EKIPAJ HOLATI</span>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <Activity size={20} />
                        <span>{t('dashboard', 'Asosiy Panel')}</span>
                    </NavLink>
                    <NavLink to="/triage" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <Users size={20} />
                        <span>{t('triage', 'Tibbiy Saralash')}</span>
                    </NavLink>
                    <NavLink to="/biomarkers" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <HeartPulse size={20} />
                        <span>Biometrika (HRV)</span>
                    </NavLink>
                </div>

                <div className="nav-group mt-4">
                    <span className="nav-title">TIZIM VA ALOQA</span>
                    <NavLink to="/system" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <Cpu size={20} />
                        <span>Tizim Yadrosi (DSP)</span>
                    </NavLink>
                    <NavLink to="/telemetry" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <Radio size={20} />
                        <span>Telemetriya</span>
                    </NavLink>
                    <NavLink to="/security" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <ShieldCheck size={20} />
                        <span>Xavfsizlik (Crypto)</span>
                    </NavLink>
                </div>
            </nav>

            {/* PASTKI QISM */}
            <div className="sidebar-bottom">
                <NavLink to="/settings" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <SettingsIcon size={20} />
                    <span>{t('settings', 'Sozlamalar')}</span>
                </NavLink>

                <div className="emergency-box">
                    <NavLink to="/emergency" className="btn-emergency" style={{ textDecoration: 'none' }}>
                        <AlertTriangle size={24} />
                        {t('emergency', 'FAVQULODDA HOLAT')}
                    </NavLink>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;