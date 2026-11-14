import React from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Eye, Globe, Menu } from 'lucide-react';
import logoImg from './images/logotip.png'; // Logotip importi qaytdi

const Header = ({ theme, setTheme, toggleSidebar }) => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn mobile-only" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>

        {/* 1. LOGOTIP ASL JOYIGA QAYTDI */}
        <div className="logo">
          <a href="/">
            <img src={logoImg} alt="AstroVitals Logo" className="header-logo" />
          </a>
        </div>
      </div>

      <div className="header-controls">
        <div className="lang-select">
          <Globe size={18} color="var(--text-muted)" />
          <select onChange={changeLanguage} value={i18n.language || 'uz'}>
            <option value="uz">UZ</option>
            <option value="en">EN</option>
          </select>
        </div>

        <div className="theme-toggle">
          <button
            className={`icon-btn ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
          >
            <Sun size={18} />
          </button>
          <button
            className={`icon-btn ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
          >
            <Moon size={18} />
          </button>
          <button
            className={`icon-btn ${theme === 'eva-visor' ? 'active' : ''}`}
            onClick={() => setTheme('eva-visor')}
          >
            <Eye size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;