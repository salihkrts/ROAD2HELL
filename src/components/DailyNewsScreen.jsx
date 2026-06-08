import React, { useState, useEffect, useMemo } from 'react';
import TypewriterText from './TypewriterText';
import { DAILY_NEWS } from '../data/dailyNews';
import { SECURITY_LOGS } from '../data/securityLogs';
import './DailyNewsScreen.css';

function DailyNewsScreen({ day, shelterResidents, onContinue, lang = 'tr', onCharTyped }) {
  const [showButton, setShowButton] = useState(false);
  
  const rawNews = DAILY_NEWS[lang]?.[`day${day}`] || DAILY_NEWS['tr'][`day${day}`] || ["SYSTEM_LOG: Veri bulunamadı."];
  
  const residentIds = Object.keys(shelterResidents || {});
  
  // Decide what log to show based on residents
  const securityLogText = useMemo(() => {
    const logsData = SECURITY_LOGS[lang] || SECURITY_LOGS['tr'];
    const possibleLogs = [];
    
    if (residentIds.length === 0) {
      possibleLogs.push(...logsData.empty);
    } else {
      possibleLogs.push(...logsData.generic_residents);
      residentIds.forEach(id => {
        if (logsData.specific[id]) {
          // Weight specific logs heavily
          possibleLogs.push(...logsData.specific[id], ...logsData.specific[id]); 
        }
      });
    }
    
    // Pick random
    return possibleLogs[Math.floor(Math.random() * possibleLogs.length)];
  }, [lang, residentIds]);

  // Nükleer Daktilo Hesaplaması
  const linesWithDelay = [];
  let currentDelay = 800; // Ekran açılış beklemesi
  
  rawNews.forEach(line => {
    linesWithDelay.push({ text: line, delay: currentDelay, isLog: false });
    currentDelay += (line.length * 35) + 600; 
  });
  
  // Append Security Log
  const headerTxt = lang === 'en' 
    ? "--- OVERNIGHT SECURITY REPORT ---" 
    : (lang === 'ru' ? "--- ОТЧЕТ О БЕЗОПАСНОСТИ ЗА НОЧЬ ---" : "--- GECE GÜVENLİK RAPORU ---");
  currentDelay += 500;
  linesWithDelay.push({ text: headerTxt, delay: currentDelay, isLog: true, isHeader: true });
  currentDelay += (headerTxt.length * 20) + 400;
  linesWithDelay.push({ text: securityLogText, delay: currentDelay, isLog: true });
  currentDelay += (securityLogText.length * 30) + 600;

  useEffect(() => {
    // Son satırın yazılması bittikten hemen sonra butonu göster
    const timer = setTimeout(() => {
      setShowButton(true);
    }, currentDelay + 500);

    return () => clearTimeout(timer);
  }, [currentDelay]);

  const getHeaderTitle = () => {
    if (lang === 'en') return `CENTRAL COMMAND - CYCLE ${day} SUMMARY`;
    if (lang === 'ru') return `ЦЕНТРАЛЬНОЕ КОМАНДОВАНИЕ - СВОДКА ЗА ДЕНЬ ${day}`;
    return `MERKEZ KOMUTA - GÜN ${day} ÖZETİ`;
  };

  const getSignalText = () => {
    if (lang === 'en') return "SIGNAL: CLASSIFIED";
    if (lang === 'ru') return "СИГНАЛ: СЕКРЕТНО";
    return "SİNYAL: GİZLİ";
  };

  const getButtonText = () => {
    if (lang === 'en') return "[ CONNECT TO TERMINAL / START DAY ]";
    if (lang === 'ru') return "[ ПОДКЛЮЧИТЬСЯ К ТЕРМИНАЛУ / НАЧАТЬ ДЕНЬ ]";
    return "[ TERMİNALE BAĞLAN / GÜNE BAŞLA ]";
  };

  return (
    <div className="daily-news-screen standard-screen-entry" onClick={() => setShowButton(true)}>
      <div className="transition-noise" style={{opacity: 0.15, zIndex: 1, position: 'absolute', inset: 0, pointerEvents: 'none'}}></div>
      
      <div className="news-container">
        <div className="news-header">
          <span>{getHeaderTitle()}</span>
          <span style={{color: '#ff2a2a', animation: 'bootCursorBlink 1s infinite'}}>
            {getSignalText()}
          </span>
        </div>
        
        <div className="news-content">
          {linesWithDelay.map((lineObj, idx) => (
            <div key={idx} className={`news-line ${lineObj.isLog ? 'security-log-line' : ''} ${lineObj.isHeader ? 'security-log-header' : ''}`}>
              <TypewriterText 
                text={lineObj.text} 
                speed={lineObj.isLog ? 20 : 30} 
                delay={lineObj.delay}
                onCharTyped={onCharTyped}
              />
            </div>
          ))}
        </div>

        {showButton && (
          <div className="news-footer fade-in-btn">
            <button className="news-continue-btn" onClick={onContinue}>
              {getButtonText()}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DailyNewsScreen;
