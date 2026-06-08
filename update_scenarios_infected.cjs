const fs = require('fs');
const path = require('path');

const INFECTED_UPDATES = {
  'd1_argo': { // Berke
    isInfected: true,
    nightEvent: "Gece yarısı Berke'nin kaldığı koğuştan garip hırıltılar yükseldi. Sabaha karşı iki nöbetçinin üniformaları kan içindeydi, Berke ise çoktan sise geri kaçmıştı..."
  },
  'd4_healer': { // Day 4 (Assuming ID matches or will be added)
    isInfected: true,
    nightEvent: "Hızlı iyileşen o adamın yarası sadece bir başlangıçmış... Gece yarısı hücresinde derisi tamamen döküldü ve havalandırma boşluğundan içeri sızdı."
  },
  'd5_chased': { // Can
    isInfected: true,
    nightEvent: "Can'ın peşindeki o çete aslında haklıymış... Gece yarısı Sektör-7'nin su deposuna siyah bir sıvı boşaltırken yakalandı."
  },
  'd11_werewolf': { // Kurtadam
    isInfected: true,
    nightEvent: "O vahşi canavarı içeri almak... Sektör-7'nin tarihindeki en büyük hataydı. Gece boyu kapılar parçalandı, çığlıklar hiç kesilmedi."
  }
};

const scenariosPath = path.join(__dirname, 'src', 'data', 'scenarios.js');
let scenariosContent = fs.readFileSync(scenariosPath, 'utf8');

// Update image mapping logic to include Infected flags
for (const [id, data] of Object.entries(INFECTED_UPDATES)) {
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*")[^"]*(")`, 'g');
  // We'll inject isInfected and nightEvent before the image field for cleaner look
  const replacement = `id: "${id}",\n    isInfected: ${data.isInfected},\n    nightEvent: "${data.nightEvent}",\n    image: "`;
  scenariosContent = scenariosContent.replace(new RegExp(`id:\\s*"${id}",`, 'g'), replacement);
}

fs.writeFileSync(scenariosPath, scenariosContent);
console.log('Infected flags and night events updated successfully!');
