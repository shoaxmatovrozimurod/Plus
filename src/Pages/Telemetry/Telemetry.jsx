import React from 'react';
import './Telemetry.css';
import { useTranslation } from 'react-i18next';
import { Minimize2, Radio, Activity, DatabaseBackup } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Siqish algoritmi samarasini ko'rsatuvchi mock ma'lumotlar
const compressionData = [
  { time: 'T-6', raw: 1024, compressed: 180 },
  { time: 'T-5', raw: 1150, compressed: 195 },
  { time: 'T-4', raw: 2400, compressed: 420 }, // Anomaliya tufayli oqim ko'paydi
  { time: 'T-3', raw: 1300, compressed: 210 },
  { time: 'T-2', raw: 1080, compressed: 185 },
  { time: 'T-1', raw: 1120, compressed: 190 },
  { time: 'Hozir', raw: 1050, compressed: 182 },
];

const Telemetry = () => {
    const { t } = useTranslation();

    return (
        <div className="telemetry-page">
            <div className="tel-header">
                <h2>{t('telemetry_title')}</h2>
                <p>{t('telemetry_desc')}</p>
            </div>

            <div className="tel-grid">
                {/* Siqish koeffitsienti */}
                <div className="tel-card">
                    <div className="tel-card-header">
                        <div className="tel-info">
                            <h3>{t('compression_ratio')}</h3>
                        </div>
                        <div className="tel-icon icon-compress"><Minimize2 size={24} /></div>
                    </div>
                    <div className="tel-value">82.4%</div>
                    <div className="tel-desc">{t('compression_desc')}</div>
                </div>

                {/* Uzatish tezligi */}
                <div className="tel-card">
                    <div className="tel-card-header">
                        <div className="tel-info">
                            <h3>{t('tx_rate')}</h3>
                        </div>
                        <div className="tel-icon icon-signal"><Radio size={24} /></div>
                    </div>
                    <div className="tel-value">256</div>
                    <div className="tel-desc">{t('tx_rate_desc')}</div>
                </div>

                {/* Faol oqimlar */}
                <div className="tel-card">
                    <div className="tel-card-header">
                        <div className="tel-info">
                            <h3>{t('active_streams')}</h3>
                        </div>
                        <div className="tel-icon icon-stream"><Activity size={24} /></div>
                    </div>
                    <div className="tel-value">04</div>
                    <div className="tel-desc">{t('active_streams_desc')}</div>
                </div>

                {/* Bufer bandligi */}
                <div className="tel-card">
                    <div className="tel-card-header">
                        <div className="tel-info">
                            <h3>{t('buffer_usage')}</h3>
                        </div>
                        <div className="tel-icon icon-buffer"><DatabaseBackup size={24} /></div>
                    </div>
                    <div className="tel-value">64%</div>
                    <div className="tel-desc">{t('buffer_usage_desc')}</div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: '64%' }}></div>
                    </div>
                </div>
            </div>

            {/* Grafika */}
            <div className="tel-chart-box">
                <div className="tel-chart-title">{t('chart_compression')}</div>
                <div style={{ width: '100%', height: 350 }}>
                    <ResponsiveContainer>
                        <AreaChart data={compressionData} margin={{ top: 10, right: 20, left: -20, bottom: 5 }}>
                            <defs>
                                <linearGradient id="colorRaw" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4b5563" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#4b5563" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorCompressed" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.5}/>
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                            <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={14} tickMargin={10} />
                            <YAxis stroke="var(--text-muted)" fontSize={14} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border-color)', borderRadius: '8px', fontSize: '1.1rem' }}
                                itemStyle={{ fontWeight: 600 }}
                            />
                            <Legend wrapperStyle={{ fontSize: '1.1rem', paddingTop: '10px' }} />
                            
                            {/* Xom ma'lumotlar (Katta kulrang hudud) */}
                            <Area type="monotone" name={t('raw_data')} dataKey="raw" stroke="#4b5563" fillOpacity={1} fill="url(#colorRaw)" strokeWidth={2} />
                            
                            {/* Siqilgan ma'lumotlar (Kichik yashil hudud) */}
                            <Area type="monotone" name={t('compressed_data')} dataKey="compressed" stroke="#10b981" fillOpacity={1} fill="url(#colorCompressed)" strokeWidth={3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Telemetry;