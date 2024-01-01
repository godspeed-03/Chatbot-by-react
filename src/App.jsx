// src/App.js
import React from 'react';
import Chat from './Components/Chatbot';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">
    <Homepage />
      <Chat />
    </div>
  );
}

export default App;
