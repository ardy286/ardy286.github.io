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
        <p><a text-align:justify href="https://ardy286.itch.io/escape-girl" title="Cliquez pour pouvoir télécharger le jeu." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://ardy286.itch.io/escape-girl</a></p>
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
        <p><a text-align:justify href="https://github.com/ardy286/reservite" title="Cliquez pour vous rediriger sur GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>reservite</a></p>
        `;
    } else if (projectName === 'pendu') {
        modalTitle.textContent = 'Jeu du pendu';
        modalBody.innerHTML = `
            <p>Jeu développé avec Kotlin sur Android Studio</p>
            <div class="row project-card">
      <img class="imageTlf" src="images/Pendu/pendu1.png">
      <img class="imageTlf" src="images/Pendu/pendu2.png">
      <img class="imageTlf" src="images/Pendu/pendu3.png">
      <img class="imageTlf" src="images/Pendu/pendu2.png">
      <img class="imageTlf" src="images/Pendu/pendu3.png">
      </div>
      <p text-align:justify">
      Le jeu du pendu, c'est un jeu où l'objectif est de deviner un mot spécifique en proposant des lettres une à une. Chaque tentative incorrecte rapproche les joueurs de la défaite, symbolisée par le dessin progressif d’un pendu. Ce jeu, à la fois simple et captivant, mêle suspense et réflexion. Il exige de la stratégie, car les joueurs doivent analyser leurs choix pour maximiser leurs chances de deviner le mot avant que le pendu ne soit entièrement dessiné. Le jeu de pendu est souvent utilisé comme un outil ludique pour renforcer le vocabulaire et stimuler l'esprit, tout en offrant une expérience amusante et engageante pour les participants de tout âge. Que ce soit pour passer le temps ou pour un défi amical, le pendu reste un classique intemporel qui allie plaisir et apprentissage.
    </p>
           <h5>Lien GitHub du projet:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/Jeu_du_pendu" title="Cliquez pour vous rediriger sur GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>Jeu_du_pendu</a></p>
        `;
    } else if (projectName === 'calculator') {
        modalTitle.textContent = 'Calculator AK';
        modalBody.innerHTML = `
            <p>Site web développé avec HTML</p>
            <div class="imdModal">
      <img src="images/Calculator/calculatro1.png">
      <img src="images/Calculator/calculator2.png">
      <img src="images/Calculator/calculator3.png">
      </div>
      <p text-align:justify">
      C'est un site web de calculatrice conçu pour effectuer des calculs simples et rapides. Avec une interface claire et facile à utiliser, il permet d'effectuer des opérations de base comme l'addition, la soustraction, la multiplication et la division.

Idéal pour les besoins du quotidien, ce site est accessible sur tous les appareils connectés, qu’il s’agisse d’un ordinateur, d’une tablette ou d’un téléphone portable. Sa simplicité et son efficacité en font un outil pratique pour les étudiants, les professionnels ou toute personne ayant besoin d’une calculatrice en ligne. Ce projet met l'accent sur une expérience utilisateur fluide et intuitive, avec un design épuré qui va droit au but.
      </p>
           <h5>Lien GitHub du projet:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/Calculator" title="Cliquez pour vous rediriger sur GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>Calculator</a></p>
        `;
    } else if (projectName === 'chiffreexact') {
        modalTitle.textContent = 'Chiffre exact';
        modalBody.innerHTML = `
            <p>Jeu développé avec Python</p>
            <div class="row project-card">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact1.png">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact2.png">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact3.png">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact4.png">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact5.png">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact6.png">
      </div>
      <p text-align:justify">
      Le jeu Chiffre Exact est un défi amusant et stratégique où vous devez deviner un chiffre mystère choisi au hasard. Vous commencez la partie avec un score initial de 50 points, ce qui représente votre capital de tentatives. Le principe est simple : à chaque tour, vous proposez un chiffre. Si votre choix est incorrect, non seulement vous perdez 5 points, mais le programme vous aide en vous indiquant si le chiffre que vous avez proposé est supérieur ou inférieur au chiffre recherché. Cela vous permet d’affiner progressivement vos suppositions et d’approcher la bonne réponse.  

Cependant, la pression augmente à mesure que votre score diminue, car si vous atteignez zéro avant d’avoir trouvé le bon chiffre, la partie est perdue. Le défi réside donc dans votre capacité à faire des choix judicieux tout en tenant compte des indices donnés par le programme. D’un autre côté, si vous parvenez à deviner le chiffre exact avant que votre score ne tombe à zéro, la victoire est à vous, preuve de votre perspicacité et de votre logique. Ce jeu, à la fois simple et captivant, mettra à l’épreuve votre réflexion et votre capacité à gérer vos ressources limitées.
        </p>
           <h5>Lien GitHub du projet:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/Jeu-Hasard" title="Cliquez pour vous rediriger sur GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>Jeu-Hasard</a></p>
        `;
    } else if (projectName === 'position') {
        modalTitle.textContent = 'Position';
        modalBody.innerHTML = `
            <p>Site web développé avec HTML</p>
            <div class="imdModal">
      <img src="images/Position/position1.png">
      <img src="images/Position/position2.png">
      </div>
      <p text-align:justify">
      C'est un site web de calculatrice conçu pour effectuer des calculs simples et rapides. Avec une interface claire et facile à utiliser, il permet d'effectuer des opérations de base comme l'addition, la soustraction, la multiplication et la division.

Idéal pour les besoins du quotidien, ce site est accessible sur tous les appareils connectés, qu’il s’agisse d’un ordinateur, d’une tablette ou d’un téléphone portable. Sa simplicité et son efficacité en font un outil pratique pour les étudiants, les professionnels ou toute personne ayant besoin d’une calculatrice en ligne. Ce projet met l'accent sur une expérience utilisateur fluide et intuitive, avec un design épuré qui va droit au but.
      </p>
           <h5>Lien GitHub du projet:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/position" title="Cliquez pour vous rediriger sur GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>position</a></p>
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
