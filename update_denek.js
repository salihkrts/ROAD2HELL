import fs from 'fs';

async function updateScenarios() {
  const { SCENARIOS_BASE } = await import('./scenarios.js');

  const patchDenek = (scenario, lang) => {
    if (scenario.id === "laughing_man_d9") {
      scenario.name = lang === "tr" ? "Gülen Denek" : "Laughing Subject";
      scenario.image = "/faces/laughing_man_denek.png";
    }
  };

  SCENARIOS_BASE.tr.day9.forEach(s => patchDenek(s, "tr"));
  SCENARIOS_BASE.en.day9.forEach(s => patchDenek(s, "en"));

  const fileContent = 'export const SCENARIOS_BASE = ' + JSON.stringify(SCENARIOS_BASE, null, 2) + ';\n';
  fs.writeFileSync('./src/data/scenarios.js', fileContent, 'utf8');
}

updateScenarios().catch(console.error);
