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

            {/* MENYULAR */}
            <nav className="nav-menu">
                <div className="nav-group">
                    <span className="nav-title">{t('nav_crew_status')}</span>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <Activity size={20} />
                        <span>{t('dashboard')}</span>
                    </NavLink>
                    <NavLink to="/triage" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <Users size={20} />
                        <span>{t('triage')}</span>
                    </NavLink>
                    <NavLink to="/biomarkers" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <HeartPulse size={20} />
                        <span>{t('nav_biometrics')}</span>
                    </NavLink>
                </div>

                <div className="nav-group mt-4">
                    <span className="nav-title">{t('nav_system_comm')}</span>
                    <NavLink to="/system" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <Cpu size={20} />
                        <span>{t('nav_core_dsp')}</span>
                    </NavLink>
                    <NavLink to="/telemetry" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <Radio size={20} />
                        <span>{t('nav_telemetry')}</span>
                    </NavLink>
                    <NavLink to="/security" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <ShieldCheck size={20} />
                        <span>{t('nav_security')}</span>
                    </NavLink>
                </div>
            </nav>

            {/* PASTKI QISM */}
            <div className="sidebar-bottom">
                <NavLink to="/settings" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <SettingsIcon size={20} />
                    <span>{t('settings')}</span>
                </NavLink>

                <div className="emergency-box">
                    <NavLink to="/emergency" className="btn-emergency" style={{ textDecoration: 'none' }}>
                        <AlertTriangle size={24} />
                        {t('emergency')}
                    </NavLink>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;