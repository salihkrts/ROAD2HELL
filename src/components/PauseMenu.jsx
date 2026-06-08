import React, { useEffect } from 'react';
import './PauseMenu.css';

function PauseMenu({ onResume, onOpenSettings, onQuit, onSaveGame, saveFlash, t, onHover }) {
  // Prevent scrolling when paused
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="pause-overlay blur-fade-in">
      <div className="pause-noise"></div>
      
      <div className="pause-window flicker-slow">
        <div className="pause-header">
          <h2 className="glitch-text" data-text="SİSTEM DURAKLATILDI">
            SİSTEM DURAKLATILDI
          </h2>
          <div className="pause-status">
            <span className="rec-dot static"></span> BEKLEMEDE
          </div>
        </div>

        <div className="pause-actions">
          <button 
            className="pause-btn terminal-style active-focus cyber-glitch-hover" 
            onClick={onResume}
            onMouseEnter={onHover}
          >
            {'>'} NÖBETE DEVAM ET
          </button>
          
          <button 
            className={`pause-btn terminal-style cyber-glitch-hover ${saveFlash ? 'save-flash' : ''}`}
            onClick={onSaveGame}
            onMouseEnter={onHover}
          >
            {saveFlash ? '✓ KAYDEDİLDİ!' : '> OYUNU KAYDET'}
          </button>
          
          <button 
            className="pause-btn terminal-style cyber-glitch-hover" 
            onClick={onOpenSettings}
            onMouseEnter={onHover}
          >
            {'>'} AYARLAR
          </button>
          
          <button 
            className="pause-btn terminal-style danger-btn cyber-glitch-hover" 
            onClick={onQuit}
            onMouseEnter={onHover}
          >
            {'>'} BÖLGEYİ TERK ET
          </button>
        </div>
        
        <div className="pause-footer">
          SEKTÖR-7 AĞ GEÇİDİ V1.9.4 // GİZLİLİK SEVİYESİ: KIRMIZI
        </div>
      </div>
    </div>
  );
}

export default PauseMenu;
