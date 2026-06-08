const fs = require('fs');
const path = require('path');

const imageMap = {
  'd6_demir': '/src/assets/generated/demir.png',
  'd6_elif': '/src/assets/generated/elif.png',
  'd7_golge': '/src/assets/generated/golge.png',
  'aras_intro': '/src/assets/generated/aras.png',
  'd14_final_decision': '/src/assets/generated/vera.png'
};

const scenariosPath = path.join(__dirname, 'src', 'data', 'scenarios.js');
let scenariosContent = fs.readFileSync(scenariosPath, 'utf8');

for (const [id, newPath] of Object.entries(imageMap)) {
  // Use regex to find the scenario with specific ID and replace its image field
  const regex = new RegExp(`(id:\\s*"${id}",[\\s\\S]*?image:\\s*")[^"]*(")`, 'g');
  scenariosContent = scenariosContent.replace(regex, `$1${newPath}$2`);
}

fs.writeFileSync(scenariosPath, scenariosContent);
console.log('Scenario image paths updated successfully!');
