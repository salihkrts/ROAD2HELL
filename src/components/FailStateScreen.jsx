import React, { useEffect, useState } from 'react';
import TypewriterText from './TypewriterText';
import './FailStateScreen.css';

const ENDINGS_TRANSLATIONS = {
  tr: {
    back_to_menu: "[ ANA MENÜYE DÖN ]",
    epic_good: {
      title: "🌌 GÜN 14: GÜMÜŞ BİR ŞAFAK",
      messages: [
        "Aras'ın fedakarlığı devasa bir kalkan yarattı.",
        "Titreşen gümüş ışık, Sektör-7'yi ve dünyayı nükleer karanlıktan arındırdı.",
        "Sis dışarıda kaldı, Sektör-7 ise insanlığın son kalesi olarak yaşamaya devam ediyor.",
        "Bu destansı zafer... senin ve Aras'ın sarsılmaz iradesinin sonucuydu."
      ]
    },
    epic_neutral: {
      title: "☢️ GÜN 14: KÜLLER VE ONUR",
      messages: [
        "Nükleer alevler Sektör-7'yi yuttu.",
        "Vera, ordusu, sis ve sen... Hepiniz aynı kül yığınına dönüştünüz.",
        "Sektör-7 düştü, ama sisin dünyaya yayılması sonsuza dek engellendi.",
        "İnsanlık... bu asil fedakarlığı asla unutmayacak."
      ]
    },
    epic_bad: {
      title: "🧪 GÜN 14 DENEY BAŞARISIZ: SIFIRINCI DENEK",
      messages: [
        "14 gün dayandın, ama sonunda iradeni gümüşe teslim ettin.",
        "Vera'nın laboratuvarlarında, yeşil radyasyonlu bir deney tüpünde donduruldun.",
        "İnsanlığın son ışığı söndü, kusursuz ve hissiz Gümüş Çağ başladı.",
        "Bu karanlık çağ... senin teslimiyetinin sonucuydu."
      ]
    },
    good: {
      title: "🌅 GÜN 14: DUVARLAR AYAKTA",
      messages: [
        "Sis dışarıda kaldı, ama Sektör-7 içeride yaşıyor.",
        "Çocuklar gülüyor, ocaklar tütüyor.",
        "Dünya hala gri olabilir ama burası artık bir yuva.",
        "Bu zafer... senin kararlarının sonucuydu."
      ]
    },
    bad: {
      title: "💀 GÜN {day} SİSTEM ÇÖKTÜ: KAOS",
      messages: [
        "Güvenlik bariyerleri içeriden parçalandı.",
        "İhanet, sisten daha hızlı yayıldı.",
        "Sektör-7 artık bir mezarlık sessizliğinde.",
        "Güvenlik zafiyeti yüzünden {day}. günde kaybedildin. Bu çöküş... senin kararlarının sonucuydu."
      ]
    },
    judgment: {
      title: "⚖️ GÜN {day} KARAR: SÜRGÜN",
      messages: [
        "Halkın umudunu yok ettin asker.",
        "Silahını ve rozetini masaya bırak.",
        "Artık kapının diğer tarafındasın.",
        "Bozulan moral ve isyan sebebiyle {day}. günde Sektör'den sürüldün."
      ]
    },
    death: {
      title: "🕯️ GÜN {day} SON NÖBET: ÖLÜM",
      messages: [
        "Son mermi de harcandı.",
        "Gözlerin ağırlaşıyor, buz gibi bir sis ciğerlerini dolduruyor.",
        "Veda etmeye zaman bile kalmadı.",
        "{day}. günde nefesin kesildi. Bu ölüm... senin kararlarının sonucuydu."
      ]
    },
    default: {
      title: "🌫️ GÜN {day} SİSİN ÇAĞRISI",
      messages: [
        "Sektör-7 artık sadece gri bir rüya.",
        "Hepimiz o dumanın birer parçasıyız.",
        "Acı bitti, artık biz sisiz.",
        "{day}. günde sisin bir parçası oldun. Bu dönüşüm... senin kararlarının sonucuydu."
      ]
    }
  },
  en: {
    back_to_menu: "[ RETURN TO HUB ]",
    epic_good: {
      title: "🌌 CYCLE 14: A SILVER DAWN",
      messages: [
        "Aras's sacrifice created a massive shield.",
        "The shimmering silver light cleansed Sector-7 and the world from nuclear darkness.",
        "The Mist remained outside, while Sector-7 lives on as humanity's last stronghold.",
        "This epic victory... was the result of your and Aras's unwavering resolve."
      ]
    },
    epic_neutral: {
      title: "☢️ CYCLE 14: ASHES AND HONOR",
      messages: [
        "Nuclear flames engulfed Sector-7.",
        "Vera, her army, the Mist, and you... All turned to the same pile of ashes.",
        "Sector-7 fell, but the spread of the Mist to the world was stopped forever.",
        "Humanity... will never forget this noble sacrifice."
      ]
    },
    epic_bad: {
      title: "🧪 CYCLE 14 EXPERIMENT FAILED: PATIENT ZERO",
      messages: [
        "You endured for 14 days, but in the end, you surrendered your will to the silver.",
        "You were cryopreserved in a green radioactive test tube inside Vera's labs.",
        "Humanity's last light went out; the flawless, emotionless Silver Age began.",
        "This dark age... was the result of your surrender."
      ]
    },
    good: {
      title: "🌅 CYCLE 14: WALLS STANDING",
      messages: [
        "The Mist remained outside, but Sector-7 lives on inside.",
        "Children laugh, hearths burn.",
        "The world may still be grey, but this place is now a home.",
        "This victory... was the result of your decisions."
      ]
    },
    bad: {
      title: "💀 CYCLE {day} SYSTEM COLLAPSED: CHAOS",
      messages: [
        "Security barriers were shattered from within.",
        "Treason spread faster than the Mist.",
        "Sector-7 is now engulfed in a graveyard silence.",
        "You lost on cycle {day} due to a security breach. This collapse... was the result of your decisions."
      ]
    },
    judgment: {
      title: "⚖️ CYCLE {day} JUDGMENT: EXILE",
      messages: [
        "You destroyed the people's hope, soldier.",
        "Leave your gun and badge on the table.",
        "You are now on the other side of the gate.",
        "You were exiled from the Sector on cycle {day} due to broken morale and mutiny."
      ]
    },
    death: {
      title: "🕯️ CYCLE {day} LAST WATCH: DEATH",
      messages: [
        "The last bullet has been spent.",
        "Your eyes grow heavy, an icy mist fills your lungs.",
        "There is no time left to say goodbye.",
        "Your breath stopped on cycle {day}. This death... was the result of your decisions."
      ]
    },
    default: {
      title: "🌫️ CYCLE {day} CALL OF THE MIST",
      messages: [
        "Sector-7 is now just a grey dream.",
        "We are all parts of that smoke.",
        "The pain is over, now we are the Mist.",
        "You became part of the Mist on cycle {day}. This transformation... was the result of your decisions."
      ]
    }
  },
  ru: {
    back_to_menu: "[ В ГЛАВНОЕ МЕНЮ ]",
    epic_good: {
      title: "🌌 ДЕНЬ 14: СЕРЕБРЯНЫЙ РАССВЕТ",
      messages: [
        "Самопожертвование Араса создало колоссальный щит.",
        "Мерцающий серебряный свет очистил Сектор-7 и мир от ядерной тьмы.",
        "Туман остался снаружи, а Сектор-7 продолжает жить как последний оплот человечества.",
        "Эта эпическая победа... стала результатом вашей с Арасом непоколебимой воли."
      ]
    },
    epic_neutral: {
      title: "☢️ ДЕНЬ 14: ПЕПЕЛ И ЧЕСТЬ",
      messages: [
        "Ядерное пламя поглотило Сектор-7.",
        "Вера, её армия, туман и ты... Все превратились в одну кучу пепла.",
        "Сектор-7 пал, но распространение тумана по миру предотвращено навсегда.",
        "Человечество... никогда не забудет это благородное самопожертвование."
      ]
    },
    epic_bad: {
      title: "🧪 ДЕНЬ 14 ЭКСПЕРИМЕНТ ПРОВАЛЕН: НУЛЕВОЙ ПАЦИЕНТ",
      messages: [
        "Вы продержались 14 дней, но в конце концов уступили свою волю серебру.",
        "Вас заморозили в зеленой радиоактивной пробирке в лабораториях Веры.",
        "Последний свет человечества угас, началась безупречная и бесчувственная Серебряная Эра.",
        "Эта темная эпоха... стала результатом вашей капитуляции."
      ]
    },
    good: {
      title: "🌅 ДЕНЬ 14: СТЕНЫ СТОЯТ",
      messages: [
        "Туман остался снаружи, но Сектор-7 живет внутри.",
        "Дети смеются, очаги дымятся.",
        "Мир все еще может быть серым, но это место теперь — дом.",
        "Эта победа... стала результатом ваших решений."
      ]
    },
    bad: {
      title: "💀 ДЕНЬ {day} СИСТЕМА РУХНУЛА: ХАОС",
      messages: [
        "Барьеры безопасности были разрушены изнутри.",
        "Предательство распространялось быстрее, чем туман.",
        "Сектор-7 теперь погружен в кладбищенскую тишину.",
        "Вы проиграли на {day}-й день из-за бреши в безопасности. Этот крах... стал результатом ваших решений."
      ]
    },
    judgment: {
      title: "⚖️ ДЕНЬ {day} ВЕРДИКТ: ИЗГНАНИЕ",
      messages: [
        "Ты уничтожил надежду народа, солдат.",
        "Оставь свое оружие и жетон на столе.",
        "Теперь ты по другую сторону ворот.",
        "Вас изгнали из Сектора на {day}-й день из-за подрыва морального духа и бунта."
      ]
    },
    death: {
      title: "🕯️ ДЕНЬ {day} ПОСЛЕДНИЙ ДОЗОР: СМЕРТЬ",
      messages: [
        "Последний патрон израсходован.",
        "Твои глаза тяжелеют, ледяной туман наполняет твои легкие.",
        "Не осталось времени даже попрощаться.",
        "Ваше дыхание остановилось на {day}-й день. Эта смерть... стала результатом ваших решений."
      ]
    },
    default: {
      title: "🌫️ ДЕНЬ {day} ПРИЗЫВ ТУМАНА",
      messages: [
        "Сектор-7 теперь — просто серый сон.",
        "Мы все — частицы этого дыма.",
        "Боль утихла, теперь мы — туман.",
        "Вы стали частью тумана на {day}-й день. Это превращение... стала результатом ваших решений."
      ]
    }
  }
};

function FailStateScreen({ onRestart, endingType, day = 1, t, onHover, lang = 'tr' }) {
  const [showButton, setShowButton] = useState(false);

  const getEndingContent = () => {
    const activeLang = ENDINGS_TRANSLATIONS[lang] || ENDINGS_TRANSLATIONS['tr'];
    let key = endingType;
    let isEpic = false;
    let image = "";

    if (day === 14) {
      isEpic = true;
      if (endingType === 'good') {
        key = 'epic_good';
        image = "/src/assets/epic_win.png";
      } else if (endingType === 'neutral') {
        key = 'epic_neutral';
        image = "/src/assets/character_general_commander_h2d_1774696559230.png";
      } else {
        key = 'epic_bad';
        image = "/src/assets/epic_fail_tube.png";
      }
    } else {
      if (endingType === 'good') {
        key = 'good';
        image = "/src/assets/background_visual_check_1774664813480.webp";
      } else if (endingType === 'bad') {
        key = 'bad';
        image = "/src/assets/character_enfakte_monster_h2d_1774696408196.png";
      } else if (endingType === 'judgment') {
        key = 'judgment';
        image = "/src/assets/character_general_commander_h2d_1774696559230.png";
      } else if (endingType === 'death') {
        key = 'death';
        image = "/src/assets/character_serseri_punk_1774689641041.png";
      } else {
        key = 'default';
        image = "/src/assets/character_golge_mutant_leader_d7_h2d_1774805507828.png";
      }
    }

    const data = activeLang[key] || activeLang['default'];
    
    // Replace {day} placeholder
    const title = data.title.replace("{day}", day);
    const messages = data.messages.map(msg => msg.replace("{day}", day));

    return {
      title,
      messages,
      image,
      isEpic
    };
  };

  const content = getEndingContent();

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), (content.messages.length * 2000) + 1000);
    return () => clearTimeout(timer);
  }, [content.messages.length]);

  return (
    <div className={`fail-state-overlay surveillance-layout flicker standard-screen-entry ${content.isEpic ? (endingType === 'good' ? 'epic-ending epic-win' : 'epic-ending epic-fail') : ''}`}>
      <div className="fail-bg-image" style={{ backgroundImage: `url(${content.image})` }}></div>
      <div className="fog-layer"></div>
      
      <div className="fail-content">
        <h1 className="ending-title">{content.title}</h1>
        <div className="narrative-terminal">
          {content.messages.map((msg, index) => (
            <div key={index} className={`fail-msg-row ${index === content.messages.length - 1 ? 'critical-final' : ''}`}>
              <TypewriterText 
                text={msg} 
                speed={50} 
                delay={index * 2000}
              />
            </div>
          ))}
        </div>

        {showButton && (
          <button 
            className="restart-btn fade-in-btn" 
            onClick={onRestart}
            onMouseEnter={onHover}
          >
            {ENDINGS_TRANSLATIONS[lang]?.back_to_menu || '[ ANA MENÜYE DÖN ]'}
          </button>
        )}
      </div>
    </div>
  );
}

export default FailStateScreen;
