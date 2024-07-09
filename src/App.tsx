import React, { useCallback } from 'react';
import './App.css';

function App() {
  const click = useCallback(() => {
    (window as any).Telegram.WebApp.switchInlineQuery('test', ['users', 'bots', 'groups', 'channels']);
  }, []);

  return (
    <div className="App">
      <p>
        {JSON.stringify((window as any).Telegram.WebApp)}
      </p>
      <button onClick={click}>Click</button>
    </div>
  );
}

export default App;
