# Guía para probar la aplicación sin emulador

## Opción 1: Servidor local simplificado

1. Abre la carpeta `c:\wamp64\www\Gestor_recetas\app-web-simple`
2. Abre el archivo `index.html` directamente en tu navegador web
3. Prueba la aplicación en tu computadora
4. Para probar en un dispositivo móvil, sigue estas instrucciones:

## Opción 2: Usar un servidor temporal para pruebas en dispositivos móviles

### Utilizar http-server (Node.js)

1. Instala Node.js desde https://nodejs.org/ (versión LTS)
2. Abre PowerShell y ejecuta:
   ```
   npm install -g http-server
   ```
3. Navega a la carpeta de tu proyecto:
   ```
   cd C:\wamp64\www\Gestor_recetas\app-web-simple
   ```
4. Inicia el servidor:
   ```
   http-server -p 8080
   ```
5. Anota la dirección IP que muestra (por ejemplo, http://192.168.1.5:8080)
6. En tu dispositivo móvil, abre el navegador y visita esa dirección

### Alternativa: Usar WAMP

1. Asegúrate de que WAMP esté en ejecución
2. Coloca los archivos en `C:\wamp64\www\Gestor_recetas\app-web-simple`
3. Desde otro dispositivo en la misma red, visita `http://[IP-DE-TU-PC]:80/Gestor_recetas/app-web-simple`
   (Reemplaza [IP-DE-TU-PC] con la dirección IP de tu computadora)

## Opción 3: Usar servicios de alojamiento temporal gratuito

### Netlify Drop

1. Visita https://app.netlify.com/drop
2. Arrastra y suelta la carpeta `app-web-simple`
3. Netlify generará una URL temporal que puedes usar para probar en cualquier dispositivo

### GitHub Pages

1. Crea un repositorio en GitHub
2. Sube los archivos de `app-web-simple` 
3. Activa GitHub Pages en la configuración del repositorio
4. Usa la URL proporcionada para probar en cualquier dispositivo

## Resolución de problemas comunes

- **Acceso a cámara no funciona**: Asegúrate de usar HTTPS o localhost, ya que el navegador no permite acceso a la cámara en conexiones no seguras
- **Problemas de almacenamiento**: La aplicación usa localStorage, que funciona bien en la mayoría de navegadores móviles
- **Imágenes no se cargan**: Verifica que las rutas de archivo sean correctas y relativas