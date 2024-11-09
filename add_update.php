<?php
include('config.php'); // Verbind met de database

// Controleer of het formulier is ingediend
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Verkrijg de gegevens van het formulier
    $title = $_POST['title'];
    $description = $_POST['description'];

    // SQL-query om de update toe te voegen
    $sql = "INSERT INTO updates (title, description) VALUES ('$title', '$description')";

    // Voer de query uit
    if ($conn->query($sql) === TRUE) {
        echo "Update succesvol toegevoegd!";
    } else {
        echo "Fout bij toevoegen van update: " . $conn->error;
    }

    // Sluit de verbinding
    $conn->close();
}
?>
