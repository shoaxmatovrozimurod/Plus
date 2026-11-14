import React from 'react';
import './Settings.css';
import { useTranslation } from 'react-i18next';
import { Monitor, Volume2, Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
    const { t } = useTranslation();

    return (
        <div className="settings-page">
            <div className="set-header">
                <h2>{t('settings_title')}</h2>
                <p>{t('settings_desc')}</p>
            </div>

            <div className="set-grid">
                
                {/* HUD Displey Sozlamalari */}
                <div className="set-card">
                    <div className="set-card-title">
                        <Monitor size={24} color="var(--accent-color)" />
                        {t('hud_display')}
                    </div>
                    
                    <div className="set-row">
                        <div className="set-label">
                            <h4>{t('hud_brightness')}</h4>
                            <p>Avtomatik moslashuvchi yorqinlik</p>
                        </div>
                        <label className="toggle-switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider"></span>
                        </label>
                    </div>

                    <div className="set-row">
                        <div className="set-label">
                            <h4>{t('hud_contrast')}</h4>
                            <p>Qorong'u hududlar uchun</p>
                        </div>
                        <label className="toggle-switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>

                {/* Audio va Haptik */}
                <div className="set-card">
                    <div className="set-card-title">
                        <Volume2 size={24} color="#eab308" />
                        {t('audio_haptic')}
                    </div>
                    
                    <div className="set-row">
                        <div className="set-label">
                            <h4>{t('audio_alarms')}</h4>
                            <p>3D fazoviy tovush</p>
                        </div>
                        <label className="toggle-switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider"></span>
                        </label>
                    </div>

                    <div className="set-row">
                        <div className="set-label">
                            <h4>{t('haptic_feedback')}</h4>
                            <p>Xavf paytida tebranish</p>
                        </div>
                        <label className="toggle-switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>

                {/* Tizim */}
                <div className="set-card">
                    <div className="set-card-title">
                        <SettingsIcon size={24} color="#16a34a" />
                        {t('sys_pref')}
                    </div>
                    
                    <div className="set-row">
                        <div className="set-label">
                            <h4>{t('auto_sync')}</h4>
                            <p>Aloqa tiklanganda fon sinxronizatsiyasi</p>
                        </div>
                        <label className="toggle-switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>

            </div>

            <button className="btn-save-settings">
                {t('save_btn')}
            </button>
        </div>
    );
};

export default Settings;