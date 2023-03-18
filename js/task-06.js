const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", () => {
 const requiredLength = Number(inputElement.getAttribute('data-length'));
 const inputLength = inputElement.value.length;

 if (inputLength === requiredLength) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } 
  else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
} )
