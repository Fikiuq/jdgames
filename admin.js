document.getElementById('edit-page-button').addEventListener('click', function() {
    var selectedPage = document.getElementById('page-select').value;
    console.log('Pagina geselecteerd: ' + selectedPage);

    // Hier voeg je de logica toe om de inhoud van de geselecteerde pagina op te halen en in de tekstvelden te zetten
});

document.getElementById('save-changes').addEventListener('click', function() {
    var pageTitle = document.getElementById('page-title').value;
    var pageContent = document.getElementById('page-content').value;

    // Hier sla je de veranderingen op in een bestand of een database
    console.log('Pagina titel: ' + pageTitle);
    console.log('Pagina inhoud: ' + pageContent);
});
