const rangeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
rangeInput.addEventListener("input", () => {
   const fontRange = `${rangeInput.value}px`;
   textSpan.style.fontSize = fontRange;
   textSpan.style.fontWeight = rangeInput.value*10;
});

