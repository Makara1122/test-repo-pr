# Quick Start Guide

Get up and running with the micro-frontend demo in 5 minutes!

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Two terminal windows

## Option 1: Automated Setup (Recommended)

```bash
# Run the setup script
./setup.sh

# Then follow the on-screen instructions
```

## Option 2: Manual Setup

### Step 1: Install Dependencies

```bash
# Install host dependencies
cd host
npm install

# Install remote dependencies  
cd ../remote
npm install
```

### Step 2: Start the Applications

**Terminal 1 - Start Remote App:**
```bash
cd remote
npm start
```

Wait for "Compiled successfully!" message.

**Terminal 2 - Start Host App:**
```bash
cd host
npm start
```

Wait for "Compiled successfully!" message.

### Step 3: View the Application

Open your browser and navigate to:
```
http://localhost:3000
```

You should see:
- Host application header
- Instructions section
- Remote page loaded in a blue box 🎉

## Testing Offline Scenario

### Step 4: Simulate Offline Remote

1. Go to **Terminal 1** (where remote app is running)
2. Press **Ctrl+C** to stop the remote app
3. In the browser, click **"Hide Remote Page"** then **"Show Remote Page"**
   - OR simply refresh the page (F5 or Cmd+R)

You should now see:
- ⚠️ Warning message: "Remote Service Unavailable"
- Helpful explanation of the issue
- Suggested actions to resolve
- Expandable technical details

### Step 5: Test Recovery

1. Restart the remote app in Terminal 1:
   ```bash
   npm start
   ```

2. In the browser:
   - Click the toggle button
   - OR refresh the page

The remote component should load successfully again! ✅

## Troubleshooting

### "Port 3000 already in use"

Kill the process using the port:
```bash
# On Mac/Linux
lsof -ti:3000 | xargs kill -9

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### "Cannot find module"

Make sure you installed dependencies:
```bash
cd host && npm install
cd ../remote && npm install
```

### Remote component not loading

1. Check that remote app is running on port 3001
2. Check browser console for errors
3. Ensure both apps are running on localhost
4. Try clearing browser cache and refreshing

### CORS errors

Both webpack configurations include CORS headers. If you still see CORS errors:
1. Ensure both apps run on localhost (not 127.0.0.1 mixed with localhost)
2. Check that remote URL in host's webpack.config.js matches remote app's port

## Expected Behavior

### ✅ Success State (Remote Online)
- Blue box with "🎉 Remote Page Component"
- Message confirming remote module loaded successfully

### ⚠️ Error State (Remote Offline)
- Yellow warning box with "⚠️ Remote Service Unavailable"
- Clear explanation and helpful suggestions
- No white screen or app crash
- Host app continues functioning

## What's Next?

- Read the full [README.md](README.md) for detailed architecture information
- Check [VISUAL_GUIDE.md](VISUAL_GUIDE.md) for visual representation
- Experiment with adding more remote modules
- Try deploying to production environments

## Common Use Cases

### Adding a New Remote Module

1. Create a new remote app directory
2. Copy remote/webpack.config.js and modify the name
3. Add the new remote to host's webpack.config.js
4. Import and use the new remote component

### Customizing the Error Page

Edit `host/src/RemoteErrorBoundary.jsx` to:
- Change colors and styling
- Add your company branding
- Customize error messages
- Add logging or monitoring

### Production Deployment

1. Build both applications:
   ```bash
   cd host && npm run build
   cd ../remote && npm run build
   ```

2. Serve the built files from your web server or CDN

3. Update the remote URL in host's webpack.config.js to point to your production remote URL

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review browser console for error messages
3. Ensure all dependencies are installed correctly
4. Verify both applications are running on correct ports

Happy coding! 🚀
