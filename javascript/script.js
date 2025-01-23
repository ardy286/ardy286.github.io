function toggleSidebar() {
    const sidebar = document.querySelector('.navbar-vertical');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('show');
    content.classList.toggle('expanded');
}

document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();

    if (currentHour >= 18 || currentHour < 6) {
        greetingElement.innerHTML = 'Bonsoir, Je suis <span class="styleLogo">A</span>riste <span class="styleLogo">K</span>indy';
    } else {
        greetingElement.innerHTML = 'Bonjour, Je suis <span class="styleLogo">A</span>riste <span class="styleLogo">K</span>indy';
    }
});

function loadProjectDetails(projectName) {
    const modalTitle = document.getElementById('projectModalLabel');
    const modalBody = document.querySelector('#projectModal .modal-body');

    // Exemple de contenu dynamique pour différents projets
    if (projectName === 'escapeGirl') {
        modalTitle.textContent = 'Kidnaped Escape Girl';
        modalBody.innerHTML = `
            <p>Jeu 2D et 3D développé avec Unity.</p>
            <div class="imdModal">
      <img src="images/EscapeGirl/EscapeGirl1.png">
      <img src="images/EscapeGirl/EscapeGirl2.png">
      <img src="images/EscapeGirl/EscapeGirl3.png">
      </div>
      <p text-align:justify">
      Ce jeu raconte l'histoire de Gabie, une jeune fille courageuse qui a été kidnappée par des ravisseurs. Elle se retrouve enfermée dans une maison mystérieuse, pleine de gardes et de pièges conçus pour l'empêcher de s'enfuir. Pour survivre, Gabie doit utiliser son intelligence et son ingéniosité pour déjouer les pièges, éviter les gardes et trouver des indices qui pourraient la mener à la liberté. Chaque pièce de la maison cache des secrets et des défis, rendant son évasion à la fois périlleuse et palpitante. Sa détermination sera mise à l'épreuve, mais Gabie est prête à tout pour retrouver sa liberté.
      </p>
      <p>Pour avoir le dossier du projet avec les scripts, veuillez me contacter.</p>
           <h5>Lien pour télécharger le jeu:</h5>
        <a href="https://ardy286.itch.io/escape-girl" title="Cliquez pour pouvoir télécharger le jeu." target="_blank" style="text-decoration:none;color: #2EA5C3;">https://ardy286.itch.io/escape-girl</a>
        `;
    } else if (projectName === 'reservite') {
        modalTitle.textContent = 'Reservite';
        modalBody.innerHTML = `
            <p>Site web développé avec ASP.Net</p>
            <div class="imdModal">
      <img src="images/Reservite/Reservite1.png">
      <img src="images/Reservite/Reservite2.png">
      <img src="images/Reservite/Reservite3.png">
      </div>
      <p text-align:justify">
      Reservite est un site web conçu pour faciliter la réservation de chambres d’hôtel sans avoir besoin de se déplacer. Grâce à sa plateforme intuitive, les utilisateurs peuvent rechercher, sélectionner et réserver des chambres en quelques clics. L’outil offre également aux administrateurs la possibilité de gérer efficacement l’hôtel, notamment les disponibilités, les réservations et les profils des clients.

    Une fonctionnalité de communication en temps réel permet aux utilisateurs et aux administrateurs de dialoguer directement, que ce soit pour poser des questions, demander des modifications ou obtenir une assistance rapide. Reservite simplifie ainsi la gestion hôtelière tout en offrant une expérience utilisateur fluide et interactive.
    </p>
           <h5>Lien GitHub du projet:</h5>
        <a href="https://github.com/ardy286/reservite" title="Cliquez pour vous rediriger sur GitHub." target="_blank" style="text-decoration:none;color: #2EA5C3;">https://github.com/ardy286/reservite</a>
        `;
    } else if (projectName === 'project3') {
        modalTitle.textContent = 'Projet 3';
        modalBody.innerHTML = `
            <p>Description détaillée du Projet 3.</p>
            <img src="images/projetPic.jpg" alt="Capture d'écran" class="img-fluid mb-3">
        `;
    } else {
        modalTitle.textContent = 'Projet inconnu';
        modalBody.innerHTML = `
            <p>Les détails pour ce projet ne sont pas disponibles pour le moment.</p>
        `;
    }
}


// Ajouter ou retirer la classe 'no-scroll' en fonction de l'état du modal
const modal = document.getElementById('projectModal');

// Événement lorsque la modale s'ouvre
modal.addEventListener('shown.bs.modal', () => {
    document.body.classList.add('no-scroll');
});

// Événement lorsque la modale se ferme
modal.addEventListener('hidden.bs.modal', () => {
    document.body.classList.remove('no-scroll');
});
