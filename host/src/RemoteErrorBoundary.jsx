import React, { Component } from 'react';

class RemoteErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Remote module failed to load:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '30px',
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          margin: '20px 0',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h2 style={{ color: '#856404', marginTop: 0 }}>
            ⚠️ Remote Service Unavailable
          </h2>
          <p style={{ fontSize: '16px', color: '#856404' }}>
            We're sorry, but the remote page you're trying to access is currently offline or unavailable.
          </p>
          <div style={{
            backgroundColor: '#fff',
            padding: '15px',
            borderRadius: '5px',
            marginTop: '15px'
          }}>
            <h3 style={{ marginTop: 0, color: '#333' }}>What does this mean?</h3>
            <ul style={{ color: '#555', lineHeight: '1.6' }}>
              <li>The remote micro-frontend service is not running</li>
              <li>There might be a network connectivity issue</li>
              <li>The remote service might be temporarily down for maintenance</li>
            </ul>
          </div>
          <div style={{
            backgroundColor: '#fff',
            padding: '15px',
            borderRadius: '5px',
            marginTop: '15px'
          }}>
            <h3 style={{ marginTop: 0, color: '#333' }}>What can you do?</h3>
            <ul style={{ color: '#555', lineHeight: '1.6' }}>
              <li>Please try refreshing the page in a few moments</li>
              <li>Check if the remote service is running (Port 3001)</li>
              <li>Contact your system administrator if the problem persists</li>
            </ul>
          </div>
          {this.state.error && (
            <details style={{ marginTop: '15px' }}>
              <summary style={{ cursor: 'pointer', color: '#856404', fontWeight: 'bold' }}>
                Technical Details
              </summary>
              <pre style={{
                backgroundColor: '#f8f9fa',
                padding: '10px',
                borderRadius: '5px',
                overflow: 'auto',
                fontSize: '12px',
                marginTop: '10px'
              }}>
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default RemoteErrorBoundary;
