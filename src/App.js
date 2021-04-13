import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import  ChatFeed from './components/ChatFeed';


const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="f069efbe-0ed9-4863-8b31-073042f088c4"
      userName="surya5a6"
      userSecret="test123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;