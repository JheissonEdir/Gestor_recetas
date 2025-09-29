<?php
// Este script de prueba mostrará información sobre el servidor
echo "<html><head><title>Test de Conexión</title></head><body>";
echo "<h1>Prueba de Conexión Exitosa</h1>";
echo "<p>Si puedes ver esta página, el servidor PHP está funcionando correctamente.</p>";
echo "<p>IP del servidor: " . $_SERVER['SERVER_ADDR'] . "</p>";
echo "<p>Puerto: " . $_SERVER['SERVER_PORT'] . "</p>";
echo "<p>Tu IP: " . $_SERVER['REMOTE_ADDR'] . "</p>";
echo "<p>Fecha y hora: " . date('Y-m-d H:i:s') . "</p>";
echo "</body></html>";
?>