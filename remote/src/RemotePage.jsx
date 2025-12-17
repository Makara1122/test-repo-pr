import React from 'react';

const RemotePage = () => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#e3f2fd',
      borderRadius: '8px',
      margin: '20px 0'
    }}>
      <h2>🎉 Remote Page Component</h2>
      <p>This is a remote component loaded from the Remote App (localhost:3001)</p>
      <p>If you can see this message, the remote module is successfully loaded!</p>
    </div>
  );
};

export default RemotePage;
