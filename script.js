function showRules(evt, server) {
    var i, tabcontent, tablinks;

    // Verberg alle tabcontent secties
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Verwijder de actieve klasse van alle tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Toon de juiste tab en voeg de actieve klasse toe
    document.getElementById(server).style.display = "block";
    evt.currentTarget.className += " active";
}
