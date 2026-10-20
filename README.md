# Viaje de la web

Sitio educativo e interactivo que explica, paso a paso, qué ocurre cuando se escribe una dirección web en el navegador. Está pensado para practicar conceptos básicos de desarrollo web mediante una simulación visual y un breve desafío.

## Funcionalidades

- Recorrido interactivo de seis etapas: navegador, DNS, servidor, transferencia de datos, interpretación del código y página renderizada.
- Controles para avanzar, retroceder, reiniciar y reproducir el recorrido automáticamente.
- Campo para ingresar un dominio y verlo reflejado en la simulación.
- Indicadores de progreso y una visualización animada del viaje de los paquetes.
- Demostración por capas para explorar HTML, CSS y JavaScript.
- Desafío de tres preguntas con puntaje, comentarios y opción para volver a intentarlo.
- Diseño adaptable y respeto por la preferencia del sistema para reducir el movimiento.

> La dirección IP que aparece en la demostración es ficticia. El sitio explica el proceso de forma visual; no realiza consultas DNS ni solicitudes a servidores.

## Tecnologías

- HTML
- CSS
- JavaScript del navegador, sin dependencias ni proceso de compilación.

## Cómo ejecutar

Abre `index.html` en un navegador. También puedes servir la carpeta con una extensión como **Live Server** en Visual Studio Code y abrir la dirección local que esta proporciona.

## Estructura del proyecto

| Archivo | Responsabilidad |
| --- | --- |
| `index.html` | Estructura y contenido de las secciones, controles, demostración y desafío. |
| `styles.css` | Estilos, diseño adaptable, estados visuales y animaciones. |
| `constants.js` | Datos del recorrido, referencias a elementos de la página y textos del desafío. |
| `utils.js` | Funciones para mostrar etapas, controlar la reproducción automática, limpiar el dominio y actualizar el puntaje. |
| `script.js` | Estado de la aplicación y eventos de navegación, formulario, demostración por capas y desafío. |

Los scripts se cargan con `defer` al final de `index.html`, en este orden: primero `constants.js`, luego `utils.js` y finalmente `script.js`. Mantén ese orden porque cada archivo posterior utiliza datos o funciones declarados anteriormente.

## Personalización

- Para cambiar el contenido o las imágenes de las etapas, edita el arreglo `steps` en `constants.js`.
- Para ajustar los textos de las respuestas del desafío, modifica `feedbackText` en `constants.js`.
- Para cambiar estilos, puntos de quiebre o animaciones, edita `styles.css`.
- Para modificar controles o comportamiento interactivo, edita `script.js` y las funciones relacionadas en `utils.js`.
