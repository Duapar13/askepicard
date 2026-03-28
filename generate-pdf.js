const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Charger le fichier HTML
    const htmlPath = path.resolve(__dirname, 'affiche-qr.html');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle2' });
    
    // Générer le PDF
    await page.pdf({
      path: 'affiche-askepicard-qr.pdf',
      format: 'A4',
      printBackground: true,
      margin: { top: 5, bottom: 5, left: 5, right: 5 }
    });
    
    console.log('✅ PDF généré: affiche-askepicard-qr.pdf');
    
    await browser.close();
  } catch (error) {
    console.error('❌ Erreur:', error);
    process.exit(1);
  }
})();
