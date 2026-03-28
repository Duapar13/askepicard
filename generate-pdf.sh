#!/bin/bash

# Script pour générer le PDF de l'affiche QR code
# Utilise wkhtmltopdf si disponible, sinon suggestion

if command -v wkhtmltopdf &> /dev/null; then
    echo "📄 Génération du PDF avec wkhtmltopdf..."
    wkhtmltopdf --enable-local-file-access \
        --page-size A4 \
        --margin-top 5mm \
        --margin-bottom 5mm \
        --margin-left 5mm \
        --margin-right 5mm \
        affiche-qr.html affiche-askepicard-qr.pdf
    echo "✅ PDF généré: affiche-askepicard-qr.pdf"
else
    echo "⚠️  wkhtmltopdf non installé"
    echo ""
    echo "Options pour générer le PDF:"
    echo "1. Installer wkhtmltopdf: brew install wkhtmltopdf"
    echo "2. Ouvrir affiche-qr.html dans Chrome et Imprimer → Enregistrer en PDF"
    echo "3. Utiliser un service en ligne comme cloudconvert.com"
fi
