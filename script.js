// Selecteer alle secties en links
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav ul li a');

// Voeg een klikgebeurtenis toe aan elke navigatielink
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Voorkom dat de pagina herlaadt
        e.preventDefault();
        
        // Verwijder de 'active' klasse van alle secties
        sections.forEach(section => section.classList.remove('active'));
        
        // Voeg de 'active' klasse toe aan de geselecteerde sectie
        const target = document.querySelector(link.getAttribute('href'));
        target.classList.add('active');
    });
});

// Standaard de home-sectie tonen
document.querySelector('#home').classList.add('active');
