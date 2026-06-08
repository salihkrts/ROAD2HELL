import fs from 'fs';

async function updateScenarios() {
  const { SCENARIOS_BASE } = await import('./scenarios.js');

  const newSpyTr = {
    id: "deceptive_spy_d9",
    name: "Temiz Yabancı",
    role: "suspicious",
    initialNode: "start",
    nodes: {
      "start": {
        "text": "Merhaba Memur Bey. Dışarıdaki cehenneme rağmen üstümün ne kadar temiz olduğuna dikkat ettiniz mi? Sektör Merkezinden geliyorum, elimde tam bir tedavi protokolü var. İzin verin de şu kaosu bitireyim.",
        "choices": [
          { "text": "Merkezden misin? Neden telsiz bildirimi yapılmadı?", "nextNode": "ask_radio" },
          { "text": "Üstün o kadar sise rağmen nasıl bu kadar temiz?", "nextNode": "ask_clean" }
        ]
      },
      "ask_radio": {
        "text": "Telsiz hatları sis yüzünden tamamen kilitli. İnanın bana, bu çantanın içindeki formül her şeyi düzeltecek. Kapıyı açmak sadece bir saniyenizi alır.",
        "choices": [
          { "text": "Çantayı tarayıcıdan geçir, ondan sonra bakarız.", "nextNode": "decision_ready" }
        ]
      },
      "ask_clean": {
        "text": "Çünkü ben karanlıkta saklanmam, asker. Sisin ne olduğunu biliyorum ve onu nasıl aşıp geçeceğimi de. Sadece beni içeri alın.",
        "choices": [
          { "text": "Şüpheli. Gözaltı protokolünü başlatıyorum.", "nextNode": "decision_ready" }
        ]
      },
      "decision_ready": {
        "text": "Yüzündeki o kusursuz ve ürkütücü gülümseme hiç bozulmuyor...",
        "isFinal": true
      }
    },
    outcomes: {
      "pass": {
        "text": "İçeri girdiği an çantasındaki biyolojik bombayı patlattı! Tüm revir sise boğuldu! (Güvenlik ----, Moral ----)",
        "effect": { "safety": -180, "morale": -100 }
      },
      "arrest": {
        "text": "Hücreye atıldığında çantasının bir asit bataryası olduğu anlaşıldı. Kıl payı kurtuldunuz! (Güvenlik ++)",
        "effect": { "safety": 35, "morale": 10 }
      },
      "shoot": {
        "text": "İnfaz edildi. Yere düştüğünde kanı kırmızı değil, simsiyah akıyordu. Doğru karar. (Güvenlik +)",
        "effect": { "safety": 25, "morale": -15 }
      }
    },
    image: "/faces/deceptive_spy.png"
  };

  const newSpyEn = {
    id: "deceptive_spy_d9",
    name: "The Immaculate Stranger",
    role: "suspicious",
    initialNode: "start",
    nodes: {
      "start": {
        "text": "Greetings, Operator. Notice how pristine my attire is despite the hellscape outside? I hail from Central Command with a complete cure protocol. Let me in and we can end this chaos.",
        "choices": [
          { "text": "Central Command? Why was there no comms chatter?", "nextNode": "ask_radio" },
          { "text": "How did you navigate the Mist without a single stain?", "nextNode": "ask_clean" }
        ]
      },
      "ask_radio": {
        "text": "The fog has scrambled all encrypted frequencies. Believe me, the formula in this briefcase will fix everything. Dropping the gate takes only a second.",
        "choices": [
          { "text": "Run the briefcase through the scanner first.", "nextNode": "decision_ready" }
        ]
      },
      "ask_clean": {
        "text": "Because I don't hide in the dark, soldier. I understand the Mist, and I know how to circumvent it. Just authorize my entry.",
        "choices": [
          { "text": "Highly suspicious. I'm initiating detainment protocols.", "nextNode": "decision_ready" }
        ]
      },
      "decision_ready": {
        "text": "That flawless, unsettling smile never leaves his face...",
        "isFinal": true
      }
    },
    outcomes: {
      "pass": {
        "text": "The moment he entered, he detonated a biological payload in his case! The Med-Bay is engulfed in Mist! (Safety ----, Morale ----)",
        "effect": { "safety": -180, "morale": -100 }
      },
      "arrest": {
        "text": "Detained successfully. Scans revealed his case was a rigged acid battery. A very close call! (Safety ++)",
        "effect": { "safety": 35, "morale": 10 }
      },
      "shoot": {
        "text": "Executed. As he fell, the fluid bleeding from him wasn't red, but pitch black. A necessary termination. (Safety +)",
        "effect": { "safety": 25, "morale": -15 }
      }
    },
    image: "/faces/deceptive_spy.png"
  };

  ['tr', 'en'].forEach(lang => {
    SCENARIOS_BASE[lang].day9 = SCENARIOS_BASE[lang].day9.filter(
      s => s.id !== "mutant_kaya_bozkir_d9" && s.id !== "mutant_kaya_d9"
    );
    // Add the new scenario to the beginning of Day 9
    SCENARIOS_BASE[lang].day9.unshift(lang === 'tr' ? newSpyTr : newSpyEn);
  });

  const fileContent = 'export const SCENARIOS_BASE = ' + JSON.stringify(SCENARIOS_BASE, null, 2) + ';\n';
  fs.writeFileSync('./scenarios.js', fileContent, 'utf8');
}

updateScenarios().catch(console.error);
