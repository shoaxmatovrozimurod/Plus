import React from 'react';
import './System.css';
import { useTranslation } from 'react-i18next';
import { Cpu, Zap, ShieldAlert, HardDrive } from 'lucide-react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// DSP yuklamasi va kechikishini taqlid qiluvchi ma'lumotlar
const systemData = [
  { time: 'T-6', load: 45, latency: 0.52 },
  { time: 'T-5', load: 52, latency: 0.58 },
  { time: 'T-4', load: 85, latency: 0.89 }, // Vaqtinchalik yuklama (SEU xatosi tuzatilganda)
  { time: 'T-3', load: 60, latency: 0.65 },
  { time: 'T-2', load: 48, latency: 0.54 },
  { time: 'T-1', load: 50, latency: 0.55 },
  { time: 'Hozir', load: 55, latency: 0.57 },
];

const System = () => {
    const { t } = useTranslation();

    return (
        <div className="system-page">
            <div className="sys-header">
                <h2>{t('sys_title')}</h2>
                <p>{t('sys_desc')}</p>
            </div>

            <div className="sys-grid">
                <div className="sys-card">
                    <div className="sys-card-top">
                        <div className="sys-info">
                            <h3>{t('dsp_throughput')}</h3>
                            <div className="sys-value">34.2</div>
                        </div>
                        <Cpu className="sys-icon" size={28} />
                    </div>
                    <div className="sys-desc">{t('dsp_throughput_desc')}</div>
                </div>

                <div className="sys-card">
                    <div className="sys-card-top">
                        <div className="sys-info">
                            <h3>{t('core_latency')}</h3>
                            <div className="sys-value">0.67</div>
                        </div>
                        <Zap className="sys-icon" size={28} color="#16a34a" />
                    </div>
                    <div className="sys-desc">{t('core_latency_desc')}</div>
                </div>

                <div className="sys-card">
                    <div className="sys-card-top">
                        <div className="sys-info">
                            <h3>{t('seu_tmr')}</h3>
                            <div className="sys-value">02</div>
                        </div>
                        <ShieldAlert className="sys-icon" size={28} color="#eab308" />
                    </div>
                    <div className="sys-desc">{t('seu_tmr_desc')}</div>
                </div>

                <div className="sys-card">
                    <div className="sys-card-top">
                        <div className="sys-info">
                            <h3>{t('memory_buffer')}</h3>
                            <div className="sys-value">82%</div>
                        </div>
                        <HardDrive className="sys-icon" size={28} color="#9333ea" />
                    </div>
                    <div className="sys-desc">{t('memory_buffer_desc')}</div>
                </div>
            </div>

            <div className="sys-chart-box">
                <div className="sys-chart-title">{t('chart_latency_load')}</div>
                <div style={{ width: '100%', height: 350 }}>
                    <ResponsiveContainer>
                        <ComposedChart data={systemData} margin={{ top: 10, right: 20, left: -20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                            <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={14} tickMargin={10} />
                            
                            {/* Chap o'q (Yuklama % uchun) */}
                            <YAxis yAxisId="left" stroke="var(--text-muted)" fontSize={14} />
                            {/* O'ng o'q (Kechikish ms uchun) */}
                            <YAxis yAxisId="right" orientation="right" stroke="var(--text-muted)" fontSize={14} />
                            
                            <Tooltip 
                                contentStyle={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border-color)', borderRadius: '8px', fontSize: '1.1rem' }}
                                itemStyle={{ fontWeight: 600 }}
                            />
                            <Legend wrapperStyle={{ fontSize: '1.1rem', paddingTop: '10px' }} />
                            
                            {/* Yuklama - Ustun ko'rinishida */}
                            <Bar yAxisId="left" name="CPU Yuklamasi (%)" dataKey="load" fill="var(--accent-color)" opacity={0.8} radius={[4, 4, 0, 0]} />
                            
                            {/* Kechikish - Chiziq ko'rinishida */}
                            <Line yAxisId="right" type="monotone" name="Kechikish (ms)" dataKey="latency" stroke="#eab308" strokeWidth={3} dot={{ r: 5 }} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default System;