#!/bin/bash

# Script pour convertir affiche-qr.html en PDF sur macOS
# Utilise AppleScript et Safari (intégré à macOS)

echo "🖨️  Conversion HTML → PDF on macOS"
echo "=================================="
echo ""

# Déterminer le chemin absolu du fichier
HTML_FILE="$(pwd)/affiche-qr.html"

if [ ! -f "$HTML_FILE" ]; then
    echo "❌ Fichier not found: $HTML_FILE"
    exit 1
fi

echo "📄 Fichier source: $HTML_FILE"
echo ""

# Option 1: Utiliser AppleScript + Safari (macOS native)
echo "Méthode 1: Vérification des outils..."

# Vérifier si on peut utiliser AppleScript
if command -v osascript &> /dev/null; then
    echo "✅ AppleScript disponible"
    
    # NOTE: AppleScript a des limitations sur les permissions sandbox
    # C'est pourquoi on va proposer les alternatives
fi

echo ""
echo "Méthode 2: Installation de outils recommandée..."
echo ""

# Vérifier Homebrew
if ! command -v brew &> /dev/null; then
    echo "❌ Homebrew not installed"
    echo "Installer: /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
else
    echo "✅ Homebrew disponible"
    
    # Vérifier wkhtmltopdf
    if command -v wkhtmltopdf &> /dev/null; then
        echo "✅ wkhtmltopdf est installé, conversion en cours..."
        wkhtmltopdf \
            --enable-local-file-access \
            --page-size A4 \
            --margin-top 5mm \
            --margin-bottom 5mm \
            --margin-left 5mm \
            --margin-right 5mm \
            "$HTML_FILE" "affiche-askepicard.pdf"
        
        if [ -f "affiche-askepicard.pdf" ]; then
            echo "✅ PDF créé: affiche-askepicard.pdf"
            du -h affiche-askepicard.pdf
            exit 0
        fi
    else
        echo "⚠️ wkhtmltopdf not found"
        echo "Installation (prendra 2-3 min):"
        echo "  brew install wkhtmltopdf"
    fi
fi

echo ""
echo "=================================================="
echo "💡 SOLUTION IMMÉDIATE (Garantie 100%):"
echo "=================================================="
echo ""
echo "1. Ouvrir le fichier dans Chrome/Safari:"
echo "   open -a Chrome affiche-qr.html"
echo ""
echo "2. Appuyer sur: Cmd + P"
echo ""
echo "3. Cocher 'Arrière-plan'"
echo ""
echo "4. Cliquer 'Enregistrer en PDF'"
echo ""
echo "=================================================="
