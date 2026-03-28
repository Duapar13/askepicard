// Discord Webhook URL
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1487247995228655768/ubGjdXKESxQ9-owPhNPC77VbiUYxCVKRLcWriSaDomaxhjydDGlX5gvbhgsrxwVzo0WN';

// Rating states
let ratings = {
    graphics: 0,
    gameplay: 0,
    originality: 0
};

// Initialize star ratings
function initStarRating(elementId, ratingKey) {
    const container = document.getElementById(elementId);
    const valueDisplay = document.getElementById(
        elementId.replace('Rating', 'Value')
    );

    const stars = container.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.dataset.value);
            ratings[ratingKey] = value;
            updateStarsDisplay(container, value);
            updateValue(valueDisplay, value);
        });

        star.addEventListener('mouseover', function() {
            const value = parseInt(this.dataset.value);
            updateStarsDisplay(container, value);
        });
    });

    container.addEventListener('mouseleave', function() {
        updateStarsDisplay(container, ratings[ratingKey]);
    });
}

function updateStarsDisplay(container, rating) {
    const stars = container.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function updateValue(element, value) {
    element.textContent = value;
}

// Form submission
document.getElementById('feedbackForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const improvement = document.getElementById('improvement').value.trim();
    const messageDiv = document.getElementById('message');
    const submitBtn = document.querySelector('.submit-btn');

    // Validation
    if (!name) {
        showMessage('Veuillez entrer votre prénom', 'error');
        return;
    }

    if (ratings.graphics === 0 || ratings.gameplay === 0 || ratings.originality === 0) {
        showMessage('Veuillez évaluer tous les critères', 'error');
        return;
    }

    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ Envoi en cours...';

    try {
        // Create Discord embed
        const embed = {
            title: '🎴 Nouveau Feedback Askepicard',
            color: 0x8b5cf6,
            fields: [
                {
                    name: '👤 Prénom',
                    value: name,
                    inline: false
                },
                {
                    name: '⚙️ Graphiques',
                    value: '⭐'.repeat(ratings.graphics) + ' ' + ratings.graphics + '/5',
                    inline: true
                },
                {
                    name: '🎮 Jouabilité',
                    value: '⭐'.repeat(ratings.gameplay) + ' ' + ratings.gameplay + '/5',
                    inline: true
                },
                {
                    name: '✨ Originalité',
                    value: '⭐'.repeat(ratings.originality) + ' ' + ratings.originality + '/5',
                    inline: true
                },
                {
                    name: '💡 Suggestions',
                    value: improvement || 'Aucune',
                    inline: false
                }
            ],
            footer: {
                text: 'Askepicard JPO | ' + new Date().toLocaleString('fr-FR')
            }
        };

        // Send to Discord
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                embeds: [embed]
            })
        });

        if (response.ok) {
            showMessage('✅ Merci pour ton feedback! 🙌', 'success');
            // Reset form
            document.getElementById('feedbackForm').reset();
            ratings = { graphics: 0, gameplay: 0, originality: 0 };
            document.querySelectorAll('.star-rating').forEach(container => {
                container.querySelectorAll('.star').forEach(star => {
                    star.classList.remove('active');
                });
            });
            document.querySelectorAll('.rating-value').forEach(el => {
                el.textContent = '0';
            });
        } else {
            throw new Error('Erreur d\'envoi');
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage('❌ Erreur lors de l\'envoi. Réessaie!', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = '📤 Envoyer mon feedback';
    }
});

function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = 'message ' + type;
    
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.className = 'message';
        }, 5000);
    }
}

// Initialize all star ratings on page load
document.addEventListener('DOMContentLoaded', function() {
    initStarRating('graphicsRating', 'graphics');
    initStarRating('gameplayRating', 'gameplay');
    initStarRating('originalityRating', 'originality');
});
