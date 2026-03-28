# 🎴 ASKEPICARD JPO - Résumé complet du projet

## ✅ Tout est prêt pour la JPO!

Votre système de feedback pour la JPO du 28 mars est **100% opérationnel**.

---

## 📁 Fichiers créés

### 🌐 Site Web (Live)
- **`index.html`** - Formulaire de feedback interactif
- **`styles.css`** - Design responsive beautiful (mobile/desktop)
- **`script.js`** - Logique d'envoi Discord Webhook

### 🎨 Affiches & QR Code
- **`affiche-qr.html`** - Affiche belle et responsive (A4/A3)
- **`qr-code.png`** - QR code 300×300px
- **`qr.html`** - Page d'affichage du QR code

### 📖 Documentation  
- **`README.md`** - Doc générale
- **`GUIDE_JPO.md`** - Guide complet pour la JPO
- **`CHECKLIST_JPO.md`** - Checklist jour J
- **`IMPRESSION_AFFICHE.md`** - Guide d'impression PDF
- **`GENERER-IMAGE.md`** - Comment créer l'image PNG

### 🛠️ Scripts utilitaires
- **`generate-pdf.sh`** - Générer le PDF Bash
- **`generate-pdf.js`** - Générer le PDF Node.js

---

## 🌍 URLs de déploiement

| Ressource | URL |
|-----------|-----|
| **Formulaire** | https://duapar13.github.io/askepicard/ |
| **QR Code Page** | https://duapar13.github.io/askepicard/qr.html |
| **Affiche HTML** | https://duapar13.github.io/askepicard/affiche-qr.html |
| **Repository** | https://github.com/Duapar13/askepicard |

---

## 🚀 Quick Start JPO

### 1️⃣ Affiche à imprimer
```bash
# Option A: Chrome → Cmd+P → "Enregistrer en PDF"
# Ouvrir: affiche-qr.html

# Option B: wkhtmltopdf
brew install wkhtmltopdf
bash generate-pdf.sh
# Crée: affiche-askepicard-qr.pdf
```

### 2️⃣ QR Code à afficher
- Imprimer le QR code depuis `qr-code.png` (minimum 10×10 cm)
- Ou afficher `affiche-qr.html` sur un écran

### 3️⃣ Lancer le formulaire
- URL: https://duapar13.github.io/askepicard/
- OU ouvrir `index.html` localement

### 4️⃣ Recevoir les feedbacks
- **Discord**: Les feedbacks arrivent en temps réel
- Les embeds colorés affichent tous les détails

---

## 📊 Formulaire - Fonctionnalités

✅ **3 Évaluations par étoiles**:
- ⚙️ Graphiques (1-5)
- 🎮 Jouabilité (1-5)
- ✨ Originalité (1-5)

✅ **Champs libres**:
- 👤 Prénom (requis)
- 💡 Suggestions (optionnel)

✅ **Envoi automatique**:
- Webhook Discord intégré
- Réponses en temps réel

---

## 🎨 Design & Atouts

✨ **Design moderne**:
- Thème sombre élégant (bleu/rose/violet)
- Gradient animé
- Interface intuitive

📱 **Responsive**:
- Fonctionne parfaitement sur **tout téléphone**
- Version desktop aussi optimisée
- Touch-friendly

⚡ **Performance**:
- Chargement ultra-rapide
- Pas de backend complexe
- Edge hosting via GitHub Pages

---

## ⚙️ Configuration Discord

**Webhook utilisé**:
```
https://discord.com/api/webhooks/1487247995228655768/ubGjdXKESxQ9-owPhNPC77VbiUYxCVKRLcWriSaDomaxhjydDGlX5gvbhgsrxwVzo0WN
```

Les feedbacks sont postés comme embeds avec:
- Prénom
- Notes pour chaque critère
- Suggestions détaillées
- Timestamp automatique

---

## 📋 Jour J - Checklist rapide

- [ ] Imprimer l'affiche A3 (plus grande = mieux)
- [ ] Tester le QR code scan avant 10h
- [ ] Vérifier Discord est ouvert et reçoit les webhooks
- [ ] Avoir des brouillons si le wifi lag
- [ ] Préparer des testeurs pour remplir d'abord le formulaire
- [ ] Monitorer les évaluations en direct
- [ ] Noter les tendances (quelle note revient souvent?)

---

## 📝 Exemples de Feedback Discord

```
🎴 Nouveau Feedback Askepicard
👤 Prénom: Alice
⚙️ Graphiques: ⭐⭐⭐⭐ 4/5
🎮 Jouabilité: ⭐⭐⭐⭐⭐ 5/5
✨ Originalité: ⭐⭐⭐ 3/5
💡 Suggestions: Les animations sont fluides! Peut-être ajouter plus de cartes?
```

---

## 🎁 Bonus: Améliorations futures

Basé sur les feedbacks JPO, vous pourrez:
- Ajouter des filtres par date dans Discord
- Créer un dashboard d'analyse des retours
- Exporter les données en CSV
- Ajouter plus d'équipes de test
- Créer des sondages ou questions bonus

---

## 🆘 Support Rapide

### ❌ Le QR code ne scanne pas
→ Augmentez la taille, retirez les reflets

### ❌ Pas de connexion wifi
→ Utilisez le hotspot d'un téléphone

### ❌ Feedback ne va pas à Discord
→ Ouvrez la console (F12) et regardez les erreurs

### ❌ Le formulaire est trop lent
→ Discord a un rate limit, attendez 1-2 secondes

---

## 📞 Contacts du projet

**Équipe**: Terence, William + You
**Date**: 28 Mars 2026
**École**: [À adapter]
**GitHub**: https://github.com/Duapar13/askepicard

---

## 🎯 Points clés à retenir

✅ Le site est **live et accessible**  
✅ Les QR codes **scannent actuellement** sur vraies URLs  
✅ Le webhook Discord **fonctionne**  
✅ Le design est **mobile-optimisé**  
✅ Tout est **prêt pour production**  

---

**Bonne JPO! 🚀🎮✨**

*Askepicard - Jeu de cartes stratégique 2026*
