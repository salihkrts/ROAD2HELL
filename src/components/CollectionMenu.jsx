import React, { useState } from 'react';
import { getImagePath } from '../utils/imagePath';
import './CollectionMenu.css';

// Characters that are ominous & should show a red "danger" tag
const DARK_CHARACTERS = new Set([
  'oracle_d10','shadow_walker_d11','vera_queen_d14','assassin_d10',
  'shadow_vengence_d13','infected_oguz_d11','mind_reader_saman_d12',
  'aras_final_choice_d14', 'werewolf_bozkir_d6', 'laughing_man_d9',
]);

function CollectionMenu({ discoveredCharacters, allCharacters, shelterResidents = {}, onClose, t }) {
  const [selectedCharId, setSelectedCharId] = useState(null);
  const [activeTab, setActiveTab] = useState('dossier'); // 'dossier' | 'intel'

  const selectedChar = allCharacters.find(c => c.id === selectedCharId);
  const isSelectedDiscovered = discoveredCharacters.includes(selectedCharId);
  const residentData = shelterResidents[selectedCharId];
  const unlockedSecrets = residentData?.unlockedSecrets || [];
  const bondLevel = residentData?.bondLevel ?? null;
  const isDark = DARK_CHARACTERS.has(selectedCharId);

  // Count total unlocked secrets across all residents
  const totalSecrets = Object.values(shelterResidents).reduce(
    (acc, r) => acc + (r?.unlockedSecrets?.length || 0), 0
  );

  return (
    <div className="collection-overlay blur-fade-in">
      <div className="collection-window flicker">

        {/* HEADER */}
        <div className="collection-header">
          <div>
            <h2>{t('collection_title') || 'DOSYALAR — İSTİHBARAT ARŞİVİ'}</h2>
            <div style={{fontSize:'0.65rem',letterSpacing:'3px',color:'rgba(0,255,65,0.45)',marginTop:'4px'}}>
              {discoveredCharacters.length} KİŞİ TANIMLANDI &nbsp;·&nbsp; {totalSecrets} SIR AÇILDI
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>{t('close') || 'KAPAT'}</button>
        </div>

        <div className="collection-layout">

          {/* SIDEBAR — Character grid */}
          <div className="collection-sidebar">
            {allCharacters.map((char, idx) => {
              const discovered = discoveredCharacters.includes(char.id);
              const secrets = shelterResidents[char.id]?.unlockedSecrets?.length || 0;
              return (
                <div
                  key={char.id}
                  className={`char-slot ${discovered ? '' : 'locked'} ${selectedCharId === char.id ? 'active' : ''}`}
                  onClick={() => { setSelectedCharId(char.id); setActiveTab('dossier'); }}
                  title={discovered ? char.name : '???'}
                >
                  <div className="char-portrait">
                    <img src={getImagePath(char.image)} alt={char.name} />
                    <div className="char-number">{idx + 1}</div>
                  </div>
                  {!discovered && <div className="locked-icon">?</div>}
                  {discovered && secrets > 0 && (
                    <div className="char-slot-secret-dot" title={`${secrets} sır açıldı`}>
                      {secrets}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* MAIN PANEL */}
          <div className="collection-main">
            {selectedChar ? (
              isSelectedDiscovered ? (
                <div className="dossier-content fade-in">

                  {/* Character header */}
                  <div className="dossier-header">
                    <div className="dossier-image-wrapper">
                      <div className="dossier-image-noise"></div>
                      <img src={getImagePath(selectedChar.image)} alt={selectedChar.name} className="dossier-image" />
                      <div className="dossier-id">ID: S7-{selectedChar.id.toUpperCase().substring(0,6)}</div>
                      {isDark && <div className="dossier-danger-stripe">⚠ TEHLİKELİ</div>}
                    </div>
                    <div className="dossier-info">
                      <h1>{selectedChar.name}</h1>
                      <div className="dossier-meta">
                        <span className="dossier-tag">ROL: {(selectedChar.role || 'BİLİNMİYOR').toUpperCase()}</span>
                        <span className="dossier-tag">TÜR: {(selectedChar.type || 'SİVİL').toUpperCase()}</span>
                        {bondLevel !== null && (
                          <span className={`dossier-tag ${bondLevel >= 66 ? 'tag-high' : bondLevel >= 26 ? 'tag-mid' : 'tag-low'}`}>
                            BAĞ: {bondLevel} / 100
                          </span>
                        )}
                      </div>
                      {/* Bond bar */}
                      {bondLevel !== null && (
                        <div className="dossier-bond-bar-wrap">
                          <div
                            className={`dossier-bond-bar-fill ${bondLevel >= 66 ? 'fill-high' : bondLevel >= 26 ? 'fill-mid' : 'fill-low'}`}
                            style={{ width: `${bondLevel}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tab switcher */}
                  <div className="dossier-tabs">
                    <button
                      className={`dossier-tab-btn ${activeTab === 'dossier' ? 'active' : ''}`}
                      onClick={() => setActiveTab('dossier')}
                    >
                      📋 TEMEL BİLGİ
                    </button>
                    <button
                      className={`dossier-tab-btn ${activeTab === 'intel' ? 'active' : ''}`}
                      onClick={() => setActiveTab('intel')}
                    >
                      🔐 GİZLİ İSTİHBARAT {unlockedSecrets.length > 0 ? `(${unlockedSecrets.length})` : ''}
                    </button>
                  </div>

                  {/* TAB: Dossier */}
                  {activeTab === 'dossier' && (
                    <div className="dossier-body">
                      <h3>İLK TEMAS:</h3>
                      <div className="dossier-text">
                        "{selectedChar.nodes?.start?.text || (selectedChar.description || '—')}"
                      </div>
                      {selectedChar.arasHint && (
                        <div style={{ marginTop: '20px', borderTop: '1px dashed rgba(255,0,68,0.3)', paddingTop: '10px' }}>
                          <h3>ARAŞ NOTU:</h3>
                          <div className="dossier-text" style={{ color: '#ff0044' }}>
                            {selectedChar.arasHint}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB: Intelligence Ledger */}
                  {activeTab === 'intel' && (
                    <div className="dossier-secrets-section">
                      <div className="dossier-secrets-title">
                        ⚠ GİZLİ İSTİHBARAT — KRİPTİK VERİ
                      </div>
                      {unlockedSecrets.length === 0 ? (
                        <div className="intel-empty">
                          Henüz bu kişiden gizli istihbarat elde edilmedi.<br />
                          Bağ seviyeni yükselt ve özel diyalogları aç.
                        </div>
                      ) : (
                        unlockedSecrets.map((secret, i) => (
                          <div key={i} className="intel-entry">
                            <span className="intel-badge">SIR #{i + 1}</span>
                            <br />
                            {secret}
                          </div>
                        ))
                      )}
                    </div>
                  )}

                </div>
              ) : (
                <div className="empty-dossier">
                  <h1>{t('dossier_locked') || 'ERİŞİM ENGELLENDİ'}</h1>
                  <p style={{marginTop:'8px',color:'rgba(0,255,65,0.35)',fontSize:'0.8rem',letterSpacing:'2px'}}>
                    {t('dossier_locked_help') || 'Bu kişinin dosyasına erişmek için önce onunla sahada karşılaşmalısın.'}
                  </p>
                </div>
              )
            ) : (
              <div className="empty-dossier">
                <div style={{fontSize:'2rem',marginBottom:'16px'}}>🗃️</div>
                <p>{t('collection_select_hint') || 'İncelemek istediğiniz bir kayıt seçin.'}</p>
                {totalSecrets > 0 && (
                  <p style={{marginTop:'12px',color:'rgba(255,80,0,0.7)',fontSize:'0.75rem',letterSpacing:'3px'}}>
                    ⚠ {totalSecrets} GİZLİ İSTİHBARAT KİLİDİ AÇILDI
                  </p>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default CollectionMenu;
