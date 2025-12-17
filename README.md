# Micro-Frontend Module Federation with Offline Handling

This repository demonstrates a micro-frontend architecture using Webpack Module Federation, with a focus on handling offline remote modules gracefully.

## Architecture

- **Host Application** (Port 3000): The main application that consumes remote modules
- **Remote Application** (Port 3001): A micro-frontend that exposes components to be consumed by the host

## Features

✅ Module Federation setup with Webpack 5  
✅ Error boundary to catch remote loading failures  
✅ Meaningful HTML error page when remote is offline  
✅ Graceful degradation with user-friendly messages  
✅ Toggle button to test loading behavior  
✅ Technical details for debugging  

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

### Install dependencies for both applications:

```bash
# Install host dependencies
cd host
npm install

# Install remote dependencies
cd ../remote
npm install
```

## Running the Applications

### Option 1: Run Both Applications (Normal Mode)

Open two terminal windows:

**Terminal 1 - Start Remote App:**
```bash
cd remote
npm start
```
The remote app will run on `http://localhost:3001`

**Terminal 2 - Start Host App:**
```bash
cd host
npm start
```
The host app will run on `http://localhost:3000`

Open your browser and navigate to `http://localhost:3000`

### Option 2: Simulate Offline Scenario

1. **Start both apps** as described above
2. **Observe** the remote page loading successfully in the host app
3. **Stop the remote app** (Ctrl+C in the remote terminal)
4. **Refresh** the host app or click "Hide/Show Remote Page" button
5. **See the meaningful error page** explaining that the remote service is offline

## What You'll See

### When Remote is Online
- The host app successfully loads and displays the remote page component
- You'll see a blue box with the message "🎉 Remote Page Component"

### When Remote is Offline
You'll see a meaningful error page with:
- ⚠️ A clear warning message
- Explanation of what went wrong
- Possible reasons for the failure
- Suggested actions to resolve the issue
- Technical details (expandable)

## Project Structure

```
.
├── host/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── index.js                    # Main host app
│   │   ├── RemotePageLoader.jsx        # Lazy loads remote module
│   │   └── RemoteErrorBoundary.jsx     # Error handling component
│   ├── package.json
│   └── webpack.config.js               # Module federation config
│
└── remote/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── index.js                    # Main remote app
    │   └── RemotePage.jsx              # Exposed component
    ├── package.json
    └── webpack.config.js               # Module federation config
```

## Key Implementation Details

### Host Webpack Configuration
The host app is configured to consume the remote module:

```javascript
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3001/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

### Remote Webpack Configuration
The remote app exposes its components:

```javascript
new ModuleFederationPlugin({
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './RemotePage': './src/RemotePage',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

### Error Handling
The host app uses:
1. **Error Boundary**: Catches errors from failed remote module loads
2. **Lazy Loading**: Uses React.lazy() with error handling
3. **Suspense**: Shows loading state while fetching remote module

## Testing Different Scenarios

### Scenario 1: Both Running
✅ Expected: Remote page loads successfully

### Scenario 2: Remote Offline
✅ Expected: Meaningful error page with helpful information

### Scenario 3: Recovery
1. Stop remote app
2. See error message
3. Start remote app again
4. Refresh or toggle the button
✅ Expected: Remote page loads successfully again

## Troubleshooting

**Port Already in Use:**
- Change the port in webpack.config.js devServer section
- Update the remote URL in host's webpack.config.js accordingly

**CORS Issues:**
- Both webpack configs include CORS headers
- Ensure both apps run on localhost

**Module Not Found:**
- Check that the remote app is running
- Verify the remote URL in host's webpack.config.js
- Check browser console for detailed error messages

## Production Considerations

For production deployments, consider:
1. **CDN hosting** for remote modules
2. **Versioning** strategy for remote modules
3. **Fallback content** or alternative UI when remote fails
4. **Monitoring** to track remote module availability
5. **Retry logic** for transient failures
6. **Health checks** before loading remotes

## Learn More

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Micro-Frontends](https://micro-frontends.org/)
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
