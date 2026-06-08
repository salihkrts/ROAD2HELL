import React, { useState, useEffect, useRef } from 'react';
import TypewriterText from './TypewriterText';
import { LORE_TRANSLATIONS } from '../locales/lore.js';
import './IntroScreen.css';

function IntroScreen({ onFinish, lang, t, onCharTyped }) {
  const [stage, setStage] = useState(0);
  const timerRef = useRef(null);

  const currentLore = LORE_TRANSLATIONS[lang] || LORE_TRANSLATIONS['tr'];

  useEffect(() => {
    // Okuma süresi: Temel 4 saniye + metin uzunluğu * 90 milisaniye
    const readTime = 4000 + (currentLore[stage].length * 90);
    
    timerRef.current = setTimeout(() => {
      handleAdvance();
    }, readTime);

    return () => clearTimeout(timerRef.current);
  }, [stage, currentLore]);

  const handleAdvance = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    if (stage < currentLore.length - 1) {
      setStage(prev => prev + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div className="intro-screen surveillance-layout standard-screen-entry" onClick={handleAdvance}>
      <div className="fog-layer"></div>
      <div className="cctv-readout cctv-top-left">SYSTEM_BOOT: LORE_SEQUENCE_0{stage + 1}</div>
      <div className="cctv-readout cctv-top-right">SIGNAL_STRENGTH: 84%</div>

      <div className="info-column">
        <div className="story-terminal intro-terminal">
          <div className="dialogue-display intro-display">
            <TypewriterText 
              key={stage}
              text={currentLore[stage]} 
              speed={45} 
              onCharTyped={onCharTyped}
            />
          </div>
          <div className="action-hub intro-hub">
            <p className="hint-text fade-in-btn">{t('intro_hint')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroScreen;
