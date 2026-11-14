import React from 'react';
import './Security.css';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Lock, Key, FileCheck } from 'lucide-react';

const securityLogs = [
  { time: '14:05:01', type: 'info', message: 'System boot sequence initiated. Loading keys...' },
  { time: '14:05:02', type: 'success', message: 'ASTRONAUT_SUIT_KEY loaded securely (perms: 0600).' },
  { time: '14:05:15', type: 'success', message: 'AES-256-GCM AEAD tunnel established. AAD verified.' },
  { time: '14:10:22', type: 'warning', message: 'Out-of-order packet detected. Anti-Replay Nonce validated.' },
  { time: '14:25:00', type: 'info', message: 'Key rotation scheduled in 12 hours.' },
  { time: '14:32:11', type: 'success', message: 'HMAC-SHA256 Token authenticated for Payload #8402.' },
  { time: '14:45:33', type: 'info', message: 'Constant-time verification executed. Side-channel attack risk mitigated.' },
];

const Security = () => {
    const { t } = useTranslation();

    return (
        <div className="security-page">
            <div className="sec-header">
                <h2>{t('sec_title')}</h2>
                <p>{t('sec_desc')}</p>
            </div>

            <div className="sec-grid">
                {/* AES-256-GCM */}
                <div className="sec-card">
                    <div className="sec-icon"><ShieldCheck size={28} /></div>
                    <div className="sec-info">
                        <h3>{t('aes_encryption')}</h3>
                        <div className="sec-desc">{t('aes_desc')}</div>
                        <div className="sec-status">{t('status_active')}</div>
                    </div>
                </div>

                {/* Anti-Replay */}
                <div className="sec-card">
                    <div className="sec-icon"><Lock size={28} /></div>
                    <div className="sec-info">
                        <h3>{t('anti_replay')}</h3>
                        <div className="sec-desc">{t('anti_replay_desc')}</div>
                        <div className="sec-status">{t('status_active')}</div>
                    </div>
                </div>

                {/* HMAC-SHA256 */}
                <div className="sec-card">
                    <div className="sec-icon"><FileCheck size={28} /></div>
                    <div className="sec-info">
                        <h3>{t('hmac_auth')}</h3>
                        <div className="sec-desc">{t('hmac_desc')}</div>
                        <div className="sec-status">{t('status_secure')}</div>
                    </div>
                </div>

                {/* Key Status */}
                <div className="sec-card">
                    <div className="sec-icon"><Key size={28} /></div>
                    <div className="sec-info">
                        <h3>{t('key_status')}</h3>
                        <div className="sec-desc">{t('key_desc')}</div>
                        <div className="sec-status">{t('status_secure')}</div>
                    </div>
                </div>
            </div>

            {/* Security Audit Terminal */}
            <div className="sec-logs-box">
                <div className="sec-logs-title">{t('sec_logs')}</div>
                <div className="sec-logs-desc">{t('sec_logs_desc')}</div>
                
                <div className="terminal-window">
                    {securityLogs.map((log, index) => (
                        <div className="log-line" key={index}>
                            <span className="log-time">[{log.time}]</span>
                            <span className={`log-type ${log.type}`}>
                                {log.type === 'info' ? '[INFO]' : log.type === 'success' ? '[OK]' : log.type === 'warning' ? '[WARN]' : '[ERR]'}
                            </span>
                            <span className="log-message">{log.message}</span>
                        </div>
                    ))}
                    <div className="log-line">
                        <span className="log-time">[{new Date().toLocaleTimeString('en-US', { hour12: false })}]</span>
                        <span className="log-type info" style={{ color: '#10b981' }}>[SYSTEM]</span>
                        <span className="log-message" style={{ animation: 'pulse 1s infinite' }}>Listening for incoming telemetry..._</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;