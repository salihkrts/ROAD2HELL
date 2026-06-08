const fs = require('fs');
const path = require('path');

const NEW_SCENARIOS = {
  day9: [
    {
      id: "d9_gang_hostile",
      name: "Çete Lideri (Aziz)",
      role: "mutant",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "[Hırıltılı bir ses, yüzünde gri lekeler] İçerideki 'Can' adındaki o faresi benim! Onu bana verin, yoksa bu kapının mühürleri bile sizi kurtaramaz. Toz yutmaya hazır mısınız?!", 
          choices: [
            { text: "Can bizim korumamız altında! Buradan defol delikanlı!", nextNode: "defend_can" },
            { text: "Neden onu bu kadar çok istiyorsunuz?", nextNode: "ask_why" }
          ] 
        },
        "defend_can": { 
          text: "Koruma mı? [Güler] O sadece bir yemekti, tadı hala boğazımda. Eğer vermezseniz, Sektör-7'yi yemeğim yaparım!", 
          choices: [{ text: "Karar zamanı, hazırlan Aziz.", nextNode: "decision_ready" }] 
        },
        "ask_why": { 
          text: "O bizim sırlarımızı biliyor... Sisin gerçek yüzünü gördü ve kaçtı. Onu susturmalıyız nöbetçi.", 
          choices: [{ text: "Hazırlan Aziz, son kararımı veriyorum.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Güneş doğmadan o kapı açılacak... Sizin rızanızla ya da bizim pençelerimizle!", isFinal: true }
      },
      outcomes: {
        pass: { text: "Kapıyı açıp içeri aldın? Sektöre çete sızdı! Barış bitti.", effect: { safety: -100, morale: -50 } },
        arrest: { text: "Onu kelepçelerken sisin içinden yüzlerce gözün size baktığını fark ettiniz.", effect: { safety: +15, morale: -20 } },
        deny: { text: "Çete kapıya saldırmaya başlar. 'Öleceksiniz!'", effect: { safety: -40, morale: -10 } },
        shoot: { text: "Lider düştü ama çete intikam yemini etti. Gece çok zor gececek.", effect: { safety: -30, morale: -20 } }
      },
      image: "/src/assets/characters/punk.png"
    },
    {
       id: "d9_traveler_trader",
       name: "Baran (Gezgin)",
       role: "trader",
       type: "neutral",
       initialNode: "start",
       nodes: {
         "start": { text: "Üç gündür sisi soluyorum... Ama hala insanım. Elimde gerçek filtreler var. Takas eder miyiz asker?", choices: [{ text: "Filtrelerin kaynağı neresi Baran?", nextNode: "ask_source" }] },
         "ask_source": { text: "Sektör-10... Eski depolarda hala bir şeyler kalmış. Ama o yollar artık gri ipliklerle kaplı.", choices: [{ text: "Kararımı veriyorum.", nextNode: "decision_ready" }] },
         "decision_ready": { text: "Lütfen... Ciğerlerim artık dayanamıyor.", isFinal: true }
       },
       outcomes: {
         pass: { text: "Filtreler sayesinde güvenlik artar. 'Teşekkürler dostum.'", effect: { safety: +25, morale: +10 } },
         arrest: { text: "Hücreye atıldı. Filtreler depoya kaldırıldı.", effect: { safety: +10, morale: -5 } },
         deny: { text: "Sisi soluyarak uzaklaşır. 'Zaten içerisi de ölüydü.'", effect: { safety: +5, morale: 0 } },
         shoot: { text: "Üzerinde filtre falan yokmuş. Boşu boşuna vurdun.", effect: { safety: +5, morale: -30 } }
       },
       image: "/src/assets/characters/mystery.png"
    }
  ],
  day10: [
    {
      id: "d10_chemist",
      name: "Dr. Melih",
      role: "worker",
      type: "professional",
      initialNode: "start",
      nodes: {
        "start": { text: "Panzehiri buldum! Sisin mutasyonunu durduran gümüş bir sıvı. Ama seri üretime ihtiyacım var asker. Sektör laboratuvarı benim son şansım.", choices: [{ text: "Buna nasıl inanmalıyım Doktor?", nextNode: "ask_proof" }] },
        "ask_proof": { text: "Bakın! [Kendi koluna sıvıyı enjekte eder, gri lekeler saniyeler içinde kaybolur] Bu bir mucize asker!", choices: [{ text: "İnanılmaz! Hazırlanın, karar vereceğim.", nextNode: "decision_ready" }] },
        "decision_ready": { text: "Beni içeri alın, bu kabusu sonsuza dek bitirelim.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Halkın morali tavan yapar! 'Sonunda bir kurtuluş yolu!'", effect: { safety: +20, morale: +80 } },
        arrest: { text: "Doktor karantinaya alınır. 'Zaman harcıyorsunuz!' diye feryat eder.", effect: { safety: +10, morale: -5 } },
        deny: { text: "Kendi laboratuvarını siste kaybetmiş bir adam yavaşça uzaklaşır.", effect: { safety: +5, morale: -15 } },
        shoot: { text: "Dünyanın son şansını el birliğiyle yok ettin. Artık sadece gri var.", effect: { safety: +10, morale: -100 } }
      },
      image: "/src/assets/faces/doktor.png"
    }
  ],
  day11: [
     {
      id: "d11_werewolf",
      name: "Yaratık / Kurtadam",
      role: "mutant",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "[Derin bir hırıltı, pençelerini terminal camına sürtüyor] AÇÇÇÇÇÇ! İÇERİDEKİ... BEBEK... ONUN... KANI... BENİM... KURTULUŞUM!", 
          choices: [
            { text: "Bu ne biçim bir canavar?! Ateş açın!", nextNode: "attack" },
            { text: "Konuşabiliyor musun?! Sakin ol!", nextNode: "calm_down" }
          ] 
        },
        "attack": { 
          text: "Mermiler... sadece... gıdıklıyor! O bebeği... bana... verin!", 
          choices: [{ text: "Asla! Karar zamanı.", nextNode: "decision_ready" }] 
        },
        "calm_down": { 
          text: "Sokaklar... gri... artık... kim olduğumu... hatırlamıyorum... SADECE AÇIKTIM!", 
          choices: [{ text: "Hazırlan, son kararımız.", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "Pençeleri kapıyı söküyor! Acele edin nöbetçi!", isFinal: true }
      },
      outcomes: {
        pass: { text: "Kapıyı açtın?! Sektör-7 bugün resmen tarih oldu. Katliam başladı.", effect: { safety: -100, morale: -100 } },
        arrest: { text: "Zorlanarak kafese mühürlendi. Gece boyu uluması kesilmedi.", effect: { safety: +10, morale: -30 } },
        deny: { text: "Geri çekilir ama her gece kapıyı tırmalamaya devam eder.", effect: { safety: -20, morale: -10 } },
        shoot: { text: "Onu vurarak Sektörü büyük bir faciadan kurtardın.", effect: { safety: +40, morale: +10 } }
      },
      image: "/src/assets/characters/enfekte_monster.png"
    }
  ],
  day12: [
    {
      id: "d12_last_human",
      name: "Son İnsan",
      role: "worker",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { text: "Kilometrelerce yürüdüm nöbetçi... Şehirler sessiz, ormanlar gri tozdan birer mezarlık. Dışarıda kimse kalmadı. Gerçekten kimse.", choices: [{ text: "İnanamıyorum... Bir umut ışığı yok mu?", nextNode: "ask_hope" }] },
        "ask_hope": { text: "Umut bitti asker. Sis her şeyi yuttu. Artık sadece bu duvarların ardındakiler var. Belki de son numuneleriz.", choices: [{ text: "Pekala... Karar zamanı.", nextNode: "decision_ready" }] },
        "decision_ready": { text: "Gözlerimi kapatmak istiyorum artık.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Sektöre girer ve sessizce bir köşede bekler. Halk büyük bir hüzne dalar.", effect: { safety: 0, morale: -20 } },
        arrest: { text: "Hücrede gökyüzüne bakar.", effect: { safety: +5, morale: -5 } },
        deny: { text: "Asansörlere doğru geri döner. 'Hepiniz griye döneceksiniz' der.", effect: { safety: +5, morale: -15 } },
        shoot: { text: "Şehrin son madencisi can verdi. Yer altındaki sırlar onunla gitti.", effect: { safety: +10, morale: -30 } }
      },
      image: "/src/assets/faces/old_woman.png"
    }
  ],
  day13: [
    {
      id: "d13_siege",
      name: "Sis Kenti Sakini",
      role: "unknown",
      type: "suspicious",
      initialNode: "start",
      nodes: {
        "start": { text: "Onlar kapıda! Binlercesi! Sisin içinden sessizce yükseliyorlar. Bu son uyarım nöbetçi!", choices: [{ text: "Neyden bahsediyorsun?!", nextNode: "ask_what" }] },
        "ask_what": { text: "Gri ordu. Artık ne acı duyuyorlar ne de korku. Kapıyı açmamı istiyorlar.", choices: [{ text: "Karar zamanı.", nextNode: "decision_ready" }] },
        "decision_ready": { text: "Zaman doluyor.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Sektöre girer girmez bir çığlık kopar. İstilacılar içeride!", effect: { safety: -100, morale: -50 } },
        arrest: { text: "Karantinaya alındı.", effect: { safety: +5, morale: -10 } },
        deny: { text: "Sise geri döner.", effect: { safety: 0, morale: -10 } },
        shoot: { text: "Vicdanın bugün çok ağır.", effect: { safety: +10, morale: -20 } }
      },
      image: "/src/assets/faces/golge.png"
    }
  ],
  day14: [
    {
      id: "d14_final_decision",
      name: "Sis Kraliçesi (Vera)",
      role: "final",
      type: "unique",
      initialNode: "start",
      nodes: {
        "start": { 
          text: "Duruşun... 14 gündür bu kapıyı korudun asker. Ama koruduğun şey sadece bir yalanlar abidesi. Ben Vera. Sisin içindeki son iradeyim. Kapıyı açacak mısın yoksa bu küllükte yanacak mısın?", 
          choices: [
            { text: "Her şey bitsin Vera. Sektör-7'nin kapılarını açıyorum.", nextNode: "open_all" },
            { text: "Asla! Bu şehir insanlığın son kalesi, onu sana bırakmam!", nextNode: "defend_all" }
          ] 
        },
        "open_all": { 
          text: "Korkularından kurtulma vakti asker. Griye teslim ol, gerçek huzur orada... Sadece bir tık uzağındayım.", 
          choices: [{ text: "Son karar.", nextNode: "decision_ready" }] 
        },
        "defend_all": { 
          text: "Cesur bir yalan... Ama sonun yine aynı olacak. Kendi karanlığınızda boğulacaksınız.", 
          choices: [{ text: "Son mermimize kadar!", nextNode: "decision_ready" }] 
        },
        "decision_ready": { text: "14 gün... 42 karar... Her şey bu an için. Kararını mühürle.", isFinal: true }
      },
      outcomes: {
        pass: { text: "Sektör-7 kapıları açıldı. Dünya gri bir sükunete büründü. Hikaye bitti.", effect: { safety: -100, morale: -100 } },
        arrest: { text: "Gülerek kelepçeleri kabul etti. 'İçeriden yıkılacaksınız' dedi.", effect: { safety: -50, morale: -50 } },
        deny: { text: "Kapıyı mühürledin ve sonsuz bir karanlıkta nöbete devam ettin.", effect: { safety: +100, morale: -100 } },
        shoot: { text: "Sise ateş ettin. Hiçbir şey olmadı. Sadece mermilerin bitti.", effect: { safety: 0, morale: -100 } }
      },
      image: "/src/assets/characters/mystery.png"
    }
  ]
};

const scenariosPath = path.join(__dirname, 'src', 'data', 'scenarios.js');
let scenariosContent = fs.readFileSync(scenariosPath, 'utf8');

// Replace TR scenarios day9-14
const startTrMarker = '  day9: [';
const endTrMarker = '  en: SCENARIOS_EN,';

const trContentStart = scenariosContent.indexOf(startTrMarker);
const trContentEnd = scenariosContent.indexOf(endTrMarker);

let newTrContent = '';
for (const day in NEW_SCENARIOS) {
  newTrContent += `    ${day}: ${JSON.stringify(NEW_SCENARIOS[day], null, 2)},\n`;
}

scenariosContent = scenariosContent.substring(0, trContentStart) + newTrContent + scenariosContent.substring(trContentEnd);

fs.writeFileSync(scenariosPath, scenariosContent);
console.log('Scenarios Day 9-14 updated successfully! FINAL BATCH COMPLETE.');
