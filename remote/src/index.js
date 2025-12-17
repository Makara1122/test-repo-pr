import React from 'react';
import ReactDOM from 'react-dom/client';
import RemotePage from './RemotePage';

const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>Remote Application</h1>
    <p>This is the standalone remote application running on port 3001</p>
    <RemotePage />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
