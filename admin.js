document.getElementById('edit-page-button').addEventListener('click', function() {
    const selectedPage = document.getElementById('page-select').value;
    document.getElementById('page-details').style.display = 'block';
});

document.getElementById('save-changes').addEventListener('click', function() {
    const pageTitle = document.getElementById('page-title').value;
    const pageContent = document.getElementById('page-content').value;

    // Hier zou je de wijzigingen opslaan naar een database of bestand.
    alert(`Pagina ${pageTitle} opgeslagen!`);
});
