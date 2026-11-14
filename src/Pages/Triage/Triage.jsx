import React from 'react';
import './Triage.css';
import { useTranslation } from 'react-i18next';
import { User, AlertTriangle, CheckCircle, ShieldAlert } from 'lucide-react';

const Triage = () => {
    const { t } = useTranslation();

    // Ekipaj a'zolarining taqlid qilingan (mock) ma'lumotlari
    const crewData = [
        {
            id: 'ASTRO-01',
            name: 'Cmdr. Alex Vance',
            role: 'Mission Commander',
            level: 'p1', // Shoshilinch
            hr: '165',
            o2: '81%',
            isDanger: true,
            action: 'action_deploy_o2',
            icon: ShieldAlert
        },
        {
            id: 'ASTRO-02',
            name: 'Dr. Sarah Chen',
            role: 'Medical Officer',
            level: 'p3', // Yashil (Yaxshi)
            hr: '72',
            o2: '98%',
            isDanger: false,
            action: 'action_nominal',
            icon: CheckCircle
        },
        {
            id: 'ASTRO-03',
            name: 'Eng. Marcus T.',
            role: 'Flight Engineer',
            level: 'p2', // Sariq (Ogohlantirish)
            hr: '115',
            o2: '92%',
            isDanger: false,
            action: 'action_monitor',
            icon: AlertTriangle
        }
    ];

    return (
        <div className="triage-page">
            <div className="triage-header">
                <h2>{t('triage_title')}</h2>
                <p>{t('triage_desc')}</p>
            </div>

            <div className="triage-grid">
                {crewData.map((crew) => {
                    const Icon = crew.icon;
                    return (
                        <div className="crew-card" key={crew.id}>
                            {/* Xavf darajasi chizig'i */}
                            <div className={`triage-indicator indicator-${crew.level}`}></div>
                            
                            <div className="crew-card-content">
                                <div className="crew-header">
                                    <div className="crew-info">
                                        <h3>{crew.name}</h3>
                                        <span className="crew-role">{crew.id} | {crew.role}</span>
                                    </div>
                                    <span className={`triage-badge badge-${crew.level}`}>
                                        {t(crew.level === 'p1' ? 'p1_red' : crew.level === 'p2' ? 'p2_yellow' : 'p3_green')}
                                    </span>
                                </div>

                                <div className="crew-vitals">
                                    <div className="vital-box">
                                        <span className="vital-label">{t('crew_hr')} (BPM)</span>
                                        <span className={`vital-value ${crew.isDanger ? 'danger' : ''}`}>{crew.hr}</span>
                                    </div>
                                    <div className="vital-box">
                                        <span className="vital-label">{t('crew_o2')} (SpO2)</span>
                                        <span className={`vital-value ${crew.isDanger ? 'danger' : ''}`}>{crew.o2}</span>
                                    </div>
                                </div>

                                <div className={`crew-action ${crew.level === 'p1' ? 'action-critical' : crew.level === 'p2' ? 'action-warning' : 'action-safe'}`}>
                                    <Icon size={18} />
                                    <span>{t(crew.action)}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Triage;