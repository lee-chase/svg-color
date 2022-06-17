function whenReady(f) {
  if (
    document.readyState === "complete" ||
    document.readyState === "loaded" ||
    document.readyState === "interactive"
  ) {
    console.log("ready state");
    // f();
  } else {
    window.addEventListener("DOMContentLoaded", function () {
      console.log("DOMContentLoaded event");
      f();
    });
  }
}

whenReady(() => {
  const pdfIconTemplate = document.querySelector("template#pdf-icon");
  const templateTarget = document.querySelector(".template-target");

  const pdfIcon = pdfIconTemplate.content.querySelector("svg");
  const importedPdfIcon = document.importNode(pdfIcon, true);
  templateTarget.appendChild(importedPdfIcon);
});
