import React from 'react';
import './Dashboard.css';
import { Cpu, ShieldAlert, Database, Wifi } from 'lucide-react';
import { useTranslation } from 'react-i18next';
// Recharts kutubxonasidan kerakli qismlarni chaqiramiz
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Kosmik telemetriya va Delta oqimlarini taqlid qiluvchi ma'lumotlar
const telemetryData = [
    { time: 'T-06', coreAlpha: 4000, coreBeta: 2400 },
    { time: 'T-05', coreAlpha: 3000, coreBeta: 1398 },
    { time: 'T-04', coreAlpha: 2000, coreBeta: 9800 },
    { time: 'T-03', coreAlpha: 2780, coreBeta: 3908 },
    { time: 'T-02', coreAlpha: 1890, coreBeta: 4800 },
    { time: 'T-01', coreAlpha: 2390, coreBeta: 3800 },
    { time: 'Hozir', coreAlpha: 3490, coreBeta: 4300 },
];

const Dashboard = () => {
    const { t } = useTranslation();

    return (
        <div className="dashboard-page">

            {/* YUQORI QISM: SARLAVHA VA EDGE DAEMON STATUSI */}
            <div className="dashboard-header">
                <div className="header-title">
                    <h2>{t('welcome_commander')}</h2>
                    <p>{t('system_stable_daemon')}</p>
                </div>
                <div className="system-status">
                    <div className="status-dot"></div>
                    <span>{t('autonomous_core_online')}</span>
                </div>
            </div>

            {/* TEXNIK METRIKALAR */}
            <div className="metrics-grid">
                <div className="metric-card">
                    <div className="metric-header">
                        <div className="metric-icon active"><Cpu size={20} /></div>
                        <span className="metric-title">{t('dsp_filter_engine')}</span>
                    </div>
                    <div className="metric-body">
                        <span className="metric-value">34.2M</span>
                        <span className="metric-sub">{t('dsp_samples')}</span>
                    </div>
                </div>

                <div className="metric-card">
                    <div className="metric-header">
                        <div className="metric-icon warning"><ShieldAlert size={20} /></div>
                        <span className="metric-title">{t('seu_radiation')}</span>
                    </div>
                    <div className="metric-body">
                        <span className="metric-value">02</span>
                        <span className="metric-sub">{t('seu_healed')}</span>
                    </div>
                </div>

                <div className="metric-card">
                    <div className="metric-header">
                        <div className="metric-icon active"><Database size={20} /></div>
                        <span className="metric-title">{t('sqlite_wal')}</span>
                    </div>
                    <div className="metric-body">
                        <span className="metric-value">82%</span>
                        <span className="metric-sub">{t('sqlite_savings')}</span>
                    </div>
                </div>

                <div className="metric-card">
                    <div className="metric-header">
                        <div className="metric-icon active"><Wifi size={20} /></div>
                        <span className="metric-title">{t('local_latency')}</span>
                    </div>
                    <div className="metric-body">
                        <span className="metric-value">0.67</span>
                        <span className="metric-sub">{t('latency_ms')}</span>
                    </div>
                </div>
            </div>

            {/* ASOSIY KONTENT: GRAFIK VA DSN */}
            <div className="dashboard-content-row">

                {/* DELTA OQIM GRAFIKI (RECHARTS) */}
                <div className="panel-box">
                    <div className="panel-title">
                        {t('telemetry_streams')}
                    </div>
                    {/* Placeholder o'rniga jonli grafik qo'yildi */}
                    <div style={{ width: '100%', height: 280, marginTop: '1rem' }}>
                        <ResponsiveContainer>
                            <AreaChart data={telemetryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorAlpha" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--accent-color)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--accent-color)" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorBeta" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                                <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={12} tickMargin={10} />
                                <YAxis stroke="var(--text-muted)" fontSize={12} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border-color)', borderRadius: '8px' }}
                                    itemStyle={{ color: 'var(--text-main)' }}
                                />
                                <Area type="monotone" dataKey="coreAlpha" stroke="var(--accent-color)" strokeWidth={2} fillOpacity={1} fill="url(#colorAlpha)" />
                                <Area type="monotone" dataKey="coreBeta" stroke="#16a34a" strokeWidth={2} fillOpacity={1} fill="url(#colorBeta)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Deep Space Network (DSN) Sync Queue */}
                <div className="panel-box">
                    <div className="panel-title">
                        {t('dsn_sync_queue')}
                    </div>
                    <div className="dsn-queue">
                        <div className="queue-item">
                            <div className="queue-info">
                                <span className="tier-label tier-1">{t('tier_1')}</span>
                                <span className="queue-name">{t('anomaly_packages')}</span>
                            </div>
                            <span className="queue-status">{t('synced')}</span>
                        </div>
                        <div className="queue-item">
                            <div className="queue-info">
                                <span className="tier-label tier-2">{t('tier_2')}</span>
                                <span className="queue-name">{t('stat_summaries')}</span>
                            </div>
                            <span className="queue-status">{t('syncing')}</span>
                        </div>
                        <div className="queue-item">
                            <div className="queue-info">
                                <span className="tier-label tier-3">{t('tier_3')}</span>
                                <span className="queue-name">{t('raw_delta')}</span>
                            </div>
                            <span className="queue-status">{t('pending')}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;