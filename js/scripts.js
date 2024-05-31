// ES5 strict mode
"use strict";

// elements
const inputForm = document.querySelector("#input-form");
const generate = document.querySelector("#text");
const btn = document.querySelector("#click");
const qrImg = document.querySelector("#qr-result");

// console.log(inputForm);
// console.log(generate);
// console.log(btn);
// console.log(qrImg);

// function
function qrGeneration() {
  const inputText = generate.value;
  qrImg.innerHTML = "";

  if (!inputText) {
    qrImg.innerHTML = "";
    generate.value = "";
    btn.value = "Press to generate";
    // console.log(qrImg);
    return;
  }

  // console.log(inputText);
  // console.log(btn.value);
  btn.value = "Generating QR code...";
  const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputText} `;
  btn.value = "QR Code generated !";
  const tableTemplate = `<img id="qr-code"  class="active"  src=${qrApi} alt="QR code" />`;

  // console.log(tableTemplate);
  const parserTemplate = new DOMParser();
  const htmlTemplate = parserTemplate.parseFromString(
    tableTemplate,
    "text/html"
  );

  // console.log(htmlTemplate);
  const insertPoint = htmlTemplate.querySelector(".active");
  // console.log(insertPoint);
  qrImg.appendChild(insertPoint);
  // console.log(inputForm);
}

function qrCleanUp(e) {
  if (e.key === "Backspace") {
    btn.value = "Press to generate";
    qrImg.innerHTML = "";
    generate.value = "";
  }
}

// event
// submit btn pressed
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  qrGeneration();
});

// backspace key pressed
inputForm.addEventListener("keydown", (e) => {
  qrCleanUp(e);
});
