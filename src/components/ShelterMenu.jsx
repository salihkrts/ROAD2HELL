import React, { useState } from 'react';
import { SHELTER_DIALOGUES, getBondCategory } from '../data/shelterDialogues';
import { getImagePath } from '../utils/imagePath';
import ShelterConversation from './ShelterConversation';
import './ShelterMenu.css';

// Kısa tanımlamalar — key'ler scenarios.js id'leriyle birebir eşleşir
const RESIDENT_DESCRIPTIONS = {
  mina_d1:             "Annesi sisin içinde kayboldu. Gözleri her kapıya bakıyor.",
  aga_d1:              "Mahallesinin lideriydi. Otoritesini kaybetti ama gururu kalmaya devam ediyor.",
  wounded_soldier_d2:  "Sektör-5'ten kaçtı. Gördüğü şeyi kimseye söyleyemedi şimdiye kadar.",
  trader_salih_d3:     "Her yerde olmuş, her şeyi görmüş. Sırları meta gibi taşıyor.",
  crying_girl_d3:      "Küçük ama dikkatli. Büyüklerin görmediği şeyleri görüyor.",
  aunt_observer_d5:    "Bu sektörün yaşayan hafızası. Gözleri her şeyi kaydediyor.",
  werewolf_bozkir_d6:  "Sisin yarattığı garip biri... ya da koruyucu. Henüz bilmiyorsun.",
  doctor_arzu_d6:      "Sis aşısına ulaşmak için tek umut. Taşıdığı bilgi tehlikeli.",
  honesty_vakif_d6:    "Her şeyi gördü ama kimse sormadı. İlk kez birisi soruyor.",
};

function ShelterMenu({ residents, onClose, onBondChange, onSecretUnlocked, day, lang = 'tr' }) {
  const [activeTalk, setActiveTalk] = useState(null);

  // Helper: resolve character definition respecting bilingual structure
  const getCharDef = (charId) =>
    SHELTER_DIALOGUES?.[lang]?.[charId] ||
    SHELTER_DIALOGUES?.tr?.[charId]      ||
    SHELTER_DIALOGUES?.[charId];          // legacy flat fallback

  const residentEntries = Object.entries(residents || {});

  const handleTalkClose = (characterId, newBondLevel) => {
    // onBondChange is handled dynamically inside ShelterConversation per choice
    setActiveTalk(null);
  };

  if (activeTalk) {
    return (
      <ShelterConversation
        characterId={activeTalk}
        resident={residents[activeTalk]}
        day={day}
        onClose={(newBond) => handleTalkClose(activeTalk, newBond)}
        onBondChange={onBondChange}
        onSecretUnlocked={onSecretUnlocked}
      />
    );
  }

  return (
    <div className="shelter-menu-overlay">
      <div className="shelter-menu-panel">

        {/* Header */}
        <div className="shelter-menu-header">
          <div className="shelter-menu-title-block">
            <div className="shelter-menu-title">☢ SIĞINAK KONTROL SİSTEMİ</div>
            <div className="shelter-menu-subtitle">
              GÜN {day} NÖBET SONU &nbsp;·&nbsp;
              {residentEntries.length} KİŞİ SIĞINAKTA &nbsp;·&nbsp;
              KONUŞMAK İÇİN KARTI SEÇ
            </div>
          </div>
          <button className="shelter-close-panel-btn" onClick={onClose}>
            [ KAPAT ]
          </button>
        </div>

        {/* İçerik */}
        {residentEntries.length === 0 ? (
          <div className="shelter-empty">
            <div className="shelter-empty-icon">🌫️</div>
            <div className="shelter-empty-text">
              HENÜZ KİMSEYİ İÇERİ ALMADINIZ.<br />
              SIĞINAK BOŞ VE SOĞUK.<br /><br />
              BİRİNİ İÇERİ ALIP BURAYA GEL.
            </div>
          </div>
        ) : (
          <div className="shelter-residents-grid">
            {residentEntries.map(([charId, resData]) => {
              const charDef = getCharDef(charId);
              if (!charDef) return null;

              const category = getBondCategory(resData.bondLevel);
              const bondClass =
                category === 'high'   ? 'resident-bond-high' :
                category === 'medium' ? 'resident-bond-mid'  : 'resident-bond-low';
              const fillClass =
                category === 'high'   ? 'resident-bond-fill-high' :
                category === 'medium' ? 'resident-bond-fill-mid'  : 'resident-bond-fill-low';
              const bondLabel =
                category === 'high'   ? '❤️ YÜKSEK BAĞ' :
                category === 'medium' ? '🤝 ORTA BAĞ'   : '💀 DÜŞÜK BAĞ';

              const desc = RESIDENT_DESCRIPTIONS[charId] || charDef.role;

              return (
                <div
                  key={charId}
                  className={`shelter-resident-card ${bondClass}`}
                  onClick={() => setActiveTalk(charId)}
                >
                  {/* Geniş Portre */}
                  <div className="resident-portrait-wide">
                    <img src={getImagePath(charDef.image)} alt={charDef.name} />
                  </div>

                  {/* Kart Gövdesi */}
                  <div className="resident-card-body">
                    <div className="resident-name">{charDef.name}</div>
                    <div className="resident-role">{charDef.role}</div>
                    <div className="resident-desc">{desc}</div>

                    {/* Bağ Bar */}
                    <div className="resident-bond-track">
                      <div className="resident-bond-bar">
                        <div className={fillClass} style={{ width: `${resData.bondLevel}%` }} />
                      </div>
                      <span className="resident-bond-label">{bondLabel} · {resData.bondLevel}</span>
                    </div>

                    {/* Sır Rozeti */}
                    {(resData.unlockedSecrets?.length > 0) && (
                      <div className="resident-secret-badge">
                        ✦ {resData.unlockedSecrets.length} SIR AÇILDI
                      </div>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className="resident-talk-overlay">
                    <span>KONUŞ</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className="shelter-menu-footer">
          <button className="shelter-done-btn" onClick={onClose}>
            [ NÖBETE DEVAM ET ]
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShelterMenu;
