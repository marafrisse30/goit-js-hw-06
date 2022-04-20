const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
inputRef.addEventListener("input", onChangeFontSize);
function onChangeFontSize() {
  textRef.style.fontSize = `${inputRef.value}px`;
}
