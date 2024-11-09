const adminPassword = "admin123"; // Wachtwoord voor toegang tot het admin panel
const savedPages = JSON.parse(localStorage.getItem("pages")) || [];

function checkPassword() {
    const enteredPassword = document.getElementById("admin-password").value;
    if (enteredPassword === adminPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("panel").style.display = "block";
    } else {
        alert("Onjuist wachtwoord.");
    }
}

function addPage() {
    document.getElementById("page-details").style.display = "block";
    document.getElementById("page-name").value = "";
    document.getElementById("page-content").value = "";
}

function savePage() {
    const pageName = document.getElementById("page-name").value;
    const pageContent = document.getElementById("page-content").value;
    
    if (pageName && pageContent) {
        savedPages.push({ name: pageName, content: pageContent });
        localStorage.setItem("pages", JSON.stringify(savedPages));
        alert("Pagina opgeslagen!");
    } else {
        alert("Vul zowel een naam als inhoud in.");
    }
}

function editPage() {
    const pageName = prompt("Voer de naam van de pagina in die je wilt bewerken:");
    const page = savedPages.find(page => page.name === pageName);
    if (page) {
        document.getElementById("page-details").style.display = "block";
        document.getElementById("page-name").value = page.name;
        document.getElementById("page-content").value = page.content;
    } else {
        alert("Pagina niet gevonden.");
    }
}

function deletePage() {
    const pageName = prompt("Voer de naam van de pagina in die je wilt verwijderen:");
    const index = savedPages.findIndex(page => page.name === pageName);
    if (index !== -1) {
        savedPages.splice(index, 1);
        localStorage.setItem("pages", JSON.stringify(savedPages));
        alert("Pagina verwijderd!");
    } else {
        alert("Pagina niet gevonden.");
    }
}
