const steps = [
  {
    kicker: "PRIMERA PARADA",
    title: "Tu navegador recibe la dirección",
    text: "Chrome, Firefox, Safari o Edge toman el dominio que escribiste y comienzan a buscar dónde vive esa página.",
    label: "DOMINIO",
    value: "www.mipagina.com",
    note: "un nombre fácil de recordar",
    visual: `<div class="visual-browser"><div class="bar"></div><div class="screen"></div></div>`
  },
  {
    kicker: "BUSCANDO LA DIRECCIÓN",
    title: "El DNS traduce el dominio",
    text: "El DNS funciona como una agenda de Internet. Busca qué dirección IP corresponde al dominio para encontrar el servidor correcto.",
    label: "DNS RESPONDE",
    value: "www.mipagina.com → 203.0.113.42",
    note: "dominio → IP ficticia",
    visual: `<div class="visual-dns"><div class="globe">DNS</div><small>203.0.113.42</small></div>`
  },
  {
    kicker: "EN EL HOSTING",
    title: "El servidor recibe el pedido",
    text: "El servidor es una computadora que guarda los archivos del sitio web y los envía cuando alguien los solicita.",
    label: "CARPETA DEL SITIO",
    value: "4 archivos encontrados",
    note: "listos para enviar",
    visual: `<div class="visual-server"><span>index.html</span><span>estilos.css</span><span>script.js</span><span>imagen.png</span></div>`
  },
  {
    kicker: "DE VUELTA A TU EQUIPO",
    title: "Los archivos viajan por Internet",
    text: "El navegador pide los recursos mediante HTTP o HTTPS. El servidor responde enviando pequeños paquetes de datos.",
    label: "PROTOCOLO",
    value: "HTTPS",
    note: "una conexión protegida",
    visual: `<div class="visual-transfer"><span class="endpoint">▤</span><div class="packet-lane"></div><span class="packet">HTML</span><span class="packet">CSS</span><span class="endpoint">▣</span></div>`
  },
  {
    kicker: "MANOS A LA OBRA",
    title: "El navegador interpreta el código",
    text: "HTML aporta la estructura, CSS define la apariencia y JavaScript suma comportamientos. El navegador combina las tres capas.",
    label: "CAPAS",
    value: "HTML + CSS + JavaScript",
    note: "contenido + estilo + acción",
    visual: `<div class="visual-code"><div class="code-row"><b>HTML</b><i></i></div><div class="code-row"><b>CSS</b><i></i></div><div class="code-row"><b>JS</b><i></i></div></div>`
  },
  {
    kicker: "DESTINO ALCANZADO",
    title: "¡La página aparece en pantalla!",
    text: "¡Listo! El navegador construyó la página y ahora podés verla, leerla e interactuar con ella.",
    label: "ESTADO",
    value: "Página renderizada ✓",
    note: "lista para interactuar",
    visual: `<div class="visual-result"><div class="tiny-bar"></div><div class="tiny-site"><b>¡Hola, mundo!</b><i></i><i></i><em></em></div></div>`
  }
];


const cards = [...document.querySelectorAll(".step-card")];
const progressBar = document.querySelector("#progress-bar");
const progressTrack = document.querySelector(".progress-track");
const routeProgress = document.querySelector("#route-progress");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const resetButton = document.querySelector("#reset-button");
const autoButton = document.querySelector("#auto-button");
const autoLabel = document.querySelector("#auto-label");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");


const layerData = {
  html: { index: 1, description: "<strong>HTML</strong> organiza el título, el texto y el botón. Todavía se ve sin decoración." },
  css: { index: 2, description: "<strong>CSS</strong> agrega colores, espacios, tamaños y una apariencia propia." },
  js: { index: 3, description: "<strong>JavaScript</strong> activa el comportamiento. ¡Ahora el botón puede responder!" }
};
const magicButton = document.querySelector("#magic-button");
const layerDemo = document.querySelector(".demo-canvas");


const feedbackText = [
  "El DNS relaciona nombres fáciles de recordar con direcciones IP.",
  "El servidor o hosting mantiene los archivos disponibles en Internet.",
  "HTML define la estructura y el contenido de la página."
];