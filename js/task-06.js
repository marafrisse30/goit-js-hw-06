const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onChangeBorderColor);
function onChangeBorderColor(event) {
  const inputData = event.currentTarget.dataset.length;
  const inputLength = String(event.currentTarget.value.length);

  if (inputData === inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
