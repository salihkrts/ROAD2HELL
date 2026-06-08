import React from 'react';
import { getImagePath } from '../utils/imagePath';
import './MainMenu.css';

function MainMenu({ onStartGame, onResumeGame, onOpenSettings, onOpenCollection, hasSaveGame, t, onHover }) {
  // TRUE DIVERSITY: Expanded character list for infinite scrolling — YENİ PORTRELER
  const allCharacters = [
    'd1_aga', 'd1_mina', 'd1_miner',
    'd2_dog_man', 'd2_silent_woman', 'd2_soldier',
    'd3_crying_girl', 'd3_night_vision', 'd3_trader',
    'd4_healer', 'd4_priest', 'd4_teacher',
    'd5_aunt_observer', 'd5_chased_man', 'd5_twins',
    'd6_doctor', 'd6_gang_member', 'd6_honesty_man',
    'd7_baby', 'd7_mother', 'd7_old_hunter',
    'd8_aras', 'd8_cultist', 'd8_searching_father',
    'd9_mutant_wolf',
    'character_bozkir', 'character_arzu', 'character_salih',
    'character_shadow', 'character_spy', 'vera', 'serseri',
  ];

  // Double the list for seamless infinite loop
  const scrollList = [...allCharacters, ...allCharacters];

  return (
    <div className="menu-container surveillance-layout standard-screen-entry">
      <div className="fog-layer"></div>
      
      {/* THE SCARY STACKED LOGO */}
      <div className="menu-header">
        <h2 className="road-to-text">ROAD TO</h2>
        <h1 className="hell-text">HELL</h1>
        <div className="rec-indicator">
          <span className="rec-dot"></span> REC
        </div>
      </div>

      <div className="menu-main-content">
        {/* LEFT SIDE SCROLLER (UP) */}
        <div className="side-portraits-container left-side">
          <div className="portrait-scroller-track scroll-up">
            {scrollList.map((img, i) => (
              <div key={`l-${i}`} className="mini-portrait-frame">
                <div className="portrait-scanline"></div>
                <img src={getImagePath(`/faces/${img}.png`)} alt="scan-data" className="mini-img-gray" />
              </div>
            ))}
          </div>
        </div>

        {/* CENTER CIRCLE PORTRAIT */}
        <div className="center-piece">
          <div className="main-circle-frame heartbeat-pulse">
            <div className="circle-scanner"></div>
            <img src={getImagePath("/faces/oracle_main.png")} alt="S7 Oracle" className="center-oracle-img pulse-glitch" />
          </div>
        </div>

        {/* RIGHT SIDE SCROLLER (DOWN) */}
        <div className="side-portraits-container right-side">
          <div className="portrait-scroller-track scroll-down">
            {scrollList.map((img, i) => (
              <div key={`r-${i}`} className="mini-portrait-frame">
                <div className="portrait-scanline"></div>
                <img src={getImagePath(`/faces/${img}.png`)} alt="scan-data" className="mini-img-gray" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BUTTONS ROW */}
      <div className="menu-footer-actions">
        <button className="menu-button-rect cyber-glitch-hover" onClick={onStartGame} onMouseEnter={onHover}>{t('start_game')}</button>
        <button className={`menu-button-rect cyber-glitch-hover ${!hasSaveGame ? 'disabled' : ''}`} onClick={hasSaveGame ? onResumeGame : null} onMouseEnter={onHover}>{t('continue')}</button>
        <button className="menu-button-rect cyber-glitch-hover" onClick={onOpenSettings} onMouseEnter={onHover}>{t('settings')}</button>
        <button className="menu-button-rect cyber-glitch-hover" onClick={onOpenCollection} onMouseEnter={onHover}>{t('collection')}</button>
        <button className="menu-button-rect cyber-glitch-hover" onClick={() => window.open(getImagePath('/poster.html'), '_blank')} onMouseEnter={onHover}>{t('poster')}</button>
      </div>
    </div>
  );
}

export default MainMenu;
