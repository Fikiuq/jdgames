<?php
$servername = "	10.8.3.14:3306"; // Meestal 'localhost', maar kan variëren
$username = "u64954_5HMwcacAZN"; // Je MySQL-gebruikersnaam
$password = "5dAuNcl7RIeJBEfvRckDx3eL"; // Je MySQL-wachtwoord
$dbname = "s64954_jdwebsiteupdates"; // De naam van de database die je hebt aangemaakt

// Maak verbinding met de database
$conn = new mysqli($servername, $username, $password, $dbname);

// Controleer de verbinding
if ($conn->connect_error) {
    die("Verbinden met de database is mislukt: " . $conn->connect_error);
}
?>
