# Guía para convertir tu aplicación web en APK usando PWABuilder

Esta guía te permitirá crear un archivo APK a partir de tu aplicación web sin necesidad de usar Android Studio ni emuladores.

## ¿Qué es PWABuilder?

PWABuilder es una herramienta gratuita que permite convertir sitios web en aplicaciones nativas para Android, iOS y Windows. No necesitas conocimientos de programación avanzados ni mucho espacio en disco.

## Pasos para crear un APK con PWABuilder

### Paso 1: Preparar tu aplicación web

1. Asegúrate de que tu aplicación web esté funcionando correctamente en el navegador
2. Añade un archivo manifest.json a la carpeta de tu proyecto

### Paso 2: Crear el archivo manifest.json

```bash
cd C:\wamp64\www\Gestor_recetas\app-web-simple
```

Crea un archivo llamado `manifest.json` con el siguiente contenido:

```json
{
  "name": "Gestor de Recetas",
  "short_name": "Recetas",
  "description": "Aplicación para gestionar recetas de cocina",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#8e2025",
  "icons": [
    {
      "src": "icon.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Paso 3: Crear un icono simple para la aplicación

Puedes crear un icono simple usando alguna herramienta online o descargar algún icono gratuito. Necesitarás guardarlo en dos tamaños:
- icon.png (192x192 píxeles)
- icon-512.png (512x512 píxeles)

### Paso 4: Utilizar PWABuilder online

1. Sube tu aplicación a un hosting temporal gratuito como Netlify Drop (https://app.netlify.com/drop)
2. Arrastra y suelta la carpeta `app-web-simple` en Netlify Drop
3. Anota la URL que te proporciona (ejemplo: https://random-name-123.netlify.app)

### Paso 5: Generar el APK

1. Visita https://www.pwabuilder.com/
2. Introduce la URL de tu aplicación web en Netlify
3. Haz clic en "Start"
4. PWABuilder analizará tu sitio y te mostrará los resultados
5. Haz clic en "Android" en la sección "Build"
6. Configura las opciones según tus necesidades
7. Haz clic en "Download" para descargar el archivo APK

### Paso 6: Instalar la APK en tu dispositivo Android

1. Transfiere el archivo APK a tu dispositivo Android (por email, WhatsApp, etc.)
2. En tu dispositivo Android, busca el archivo APK y tócalo para instalarlo
3. Si es necesario, permite la instalación de aplicaciones de origen desconocido
4. Sigue las instrucciones para completar la instalación

### Paso 7: Probar la aplicación

1. Abre la aplicación desde el menú de tu dispositivo Android
2. Verifica que todas las funciones trabajen correctamente
3. Toma nota de cualquier problema para corregirlo en tu versión web

## Alternativa: Usar Bubblewrap CLI

Si prefieres una solución más avanzada pero sin necesidad de Android Studio, puedes usar Bubblewrap CLI:

1. Instala Node.js desde https://nodejs.org/
2. Abre PowerShell y ejecuta:
   ```
   npm install -g @bubblewrap/cli
   ```
3. Inicializa tu proyecto:
   ```
   bubblewrap init --manifest https://tu-url-netlify/manifest.json
   ```
4. Genera el APK:
   ```
   bubblewrap build
   ```

Esta alternativa requiere menos espacio en disco que Android Studio pero más conocimientos técnicos.

## Recursos adicionales

- PWABuilder: https://www.pwabuilder.com/
- Netlify Drop: https://app.netlify.com/drop
- Generador de iconos: https://www.favicon-generator.org/
- Documentación de Bubblewrap: https://github.com/GoogleChromeLabs/bubblewrap