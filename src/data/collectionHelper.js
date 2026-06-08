import { SCENARIOS_BASE } from './scenarios';

export const getAllCharacters = (lang = 'tr') => {
  const languageScenarios = SCENARIOS_BASE[lang] || SCENARIOS_BASE['tr'];
  const allChars = [];
  const processedIds = new Set();

  Object.values(languageScenarios).forEach(dayArray => {
    dayArray.forEach(char => {
      if (!processedIds.has(char.id)) {
        allChars.push(char);
        processedIds.add(char.id);
      }
    });
  });

  return allChars;
};
