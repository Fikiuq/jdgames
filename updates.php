<?php
include('config.php'); // Verbind met de database

$sql = "SELECT * FROM updates ORDER BY date DESC"; // Haal de updates op, gesorteerd op datum
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<h2>" . $row['title'] . "</h2>";
        echo "<p>" . $row['description'] . "</p>";
        echo "<small>" . $row['date'] . "</small><hr>";
    }
} else {
    echo "Geen updates beschikbaar.";
}

// Sluit de verbinding
$conn->close();
?>
