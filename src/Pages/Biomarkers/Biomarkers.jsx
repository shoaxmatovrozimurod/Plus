import React from 'react';
import './Biomarkers.css';
import { useTranslation } from 'react-i18next';
import { HeartPulse, Flame, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// HRV (RMSSD) va Stress (Baevsky SI) ning vaqt bo'yicha o'zgarish tarixi
const bioData = [
  { time: '08:00', rmssd: 45, stress: 120 },
  { time: '09:00', rmssd: 42, stress: 135 },
  { time: '10:00', rmssd: 38, stress: 160 }, // Stress oshdi (Kosmik missiya boshlandi)
  { time: '11:00', rmssd: 25, stress: 210 }, // RMSSD tushdi, Stress juda yuqori
  { time: '12:00', rmssd: 30, stress: 180 },
  { time: '13:00', rmssd: 40, stress: 140 },
  { time: '14:00', rmssd: 48, stress: 110 }, // Normallashdi
];

const Biomarkers = () => {
    const { t } = useTranslation();

    return (
        <div className="biomarkers-page">
            <div className="bio-header">
                <h2>{t('bio_title')}</h2>
                <p>{t('bio_desc')}</p>
            </div>

            <div className="bio-grid">
                {/* HRV RMSSD Kartochkasi */}
                <div className="bio-card">
                    <div className="bio-icon icon-hrv"><HeartPulse size={24} /></div>
                    <div className="bio-info">
                        <h3>{t('hrv_rmssd')}</h3>
                        <div className="bio-value">48 ms</div>
                        <div className="bio-desc">{t('vagal_tone')}</div>
                    </div>
                </div>

                {/* Baevsky Stress Indeksi */}
                <div className="bio-card">
                    <div className="bio-icon icon-stress"><Flame size={24} /></div>
                    <div className="bio-info">
                        <h3>{t('baevsky_si')}</h3>
                        <div className="bio-value">110</div>
                        <div className="bio-desc">{t('stress_level')}</div>
                    </div>
                </div>

                {/* EDA Kartochkasi */}
                <div className="bio-card">
                    <div className="bio-icon icon-eda"><Zap size={24} /></div>
                    <div className="bio-info">
                        <h3>{t('eda_activity')}</h3>
                        <div className="bio-value">4.2 µS</div>
                        <div className="bio-desc">{t('eda_desc')}</div>
                    </div>
                </div>
            </div>

            {/* Recharts: HRV va Stress dinamikasi grafiki */}
            <div className="bio-chart-box">
                <div className="bio-chart-title">{t('chart_hrv_stress')}</div>
                <div style={{ width: '100%', height: 350 }}>
                    <ResponsiveContainer>
                        <LineChart data={bioData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                            <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={14} tickMargin={10} />
                            <YAxis stroke="var(--text-muted)" fontSize={14} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border-color)', borderRadius: '8px', fontSize: '1.1rem' }}
                                itemStyle={{ fontWeight: 600 }}
                            />
                            <Legend wrapperStyle={{ fontSize: '1.1rem', paddingTop: '10px' }} />
                            
                            {/* RMSSD Chizig'i (Ko'k) */}
                            <Line type="monotone" name="HRV (RMSSD)" dataKey="rmssd" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                            
                            {/* Stress Chizig'i (Qizil) */}
                            <Line type="monotone" name="Baevsky Stress (SI)" dataKey="stress" stroke="#dc2626" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Biomarkers;