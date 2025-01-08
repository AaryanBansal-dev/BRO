'use client'

import React, { useEffect, useRef } from 'react';

const BotpressChat = () => {
  const botpressLoaded = useRef(false);

  useEffect(() => {
    // Function to load a script and return a promise
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Function to initialize Botpress
    const initBotpress = () => {
      if (window.botpressWebChat && !botpressLoaded.current) {
        window.botpressWebChat.init({
          configUrl: 'https://files.bpcontent.cloud/2025/01/01/16/20250101162330-J1H43IUH.json',
          hostUrl: 'https://cdn.botpress.cloud/webchat/v2.3',
          messagingUrl: 'https://messaging.botpress.cloud',
          botId: 'YOUR_BOT_ID' // Replace with your actual bot ID if needed
        });
        botpressLoaded.current = true;
      }
    };

    // Load scripts and initialize Botpress
    const loadBotpress = async () => {
      try {
        await loadScript('https://cdn.botpress.cloud/webchat/v2.2/inject.js');
        await loadScript('https://files.bpcontent.cloud/2025/01/01/16/20250101162330-TP6HTH6F.js');
        
        // Check if Botpress is available and initialize
        const checkAndInitInterval = setInterval(() => {
          if (window.botpressWebChat) {
            clearInterval(checkAndInitInterval);
            initBotpress();
          }
        }, 100);

        // Clear interval after 10 seconds to prevent infinite checking
        setTimeout(() => clearInterval(checkAndInitInterval), 10000);
      } catch (error) {
        console.error('Failed to load Botpress scripts:', error);
      }
    };

    loadBotpress();

    // Cleanup function
    return () => {
      // Remove the scripts when component unmounts
      const scripts = document.querySelectorAll('script[src^="https://cdn.botpress.cloud"], script[src^="https://files.bpcontent.cloud"]');
      scripts.forEach(script => script.remove());
      botpressLoaded.current = false;
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div id="botpress-webchat-container"></div>
  );
};

export default BotpressChat;

