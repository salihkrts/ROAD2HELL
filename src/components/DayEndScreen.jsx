import React, { useState } from 'react';
import './DayEndScreen.css';

function DayEndScreen({ day, dailyLog, nightNotes = [], stats, onNextDay, lang, t, onOpenShelter, hasResidents }) {
  const [phase, setPhase] = useState(1); 
  
  const accepted = dailyLog.filter(l => l.decision === 'pass');
  const arrested = dailyLog.filter(l => l.decision === 'arrest');
  const denied = dailyLog.filter(l => l.decision === 'deny');

  return (
    <div className="day-end-overlay surveillance-layout flicker standard-screen-entry">
      <div className="fog-layer"></div>
      <div className="cctv-readout cctv-top-left">SYSTEM_REPORT: DAY_{day}</div>
      <div className="cctv-readout cctv-top-right">SIGNAL_INTEGRITY: 92%</div>

      <div className="day-end-content">
        <div className="terminal-header">[ GÜN SONU ANALİZİ - Sektör-7 ]</div>
        
        {phase === 1 && (
          <div className="phase-container fade-in-btn">
            <h2 className="phase-title">OPERASYON ÖZETİ</h2>
            <p className="narrative-text">14 günlük rotanın {day}. günü pırıl pırıl (veya bir o kadar karanlık) tamamlandı. Kapıdaki sis yoğunlaşıyor asker.</p>
            <button className="next-phase-btn" onClick={() => setPhase(2)}>{'>'} ANALİZE GEÇ</button>
          </div>
        )}

        {phase === 2 && (
          <div className="phase-container fade-in-btn">
            <h2 className="phase-title">SAYISAL_VERİLER: GÖZETİM_RAPORU</h2>
            <div className="report-box">
              <p>TOPLAM ETKİLEŞİM: {dailyLog.length}</p>
              <p className="pass-text">İÇERİ ALINAN: {accepted.length}</p>
              <p className="arrest-text">HÜCREYE ATILAN: {arrested.length}</p>
              <p className="deny-text">REDDEDİLEN: {denied.length}</p>
            </div>
            <button className="next-phase-btn" onClick={() => setPhase(3)}>{'>'} ETKİ ANALİZİ</button>
          </div>
        )}

        {phase === 3 && (
          <div className="phase-container fade-in-btn">
            <h2 className="phase-title">STRATEJİK_ETKİLER</h2>
            <div className="day-end-stats">
              <div className="stat-card">
                <span className="stat-label">Sektör Güvenliği</span>
                <div className="stat-bar"><div className="stat-fill" style={{ width: `${stats.safety}%`, background: '#22c55e' }}></div></div>
              </div>
              <div className="stat-card">
                <span className="stat-label">Halk Morali</span>
                <div className="stat-bar"><div className="stat-fill" style={{ width: `${stats.morale}%`, background: '#3b82f6' }}></div></div>
              </div>
            </div>

            <div className="consequences-log">
              <h3>GÜNLÜK STRATEJİK KAYITLAR</h3>
              {dailyLog.map((entry, idx) => (
                <div key={idx} className="consequence-item">
                  <span className="consequence-name">{entry.name}:</span>
                  <span className="consequence-text">{entry.text}</span>
                </div>
              ))}
            </div>
            <button className="next-phase-btn" onClick={() => setPhase(4)}>{'>'} GECE_BÜLTENİ</button>
          </div>
        )}

        {phase === 4 && (
          <div className="phase-container night-phase fade-in-btn">
            <div className="night-message">
              <p className="flicker-text">GÜNEŞ BATTI. SİSİN SESİNİ DUYUYOR MUSUN?</p>
            </div>
            {hasResidents && (
              <button className="shelter-enter-btn" onClick={onOpenShelter}>
                🏠 SIĞINAĞI ZİYARET ET
              </button>
            )}
            <button className="next-day-btn" onClick={onNextDay}>
              {day === 14 ? "OPERASYONU BİTİR" : `GÜN ${day + 1} BAŞLAT`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DayEndScreen;
