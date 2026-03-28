#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Script pour générer l'affiche en tant que PNG via screenshot web
console.log('📸 Génération de l\'affiche en PNG...');
console.log('');
console.log('Options disponibles:');
console.log('');
console.log('1️⃣  Utiliser Puppeteer (si Node.js/npm installé):');
console.log('   npm install puppeteer');
console.log('   node generate-png.mjs');
console.log('');
console.log('2️⃣  Utiliser un service en ligne:');
console.log('   → https://radiator.last-xmas.org/ (HTML to image)');
console.log('   → Uploader affiche-qr.html');
console.log('   → Exporter en PNG');
console.log('');
console.log('3️⃣  Depuis navigateur (plus facile):');
console.log('   → Ouvrir affiche-qr.html dans Chrome');
console.log('   → Outils Dev (F12) → Capture d\'écran');
console.log('');
