const fs = require('fs');
const path = require('path');

const p = path.resolve('src/data/shelterDialogues.js');
let d = fs.readFileSync(p, 'utf8');

const additions = [
  { match: "Vera bir program m", followUp: `, followUp: { text: "Göz bağının altından sana baktığını hissediyorsun. 'Programın asıl amacı bizi kontrol etmek değil... bizi bir sonraki aşamaya hazırlamaktı. Sis, bu geçişin katalizörü. Sen de bu deneye dâhilsin Operatör.'", choices: [{text: "Bunu nasıl durdurabiliriz?", effect: +15, next: "Acı acı gülümsüyor. 'Durdurmak mı? Seli ellerinle durdurabilir misin? Sadece akışına yön verebilirsin. Sunucu odasını bulman gerekiyor.'"}, {text: "Sus artık ihtiyar, bunlar saçmalık.", effect: -10, next: "Başını eğiyor. 'Sağır olan ben değilim... sensin. Gerçeklerle yüzleştiğinde bu anı hatırlayacaksın.'"}] }` },
  { match: "Vera is a program", followUp: `, followUp: { text: "You feel him looking at you from under his blindfold. 'The program\\'s true purpose isn\\'t to control us... it was to prepare us for the next stage. The Mist is the catalyst for this transition. You are part of this experiment too, Operator.'", choices: [{text: "How do we stop this?", effect: +15, next: "He smiles bitterly. 'Stop? Can you stop a flood with your bare hands? You can only redirect the flow. You need to find the server room.'"}, {text: "Shut up old man, this is nonsense.", effect: -10, next: "He bows his head. 'I am not the deaf one... you are. You will remember this moment when you finally face the truth.'"}] }` }
];

let changedCount = 0;

for (const {match, followUp} of additions) {
  const lines = d.split('\\n');
  let replaced = false;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(match)) {
      if (lines[i].includes('followUp:')) continue;
      
      const lastBraceIndex = lines[i].lastIndexOf('}');
      if (lastBraceIndex !== -1) {
        const left = lines[i].substring(0, lastBraceIndex);
        const right = lines[i].substring(lastBraceIndex);
        lines[i] = left + followUp + right;
        replaced = true;
        changedCount++;
        break;
      }
    }
  }
  
  if (replaced) {
    d = lines.join('\\n');
  } else {
    console.error("Could not find match for: " + match);
  }
}

fs.writeFileSync(p, d, 'utf8');
console.log("Processed " + changedCount + " replacements successfully.");
