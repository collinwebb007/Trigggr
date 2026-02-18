#!/bin/bash
echo "🚀 Starting GitHub Setup..."

# 1. Install Homebrew if missing
if ! command -v brew &> /dev/null; then
    echo "📦 Homebrew not found. Installing now..."
    echo "❗ You may be prompted for your system password during installation."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # Configure shell environment for Homebrew
    if [[ -f "/opt/homebrew/bin/brew" ]]; then
        eval "$(/opt/homebrew/bin/brew shellenv)"
        (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> ~/.zprofile
    elif [[ -f "/usr/local/bin/brew" ]]; then
        eval "$(/usr/local/bin/brew shellenv)"
        (echo; echo 'eval "$(/usr/local/bin/brew shellenv)"') >> ~/.zprofile
    fi
else
    echo "✅ Homebrew is already installed."
fi

# 2. Install GitHub CLI if missing
if ! command -v gh &> /dev/null; then
    echo "📦 GitHub CLI (gh) not found. Installing via Homebrew..."
    brew install gh
else
    echo "✅ GitHub CLI is already installed."
fi

# 3. Authenticate
echo "🔑 Initiating GitHub authentication..."
echo "👉 Choose 'GitHub.com', then 'HTTPS', then 'Login with a web browser'."
gh auth login
