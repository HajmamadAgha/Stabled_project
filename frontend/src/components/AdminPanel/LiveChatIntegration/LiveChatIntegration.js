import React, { useEffect } from 'react';
import './LiveChatIntegration.css';

const LiveChatIntegration = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = 'YOUR_WEBSITE_ID';

    const crispChatScript = document.createElement('script');
    crispChatScript.src = 'https://client.crisp.chat/l.js';
    crispChatScript.async = true;
    document.body.appendChild(crispChatScript);

    return () => {
      document.body.removeChild(crispChatScript);
    };
  }, []);

  return (
    <div className="live-chat-integration">
      <h3>Live Chat Integration</h3>
      <p>Crisp Chat has been integrated into this application.</p>
    </div>
  );
};

export default LiveChatIntegration;
