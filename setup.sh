#!/bin/bash

echo "==============================================="
echo "Micro-Frontend Module Federation Demo Setup"
echo "==============================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo ""

# Install dependencies for host
echo "📦 Installing Host App dependencies..."
cd host
if [ ! -d "node_modules" ]; then
    npm install
    if [ $? -eq 0 ]; then
        echo "✅ Host dependencies installed successfully"
    else
        echo "❌ Failed to install host dependencies"
        exit 1
    fi
else
    echo "✅ Host dependencies already installed"
fi
cd ..
echo ""

# Install dependencies for remote
echo "📦 Installing Remote App dependencies..."
cd remote
if [ ! -d "node_modules" ]; then
    npm install
    if [ $? -eq 0 ]; then
        echo "✅ Remote dependencies installed successfully"
    else
        echo "❌ Failed to install remote dependencies"
        exit 1
    fi
else
    echo "✅ Remote dependencies already installed"
fi
cd ..
echo ""

echo "==============================================="
echo "✅ Setup Complete!"
echo "==============================================="
echo ""
echo "To run the applications:"
echo ""
echo "Terminal 1 - Remote App:"
echo "  cd remote && npm start"
echo ""
echo "Terminal 2 - Host App:"
echo "  cd host && npm start"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
echo "To test offline scenario:"
echo "  1. Stop the remote app (Ctrl+C)"
echo "  2. Refresh the host app"
echo "  3. See the meaningful error message"
echo ""
