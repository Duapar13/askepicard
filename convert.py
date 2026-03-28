#!/usr/bin/env python3
"""
Convertit affiche-qr.html en PDF/PNG
Utilise un service API en ligne gratuit
"""

import urllib.request
import urllib.parse
import json
import sys

def convert_to_pdf():
    """Convertit le HTML en PDF via API"""
    try:
        # L'URL du fichier HTML depuis GitHub Pages
        html_url = "https://duapar13.github.io/askepicard/affiche-qr.html"
        
        # API gratuite pour screenshot (avec paramètres PDF)
        api_url = f"https://api.screenshotapi.net/capture?token=default&url={urllib.parse.quote(html_url)}&fullpage=true&width=1000&format=pdf"
        
        print("📸 Conversion en cours...")
        print(f"URL source: {html_url}")
        
        # Faire la requête
        response = urllib.request.urlopen(api_url, timeout=30)
        pdf_data = response.read()
        
        # Vérifier que c'est un PDF
        if pdf_data.startswith(b'%PDF'):
            with open('affiche-askepicard.pdf', 'wb') as f:
                f.write(pdf_data)
            print(f"✅ PDF SUR CRÉÉ  créé avec succès!")
            print(f"📄 Fichier: affiche-askepicard.pdf ({len(pdf_data)} bytes)")
            return True
        else:
            print("⚠️ Réponse invalide de l'API")
            return False
            
    except urllib.error.URLError as e:
        print(f"❌ Erreur réseau: {e}")
        return False
    except Exception as e:
        print(f"❌ Erreur: {e}")
        return False

def alternative_method():
    """Affiche la méthode alternative manuelle"""
    print("\n💡 ALTERNATIVE (Manuelle, garantie 100%):")
    print("=" * 60)
    print("1. Ouvrir dans Chrome:")
    print("   https://duapar13.github.io/askepicard/affiche-qr.html")
    print("\n2. Appuyer sur: Cmd + P (Mac) ou Ctrl + P (Windows)")
    print("\n3. Dans le menu d'impression:")
    print("   - Format: A4")
    print("   - Orientation: Portrait")
    print("   - Marges: Réduites")
    print("   - Arrière-plan: ✓ Activé")
    print("\n4. Destination: 'Enregistrer en PDF'")
    print("=" * 60)

if __name__ == '__main__':
    success = convert_to_pdf()
    if not success:
        alternative_method()
