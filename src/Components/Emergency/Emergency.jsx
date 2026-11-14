import React from 'react';
import './Emergency.css';
import { useTranslation } from 'react-i18next';
import { AlertOctagon, Wind, Volume2, XCircle } from 'lucide-react';

const Emergency = () => {
    const { t } = useTranslation();

    return (
        <div className="emergency-page">
            <div className="em-icon-wrapper">
                <AlertOctagon size={100} strokeWidth={1.5} />
            </div>

            <div className="em-header">
                <h2>{t('em_title')}</h2>
                <p>{t('em_desc')}</p>
            </div>

            <div className="em-actions">
                <button className="em-btn">
                    <Wind size={24} />
                    {t('btn_o2')}
                </button>

                <button className="em-btn">
                    <Volume2 size={24} />
                    {t('btn_alarm')}
                </button>

                <button className="em-btn abort">
                    <XCircle size={24} />
                    {t('btn_abort')}
                </button>
            </div>
        </div>
    );
};

export default Emergency;