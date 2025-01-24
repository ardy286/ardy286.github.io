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
      C’est un site web innovant qui vous permet de localiser votre position tout en fournissant des informations météorologiques précises et utiles. En quelques secondes, il détecte votre emplacement et affiche des données essentielles comme la température actuelle, le niveau d'humidité et la vitesse du vent. Ces informations sont idéales pour planifier vos activités quotidiennes ou simplement rester informé des conditions météorologiques autour de vous.

Le site est conçu avec une interface conviviale et facile à utiliser, accessible sur tous les appareils, qu’il s’agisse d’un ordinateur, d’une tablette ou d’un smartphone. Que vous soyez chez vous, en déplacement ou en voyage, vous pouvez consulter ces données en temps réel pour adapter vos décisions en fonction des conditions climatiques.

En plus d’être un outil pratique, ce site met l’accent sur la précision des données, qui sont mises à jour régulièrement pour refléter les conditions les plus récentes. Il vise à simplifier l'accès aux informations météorologiques, tout en offrant une expérience utilisateur fluide et agréable. Ce projet représente une combinaison parfaite entre technologie et utilité au quotidien, rendant votre vie un peu plus facile et prévisible.
      </p>
           <h5>Lien GitHub du projet:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/position" title="Cliquez pour vous rediriger sur GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>position</a></p>
        `;
    } else if (projectName === 'portaili') {
        modalTitle.textContent = 'Portail informatique';
        modalBody.innerHTML = `
            <p>Site web développé avec SpringBoot</p>
            <div class="imdModal">
      <img src="images/PortailI/portaili1.png">
      <img src="images/PortailI/portaili2.png">
      <img src="images/PortailI/portaili3.png">
      <img src="images/PortailI/portaili4.png">
      </div>
      <p text-align:justify">
      Le portail informatique est une application conçue pour faciliter la gestion et le partage des ressources pédagogiques au sein des départements d'informatique. Cette plateforme permet aux professeurs de déposer leurs matériels, notes de cours, ainsi que divers types d’évaluations tels que des examens, travaux pratiques (TP), projets, et de partager ces ressources avec l’ensemble des enseignants du département.

Pour les étudiants, l’application offre la possibilité de soumettre leurs projets de fin de session en ligne via une plateforme de dépôt comme Git ou GitLab, assurant ainsi un suivi structuré et professionnel des travaux académiques. En outre, l'application inclut un système de mise en relation qui permet aux étudiants en difficulté de trouver des tuteurs parmi leurs pairs. Ces étudiants tuteurs peuvent leur fournir une aide précieuse pour réussir leur programme en techniques d’informatique.

Une autre fonctionnalité importante de l’application est l’intégration avec le milieu professionnel. Les entreprises peuvent soumettre des projets directement sur la plateforme, offrant ainsi aux étudiants des opportunités pratiques de travailler sur des cas réels tout en collaborant avec leurs enseignants. Cette dimension professionnelle enrichit la formation des étudiants, leur permettant de développer des compétences concrètes et de bâtir des expériences en lien direct avec le marché du travail.

En combinant stockage centralisé des contenus, espace de collaboration interne, et ouverture vers le monde professionnel, le portail informatique devient un outil essentiel pour renforcer la synergie entre enseignants, étudiants, et entreprises.
      </p>
           <h5>Lien GitHub du projet:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/PortailI" title="Cliquez pour vous rediriger sur GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>PortailI</a></p>
        `;
    } else if (projectName === 'vinyl') {
        modalTitle.textContent = 'Vinyl Paradise';
        modalBody.innerHTML = `
            <p>Application de location développé avec Kotlin sur Android Studio</p>
            <div class="row project-card">
      <img class="imageTlf" src="images/Vinyl/vinyl1.png">
      <img class="imageTlf" src="images/Vinyl/vinyl2.png">
      <img class="imageTlf" src="images/Vinyl/vinyl3.png">
      <img class="imageTlf" src="images/Vinyl/vinyl4.png">
      <img class="imageTlf" src="images/Vinyl/vinyl5.png">
      </div>
      <p text-align:justify">
      VinylParadise est une application native développée en Kotlin, conçue pour les collectionneurs de vinyles qui souhaitent acheter et vendre leurs articles en ligne. L'application offre une expérience intuitive et conviviale, permettant aux utilisateurs de consulter un catalogue de vinyles et de publier des annonces de vente. Les principales fonctionnalités incluent la gestion des utilisateurs, une recherche avancée avec des filtres, et l'accès à l'historique des ventes. Note : Cette version ne propose pas d'intégration de système de paiement ou d'échange.
      </p>
           <h5>Lien GitHub du projet:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/vinyl_paradise" title="Cliquez pour vous rediriger sur GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>vinyl_paradise</a></p>
        `;
    }else if (projectName === 'guichet') {
        modalTitle.textContent = 'Guichet automatique';
        modalBody.innerHTML = `
            <p>Application de gestion de guichet automatique d'une banque avec Kotlin sur Android Studio</p>
            <div class="imdModal">
      <img src="images/GuichetAutomatique/photos-a-venir-1.jpg">
      </div>
      <p text-align:justify">
      Le guichet automatique est un programme conçu pour permettre aux utilisateurs d’effectuer des opérations bancaires de manière autonome, telles que retirer de l’argent, consulter leur solde, effectuer des dépôts ou transférer des fonds. Accessible 24h/24, il offre une solution pratique pour gérer ses finances sans avoir besoin de se rendre en agence bancaire.

En parallèle, il y a un administrateur qui dispose de tous les droits nécessaires pour gérer le fonctionnement du guichet automatique. Il a la possibilité de superviser les transactions, de modifier les paramètres du système, d'ajouter ou de supprimer des utilisateurs, et de maintenir la sécurité du réseau. L'administrateur peut également effectuer des mises à jour logicielles ou matérielles pour garantir un service optimal, tout en assurant une gestion adéquate des comptes et de la maintenance du système. Son rôle est crucial pour le bon fonctionnement de l'infrastructure et la protection des données des utilisateurs.
      </p>
           <h5>Lien GitHub du projet:</h5>
        <p style="color:gray;text-decoration:underline;">Le lien sera disponible dans pas longtemps</p>
        `;
    }else if (projectName === 'note') {
        modalTitle.textContent = 'Mes Notes';
        modalBody.innerHTML = `
            <p>Site web développé avec PHP</p>
            <div class="imdModal">
      <img src="images/MyNote/photos-a-venir-1.jpg">
      </div>
      <p text-align:justify">
      Mes Notes est une application pratique et performante qui offre un espace de stockage illimité pour toutes vos notes, vous permettant d’y accéder à tout moment et depuis n’importe quel endroit dans le monde. Que vous soyez à la maison, au bureau ou en déplacement, vos notes restent à portée de main, grâce à une synchronisation rapide et efficace sur tous vos appareils.

L’application se distingue par son système d’organisation intelligent. Vos notes sont automatiquement classées par sections thématiques et par date, ce qui rend leur gestion simple et intuitive. Vous pouvez facilement naviguer parmi vos contenus et retrouver en quelques secondes les informations dont vous avez besoin, même dans un vaste ensemble de données.

De plus, Mes Notes inclut des options de personnalisation avancées pour répondre à vos besoins spécifiques. Vous pouvez attribuer des étiquettes ou des mots-clés à vos notes pour un tri encore plus rapide, ainsi que créer des dossiers ou sous-dossiers pour structurer vos idées. L'interface conviviale, associée à des outils de recherche performants, garantit une expérience utilisateur fluide et agréable.

Enfin, Mes Notes assure une sécurité optimale pour vos informations grâce à des mesures de protection robustes, comme le chiffrement des données et les sauvegardes régulières. C’est la solution idéale pour les étudiants, les professionnels ou toute personne cherchant à gérer efficacement leurs idées et projets sans craindre de perdre leurs données.
      </p>
           <h5>Lien GitHub du projet:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/My_note" title="Cliquez pour vous rediriger sur GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>My_note</a></p>
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
