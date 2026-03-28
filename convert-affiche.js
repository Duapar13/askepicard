#!/usr/bin/env node
/**
 * Convertisseur HTML → PDF pour affiche-qr.html
 * Utilise Puppeteer pour une conversion haute résolution
 * 
 * Usage: node convert-affiche.js
 */

const fs = require('fs');
const path = require('path');

async function convertPDF() {
  try {
    // Essayer d'importer Puppeteer
    let puppeteer;
    try {
      puppeteer = require('puppeteer');
    } catch (e) {
      console.log('❌ Puppeteer non installé');
      console.log('');
      console.log('Installation rapide:');
      console.log('  npm install puppeteer');
      console.log('');
      console.log('OU utiliser la méthode manuelle (recommended):');
      printManualInstructions();
      process.exit(1);
    }

    const htmlPath = path.join(__dirname, 'affiche-qr.html');
    
    if (!fs.existsSync(htmlPath)) {
      console.log('❌ Fichier not found:', htmlPath);
      process.exit(1);
    }

    console.log('🚀 Conversion en cours...');
    console.log('📄 Source:', htmlPath);
    
    const browser = await puppeteer.launch({
      headless: 'new',
      dumpio: false
    });
    
    const page = await browser.newPage();
    const fileUrl = `file://${htmlPath}`;
    
    console.log('⏳ Chargement de la page...');
    await page.goto(fileUrl, { waitUntil: 'networkidle2' });
    
    const pdfPath = path.join(__dirname, 'affiche-askepicard.pdf');
    
    console.log('🖨️  Génération du PDF...');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5
      }
    });
    
    await browser.close();
    
    const stats = fs.statSync(pdfPath);
    console.log('');
    console.log('✅ PDF créé avec succès!');
    console.log(`📦 Fichier: ${pdfPath}`);
    console.log(`💾 Taille: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log('');
    console.log('🖨️  Prêt à imprimer!');
    
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    printManualInstructions();
    process.exit(1);
  }
}

function printManualInstructions() {
  console.log('');
  console.log('═══════════════════════════════════════════════════════════');
  console.log('💡 ALTERNATIVE MANUELLE (Plus simple):');
  console.log('═══════════════════════════════════════════════════════════');
  console.log('');
  console.log('1. Ouvrir affiche-qr.html dans Chrome/Safari');
  console.log('2. Appuyer: Cmd + P (Mac) ou Ctrl + P (Windows)');
  console.log('3. Cocher "Arrière-plan"');
  console.log('4. Cliquer "Enregistrer en PDF"');
  console.log('');
  console.log('⏱️  30 secondes max!');
  console.log('───────────────────────────────────────────────────────────');
}

// Lancer la conversion
convertPDF().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
