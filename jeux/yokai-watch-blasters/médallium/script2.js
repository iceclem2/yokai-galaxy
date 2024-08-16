let currentIndex = 0;

// Charger le fichier JSON
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur de chargement du fichier JSON');
    }
    return response.json();
  })
  .then(data => {
    const images = data.images;
    console.log('Données JSON chargées:', images);

    // Fonction pour mettre à jour les images
    function updateImages(index) {
      console.log('Mise à jour des images à partir de l\'index:', index);
      for (let i = 0; i < 24; i++) {
        const imgElement = document.getElementById(`img${i}`);
        const imageData = images[index + i];
        if (imgElement && imageData) {
          imgElement.src = imageData.src;
          imgElement.alt = imageData.alt;
          imgElement.dataset.name = imageData['data-name'];
          imgElement.dataset.info = imageData['data-info'];
          console.log(`Image ${i} mise à jour avec`, imageData);
        } else {
          console.log(`Image ${i} ou données non trouvées`);
        }
      }
    }

    // Initialiser les images
    updateImages(currentIndex);

    // Bouton Précédent
    document.getElementById('prevButton').addEventListener('click', () => {
      if (currentIndex >= 24) {
        currentIndex -= 24;
        updateImages(currentIndex);
      }
    });

    // Bouton Suivant
    document.getElementById('nextButton').addEventListener('click', () => {
      if (currentIndex + 24 < images.length) {
        currentIndex += 24;
        updateImages(currentIndex);
      }
    });
  })
  .catch(error => console.error('Erreur:', error));
