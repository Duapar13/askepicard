#!/bin/bash

# 🎯 Solution PLUS SIMPLE: Utiliser macOS + AppleScript

FILE_PATH="$(cd "$(dirname "$0")" && pwd)/affiche-qr.html"

echo "🖨️ Conversion facile de affiche-qr.html en PDF"
echo ""
echo "📍 Chemin: $FILE_PATH"
echo ""

# Ouvrir le fichier avec le navigateur par défaut (système macOS)
echo "1️⃣  Ouverture du fichier..."
open "$FILE_PATH"

sleep 3

echo "2️⃣  Instructions à l'écran:"
echo "   ✓ Appuyez sur Cmd + P"
echo "   ✓ Format: A4"
echo "   ✓ Vérifie 'Arrière-plan' si disponible"
echo "   ✓ Cliquez 'Enregistrer en PDF'"
echo "   ✓ Nommez le fichier: affiche-askepicard.pdf"
echo ""
echo "   Faites cela maintenant..."
echo ""

# Proposer une alternative avec Node.js/Puppeteer
echo "---"
echo "💡 OU utilisez Node.js pour automatiser:"
echo "npm install -g puppeteer"
echo "node -e \"const puppeteer = require('puppeteer'); (async () => { const browser = await puppeteer.launch(); const page = await browser.newPage(); const filePath = 'file://$FILE_PATH'; await page.goto(filePath); await page.pdf({ path: 'affiche-askepicard.pdf', format: 'A4', printBackground: true }); console.log('✅ PDF created'); await browser.close(); })();\""
