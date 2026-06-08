import React, { useState, useEffect, useRef } from 'react';

const TypewriterText = ({ text, speed = 40, delay = 0, onCharTyped, className, textGlitch = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const timerRef = useRef(null);
  const delayRef = useRef(null);
  const symbols = ['$', '%', '&', '@', '#', '*', '!', '?', '/'];
  
  // Throttle references for audio
  const lastSoundTimeRef = useRef(0);
  const SOUND_THROTTLE_MS = 80;

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    setIndex(0);
    setShowCursor(false);
    
    if (delayRef.current) clearTimeout(delayRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    lastSoundTimeRef.current = 0; // Reset throttle timer

    delayRef.current = setTimeout(() => {
      setShowCursor(true);
      startTyping();
    }, delay);

    return () => {
      if (delayRef.current) clearTimeout(delayRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, delay]);

  const startTyping = () => {
    setIndex(0);
  };

  useEffect(() => {
    if (showCursor && index < text.length) {
      let currentSpeed = speed;
      const char = text[index];
      
      // Simulate human thought process by pausing on punctuation
      if (char === '.' || char === '!' || char === '?') {
        currentSpeed = speed * 10;
      } else if (char === ',' || char === ';') {
        currentSpeed = speed * 5;
      } else if (char === ' ') {
        currentSpeed = speed * 1.5;
      }

      timerRef.current = setTimeout(() => {
        // GLITCH LOGIC: Chance to show a symbol instead of the real char
        const isGlitching = textGlitch && Math.random() < 0.15;
        const charToType = isGlitching ? symbols[Math.floor(Math.random() * symbols.length)] : char;

        setDisplayedText((prev) => {
          // If previous char was a glitch, we should ideally fix it here, 
          // but for a simple effect, we just ensure the CURRENT one might be a glitch.
          // The next tick will "settle" the previous one because we'll rebuild or append.
          // Simplest way: Only the LATEST char can be a glitch.
          const settledText = text.substring(0, index);
          return settledText + charToType;
        });

        setIndex((prev) => prev + 1);
        if (onCharTyped && char !== ' ') {
          const now = Date.now();
          if (now - lastSoundTimeRef.current >= SOUND_THROTTLE_MS) {
            lastSoundTimeRef.current = now;
            onCharTyped();
          }
        }
      }, currentSpeed);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, text, speed, onCharTyped, showCursor, textGlitch]);

  return (
    <span className={`typewriter-wrapper ${className}`}>
      {displayedText}
      {(showCursor && index < text.length) && <span className="typewriter-cursor">_</span>}
    </span>
  );
};

export default TypewriterText;
