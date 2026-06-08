import React from 'react';
import TypewriterText from './TypewriterText';
import './NightEventScreen.css';

function NightEventScreen({ eventText, onFinish, t }) {
  return (
    <div className="night-event-overlay">
      <div className="night-noise"></div>
      <div className="night-scanlines"></div>
      
      <div className="night-content flicker">
        <h2 className="night-warning-title">[GECE YARISI RAPORU: KRİTİK OLAY]</h2>
        <div className="night-narrative">
          <TypewriterText text={eventText} speed={60} />
        </div>
        <p className="night-footer flicker">SAAT: 03:14 // DURUM: KONTROL DIŞI</p>
        
        <button className="terminal-btn next-day-btn" onClick={onFinish}>
          {'>'} SABAH RAPORUNA GEÇ (CONTINUE)
        </button>
      </div>
    </div>
  );
}

export default NightEventScreen;
