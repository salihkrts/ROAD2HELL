import React, { useState, useEffect } from 'react';
import './TerminalBootSequence.css';

const BOOT_LOGS = [
  "> INITIALIZING SECTOR-7 GATEWAY KERNEL...",
  "> LOADING ENCRYPTION PROTOCOLS [AES-512]...",
  "> SYNCING SURVEILLANCE DATABASE...",
  "> SCANNING LOCAL NETWORK NODES...",
  "> SECTOR-7 CORE CONNECTED.",
  "> WARNING: RAD-LEVELS AT 45%...",
  "> BOOT SEQUENCE COMPLETE.",
  "> WELCOME OPERATOR."
];

function TerminalBootSequence({ onFinish }) {
  const [logs, setLogs] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < BOOT_LOGS.length) {
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, BOOT_LOGS[index]]);
        setIndex(prev => prev + 1);
      }, Math.random() * 500 + 100); // Random delay for realistic feel
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        onFinish();
      }, 1000);
    }
  }, [index, onFinish]);

  return (
    <div className="boot-sequence-overlay crt-power-on">
      <div className="boot-noise"></div>
      <div className="boot-content standard-screen-entry">
        {logs.map((log, i) => (
          <div key={i} className="boot-log-line">
            {log}
          </div>
        ))}
        {index < BOOT_LOGS.length && <span className="boot-cursor">_</span>}
      </div>
    </div>
  );
}

export default TerminalBootSequence;
