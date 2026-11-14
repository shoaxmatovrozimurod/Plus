import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
// Diqqat: Footer importi o'chirib tashlandi

const MainLayout = () => {
    const [theme, setTheme] = useState('light');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app-container">
            <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />

            <div className="main-wrapper">
                <Header
                    theme={theme}
                    setTheme={setTheme}
                    toggleSidebar={toggleSidebar}
                />

                <main className="content-area">
                    <Outlet />
                </main>

                {/* Diqqat: <Footer /> komponenti shu yerdan o'chirib tashlandi */}
            </div>

            {isSidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default MainLayout;