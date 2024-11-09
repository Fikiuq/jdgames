<?php
// Maak verbinding met de database
$conn = new mysqli("localhost", "gebruikersnaam", "wachtwoord", "database_naam");

// Controleer de verbinding
if ($conn->connect_error) {
    die("Verbinding mislukt: " . $conn->connect_error);
}

// Controleer of het formulier is verzonden
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titel = $_POST['titel'];
    $beschrijving = $_POST['beschrijving'];

    // Voeg de nieuwe update toe aan de database
    $sql = "INSERT INTO updates (titel, beschrijving) VALUES ('$titel', '$beschrijving')";

    if ($conn->query($sql) === TRUE) {
        echo "Nieuwe update succesvol toegevoegd!";
    } else {
        echo "Fout bij toevoegen van update: " . $conn->error;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Update Pagina</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Voeg een nieuwe update toe</h1>
    <form method="post" action="admin-update.php">
        <label for="titel">Titel:</label><br>
        <input type="text" id="titel" name="titel" required><br><br>
        <label for="beschrijving">Beschrijving:</label><br>
        <textarea id="beschrijving" name="beschrijving" rows="4" cols="50" required></textarea><br><br>
        <input type="submit" value="Voeg Update Toe">
    </form>
</body>
</html>
