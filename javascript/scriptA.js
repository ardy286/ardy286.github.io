function toggleSidebar() {
    const sidebar = document.querySelector('.navbar-vertical');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('show');
    content.classList.toggle('expanded');
}

document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12) {
        greetingElement.innerHTML = 'Good morning, I am <span class="styleLogo">A</span>riste <span class="styleLogo">K</span>indy';
    } else {
        greetingElement.innerHTML = 'Good afternoon, I am <span class="styleLogo">A</span>riste <span class="styleLogo">K</span>indy';
    }
});

function loadProjectDetails(projectName) {
    const modalTitle = document.getElementById('projectModalLabel');
    const modalBody = document.querySelector('#projectModal .modal-body');

    // Exemple de contenu dynamique pour différents projets
    if (projectName === 'escapeGirl') {
        modalTitle.textContent = 'Kidnaped Escape Girl';
        modalBody.innerHTML = `
            <p>2D and 3D Game developed with Unity</p>
            <div class="imdModal">
      <img src="images/EscapeGirl/EscapeGirl1.png">
      <img src="images/EscapeGirl/EscapeGirl2.png">
      <img src="images/EscapeGirl/EscapeGirl3.png">
      </div>
      <p text-align:justify">
      This game tells the story of Gabie, a brave young girl who has been kidnapped by abductors. She finds herself trapped in a mysterious house, full of guards and traps designed to prevent her from escaping. To survive, Gabie must use her intelligence and ingenuity to outsmart the traps, avoid the guards, and find clues that might lead her to freedom. Each room in the house hides secrets and challenges, making her escape both dangerous and thrilling. Her determination will be tested, but Gabie is ready to do whatever it takes to regain her freedom.
      </p>
      <p>To get the project folder with the scripts, please contact me.</p>
           <h5>Link to download the game:</h5>
        <p><a text-align:justify href="https://ardy286.itch.io/escape-girl" title="Click to download the game." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://ardy286.itch.io/escape-girl</a></p>
        `;
    } else if (projectName === 'reservite') {
        modalTitle.textContent = 'Reservite';
        modalBody.innerHTML = `
            <p>Website developed with ASP.Net</p>
            <div class="imdModal">
      <img src="images/Reservite/Reservite1.png">
      <img src="images/Reservite/Reservite2.png">
      <img src="images/Reservite/Reservite3.png">
      </div>
      <p text-align:justify">
      Reservite is a website designed to simplify hotel room reservations without the need to travel. With its intuitive platform, users can search, select, and book rooms in just a few clicks. The tool also allows administrators to efficiently manage the hotel, including room availability, bookings, and customer profiles.

A real-time communication feature enables users and administrators to communicate directly, whether to ask questions, request changes, or receive quick assistance. Reservite thus simplifies hotel management while providing a smooth and interactive user experience.
    </p>
           <h5>GitHub link for the project:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/reservite" title="Click to be redirected to GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>reservite</a></p>
        `;
    } else if (projectName === 'pendu') {
        modalTitle.textContent = 'Jeu du pendu';
        modalBody.innerHTML = `
            <p>Game developed with Kotlin on Android Studio.</p>
            <div class="row project-card">
      <img class="imageTlf" src="images/Pendu/pendu1.png">
      <img class="imageTlf" src="images/Pendu/pendu2.png">
      <img class="imageTlf" src="images/Pendu/pendu3.png">
      <img class="imageTlf" src="images/Pendu/pendu2.png">
      <img class="imageTlf" src="images/Pendu/pendu3.png">
      </div>
      <p text-align:justify">
      'Jeu du pendu' is a game where the goal is to guess a specific word by proposing letters one by one. Each incorrect attempt brings the players closer to defeat, symbolized by the gradual drawing of a hangman. This game, both simple and captivating, combines suspense and reflection. It requires strategy, as players must analyze their choices to maximize their chances of guessing the word before the hangman is fully drawn. Hangman is often used as an enjoyable tool to strengthen vocabulary and stimulate the mind, while providing a fun and engaging experience for participants of all ages. Whether it's for passing time or for a friendly challenge, Hangman remains a timeless classic that combines fun and learning.
    </p>
           <h5>GitHub link for the project:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/Jeu_du_pendu" title="Click to be redirected to GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>Jeu_du_pendu</a></p>
        `;
    } else if (projectName === 'calculator') {
        modalTitle.textContent = 'Calculator AK';
        modalBody.innerHTML = `
            <p>Website developed with HTML and javascript</p>
            <div class="imdModal">
      <img src="images/Calculator/calculatro1.png">
      <img src="images/Calculator/calculator2.png">
      <img src="images/Calculator/calculator3.png">
      </div>
      <p text-align:justify">
      This is a calculator website designed to perform simple and quick calculations. With a clear and easy-to-use interface, it allows basic operations such as addition, subtraction, multiplication, and division.

Ideal for everyday needs, the site is accessible on all connected devices, whether it's a computer, tablet, or smartphone. Its simplicity and efficiency make it a practical tool for students, professionals, or anyone needing an online calculator. This project focuses on a smooth and intuitive user experience, with a clean design that gets straight to the point.
      </p>
           <h5>GitHub link for the project:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/Calculator" title="Click to be redirected to GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>Calculator</a></p>
        `;
    } else if (projectName === 'chiffreexact') {
        modalTitle.textContent = 'Chiffre exact';
        modalBody.innerHTML = `
            <p>Game developed with Python</p>
            <div class="row project-card">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact1.png">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact2.png">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact3.png">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact4.png">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact5.png">
      <img class="imageTlf" src="images/ChiffreExact/chiffreexact6.png">
      </div>
      <p text-align:justify">
      'Chiffre exact' is a fun and strategic challenge where you must guess a mystery number chosen randomly. You start the game with an initial score of 50 points, which represents your attempt capital. The concept is simple: each round, you propose a number. If your guess is incorrect, not only do you lose 5 points, but the program helps by telling you if your guess is higher or lower than the target number. This allows you to gradually refine your guesses and get closer to the correct answer.

However, the pressure increases as your score decreases because if you reach zero before guessing the correct number, the game is lost. The challenge lies in your ability to make wise choices while considering the clues given by the program. On the other hand, if you manage to guess the exact number before your score drops to zero, victory is yours, proving your insight and logic. This game, both simple and captivating, will test your thinking and your ability to manage limited resources.
        </p>
           <h5>GitHub link for the project:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/Jeu-Hasard" title="Click to be redirected to GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>Jeu-Hasard</a></p>
        `;
    } else if (projectName === 'position') {
        modalTitle.textContent = 'Position';
        modalBody.innerHTML = `
            <p>Website developed with HTML and javascript</p>
            <div class="imdModal">
      <img src="images/Position/position1.png">
      <img src="images/Position/position2.png">
      </div>
      <p text-align:justify">
      This is an innovative website that allows you to track your location while providing accurate and useful weather information. Within seconds, it detects your location and displays essential data such as the current temperature, humidity level, and wind speed. This information is perfect for planning your daily activities or simply staying informed about the weather conditions around you.

The website is designed with a user-friendly interface, easy to use, and accessible on all devices, whether it's a computer, tablet, or smartphone. Whether you're at home, on the go, or traveling, you can access this real-time data to make decisions based on the weather conditions.

In addition to being a practical tool, this website focuses on the accuracy of the data, which is regularly updated to reflect the most current conditions. It aims to simplify access to weather information while providing a smooth and enjoyable user experience. This project represents a perfect blend of technology and daily utility, making your life a little easier and more predictable.
      </p>
           <h5>GitHub link for the project:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/position" title="Click to be redirected to GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>position</a></p>
        `;
    } else if (projectName === 'portaili') {
        modalTitle.textContent = 'Portail informatique';
        modalBody.innerHTML = `
            <p>Website developed with SpringBoot</p>
            <div class="imdModal">
      <img src="images/PortailI/portaili1.png">
      <img src="images/PortailI/portaili2.png">
      <img src="images/PortailI/portaili3.png">
      <img src="images/PortailI/portaili4.png">
      </div>
      <p text-align:justify">
      The IT portal is an application designed to facilitate the management and sharing of educational resources within computer science departments. This platform allows professors to upload their materials, lecture notes, as well as various types of assessments such as exams, practical work (TP), projects, and share these resources with all the department's teachers.

For students, the application offers the possibility to submit their final session projects online via a submission platform like Git or GitLab, ensuring a structured and professional tracking of academic work. Additionally, the application includes a matchmaking system that allows students in need to find tutors among their peers. These peer tutors can provide valuable assistance to help students succeed in their computer science programs.

Another important feature of the application is its integration with the professional world. Companies can directly submit projects to the platform, thus providing students with practical opportunities to work on real-world cases while collaborating with their instructors. This professional aspect enriches students' training, enabling them to develop concrete skills and build experiences directly related to the job market.

By combining centralized content storage, an internal collaboration space, and connections to the professional world, the IT portal becomes an essential tool to strengthen the synergy between teachers, students, and companies.
      </p>
           <h5>GitHub link for the project:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/PortailI" title="Click to be redirected to GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>PortailI</a></p>
        `;
    } else if (projectName === 'vinyl') {
        modalTitle.textContent = 'Vinyl Paradise';
        modalBody.innerHTML = `
            <p>Rental application developed with Kotlin on Android Studio</p>
            <div class="row project-card">
      <img class="imageTlf" src="images/Vinyl/vinyl1.png">
      <img class="imageTlf" src="images/Vinyl/vinyl2.png">
      <img class="imageTlf" src="images/Vinyl/vinyl3.png">
      <img class="imageTlf" src="images/Vinyl/vinyl4.png">
      <img class="imageTlf" src="images/Vinyl/vinyl5.png">
      </div>
      <p text-align:justify">
      VinylParadise is a native application developed in Kotlin, designed for vinyl collectors who wish to buy and sell their items online. The app offers an intuitive and user-friendly experience, allowing users to browse a catalog of vinyl records and post sales listings. Key features include user management, advanced search with filters, and access to sales history. Note: This version does not include payment or exchange system integration.
      </p>
           <h5>GitHub link for the project:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/vinyl_paradise" title="Click to be redirected to GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>vinyl_paradise</a></p>
        `;
    }else if (projectName === 'guichet') {
        modalTitle.textContent = 'Guichet automatique';
        modalBody.innerHTML = `
            <p>ATM management application for a bank developed with Java on Scene Builder</p>
            <div class="imdModal">
      <img src="images/GuichetAutomatique/photos-a-venir-1.jpg">
      </div>
      <p text-align:justify">
      'Guichet automatique' is a program designed to allow users to perform banking operations autonomously, such as withdrawing money, checking their balance, making deposits, or transferring funds. Available 24/7, it provides a convenient solution for managing finances without the need to visit a bank branch.

In parallel, there is an administrator who has all the necessary rights to manage the ATM's operation. They can oversee transactions, modify system settings, add or remove users, and maintain network security. The administrator can also perform software or hardware updates to ensure optimal service while managing user accounts and system maintenance. Their role is crucial for the proper functioning of the infrastructure and the protection of user data.
      </p>
           <h5>GitHub link for the project:</h5>
        <p style="color:gray;text-decoration:underline;">The link will be available shortly.</p>
        `;
    }else if (projectName === 'note') {
        modalTitle.textContent = 'Mes Notes';
        modalBody.innerHTML = `
            <p>Website developed with PHP</p>
            <div class="imdModal">
      <img src="images/MyNote/note1.png">
      <img src="images/MyNote/note2.png">
      <img src="images/MyNote/note3.png">
      <img src="images/MyNote/note4.png">
      </div>
      <p text-align:justify">
      'Mes Notes' sounds like a very practical and efficient application, especially for those who need to stay organized and have their information readily accessible. The features you’ve described, like smart organization, tagging, and advanced search options, would make it incredibly easy to manage a large volume of notes. And the added security measures like encryption and regular backups are great for peace of mind. Do you have a link to the project or any other information you'd like to share?
      </p>
           <h5>GitHub link for the project:</h5>
        <p><a text-align:justify href="https://github.com/ardy286/My_note" title="Click to be redirected to GitHub." target="_blank" style="text-decoration:underline;color: #2EA5C3;">https://github.com/ardy286/<br>My_note</a></p>
        `;
    } else {
        modalTitle.textContent = 'Unknown project';
        modalBody.innerHTML = `
            <p>The details for this project are not available at the moment.</p>
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
