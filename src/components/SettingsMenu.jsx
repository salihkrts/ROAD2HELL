import React, { useState } from 'react';
import './SettingsMenu.css';

const TABS = (t) => [
  { id: 'audio', label: t('audio') || 'SES (AUDIO)' },
  { id: 'video', label: t('video') || 'GÖRÜNTÜ (VIDEO)' },
  { id: 'gameplay', label: t('gameplay') || 'OYUN (GAMEPLAY)' },
  { id: 'controls', label: t('controls') || 'KONTROLLER' },
  { id: 'accessibility', label: t('accessibility') || 'ERİŞİLEBİLİRLİK' },
  { id: 'language', label: t('language') || 'DİL (LANGUAGE)' },
];

function SettingsMenu({ settings, updateSetting, onClose, t, isPauseMode, onQuitToMenu, onSaveGame, saveFlash }) {
  const [activeTab, setActiveTab] = useState('audio');

  const tabs = TABS(t);

  const renderAudio = () => (
    <div className="settings-tab-content">
      <div className="setting-item">
        <label>{t('master_vol')}</label>
        <div className="range-with-value">
          <input type="range" min="0" max="100" value={settings.masterVolume} onChange={(e) => updateSetting('masterVolume', parseInt(e.target.value))} />
          <span>{settings.masterVolume}%</span>
        </div>
      </div>
      <div className="setting-item">
        <label>{t('music_vol')}</label>
        <input type="range" min="0" max="100" value={settings.musicVolume} onChange={(e) => updateSetting('musicVolume', parseInt(e.target.value))} />
      </div>
      <div className="setting-item">
        <label>{t('ambient_vol')}</label>
        <input type="range" min="0" max="100" value={settings.ambientVolume} onChange={(e) => updateSetting('ambientVolume', parseInt(e.target.value))} />
      </div>
      <div className="setting-item">
        <label>{t('sfx_vol')}</label>
        <input type="range" min="0" max="100" value={settings.sfxVolume} onChange={(e) => updateSetting('sfxVolume', parseInt(e.target.value))} />
      </div>
      <div className="setting-item toggle-item">
        <label>{t('mute')}</label>
        <input type="checkbox" checked={settings.isMuted} onChange={(e) => updateSetting('isMuted', e.target.checked)} />
      </div>
    </div>
  );

  const renderVideo = () => (
    <div className="settings-tab-content">
      <div className="setting-item">
        <label>{t('brightness')}</label>
        <input type="range" min="50" max="150" value={settings.brightness} onChange={(e) => updateSetting('brightness', parseInt(e.target.value))} />
      </div>
      <div className="setting-item">
        <label>{t('scanlines')}</label>
        <input type="range" min="0" max="100" value={settings.scanlinesIntensity || 50} onChange={(e) => updateSetting('scanlinesIntensity', parseInt(e.target.value))} />
      </div>
      <div className="setting-item toggle-item">
        <label>{t('grain_label')}</label>
        <input type="checkbox" checked={settings.showGrain} onChange={(e) => updateSetting('showGrain', e.target.checked)} />
      </div>
      <div className="setting-item">
        <label>{t('ui_scale_label')}</label>
        <input type="range" min="80" max="120" value={settings.uiScale} onChange={(e) => updateSetting('uiScale', parseInt(e.target.value))} />
      </div>
    </div>
  );

  const renderGameplay = () => (
    <div className="settings-tab-content">
      <div className="setting-item">
        <label>{t('text_speed_label')}</label>
        <select value={settings.textSpeed} onChange={(e) => updateSetting('textSpeed', e.target.value)}>
          <option value="slow">{t('text_speed_slow')}</option>
          <option value="normal">{t('text_speed_normal')}</option>
          <option value="fast">{t('text_speed_fast')}</option>
        </select>
      </div>
      <div className="setting-item toggle-item">
        <label>{t('auto_advance_label')}</label>
        <input type="checkbox" checked={settings.autoAdvance} onChange={(e) => updateSetting('autoAdvance', e.target.checked)} />
      </div>
      <div className="setting-item toggle-item">
        <label>{t('text_glitch_label')}</label>
        <input type="checkbox" checked={settings.textGlitch} onChange={(e) => updateSetting('textGlitch', e.target.checked)} />
      </div>
    </div>
  );

  const renderAccessibility = () => (
    <div className="settings-tab-content">
      <div className="setting-item toggle-item">
        <label>{t('high_contrast_label')}</label>
        <input type="checkbox" checked={settings.highContrast} onChange={(e) => updateSetting('highContrast', e.target.checked)} />
      </div>
    </div>
  );

  return (
    <div className="settings-overlay active">
      <div className="settings-window flicker">
        
        {/* PAUSE MODE SPECIFIC BUTTONS */}
        {isPauseMode && (
          <div className="pause-actions-hub">
            <button className="pause-btn resume-btn" onClick={onClose}>
              [ {t('continue_shift')} ]
            </button>
            <button className="pause-btn quit-btn-red" onClick={() => { onSaveGame(); onQuitToMenu(); }}>
              [ {t('save_and_quit')} ]
            </button>
          </div>
        )}

        <div className="settings-header">
          <h2>{isPauseMode ? t('system_paused_title') : t('settings_title')}</h2>
          {!isPauseMode && <button className="close-btn" onClick={onClose}>{t('close')}</button>}
        </div>

        <div className="settings-layout">
          <div className="settings-sidebar">
            {tabs.map(tab => (
              <button 
                key={tab.id} 
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}

            {/* MANUEL KAYDET - Sidebar altına eklendi */}
            {isPauseMode && (
              <div className="sidebar-save-section">
                <button 
                  className={`sidebar-manual-save-btn ${saveFlash ? 'save-flash-side' : ''}`} 
                  onClick={onSaveGame}
                >
                  {saveFlash ? t('save_success') : t('save_system')}
                </button>
              </div>
            )}
          </div>

          <div className="settings-main">
            {activeTab === 'audio' && renderAudio()}
            {activeTab === 'video' && renderVideo()}
            {activeTab === 'gameplay' && renderGameplay()}
            {activeTab === 'accessibility' && renderAccessibility()}
            {activeTab === 'language' && (
              <div className="settings-tab-content">
                <div className="setting-item">
                  <label>{t('system_lang_label')}</label>
                  <div className="language-options">
                    <button className={`lang-btn ${settings.language === 'tr' ? 'active' : ''}`} onClick={() => updateSetting('language', 'tr')}>
                      <span className="lang-icon">TR</span> TÜRKÇE
                    </button>
                    <button className={`lang-btn ${settings.language === 'en' ? 'active' : ''}`} onClick={() => updateSetting('language', 'en')}>
                      <span className="lang-icon">EN</span> ENGLISH
                    </button>
                    <button className={`lang-btn ${settings.language === 'ru' ? 'active' : ''}`} onClick={() => updateSetting('language', 'ru')}>
                      <span className="lang-icon">RU</span> РУССКИЙ
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'controls' && (
                <div className="settings-tab-content">
                    <p style={{fontSize: '0.9rem', opacity: 0.7}}>{t('key_protocols')}</p>
                    <div className="controls-list">
                        <div className="ctrl-item">{t('ctrl_esc')}</div>
                        <div className="ctrl-item">{t('ctrl_space')}</div>
                        <div className="ctrl-item">{t('ctrl_keys')}</div>
                    </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsMenu;
