import React, { useState, useEffect, useRef } from 'react';
import TypewriterText from './TypewriterText';
import { SHELTER_DIALOGUES, getBondCategory } from '../data/shelterDialogues';
import { getImagePath } from '../utils/imagePath';
import './ShelterScreen.css';

// ─── KARAKTER HARİTASI (scenarios.js ID → görsel + meta) ─────────
const CHAR_MAP = {
  mina_d1:               { img:'/faces/d1_mina.png',            name:'Küçük Mina',      role:'Çaresiz Çocuk'      },
  aga_d1:                { img:'/faces/d1_aga.png',             name:'Ağa',              role:'Mahalle Lideri'     },
  miner_d1:              { img:'/faces/d1_miner.png',           name:'Yaşlı Madenci',   role:'Emektar İşçi'      },
  silent_woman_d2:       { img:'/faces/d2_silent_woman.png',    name:'Sessiz Kadın',     role:'Bilinmez Kimlik'   },
  wounded_soldier_d2:    { img:'/faces/d2_soldier.png',         name:'Yaralı Asker',     role:'Hayatta Kalan'     },
  dog_man_d2:            { img:'/faces/d2_dog_man.png',         name:'Köpek Adam',       role:'Sokak Çocuğu'      },
  night_vision_d3:       { img:'/faces/d3_night_vision.png',    name:'Gecelöre',         role:'Karanlık Kaşifi'   },
  crying_girl_d3:        { img:'/faces/d3_crying_girl.png',     name:'Küçük Ezel',       role:'Kayıp Çocuk'       },
  trader_salih_d3:       { img:'/faces/d3_trader_salih.png',    name:'Tüccar Salih',     role:'Gezgin Tüccar'     },
  healer_d4:             { img:'/faces/d4_healer.png',          name:'Şifacı',           role:'Sağaltıcı'         },
  teacher_d4:            { img:'/faces/d4_teacher.png',         name:'Öğretmen',         role:'Eski Eğitimci'     },
  priest_d4:             { img:'/faces/d4_priest.png',          name:'Rahip',            role:'Şüpheli Dini'      },
  chased_man_d5:         { img:'/faces/d5_chased_man.png',      name:'Kaçan Adam',       role:'Takip Edilmiş'     },
  twins_d5:              { img:'/faces/d5_twins.png',           name:'İkizler',          role:'Tek Akıl İki Beden' },
  aunt_observer_d5:      { img:'/faces/d5_aunt_observer.png',   name:'Gözcü Naciye',     role:'Sektör Hafızası'   },
  gang_leader_d6:        { img:'/faces/d6_gang_member.png',     name:'Çete Lideri',      role:'Tehlikeli Avantaj' },
  doctor_arzu_d6:        { img:'/faces/character_arzu.png',          name:'Doktor Arzu',      role:'Sektör Tabibi'     },
  werewolf_bozkir_d6:    { img:'/faces/character_bozkir.png',   name:'Bozkır',           role:'Kurt Adam'         },
  honesty_vakif_d6:      { img:'/faces/d6_honesty_man.png',     name:'Vakıf',            role:'Dürüst Tanık'      },
  baby_umut_d7:          { img:'/faces/d7_baby.png',            name:'Bebek Umut',       role:'Umut Kıvılcımı'    },
  mother_fidan_d7:       { img:'/faces/d7_mother.png',          name:'Fidan Ana',        role:'Koruyucu Anne'     },
  hunter_resat_d7:       { img:'/faces/d7_old_hunter.png',      name:'Avcı Reşat',      role:'Yaşlı Avcı'       },
  aras_d8_hero:          { img:'/faces/d8_aras.png',            name:'Araş',             role:'Hakikat Arayışçısı' },
  cultist_kaan_d8:       { img:'/faces/d8_cultist.png',         name:'Kaan',             role:'Tarikat Üyesi'     },
  searching_father_d8:   { img:'/faces/d8_searching_father.png',name:'Arayan Baba',      role:'Kayıp Peşinde'     },
  mutant_kaya_d9:        { img:'/faces/deney_04.png',          name:'Kaya',             role:'Mutant Varlık'     },
  mutant_kaya_bozkir_d9: { img:'/faces/deney_04.png',          name:'Kurt-Kaya',        role:'Bozkır Mutantı'    },
  laughing_man_d9:       { img:'/faces/laughing_man.png',      name:'Gülen Adam',       role:'Bilinmez Tehlike'  },
  scientist_d9:          { img:'/faces/scientist_anna.png',name:'Bilim İnsanı',    role:'Son Uzman'         },
  escapee_d10:           { img:'/faces/deney_04.png',          name:'Kaçak',            role:'Sistem Kaçağı'     },
  assassin_d10:          { img:'/faces/assassin_wraith.png',    name:'Suikastçı',        role:'Gölge Tetikçi'     },
  oracle_d10:            { img:'/faces/oracle_blind.png',   name:'Oracle',           role:'Gizemin Sesi'      },
  infected_oguz_d11:     { img:'/faces/infected_oguz.png',     name:'Enfekte Oğuz',    role:'Sis Kurbanı'       },
  shadow_walker_d11:     { img:'/faces/character_shadow.png',   name:'Gölge Yürüyücü',  role:'Görünmez Tehdit'   },
  mind_reader_saman_d12: { img:'/faces/mind_reader_saman.png',   name:'Şaman',            role:'Zihin Okuyucu'     },
  pilot_sinan_d12:       { img:'/faces/pilot_sinan.png',       name:'Pilot Sinan',      role:'Son Pilot'         },
  shadow_vengence_d13:   { img:'/faces/character_returned.png', name:'İntikam Gölgesi',  role:'Kaos Ajanı'        },
  scout_vera_d13:        { img:'/faces/scout_vera.png',        name:'Kaşif Vera',       role:'Bölge İzcisi'      },
  aras_final_choice_d14: { img:'/faces/d8_aras.png',            name:'Araş — Son Seçim',role:'Hakikat Taşıyıcısı' },
};

const getInfo = (charId, lang = 'tr') => {
  const sd = SHELTER_DIALOGUES[lang]?.[charId] || SHELTER_DIALOGUES['tr'][charId];
  const cm = CHAR_MAP[charId];
  return {
    img:  sd?.image || cm?.img  || '/faces/d1_mina.png',
    name: sd?.name  || cm?.name || charId,
    role: sd?.role  || cm?.role || '—',
  };
};

// ─── KARİKAR KARTI ───────────────────────────────────────────────
function CharCard({ charId, resData, onClick, lang }) {
  const [hov, setHov] = useState(false);
  const info    = getInfo(charId, lang);
  const bond    = resData?.bondLevel ?? 10;
  const cat     = getBondCategory(bond);
  const hasConv = !!(SHELTER_DIALOGUES[lang]?.[charId] || SHELTER_DIALOGUES['tr'][charId]);
  const secrets = resData?.unlockedSecrets?.length || 0;

  const glowColor = cat === 'high' ? '#00ff41' : cat === 'medium' ? '#f5a623' : '#ff4444';
  const catLabel  = lang === 'en' 
    ? (cat === 'high' ? '❤️ HIGH' : cat === 'medium' ? '🤝 MEDIUM' : '💀 LOW')
    : (cat === 'high' ? '❤️ YÜKSEK' : cat === 'medium' ? '🤝 ORTA' : '💀 DÜŞÜK');

  return (
    <div
      className={`sc-card ${hov ? 'sc-card--hov' : ''}`}
      style={{ '--glow': glowColor }}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Portre */}
      <div className="sc-card__portrait">
        <img src={getImagePath(info.img)} alt={info.name} className={`sc-card__img ${hov ? 'sc-card__img--hov' : ''}`} />
        <div className="sc-card__grad" />

        {/* Hafif karartma overlay — yüzü engellemesin */}
        <div className={`sc-card__talk-overlay ${hov ? 'sc-card__talk-overlay--vis' : ''}`} />

        {/* Rozetler */}
        {secrets > 0 && <div className="sc-card__secret-badge">✦ {secrets} {lang === 'en' ? 'SECRET' : 'SIR'}</div>}
        {!hasConv   && <div className="sc-card__soon-badge">{lang === 'en' ? 'SOON' : 'YAKINDA'}</div>}
      </div>

      {/* Kart altı */}
      <div className="sc-card__body">
        {/* KONUŞ butonu — ismin üstünde, hover'da görünür */}
        <button className="sc-card__talk-btn" onClick={onClick}>{lang === 'en' ? 'TALK' : 'KONUŞ'}</button>
        <div className="sc-card__name">{info.name}</div>
        <div className="sc-card__role">{info.role}</div>
        <div className="sc-card__bond-row">
          <div className="sc-card__bond-bar">
            <div className="sc-card__bond-fill" style={{ width:`${bond}%`, background: glowColor }} />
          </div>
          <span className="sc-card__bond-lbl">{catLabel} · {bond}</span>
        </div>
      </div>
    </div>
  );
}

// ─── KONUŞMA EKRANİ ───────────────────────────────────────────────
function ConvScreen({ charId, resident, day, lang, onBack, onBondChange, onSecretUnlocked, onCharTyped }) {
  const info       = getInfo(charId, lang);
  const shelterDat = SHELTER_DIALOGUES[lang]?.[charId] || SHELTER_DIALOGUES['tr'][charId];
  const [bond, setBond]   = useState(resident?.bondLevel ?? 10);
  const [phase, setPhase] = useState('loading');
  const [dlg, setDlg]     = useState(null);
  const [res, setRes]     = useState(null);
  const ambRef = useRef(null);

  useEffect(() => {
    try {
      ambRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/65/65-preview.mp3');
      ambRef.current.loop = true; ambRef.current.volume = 0.05;
      ambRef.current.play().catch(() => {});
    } catch (_) {}
    return () => { try { ambRef.current?.pause(); } catch (_) {} };
  }, []);

  useEffect(() => {
    if (!shelterDat) { setPhase('no-data'); return; }
    const cat  = getBondCategory(bond);
    const list = shelterDat[cat] || [];
    const idx  = resident?.conversationCounts?.[cat] ?? 0;
    if (!list.length || idx >= list.length) { setPhase('no-more'); return; }
    setDlg(list[idx]);
    setPhase('dialogue');
  }, [bond, charId]);

  const pick = (choice) => {
    const cat = getBondCategory(bond);
    const nb  = Math.max(0, Math.min(100, bond + choice.effect));
    setBond(nb);
    setRes({ text: choice.next, change: choice.effect, special: dlg?.isSpecial || false });
    setPhase('result');
    if (dlg?.isSpecial) onSecretUnlocked?.(charId, dlg);
    onBondChange?.(charId, nb, cat, choice.effect);
  };

  const cat        = getBondCategory(bond);
  const glowColor  = cat === 'high' ? '#00ff41' : cat === 'medium' ? '#f5a623' : '#ff4444';
  const bondLabel  = lang === 'en'
    ? (cat === 'high' ? '❤️ HIGH BOND — OPEN' : cat === 'medium' ? '🤝 MEDIUM BOND — DEVELOPING' : '💀 LOW BOND — COLD')
    : (cat === 'high' ? '❤️ YÜKSEK BAĞ — AÇIK' : cat === 'medium' ? '🤝 ORTA BAĞ — GELİŞİYOR' : '💀 DÜŞÜK BAĞ — SOĞUK');
  const convKey    = `${charId}-${cat}-${resident?.conversationCounts?.[cat] ?? 0}`;

  return (
    <div className="sc-conv standard-screen-entry">

      {/* Üst bar */}
      <div className="sc-conv__topbar">
        <button className="sc-btn sc-btn--back" onClick={onBack}>← {lang === 'en' ? 'BACK' : 'GERİ'}</button>
        <span className="sc-topbar__label">{lang === 'en' ? 'SHELTER INTERCOM · CYCLE' : 'SIĞINAK KONUŞMASI · GÜN'} {day}</span>
        <span className="sc-topbar__label" style={{ opacity:.4 }}>{lang === 'en' ? '☢ SECURE ZONE' : '☢ GÜVENLİ ALAN'}</span>
      </div>

      {/* Gövde */}
      <div className="sc-conv__body">

        {/* SOL — Portre + meta */}
        <aside className="sc-conv__aside">
          <div className="sc-conv__portrait-wrap">
            <img src={getImagePath(info.img)} alt={info.name} className="sc-conv__portrait-img" />
            <div className="sc-conv__portrait-grad" />
          </div>
          <div className="sc-conv__meta">
            <div className="sc-conv__char-name">{info.name}</div>
            <div className="sc-conv__char-role">{info.role}</div>

            <div className="sc-conv__bond-section">
              <div className="sc-conv__bond-header">
                <span className="sc-conv__bond-lbl-sm">{lang === 'en' ? 'BOND LEVEL' : 'BAĞ SEVİYESİ'}</span>
                <span className="sc-conv__bond-val" style={{ color: glowColor }}>{bond}</span>
              </div>
              <div className="sc-conv__bond-track">
                <div className="sc-conv__bond-prog" style={{ width:`${bond}%`, background: glowColor }} />
              </div>
              <div className="sc-conv__bond-status" style={{ color: glowColor + 'aa' }}>{bondLabel}</div>
            </div>
          </div>
        </aside>

        {/* SAĞ — Diyalog + Seçimler */}
        <div className="sc-conv__main">
          <div className="sc-conv__dialogue-area">

            {phase === 'dialogue' && dlg && (
              <div className="sc-dlg-box">
                {dlg.isSpecial && <div className="sc-special-badge">✦ {lang === 'en' ? 'SPECIAL SCENE' : 'ÖZEL SAHNE'}</div>}
                <div className="sc-dlg-text">
                  <TypewriterText 
                    key={convKey} 
                    text={dlg.text} 
                    speed={30} 
                    textGlitch={false} 
                    onCharTyped={() => onCharTyped?.(info)} 
                  />
                </div>
              </div>
            )}

            {phase === 'result' && res && (
              <>
                {res.special && (
                  <div className="sc-dlg-box sc-dlg-box--secret">
                    <div className="sc-special-badge">✦ {lang === 'en' ? 'A SECRET UNLOCKED' : 'BİR SIR AÇIKLANDI'}</div>
                    <div className="sc-dlg-text sc-dlg-text--gold">
                      {lang === 'en' ? 'This intel might be vital later. Log it.' : 'Bu bilgi ileride kritik önem taşıyabilir. Asla unutma.'}
                    </div>
                  </div>
                )}
                <div className="sc-dlg-box sc-dlg-box--result">
                  <div className="sc-dlg-text sc-dlg-text--result">{res.text}</div>
                  <div className="sc-bond-change">
                    {res.change >= 0
                      ? <span className="sc-bond-up">▲ {lang === 'en' ? 'BOND' : 'BAĞ'} +{res.change}</span>
                      : <span className="sc-bond-dn">▼ {lang === 'en' ? 'BOND' : 'BAĞ'} {res.change}</span>
                    }
                  </div>
                </div>
              </>
            )}

            {(phase === 'no-more' || phase === 'no-data') && (
              <div className="sc-dlg-box">
                <div className="sc-dlg-text sc-dlg-text--muted">
                  {cat === 'high'
                    ? (lang === 'en' ? `${info.name} has exhausted their dialogue. They sit by your side in silence.` : `${info.name} sana anlatacaklarını anlattı. Sessizce yanında oturuyor.`)
                    : (lang === 'en' ? `${info.name} refuses to speak right now. Develop your bond to unlock more.` : `${info.name} şu an konuşmak istemiyor. Bağınız güçlenirse belki açılır.`)
                  }
                </div>
              </div>
            )}
          </div>

          {/* Seçim Paneli */}
          <div className="sc-conv__choices">
            {phase === 'dialogue' && dlg && (
              <>
                <div className="sc-choices__hint">— {lang === 'en' ? 'HOW WILL YOU APPROACH:' : 'NASIL YAKLAŞACAKSIN:'}</div>
                {dlg.choices.map((c, i) => {
                  const cls = c.effect >= 10 ? 'sc-choice--good' : c.effect < 0 ? 'sc-choice--bad' : 'sc-choice--neu';
                  return (
                    <button key={i} className={`sc-choice ${cls}`} onClick={() => pick(c)}>
                      {'> '}{c.text}
                    </button>
                  );
                })}
              </>
            )}
            {(phase === 'result' || phase === 'no-more' || phase === 'no-data') && (
              <button className="sc-btn sc-btn--continue" onClick={onBack}>[ {lang === 'en' ? 'RETURN TO LIST' : 'LİSTEYE DÖN'} ]</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ANA SIĞINAK EKRANİ ──────────────────────────────────────────
export default function ShelterScreen({ residents, day, lang, onClose, onBondChange, onSecretUnlocked, onCharTyped }) {
  const [sel, setSel] = useState(null);
  const entries = Object.entries(residents || {});

  if (sel) {
    return (
      <div className="sc-root standard-screen-entry">
        <div className="sc-bg" />
        <ConvScreen
          charId={sel}
          resident={residents[sel]}
          day={day}
          lang={lang}
          onBack={() => setSel(null)}
          onBondChange={onBondChange}
          onCharTyped={onCharTyped}
          onSecretUnlocked={onSecretUnlocked}
        />
      </div>
    );
  }

  return (
    <div className="sc-root standard-screen-entry">
      <div className="sc-bg" />

      {/* Siluetler */}
      <div className="sc-silhouettes">
        {[0,1,2,3,4,5,6,7].map(i => <div key={i} className={`sc-sil sc-sil--${i}`} />)}
      </div>

      {/* Yüzen toz partikülleri */}
      <div className="sc-dust">
        {Array.from({length:12}).map((_,i) => <div key={i} className="sc-dust__p" />)}
      </div>

      {/* İçerik */}
      <div className="sc-content">

        {/* HEADER */}
        <header className="sc-header">
          <div className="sc-header__left">
            <div className="sc-header__title">☢ {lang === 'en' ? 'SHELTER CONTROL SYSTEM' : 'SIĞINAK KONTROL SİSTEMİ'}</div>
            <div className="sc-header__sub">
              {lang === 'en' ? `CYCLE ${day}` : `GÜN ${day}`} &nbsp;·&nbsp; {entries.length} {lang === 'en' ? 'RESIDENTS' : 'KİŞİ SIĞINAKTA'} &nbsp;·&nbsp; {lang === 'en' ? 'CLICK CARD TO TALK' : 'KARTI TIKLA → KONUŞ'}
            </div>
          </div>
          <button className="sc-btn sc-btn--close" onClick={onClose}>[ {lang === 'en' ? 'CLOSE' : 'KAPAT'} ]</button>
        </header>

        {/* GRID */}
        <main className="sc-grid-wrap">
          {entries.length === 0
            ? (
              <div className="sc-empty">
                <div className="sc-empty__icon">🌫️</div>
                <p className="sc-empty__text">
                  {lang === 'en' ? 'NO ENTITIES SANCTIONED YET' : 'HENÜZ KİMSEYİ İÇERİ ALMADINIZ'}<br />
                  {lang === 'en' ? 'THE SHELTER REMAINS EMPTY AND COLD' : 'SIĞINAK BOŞ VE SOĞUK'}
                </p>
              </div>
            )
            : (
              <div className="sc-grid">
                {entries.map(([charId, resData]) => (
                  <CharCard key={charId} charId={charId} resData={resData} lang={lang} onClick={() => setSel(charId)} />
                ))}
              </div>
            )
          }
        </main>

        {/* FOOTER */}
        <footer className="sc-footer">
          <button className="sc-btn sc-btn--done" onClick={onClose}>
            [ {lang === 'en' ? 'RESUME GARRISON' : 'NÖBETE DEVAM ET'} ]
          </button>
        </footer>
      </div>
    </div>
  );
}

