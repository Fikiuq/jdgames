let currentUser = null;

// Wachtwoord validatie voor het admin paneel
function adminLogin() {
    const password = document.getElementById("password").value;
    if (password === "JDG@admin") {
        document.getElementById("admin-login").classList.add("hidden");
        document.getElementById("admin-panel").classList.remove("hidden");
        currentUser = "admin";
    } else {
        alert("Ongeldig wachtwoord");
    }
    return false;
}

// Uitloggen van het admin paneel
function logout() {
    document.getElementById("admin-login").classList.remove("hidden");
    document.getElementById("admin-panel").classList.add("hidden");
    currentUser = null;
}

// Laad en update pagina-inhoud
function loadPageContent(page) {
    const content = localStorage.getItem(page + "-content") || "Inhoud van " + page;
    document.getElementById("page-content").value = content;
}

function updatePageContent() {
    const page = document.getElementById("page-list").value;
    const content = document.getElementById("page-content").value;
    localStorage.setItem(page + "-content", content);
    alert(page + " pagina bijgewerkt!");
}

// Achtergrond update
function updateBackground() {
    const bgUrl = document.getElementById("bg-url").value;
    document.body.style.backgroundImage = `url(${bgUrl})`;
    localStorage.setItem("background", bgUrl);
}

// Footer position update
document.getElementById("fixed-footer").addEventListener("change", function () {
    const footer = document.querySelector("footer");
    if (this.checked) {
        footer.style.position = "fixed";
    } else {
        footer.style.position = "static";
    }
    localStorage.setItem("footerFixed", this.checked);
});

// Initialisatie van opgeslagen instellingen
window.onload = () => {
    const bgUrl = localStorage.getItem("background");
    if (bgUrl) {
        document.body.style.backgroundImage = `url(${bgUrl})`;
    }
    document.getElementById("fixed-footer").checked = localStorage.getItem("footerFixed") === "true";
};
