import React from 'react';
import ReactDOM from 'react-dom/client';
import RemotePageLoader from './RemotePageLoader';

const App = () => (
  <div style={{
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  }}>
    <header style={{
      backgroundColor: '#282c34',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <h1 style={{ color: 'white', margin: 0 }}>
        Host Application - Module Federation Demo
      </h1>
      <p style={{ color: '#aaa', margin: '10px 0 0 0' }}>
        This application demonstrates module federation with offline handling
      </p>
    </header>

    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <h2>How to Test Offline Scenario:</h2>
      <ol style={{ lineHeight: '1.8' }}>
        <li>
          <strong>Both Apps Running:</strong> Start both host (port 3000) and remote (port 3001) apps.
          You should see the remote page loaded successfully below.
        </li>
        <li>
          <strong>Simulate Offline:</strong> Stop the remote app (Ctrl+C on remote terminal).
          Refresh this page or toggle the button to see the meaningful error message.
        </li>
        <li>
          <strong>Recovery:</strong> Start the remote app again and refresh to see it load successfully.
        </li>
      </ol>
    </div>

    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2>Remote Page Section:</h2>
      <RemotePageLoader />
    </div>

    <footer style={{
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <p style={{ margin: 0, color: '#666' }}>
        Host App running on <strong>localhost:3000</strong> | 
        Remote App on <strong>localhost:3001</strong>
      </p>
    </footer>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
