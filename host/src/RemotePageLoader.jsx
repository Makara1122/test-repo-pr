import React, { Suspense, lazy, useState } from 'react';
import RemoteErrorBoundary from './RemoteErrorBoundary';

// Dynamically import the remote module with error handling
const RemotePage = lazy(() =>
  import('remote/RemotePage').catch((error) => {
    console.error('Failed to load remote module:', error);
    // Return a module with a component that will trigger the error boundary
    return {
      default: () => {
        throw new Error('Remote module failed to load. The remote service might be offline.');
      },
    };
  })
);

const RemotePageLoader = () => {
  const [showRemote, setShowRemote] = useState(true);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setShowRemote(!showRemote)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          {showRemote ? 'Hide Remote Page' : 'Show Remote Page'}
        </button>
      </div>

      {showRemote && (
        <RemoteErrorBoundary>
          <Suspense
            fallback={
              <div style={{
                padding: '20px',
                backgroundColor: '#e3f2fd',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <p>Loading remote page...</p>
              </div>
            }
          >
            <RemotePage />
          </Suspense>
        </RemoteErrorBoundary>
      )}
    </div>
  );
};

export default RemotePageLoader;
