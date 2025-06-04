import React from 'react';

import { ChatEngine } from 'react-chat-engine'

const SupportAdmin = () => {
  return (
    <ChatEngine 
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName='Awesome Online Shop'
      userSecret='shopwithme001'
      height='calc(100vh - 20px)'
    />
  );
}

export default SupportAdmin;