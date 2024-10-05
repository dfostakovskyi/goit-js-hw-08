const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const title = document.querySelector("h1");



textInput.addEventListener("input", (event) => {
      if (event.currentTarget.value.trim().length === 0) {
      output.textContent = "Anonymous";
  } else {
      output.textContent = event.currentTarget.value.trim();
        }
});


const jsDiv = document.createElement("div");
jsDiv.classList.add("js-div");
textInput.parentNode.insertBefore(jsDiv, textInput);
jsDiv.appendChild(textInput);
jsDiv.appendChild(title);