function showRules(evt, serverName) {
    var i, tabcontent, tablinks;

    // Verberg alle tab-content elementen
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Verwijder de "active" class van alle knoppen
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Toon de geselecteerde tab en voeg de "active" class toe aan de knop
    document.getElementById(serverName).style.display = "block";
    evt.currentTarget.className += " active";
}
