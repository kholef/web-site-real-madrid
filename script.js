// Récupérer les éléments
const popup = document.getElementById('popup');
const image = document.querySelector('.clickable-image');
const closePopup = document.querySelector('.close-popup');

// Afficher la popup au clic sur l'image
image.addEventListener('click', () => {
    popup.classList.remove('hidden'); // Affiche la popup
});

// Fermer la popup au clic sur le bouton de fermeture
closePopup.addEventListener('click', () => {
    popup.classList.add('hidden'); // Cache la popup
});

// Fermer la popup si on clique en dehors de l'image
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.add('hidden'); // Cache la popup
    }
});
