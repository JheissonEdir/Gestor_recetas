# Guía de instalación y uso - Gestor de Recetas

## Instrucciones para iniciar la aplicación web

### Método 1: Directo desde el navegador
1. Navega a la carpeta `C:\wamp64\www\Gestor_recetas\app-web-simple`
2. Haz doble clic en `index.html` para abrirlo en tu navegador predeterminado
3. La aplicación debería cargarse correctamente

### Método 2: Usar el servidor WAMP
1. Asegúrate de que WAMP esté en ejecución (icono verde en la bandeja del sistema)
2. Abre tu navegador y visita: `http://localhost/Gestor_recetas/app-web-simple/`

### Método 3: Para probar en dispositivos móviles
1. Asegúrate de que tu PC y el dispositivo móvil estén en la misma red WiFi
2. Averigua la dirección IP de tu PC:
   - Abre PowerShell y ejecuta `ipconfig`
   - Busca la dirección IPv4 (algo como 192.168.x.x)
3. En tu dispositivo móvil, abre el navegador y visita:
   `http://[IP-DE-TU-PC]/Gestor_recetas/app-web-simple/`
   (reemplaza [IP-DE-TU-PC] con la dirección real)

## Características de la aplicación

### 1. Sección de Ingredientes
- Agregar ingredientes con nombre, cantidad, unidad y precio
- Editar o eliminar ingredientes existentes
- Cálculo automático de costos

### 2. Sección de Preparación
- Agregar pasos de preparación detallados
- Reordenar, editar o eliminar pasos

### 3. Sección de Fotos
- Añadir imágenes del antes, durante y después de la preparación
- Agregar descripciones a las imágenes
- Vista previa de las imágenes añadidas

### 4. Sección de Resultado
- Visualizar resumen de la receta
- Cálculo automático del costo total
- Precio sugerido de venta con margen del 30%
- Generación de reportes PDF (próximamente)

## Ventajas de esta versión
- Funciona offline (PWA)
- Se puede instalar como aplicación en dispositivos móviles
- No requiere Android Studio ni emuladores pesados
- Compatible con la mayoría de navegadores web modernos
- Almacenamiento local que persiste entre sesiones

## Para instalar como aplicación en Android
1. Abre la aplicación en Chrome en tu dispositivo Android
2. Toca los tres puntos del menú (esquina superior derecha)
3. Selecciona "Añadir a pantalla de inicio" o "Instalar aplicación"
4. Sigue las instrucciones para completar la instalación

## Para instalar como aplicación en iOS
1. Abre la aplicación en Safari en tu dispositivo iOS
2. Toca el icono de compartir (cuadrado con flecha hacia arriba)
3. Desplázate hacia abajo y selecciona "Añadir a la pantalla de inicio"
4. Toca "Añadir" para confirmar

## Resolución de problemas comunes

### No puedo acceder desde mi dispositivo móvil
- Verifica que ambos dispositivos estén en la misma red WiFi
- Asegúrate de que el servidor WAMP esté en ejecución
- Comprueba si hay algún firewall bloqueando el acceso

### Las imágenes no se cargan o guardan
- Verifica los permisos de cámara en tu navegador
- Intenta usar imágenes de menor tamaño
- Asegúrate de tener suficiente almacenamiento disponible

### La aplicación se cierra o reinicia
- Limpia la caché del navegador
- Asegúrate de tener la última versión del navegador
- En algunos casos, reiniciar el navegador puede resolver el problema