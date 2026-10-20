
let currentStep = 0;
let autoTimer = null;
let activeDomain = "www.mipagina.com";

prevButton.addEventListener("click", () => { stopAuto(); renderStep(currentStep - 1); });
nextButton.addEventListener("click", () => {
  stopAuto();
  if (currentStep < steps.length - 1) renderStep(currentStep + 1);
  else document.querySelector("#quiz").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" });
});
resetButton.addEventListener("click", () => { stopAuto(); renderStep(0); document.querySelector("#simulador").scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth" }); });
autoButton.addEventListener("click", () => autoTimer ? stopAuto() : startAuto());
cards.forEach(card => card.addEventListener("click", () => { stopAuto(); renderStep(Number(card.dataset.step)); }));

document.querySelector("#visit-form").addEventListener("submit", event => {
  event.preventDefault();
  activeDomain = cleanDomain(document.querySelector("#url-input").value);
  document.querySelector("#url-input").value = activeDomain;
  stopAuto();
  renderStep(0);
  startAuto();
});

document.querySelectorAll(".layer-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const layer = tab.dataset.layer;
    document.querySelectorAll(".layer-tab").forEach(item => {
      const selected = item === tab;
      item.classList.toggle("is-selected", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    layerDemo.className = `demo-canvas stage-${layer}`;
    document.querySelector("#layer-count").textContent = `${layerData[layer].index} / 3`;
    document.querySelector("#layer-description").innerHTML = layerData[layer].description;
    magicButton.disabled = layer !== "js";
    document.querySelector("#magic-feedback").textContent = "";
  });
});

magicButton.addEventListener("click", () => {
  document.querySelector("#magic-feedback").textContent = "¡Funciona! JavaScript escuchó tu clic ✨";
  magicButton.textContent = "¡Activado! ✓";
});

const answers = new Map();

document.querySelectorAll(".question-card").forEach(card => {
  const question = Number(card.dataset.question);
  card.querySelectorAll(".options button").forEach(option => {
    option.addEventListener("click", () => {
      if (answers.has(question)) return;
      const correct = option.dataset.correct === "true";
      answers.set(question, correct);
      option.classList.add(correct ? "correct" : "incorrect");
      option.textContent = `${correct ? "✓" : "×"} ${option.textContent}`;
      const correctOption = card.querySelector("[data-correct='true']");
      if (!correct) correctOption.classList.add("correct");
      card.querySelectorAll(".options button").forEach(button => button.disabled = true);
      card.querySelector(".feedback").textContent = `${correct ? "¡Correcto!" : "Casi."} ${feedbackText[question]}`;
      updateScore();
    });
  });
});

document.querySelector("#retry-quiz").addEventListener("click", () => {
  answers.clear();
  document.querySelectorAll(".question-card").forEach(card => {
    const question = Number(card.dataset.question);
    card.querySelector(".feedback").textContent = "";
    card.querySelectorAll(".options button").forEach(button => {
      button.disabled = false;
      button.classList.remove("correct", "incorrect");
      button.textContent = button.textContent.replace(/^[✓×] /, "");
    });
  });
  document.querySelector("#score-value").textContent = "0/3";
  document.querySelector("#score-title").textContent = "¡Seguí explorando!";
  document.querySelector("#score-copy").textContent = "Respondé las tres preguntas para completar el desafío.";
});

renderStep(0, false);
