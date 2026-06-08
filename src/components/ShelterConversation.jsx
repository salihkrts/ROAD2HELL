import React, { useState, useEffect, useRef } from 'react';
import TypewriterText from './TypewriterText';
import { SHELTER_DIALOGUES, getBondCategory } from '../data/shelterDialogues';
import { getImagePath } from '../utils/imagePath';
import './ShelterConversation.css';

// Characters that induce Mist-Glitch terminal instability
const GLITCH_CHARACTERS = new Set([
  'oracle_d10',      'shadow_walker_d11', 'vera_queen_d14',
  'assassin_d10',    'shadow_vengence_d13', 'infected_oguz_d11',
  'mind_reader_saman_d12', 'aras_final_choice_d14',
]);

// Characters with HEAVY glitch (Day-14 climax + Oracle)
const HEAVY_GLITCH_CHARACTERS = new Set([
  'vera_queen_d14', 'oracle_d10', 'aras_final_choice_d14',
]);

function ShelterConversation({ characterId, resident, onClose, onBondChange, onSecretUnlocked, day, lang = 'tr' }) {
  const charData =
    SHELTER_DIALOGUES?.[lang]?.[characterId] ||
    SHELTER_DIALOGUES?.tr?.[characterId]      ||
    SHELTER_DIALOGUES?.[characterId];          // legacy flat fallback
  const [phase, setPhase] = useState('dialogue'); // 'dialogue' | 'result' | 'no-more'
  const [currentDialogue, setCurrentDialogue] = useState(null);
  const [resultData, setResultData] = useState(null);
  const [bondLevel, setBondLevel] = useState(resident?.bondLevel || 10);
  const [secretFlash, setSecretFlash] = useState(false);
  const ambientRef = useRef(null);

  const isGlitchChar  = GLITCH_CHARACTERS.has(characterId);
  const isHeavyGlitch = HEAVY_GLITCH_CHARACTERS.has(characterId);

  // Ambiyans: hafif rüzgar
  useEffect(() => {
    ambientRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/65/65-preview.mp3');
    ambientRef.current.loop = true;
    ambientRef.current.volume = 0.06;
    ambientRef.current.play().catch(() => {});
    return () => {
      if (ambientRef.current) { ambientRef.current.pause(); ambientRef.current = null; }
    };
  }, []);

  // Diyalog yükle
  useEffect(() => {
    if (!charData) return;
    const category = getBondCategory(bondLevel);
    const dialogues = charData[category] || [];
    const count = resident?.conversationCounts?.[category] || 0;
    if (dialogues.length === 0 || count >= dialogues.length) {
      setPhase('no-more');
    } else {
      setCurrentDialogue(dialogues[count]);
      setPhase('dialogue');
    }
  }, [bondLevel, characterId]);

  const handleChoice = (choice) => {
    const category = getBondCategory(bondLevel);
    const newBond = Math.max(0, Math.min(100, bondLevel + choice.effect));
    setBondLevel(newBond);

    const isSpecial = currentDialogue?.isSpecial || false;
    setResultData({
      text: choice.next,
      change: choice.effect,
      isSpecial,
      followUp: choice.followUp
    });
    setPhase('result');

    if (isSpecial) {
      onSecretUnlocked?.(characterId, currentDialogue);
      // Trigger amber secret-flash
      setSecretFlash(true);
      setTimeout(() => setSecretFlash(false), 1800);
    }
    
    // Only increment conversation count for the root node, not follow-ups
    const isFollowUpNode = currentDialogue?.isFollowUpNode || false;
    onBondChange?.(characterId, newBond, category, choice.effect, !isFollowUpNode);
  };

  if (!charData) {
    return (
      <div className="shelter-conv-overlay">
        <div className="shelter-bg" /><div className="shelter-fog" /><div className="shelter-scanlines" />
        <button className="shelter-close-btn" onClick={() => onClose(bondLevel)}>[ KAPAT ]</button>
        <div className="shelter-conv-content">
          <p className="shelter-no-dialogue">Bu kişiyle ilgili bilgi bulunamadı.</p>
        </div>
      </div>
    );
  }

  const bondCategory = getBondCategory(bondLevel);
  const bondClass = bondCategory === 'high' ? 'bond-high' : bondCategory === 'medium' ? 'bond-mid' : 'bond-low';
  const bondStatusText =
    bondCategory === 'high'   ? '❤️ YÜKSEK BAĞ — AÇIK' :
    bondCategory === 'medium' ? '🤝 ORTA BAĞ — GELİŞİYOR' :
                                '💀 DÜŞÜK BAĞ — SOĞUK';
  const convKey = `${characterId}-${bondCategory}-${resident?.conversationCounts?.[bondCategory] || 0}`;

  return (
    <div className={`shelter-conv-overlay${isGlitchChar ? ' glitch-screen-tear' : ''}`}>
      {/* Secret unlock amber flash */}
      {secretFlash && (
        <div style={{
          position:'absolute', inset:0,
          background:'radial-gradient(ellipse at center, rgba(255,140,0,0.18) 0%, transparent 70%)',
          zIndex:9998, pointerEvents:'none',
          animation:'pulseFade 1.8s ease-out forwards'
        }} />
      )}

      {/* Arka Plan */}
      <div className="shelter-bg" />
      <div className="shelter-silhouettes">
        {[0,1,2,3,4,5].map(i => <div key={i} className="silhouette" />)}
      </div>
      <div className="shelter-fog" />
      <div className="shelter-scanlines" />

      <button className="shelter-close-btn" onClick={() => onClose(bondLevel)}>[ KAPAT ]</button>

      {/* Ana İçerik: 2 Sütun Grid */}
      <div className={`shelter-conv-content ${bondClass}`}>

        {/* SOL PANEL — Portre + Kişi Bilgisi */}
        <div className="shelter-left-panel">
          <div className="scv-portrait-glitch-layer"></div>
          <div className="shelter-portrait-full">
            <img src={getImagePath(charData.image)} alt={charData.name} />
          </div>
          <div className="scv-portrait-scanline"></div>
          <div className="shelter-char-meta">
            <div className="shelter-char-name">{charData.name}</div>
            <div className="shelter-char-role">{charData.role}</div>
            <div className="shelter-bond-section">
              <div className="shelter-bond-header">
                <span className="shelter-bond-lbl">BAĞ SEVİYESİ</span>
                <span className="shelter-bond-val">{bondLevel} / 100</span>
              </div>
              <div className="shelter-bond-track-full">
                <div className="shelter-bond-fill" style={{ width: `${bondLevel}%` }} />
              </div>
              <div className="shelter-bond-status">{bondStatusText}</div>
            </div>
          </div>
        </div>

        {/* SAĞ ÜSTTE — Diyalog */}
        <div className="shelter-right-panel">
          <div className="shelter-right-header">
            <div className="shelter-right-header-dot" />
            <div className="shelter-right-header-text">
              SIĞINAK KONUŞMASI · GÜN {day} · {charData.name.toUpperCase()}
            </div>
          </div>

          <div className="shelter-dialogue-area">
            {/* Diyalog Kutusu */}
            {phase === 'dialogue' && currentDialogue && (
              <div className="shelter-dialogue-box">
                {currentDialogue.isSpecial && (
                  <div className="shelter-special-badge">✦ ÖZEL SAHNE AÇILDI</div>
                )}
                <div className={`shelter-dialogue-text${
                  isHeavyGlitch ? ' mist-glitch-heavy' :
                  isGlitchChar  ? ' mist-glitch-mild'  : ''
                }`}>
                  <TypewriterText key={convKey} text={currentDialogue.text} speed={35} textGlitch={false} />
                </div>
              </div>
            )}

            {/* Sonuç Kutusu */}
            {phase === 'result' && resultData && (
              <>
                {resultData.isSpecial && (
                  <div className="shelter-dialogue-box">
                    <div className="shelter-special-badge">✦ BİR SIR AÇIKLANDI</div>
                    <div className="shelter-dialogue-text" style={{color:'rgba(255,220,80,0.9)'}}>
                      Bu bilgi ileride kritik önem taşıyabilir. Unutma.
                    </div>
                  </div>
                )}
                <div className="shelter-result-box">
                  <div className="shelter-result-text">{resultData.text}</div>
                  <div className="shelter-bond-change">
                    {resultData.change >= 0
                      ? <span className="bond-gained">▲ BAĞ +{resultData.change}</span>
                      : <span className="bond-lost">▼ BAĞ {resultData.change}</span>
                    }
                  </div>
                </div>
              </>
            )}

            {/* Diyalog Kalmadı */}
            {phase === 'no-more' && (
              <div className="shelter-dialogue-box">
                <div className="shelter-dialogue-text" style={{color:'rgba(255,255,255,0.35)', fontStyle:'italic'}}>
                  {bondCategory === 'high'
                    ? `${charData.name} sana anlatacaklarını anlattı. Sessizce yanında oturuyor. Bu da bir şey.`
                    : `${charData.name} şu an konuşmak istemiyor gibi görünüyor. Bağınız güçlendikçe belki açılır.`
                  }
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SAĞ ALTTA — Seçim Butonları */}
        <div className="shelter-choice-panel">
          {phase === 'dialogue' && currentDialogue && (
            <>
              <div className="shelter-choice-hint">— NASIL YAKLAŞACAKSIN:</div>
              {currentDialogue.choices.map((choice, i) => {
                const cls = choice.effect >= 10 ? 'choice-supportive' : choice.effect < 0 ? 'choice-harsh' : 'choice-skeptic';
                return (
                  <button key={i} className={`shelter-choice-btn ${cls} cyber-glitch-hover`} onClick={() => handleChoice(choice)}>
                    {choice.text}
                  </button>
                );
              })}
            </>
          )}

          {(phase === 'result' || phase === 'no-more') && !resultData?.followUp && (
            <button className="shelter-continue-btn cyber-glitch-hover" onClick={() => onClose(bondLevel)}>
              [ LİSTEYE DÖN ]
            </button>
          )}

          {phase === 'result' && resultData?.followUp && (
            <button className="shelter-continue-btn cyber-glitch-hover" onClick={() => {
              setCurrentDialogue({ ...resultData.followUp, isFollowUpNode: true });
              setPhase('dialogue');
              setResultData(null);
            }}>
              [ DİNLEMEYE DEVAM ET ]
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShelterConversation;
