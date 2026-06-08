import React, { useState, useEffect, useRef } from 'react';
import { SCENARIOS_BASE } from './data/scenarios';
import { UI_TRANSLATIONS } from './locales/uiTranslations';
import { getImagePath } from './utils/imagePath';
import MainMenu from './components/MainMenu';
import IntroScreen from './components/IntroScreen';

import DayEndScreen from './components/DayEndScreen';
import SettingsMenu from './components/SettingsMenu';
import CollectionMenu from './components/CollectionMenu';
import ConfirmationModal from './components/ConfirmationModal';
import AestheticOverlays from './components/AestheticOverlays';
import TypewriterText from './components/TypewriterText';
import NightEventScreen from './components/NightEventScreen';
import FailStateScreen from './components/FailStateScreen';
import TerminalBootSequence from './components/TerminalBootSequence';
import DailyNewsScreen from './components/DailyNewsScreen';
import ShelterScreen from './components/ShelterScreen';
import { createNewResident } from './data/shelterDialogues';
import './index.css';

const HEX_DATA = `45 78 69 73 74 20 63 6f 6e 66 69 72 6d 65 64 0a 53 79 73 74 65 6d 20 6f 70 65 72 61 74 69 6f 6e 61 6c 0a 56 65 72 69 66 79 69 6e 67 20 6b 65 72 6e 65 6c 2e 2e 2e 0a 41 63 63 65 73 ... 45 78 69 73 74 20 63 6f 6e 66 69 72 6d 65 64 0a 53 79 73 74 65 6d 20 6f 70 65 72 61 74 69 6f 6e 61 6c 0a 56 65 72 69 66 79 69 6e 67 20 6b 65 72 6e 65 6c 2e 2e 2e 0a`.repeat(100);

const DEFAULT_SETTINGS = {
  // Audio
  masterVolume: 80,
  musicVolume: 40,
  ambientVolume: 20,
  sfxVolume: 60,
  voiceVolume: 70,       
  radioChatter: true,      
  uiClicksVolume: 50,    
  spatialAudio: true,    
  isMuted: false,
  
  // Video
  brightness: 100,
  contrast: 100,         
  saturation: 100,       
  colorFilter: 'none',   
  fogIntensity: 15,
  showGrain: true,
  scanlinesIntensity: 50, 
  motionBlur: true,
  chromaticAberration: true, 
  vSync: true,           
  uiScale: 100,
  
  // Gameplay
  textSpeed: 'normal',
  autoAdvance: false,
  hardcoreDecisions: false,
  autoSaveInterval: 1,   
  enemyAlerts: true,     
  
  // Accessibility
  dyslexiaFont: false,   
  highContrast: false,   
  colorblindMode: 'none',
  
  // Other
  language: 'tr',
  textGlitch: true,        
};

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu'); 
  const [displayScreen, setDisplayScreen] = useState('menu');
  const [isFading, setIsFading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false); // Audio initialization gate
  
  const [showSettings, setShowSettings] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const [showShelter, setShowShelter] = useState(false);
  const [shelterResidents, setShelterResidents] = useState({});
  // Kayıt oyunu var mı kontrolü — başlangıçta localStorage'dan oku
  const [hasSaveGame, setHasSaveGame] = useState(() => !!localStorage.getItem('ORBITAL_NADIR_SAVE'));
  const [discoveredCharacters, setDiscoveredCharacters] = useState(() => {
    const saved = localStorage.getItem('ORBITAL_NADIR_COLLECTION');
    return saved ? JSON.parse(saved) : [];
  });
  
  // Game Logic States
  const [currentDay, setCurrentDay] = useState(1);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [currentNodeKey, setCurrentNodeKey] = useState('start');
  const [gameState, setGameState] = useState('talking');
  const [resultMessage, setResultMessage] = useState('');
  const [stats, setStats] = useState({ safety: 85, morale: 80 });
  const [charTransition, setCharTransition] = useState('');
  const [dailyLog, setDailyLog] = useState([]);
  const [systemTime, setSystemTime] = useState(new Date().toLocaleTimeString());
  const [isGameOver, setIsGameOver] = useState(false);
  const [endingType, setEndingType] = useState(null);
  const [nightNotes, setNightNotes] = useState([]);
  // Linked Event Flags
  const [events, setEvents] = useState({
    isGangAggro: false,
    babyInSektor: false,
    arasTrust: 0,
    isInfected: false
  });
  
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('ORBITAL_NADIR_SETTINGS');
    const parsedSettings = saved ? JSON.parse(saved) : {};
    return { ...DEFAULT_SETTINGS, ...parsedSettings };
  });

  const t = (key, params = {}) => {
    let text = UI_TRANSLATIONS[settings.language]?.[key] || UI_TRANSLATIONS['tr'][key] || key;
    Object.keys(params).forEach(p => {
      text = text.replace(`{${p}}`, params[p]);
    });
    return text;
  };

  // ═══════════════════════════════════════════════════════════════
  // SES MOTORU (Nükleer Çözüm - Ultra Robust)
  // ═══════════════════════════════════════════════════════════════
  const getAudioPath = (p) => {
    // Localhost ve GH Pages uyumu için en basit, en sert çözüm
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    return `${base}${p}`.replace(/\/+/g, '/'); // Çift slash'ları temizle
  };

  const hoverSound = useRef(new Audio(getAudioPath('/sounds/hover.mp3')));
  const typeSound = useRef(new Audio(getAudioPath('/sounds/type.wav')));
  const clickSound = useRef(new Audio(getAudioPath('/sounds/click.mp3')));
  const bgmSound = useRef(new Audio(getAudioPath('/sounds/bgm.webm')));

  // Ses nesnelerini baştan yapılandır
  useEffect(() => {
    if (bgmSound.current) {
      bgmSound.current.loop = true;
      bgmSound.current.preload = 'auto';
    }
    // AYARLARI ZORLA AÇ (Debug/Nuclear)
    setSettings(prev => ({ 
      ...prev, 
      isMuted: false, 
      masterVolume: 100, 
      musicVolume: 50, 
      sfxVolume: 80 
    }));
  }, []);

  // Kullanıcının ilk etkileşiminde sistemi uyandır
  useEffect(() => {
    const startAudio = () => {
      console.log('--- AUDIO SYSTEM WAKE UP ---');
      
      // 1. Önce en küçük sesi çal (Sistemi uyandırmak için "BEEP" etkisi)
      clickSound.current.volume = 0.1;
      clickSound.current.play().then(() => {
        console.log('Audio Engine: Context Unlocked with click.');
        
        // 2. Sonra BGM'i başlat
        if (bgmSound.current && bgmSound.current.paused) {
          bgmSound.current.play().catch(e => console.warn('BGM Start Fail:', e));
        }
        
        setIsInitialized(true);
      }).catch(e => {
        console.warn('Audio Context Unlock failed:', e);
        setIsInitialized(true); // Yine de dene
      });

      window.removeEventListener('mousedown', startAudio);
      window.removeEventListener('keydown', startAudio);
    };

    window.addEventListener('mousedown', startAudio);
    window.addEventListener('keydown', startAudio);

    return () => {
      window.removeEventListener('mousedown', startAudio);
      window.removeEventListener('keydown', startAudio);
    };
  }, []);

  // BGM Ses Seviyesi Senkronizasyonu
  useEffect(() => {
    if (bgmSound.current && isInitialized) {
      bgmSound.current.volume = settings.isMuted ? 0 : (settings.musicVolume / 100);
    }
  }, [settings.musicVolume, settings.isMuted, isInitialized]);

  // Daktilo Sesi — Çok Kanallı (Ultra-Fast Cloning)
  const playTypeSound = () => {
    if (settings.isMuted) return;
    
    try {
      const soundClone = typeSound.current.cloneNode(true);
      const master = settings.masterVolume / 100;
      const sfx = settings.sfxVolume / 100;
      soundClone.volume = master * sfx * 0.9; // Tok için gür ses
      soundClone.play().catch(() => {});
      
      // Memory management
      setTimeout(() => soundClone.remove(), 600);
    } catch(e) {}
  };

  // Buton Hover Sesi
  const playHoverSound = () => {
    if (settings.isMuted) return;
    try {
      const soundClone = hoverSound.current.cloneNode(true);
      const master = settings.masterVolume / 100;
      const sfx = settings.sfxVolume / 100;
      soundClone.volume = master * sfx * 0.4;
      soundClone.play().catch(() => {});
      setTimeout(() => soundClone.remove(), 400);
    } catch(e) {}
  };

  // Onay / Karar Tıklama Sesi
  const playClickSound = () => {
    if (settings.isMuted) return;
    try {
      const soundClone = clickSound.current.cloneNode(true);
      const master = settings.masterVolume / 100;
      const sfx = settings.sfxVolume / 100;
      soundClone.volume = master * sfx * 0.6;
      soundClone.play().catch(() => {});
      setTimeout(() => soundClone.remove(), 1000);
    } catch(e) {}
  };

  // Nükleer Karar / Uyarı Sesleri (Web Audio API Generator)
  const playTerminalBeep = (type = 'error') => {
    if (settings.isMuted) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      const vol = (settings.masterVolume / 100) * (settings.sfxVolume / 100);
      
      if (type === 'error') {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.3);
        gainNode.gain.setValueAtTime(vol * 0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.3);
      } else if (type === 'success') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
        oscillator.frequency.setValueAtTime(660, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(vol * 0.2, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.3);
      } else if (type === 'alert') {
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(vol * 0.1, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(vol * 0.1, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 0.15);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.15);
      } else if (type === 'heavy') {
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(100, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(10, audioCtx.currentTime + 0.5);
        gainNode.gain.setValueAtTime(vol * 0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.5);
      } else if (type === 'gunshot') {
        // Silah sesi için White Noise (Beyaz gürültü) üretimi
        const bufferSize = audioCtx.sampleRate * 0.4;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, audioCtx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.2);
        
        const noiseGain = audioCtx.createGain();
        noiseGain.gain.setValueAtTime(vol * 2.0, audioCtx.currentTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        
        // Merminin tok sesi için düşük frekanslı osilatör (Thump)
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(120, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(10, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(vol * 1.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(audioCtx.destination);
        
        noise.start(audioCtx.currentTime);
        oscillator.start(audioCtx.currentTime);
        
        setTimeout(() => {
          try { noise.disconnect(); } catch(e){}
        }, 500);
      }
    } catch(e) {}
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentScreen !== displayScreen) {
      setIsFading(true);
      setTimeout(() => {
        setDisplayScreen(currentScreen);
        setIsFading(false);
      }, 800);
    }
  }, [currentScreen, displayScreen]);



  useEffect(() => {
    localStorage.setItem('ORBITAL_NADIR_SETTINGS', JSON.stringify(settings));
    localStorage.setItem('ORBITAL_NADIR_COLLECTION', JSON.stringify(discoveredCharacters));
    
    // Global Visual Settings via Document Root

    // Global Visual Settings via Document Root
    const root = document.documentElement;
    root.style.setProperty('--setting-brightness', `${settings.brightness}%`);
    root.style.setProperty('--setting-contrast', `${settings.contrast}%`);
    root.style.setProperty('--setting-saturation', `${settings.saturation}%`);
    root.style.setProperty('--setting-scanlines', settings.scanlinesIntensity / 100);
    root.style.setProperty('--font-family-main', settings.dyslexiaFont ? "'OpenDyslexic', sans-serif" : "'JetBrains Mono', monospace");
    root.style.setProperty('--setting-ui-scale', settings.uiScale ? `${settings.uiScale / 100}` : '1');
    root.style.setProperty('--setting-grain-opacity', settings.showGrain ? '0.15' : '0');

    // Dynamic Filtering Pipeline Base
    const s_bright = settings.brightness !== undefined ? settings.brightness : 100;
    const s_contrast = settings.contrast !== undefined ? settings.contrast : 100;
    const s_sat = settings.saturation !== undefined ? settings.saturation : 100;
    let filters = `brightness(${s_bright}%) contrast(${s_contrast}%) saturate(${s_sat}%)`;
    
    // Hardware Emulation (Colorblind & Vibes)
    if (settings.colorblindMode === 'protanopia') filters += ' sepia(30%) hue-rotate(-15deg) saturate(120%)';
    if (settings.colorblindMode === 'deuteranopia') filters += ' sepia(20%) hue-rotate(10deg) saturate(130%)';
    if (settings.colorblindMode === 'tritanopia') filters += ' sepia(40%) hue-rotate(180deg) saturate(80%)';
    
    if (settings.colorFilter === 'matrix') filters += ' sepia(100%) hue-rotate(90deg) saturate(200%)';
    if (settings.colorFilter === 'blood') filters += ' sepia(100%) hue-rotate(-50deg) saturate(300%)';
    if (settings.colorFilter === 'cold') filters += ' sepia(50%) hue-rotate(180deg) saturate(150%)';

    document.body.style.filter = filters;

    if (settings.highContrast) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }

  }, [settings, discoveredCharacters]);

  // Global Button Hover and Click Sound Engine
  useEffect(() => {
    const handleMouseOver = (e) => {
      // Sayfadaki HERHANGİ BİR butona mouse gelince o "tok" sesi tetikler
      if (e.target.closest('button')) {
        playHoverSound();
      }
    };
    const handleMouseDown = (e) => {
      // Butona KLİKLENDİĞİNDE de kabul/onay sesi tetikler
      // mousedown kullanıyoruz ki click işlemiyle element DOM'dan silinmeden ses garanti tetiklensin.
      if (e.target.closest('button') || e.target.classList.contains('terminal-btn') || e.target.classList.contains('menu-button-rect')) {
        playClickSound();
      }
    };
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [settings.isMuted, settings.masterVolume, settings.sfxVolume, isInitialized]);

  // Global ESC Listener for Pause Menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle pause only when in game and not game over
      if (e.key === 'Escape' && currentScreen === 'game' && !isGameOver) {
        setIsPaused(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen, isGameOver]);

  useEffect(() => {
    // Game Over şartları sadece aktif oyundayken (game ekranı) kontrol edilmeli.
    // Aksi takdirde ana menüye dönüşte asenkron statüs güncellemeleri döngü yaratabiliyor.
    if (!isGameOver && currentScreen === 'game') {
      if (stats.safety < 30) { setEndingType('bad'); setIsGameOver(true); }
      else if (stats.morale < 25) { setEndingType('judgment'); setIsGameOver(true); }
    }
  }, [stats.safety, stats.morale, isGameOver, currentScreen]);

  const scenarios = SCENARIOS_BASE[settings.language] || SCENARIOS_BASE['tr'];
  const dayKey = `day${currentDay}`;
  const allDayScenarios = scenarios[dayKey] || [];
  
  // Filter scenarios based on events and conditions
  const dayScenarios = allDayScenarios.filter(s => {
    if (!s.condition) return true;
    // Dinamik Koşul Kontrolü: events state'indeki herhangi bir flag'i kontrol edebilir.
    // Eğer şart bir '!' ile başlıyorsa (örn: '!gangAggro'), flag'in false olmasını bekler.
    if (s.condition.startsWith('!')) {
      const flag = s.condition.substring(1);
      return !events[flag];
    }
    return !!events[s.condition];
  });

  const scenario = dayScenarios[currentScenarioIndex] || dayScenarios[0];

  useEffect(() => {
    if (scenario) {
      setCurrentNodeKey(scenario.initialNode);
      setGameState('talking');
      if (!discoveredCharacters.includes(scenario.id)) {
        setDiscoveredCharacters(prev => [...prev, scenario.id]);
      }
    }
  }, [currentScenarioIndex, currentDay, scenario]);

  // ─── DATA MIGRATION: REMOVE DUPLICATE BOZKIR IDS FROM OLD SAVES ───────
  useEffect(() => {
    const duplicates = ["bozkir_scout_d11", "bozkir_last_stand_d13"];
    const hasOldIds = discoveredCharacters.some(id => duplicates.includes(id));
    
    if (hasOldIds) {
      setDiscoveredCharacters(prev => {
        const filtered = prev.filter(id => !duplicates.includes(id));
        if (!filtered.includes("werewolf_bozkir_d6")) {
          filtered.push("werewolf_bozkir_d6");
        }
        return filtered;
      });
    }
  }, [discoveredCharacters]);

  const currentNode = scenario?.nodes[currentNodeKey];

  const handleChoice = (nextNode) => {
    setCurrentNodeKey(nextNode);
  };

  const handleScenarioOutcome = (outcomeType) => {
    // Olay bazlı dinamik ses ve sarsıntı
    if (outcomeType === 'pass') {
      playTerminalBeep('success');
    } else if (outcomeType === 'shoot') {
      playTerminalBeep('gunshot');
      setCharTransition('shake-heavy');
      setTimeout(() => setCharTransition(''), 500);
    } else if (outcomeType === 'arrest') {
      playTerminalBeep('heavy');
      setCharTransition('shake-heavy');
      setTimeout(() => setCharTransition(''), 500);
    } else {
      playTerminalBeep('error');
      setCharTransition('glitch-screen-tear');
      setTimeout(() => setCharTransition(''), 400);
    }

    setTimeout(() => {
      const dayKey = `day${currentDay}`;
    const dayScenarios = SCENARIOS_BASE[settings.language][dayKey] || SCENARIOS_BASE['tr'][dayKey];
    const scenario = dayScenarios[currentScenarioIndex];
    if (!scenario) return;

    let outcome = scenario.outcomes[outcomeType];
    
    // Eğer karara ait özel metin senaryoda yoksa (örn. shoot, deny, arrest),
    // varsayılan 'pass' (içeri alındı) metnine hatalı geçiş yapmayı engelle:
    if (!outcome) {
      const genericOutcomes = {
        deny: {
          texts: [
            "Kapıyı yüzüne kapattın. Adımları sise karışıp yavaşça kayboldu.",
            "Yalvarmalarına aldırış etmedin. Sektör-7'nin güvenliği her şeyden önemli.",
            "Soğuk bir ifadeyle geçişini reddettin. Dışarıdaki karanlık onu yutacak."
          ],
          effect: { safety: 5, morale: -10 }
        },
        arrest: {
          texts: [
            "Güvenlik birimleri onu yaka paça hücreye sürükledi. Gözetim altında kalması en iyisi.",
            "Kelepçeler takılırken hiç direnemedi. Sektörün karanlık hücreleri onu bekliyor.",
            "Soruşturma için içeri alındı. Artık özgürlüğü yok, ama hayatta."
          ],
          effect: { safety: 15, morale: -15 }
        },
        shoot: {
          texts: [
            "Tetiği çektin. Silah sesi sisi yardı ve bedeni yere yığıldı. Bir tehlike daha bertaraf edildi.",
            "Kanı Sektör-7'nin paslı kapılarına sıçradı. Acımasız, ama kesin bir çözüm.",
            "Sektör sakinleri bu soğukkanlı infazı uzun süre unutmayacak."
          ],
          effect: { safety: 25, morale: -30 }
        }
      };

      const generic = genericOutcomes[outcomeType];
      if (generic) {
        const randomText = generic.texts[Math.floor(Math.random() * generic.texts.length)];
        outcome = {
          text: `[STANDART PROTOKOL - ${outcomeType.toUpperCase()}] ${randomText}`,
          effect: generic.effect
        };
      } else {
        // Tanımsız kararlar veya missing 'pass' logu için garantili dönüş
        outcome = scenario.outcomes.pass || { text: "Operasyon sisteme kaydedildi.", effect: {} };
      }
    }
    
    // Uygulanan İstatistiksel Etkiler
    if (outcome.effect) {
      setStats(prev => ({
        safety: Math.max(0, Math.min(100, prev.safety + (outcome.effect.safety || 0))),
        morale: Math.max(0, Math.min(100, prev.morale + (outcome.effect.morale || 0)))
      }));
    }

    // Seçimlerin Kalıcı Nükleer Etkileri (Event Flags)
    if (outcome.eventFlags) {
      setEvents(prev => ({
        ...prev,
        ...outcome.eventFlags
      }));
    }

    setResultMessage(outcome.text);
    setGameState('result');

    // İÇERİ ALINAN KİŞİYİ SIĞINAK'A EKLE
    if (outcomeType === 'pass' && scenario?.id) {
      setShelterResidents(prev => {
        if (prev[scenario.id]) return prev; // Zaten varsa tekrar ekleme
        return {
          ...prev,
          [scenario.id]: createNewResident(scenario.id)
        };
      });
    }
    
    // Log Kaydı
    setDailyLog(prev => [...prev, {
      name: scenario.name,
      decision: outcomeType,
      text: outcome.text
    }]);
    }, 0);
  };

  const nextCharacter = () => {
    if (currentScenarioIndex < dayScenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
    } else {
      setCurrentScreen('day-end');
    }
  };

  // Auto-advance feature when gameState === 'result'
  useEffect(() => {
    let timer;
    if (gameState === 'result' && settings.autoAdvance) {
      timer = setTimeout(() => {
        nextCharacter();
      }, 3500); // 3.5s bekle ve otomatik atla
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [gameState, settings.autoAdvance, currentScenarioIndex]);

  const handleNextDay = () => {
    if (currentDay === 14) { 
      // Handle ending calculation
      setIsGameOver(true);
      if (events.silverEnding) {
        setEndingType('bad');
      } else if (events.humanEnding) {
        setEndingType('neutral');
      } else {
        setEndingType('good');
      }
    } else {
      setCurrentScreen('daily-news');
      // Ekran tam karardığında (400ms) verileri güncelle ki arkada yazı değişmesi görünmesin
      setTimeout(() => {
        setDailyLog([]); setNightNotes([]);
        setCurrentScenarioIndex(0); setCurrentDay(prev => prev + 1);
      }, 400);
    }
  };

  const handleBootSystem = () => {
    setIsInitialized(true);
    setIsBooting(true);
  };

  const handleNewGame = () => {
    setCurrentScreen('intro');
    // Ekran tam siyaha büründüğünde tüm verileri sıfırla ama direkt 1. günden başlat
    setTimeout(() => {
      setStats({ safety: 85, morale: 80 });
      setCurrentDay(1); setCurrentScenarioIndex(0);
      setDailyLog([]); setIsGameOver(false); setEndingType(null);
      setEvents({ isGangAggro: false, babyInSektor: false, arasTrust: 0, isInfected: false });
      setShelterResidents({});
      setShowShelter(false);
      // Yeni oyun başlarken eski kaydı temizle
      localStorage.removeItem('ORBITAL_NADIR_SAVE');
      setHasSaveGame(false);
    }, 400);
  };

  const handleQuitToMenu = () => {
    setShowPauseMenu(false);
    setCurrentScreen('menu');
  };

  // ── KAYIT / YÜKLEME SİSTEMİ ──────────────────────────────────
  const SAVE_KEY = 'ORBITAL_NADIR_SAVE';

  const saveGame = () => {
    const saveData = {
      currentDay,
      currentScenarioIndex,
      stats,
      events,
      dailyLog,
      shelterResidents,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
    setHasSaveGame(true);
    // Kısa görsel geri bildirim
    setSaveFlash(true);
    setTimeout(() => setSaveFlash(false), 1500);
  };

  const loadGame = () => {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return;
    try {
      const d = JSON.parse(raw);
      setCurrentDay(d.currentDay ?? 1);
      setCurrentScenarioIndex(d.currentScenarioIndex ?? 0);
      setStats(d.stats ?? { safety: 85, morale: 80 });
      setEvents(d.events ?? { isGangAggro:false, babyInSektor:false, arasTrust:0, isInfected:false });
      setDailyLog(d.dailyLog ?? []);
      setShelterResidents(d.shelterResidents ?? {});
      setIsGameOver(false);
      setCurrentScreen('game');
    } catch(e) {
      console.error('Kayıt yüklenemedi:', e);
    }
  };

  const [saveFlash, setSaveFlash] = useState(false);
  // ─────────────────────────────────────────────────────────────

  const allCharactersDict = SCENARIOS_BASE[settings.language] || SCENARIOS_BASE['tr'] || {};
  const rawArray = Object.values(allCharactersDict).flatMap(dayArray => Array.isArray(dayArray) ? dayArray : []);
  // Deduplicate by ID to prevent multiple cards for the same character (e.g. Bozkır)
  const allCharactersArray = Array.from(new Map(rawArray.map(item => [item.id, item])).values());


  return (
    <div className={`app-root ${settings.textSpeed}`}>

      {isGameOver && <FailStateScreen 
        onRestart={() => { 
          setCurrentScreen('menu'); 
          // Olası glitch'leri engellemek için ekran tam kararana kadar (400ms) bekle ve sonra verileri sıfırla
          setTimeout(() => {
            setStats({ safety: 85, morale: 80 });
            setCurrentDay(1);
            setCurrentScenarioIndex(0);
            setEvents({ isGangAggro: false, babyInSektor: false, arasTrust: 0, isInfected: false });
            setIsGameOver(false); 
          }, 400);
        }} 
        endingType={endingType} 
        day={currentDay}
        t={t} 
        onHover={playHoverSound}
        lang={settings.language}
      />}
      {!isInitialized && (
        <div className="init-audio-gate-overlay">
          <div className="init-noise"></div>
          <button className="init-btn flicker" onClick={handleBootSystem}>
            [ ACCESS SECTOR-7 GATEWAY TERMINAL ]
          </button>
        </div>
      )}
      
      <div className={`cinematic-transition-overlay ${isFading ? 'active' : ''}`}>
        <div className="transition-noise"></div>
        <div className="flicker-transition-text">LOADING SECTOR-7 PROTOCOLS...</div>
      </div>

      <AestheticOverlays settings={settings} />
      
      {isBooting && <TerminalBootSequence onFinish={() => { setIsBooting(false); setCurrentScreen('menu'); }} />}

      {(showSettings || isPaused) && (
        <SettingsMenu 
          settings={settings} 
          updateSetting={(k, v) => setSettings(p => ({ ...p, [k]: v }))} 
          onClose={() => { setShowSettings(false); setIsPaused(false); }} 
          t={t}
          isPauseMode={isPaused}
          onSaveGame={saveGame}
          saveFlash={saveFlash}
          onQuitToMenu={() => {
            setCurrentScreen('menu');
            setTimeout(() => {
              setIsPaused(false);
            }, 400);
          }}
        />
      )}

      {showCollection && (
        <CollectionMenu 
          discoveredCharacters={discoveredCharacters}
          allCharacters={allCharactersArray}
          shelterResidents={shelterResidents}
          onClose={() => setShowCollection(false)}
          t={t}
        />
      )}

      {displayScreen === 'menu' && (
        <MainMenu
          onStartGame={handleNewGame}
          onResumeGame={loadGame}
          onOpenSettings={() => setShowSettings(true)}
          onOpenCollection={() => setShowCollection(true)}
          hasSaveGame={hasSaveGame}
          t={t}
          onHover={playHoverSound}
        />
      )}

      {displayScreen === 'intro' && <IntroScreen onFinish={() => setCurrentScreen('daily-news')} lang={settings.language} t={t} onCharTyped={playTypeSound} />}

      {displayScreen === 'daily-news' && (
        <DailyNewsScreen 
          day={currentDay} 
          shelterResidents={shelterResidents}
          onContinue={() => setCurrentScreen('game')} 
          lang={settings.language} 
          onCharTyped={playTypeSound} 
        />
      )}

      {displayScreen === 'day-end' && <DayEndScreen 
        day={currentDay} 
        dailyLog={dailyLog} 
        stats={stats} 
        onNextDay={handleNextDay} 
        t={t}
        onOpenShelter={() => setShowShelter(true)}
        hasResidents={Object.keys(shelterResidents).length > 0}
      />}

      {showShelter && (
        <ShelterScreen
          residents={shelterResidents}
          day={currentDay}
          lang={settings.language}
          onClose={() => setShowShelter(false)}
          onCharTyped={playTypeSound}
          onBondChange={(charId, newBond, category, effect, incrementCount = true) => {
            setShelterResidents(prev => ({
              ...prev,
              [charId]: {
                ...prev[charId],
                bondLevel: newBond,
                conversationCounts: {
                  ...(prev[charId]?.conversationCounts || { low: 0, medium: 0, high: 0 }),
                  [category || 'low']: ((prev[charId]?.conversationCounts?.[category || 'low'] || 0) + (incrementCount ? 1 : 0))
                }
              }
            }));

            // BAĞ KURDUKÇA KÜRESEL MORALİ DE YÜKSELT (YENİ MEKANİK)
            if (effect && effect > 0) {
              setStats(prev => ({
                ...prev,
                morale: Math.min(100, Math.floor(prev.morale + (effect / 2))) // Verilen bağ etkisinin yarısı kadar moral artar
              }));
            }
          }}
          onSecretUnlocked={(charId, dialogue) => {
            setShelterResidents(prev => ({
              ...prev,
              [charId]: {
                ...prev[charId],
                unlockedSecrets: [...(prev[charId]?.unlockedSecrets || []), dialogue.text]
              }
            }));
          }}
        />
      )}

      {displayScreen === 'game' && scenario && (
        <div className={`game-container surveillance-layout ${stats.safety < 30 || stats.morale < 30 ? 'critical-state' : ''}`}>
          <div className="fog-layer"></div>
          <div className="cctv-readout cctv-top-left">CAM 07 - SECTOR 7 GATEWAY</div>
          <div className="cctv-readout cctv-top-right"><span className="rec-dot"></span>REC {systemTime}</div>
          
          <div className="stats-header-integrated-top">
            <div className="stat-pill">{t('day')}: {currentDay}/14</div>
            <div className={`stat-pill ${stats.safety < 50 ? 'stat-warning' : ''}`}>{t('safety')}: {stats.safety}%</div>
            <div className={`stat-pill ${stats.morale < 50 ? 'stat-warning' : ''}`}>{t('morale')}: {stats.morale}%</div>
          </div>

          <div className="layout-horizontal">
            <div className="character-column">
              <div className={`character-portrait-wrapper ${charTransition}`}>
                <div className="portrait-noise"></div>
                <img src={getImagePath(scenario.image)} alt={scenario.name} className="character-portrait-img" />
                <div className="character-name-badge">{scenario.name}</div>
              </div>
            </div>

            <div className="info-column">
              <div className="story-terminal">
                <div className="terminal-hex-bg">
                  <div className="hex-scroller">{HEX_DATA}</div>
                </div>
                <div className="dialogue-display">
                  <TypewriterText 
                    key={currentNodeKey}
                    text={currentNode?.text || ""} 
                    speed={settings.textSpeed === 'fast' ? 20 : 45}
                    onCharTyped={playTypeSound}
                    textGlitch={settings.textGlitch}
                  />
                  {gameState === 'result' && <p className="result-text-flash">{resultMessage}</p>}
                </div>

                <div className="action-hub">
                  {gameState === 'talking' && !currentNode?.isFinal && currentNode?.choices.map((c, i) => (
                    <button key={i} className="terminal-btn" onClick={() => handleChoice(c.nextNode)} onMouseEnter={playHoverSound}>
                      {'>'} {c.text}
                    </button>
                  ))}

                  {gameState === 'talking' && currentNode?.isFinal && currentDay !== 14 && (
                    <div className="decision-grid">
                      <button className="decision-btn btn-pass cyber-glitch-hover" onClick={() => handleScenarioOutcome('pass')} onMouseEnter={playHoverSound}>[ {t('pass')} ]</button>
                      <button className="decision-btn btn-arrest cyber-glitch-hover" onClick={() => handleScenarioOutcome('arrest')} onMouseEnter={playHoverSound}>[ {t('arrest')} ]</button>
                      <button className="decision-btn btn-deny cyber-glitch-hover" onClick={() => handleScenarioOutcome('deny')} onMouseEnter={playHoverSound}>[ {t('deny')} ]</button>
                      <button className="decision-btn btn-shoot cyber-glitch-hover" onClick={() => handleScenarioOutcome('shoot')} onMouseEnter={playHoverSound}>[ {t('shoot_isabetli')} ]</button>
                    </div>
                  )}
                  {gameState === 'talking' && currentNode?.isFinal && currentDay === 14 && (
                    <div className="decision-grid" style={{ gridTemplateColumns: '1fr' }}>
                      {currentNodeKey === 'decision_ready_good' && (
                        <button className="decision-btn btn-pass cyber-glitch-hover" style={{borderColor: '#00ff41', color: '#00ff41'}} onClick={() => handleScenarioOutcome('pass')} onMouseEnter={playHoverSound}>[ {t('ending_good_btn')} ]</button>
                      )}
                      {currentNodeKey === 'decision_ready_bad' && (
                        <button className="decision-btn btn-deny cyber-glitch-hover" style={{borderColor: '#ff0000', color: '#ff0000'}} onClick={() => handleScenarioOutcome('deny')} onMouseEnter={playHoverSound}>[ {t('ending_bad_btn')} ]</button>
                      )}
                      {currentNodeKey === 'decision_ready_hero' && (
                        <button className="decision-btn btn-shoot cyber-glitch-hover" style={{borderColor: '#ffcc00', color: '#ffcc00'}} onClick={() => handleScenarioOutcome('shoot')} onMouseEnter={playHoverSound}>[ {t('ending_neutral_btn')} ]</button>
                      )}
                    </div>
                  )}

                  {gameState === 'result' && (
                    <button className="terminal-btn next-btn" onClick={nextCharacter} onMouseEnter={playHoverSound}>{t('next_char')}</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isPaused && displayScreen === 'game' && !isGameOver && (
        <div className="fail-state-overlay surveillance-layout" style={{ zIndex: 999, backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(15px)' }}>
          <div className="fog-layer"></div>
          <div className="fail-content" style={{ backgroundColor: 'rgba(0, 15, 0, 0.6)', backdropFilter: 'blur(20px)', padding: '50px', border: '2px solid var(--primary-neon)' }}>
            <h2 className="ending-title" style={{ fontSize: '3rem', marginBottom: '40px' }}>{t('system_paused_title')}</h2>
            <div className="action-hub" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              <button className="terminal-btn" style={{ width: '300px', textAlign: 'center' }} onClick={() => setIsPaused(false)} onMouseEnter={playHoverSound}>
                [ {t('continue_shift')} ]
              </button>
              <button className="terminal-btn" style={{ width: '300px', textAlign: 'center' }} onClick={() => { setIsPaused(false); setShowSettings(true); }} onMouseEnter={playHoverSound}>
                [ {t('settings')} ]
              </button>
              <button className="terminal-btn" style={{ width: '300px', textAlign: 'center', borderColor: '#ff003c', color: '#ff003c' }} onClick={() => { setIsPaused(false); setCurrentScreen('menu'); }} onMouseEnter={playHoverSound}>
                [ {t('leave_gate')} ]
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
