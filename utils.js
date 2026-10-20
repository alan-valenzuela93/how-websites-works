function stopAuto() {
  window.clearInterval(autoTimer);
  autoTimer = null;
  autoButton.setAttribute("aria-pressed", "false");
  autoLabel.textContent = "Reproducción automática";
  autoButton.querySelector(".play-icon").textContent = "▶";
}

function startAuto() {
  if (currentStep === steps.length - 1) renderStep(0);
  autoButton.setAttribute("aria-pressed", "true");
  autoLabel.textContent = "Pausar recorrido";
  autoButton.querySelector(".play-icon").textContent = "Ⅱ";
  autoTimer = window.setInterval(() => {
    if (currentStep < steps.length - 1) renderStep(currentStep + 1);
    else stopAuto();
  }, reducedMotion.matches ? 3500 : 2600);
}


function updateScore() {
  const correct = [...answers.values()].filter(Boolean).length;
  document.querySelector("#score-value").textContent = `${correct}/3`;
  if (answers.size < 3) {
    document.querySelector("#score-title").textContent = `Vas ${answers.size} de 3`;
    document.querySelector("#score-copy").textContent = "Completá las preguntas que faltan para ver tu resultado.";
  } else {
    document.querySelector("#score-title").textContent = correct === 3 ? "¡Dominás el viaje web!" : correct >= 2 ? "¡Muy buen recorrido!" : "¡Buen primer paso!";
    document.querySelector("#score-copy").textContent = correct === 3 ? "Entendiste cómo se conectan navegador, DNS, servidor y código." : "Revisá el recorrido y volvé a intentarlo cuando quieras.";
  }
}

function cleanDomain(value) {
  return value.trim().replace(/^https?:\/\//i, "").replace(/\/$/, "") || "www.mipagina.com";
}

function renderStep(index, announce = true) {
  currentStep = Math.max(0, Math.min(index, steps.length - 1));
  const data = steps[currentStep];
  const value = currentStep === 0 ? activeDomain : currentStep === 1 ? `${activeDomain} → 203.0.113.42` : data.value;

  cards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === currentStep);
    card.classList.toggle("is-complete", cardIndex < currentStep);
    if (cardIndex === currentStep) card.setAttribute("aria-current", "step");
    else card.removeAttribute("aria-current");
  });

  document.querySelector("#detail-number").textContent = String(currentStep + 1).padStart(2, "0");
  document.querySelector("#detail-kicker").textContent = data.kicker;
  document.querySelector("#detail-title").textContent = data.title;
  document.querySelector("#detail-text").textContent = data.text;
  document.querySelector("#detail-example .example-label").textContent = data.label;
  document.querySelector("#detail-example code").textContent = value;
  document.querySelector("#detail-example .example-note").textContent = data.note;
  document.querySelector("#stage-visual").innerHTML = data.visual;

  const percent = Math.round(((currentStep + 1) / steps.length) * 100);

  document.querySelector("#progress-label").textContent = `Paso ${currentStep + 1} de ${steps.length}`;
  document.querySelector("#progress-percent").textContent = `${percent}% completado`;
  progressBar.style.width = `${percent}%`;
  routeProgress.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentStep + 1));
  prevButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === steps.length - 1 ? "Ver desafío ↓" : "Siguiente →";

  if (announce && currentStep === steps.length - 1) stopAuto();
}
