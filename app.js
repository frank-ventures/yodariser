const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

const resultP = document.getElementById("result");

function handleSubmit(event) {
  event.preventDefault();
  const userInput = event.target.userInput.value;
  resultP.innerText = '"' + yodarise(userInput) + '"';
}

function yodarise(inputText) {
  const splitInput = inputText.split(" ");

  const twentyPercent = Math.max(Math.ceil(splitInput.length * 0.2), 2);

  const firstPart = splitInput.slice(twentyPercent);
  const secondPart = splitInput.slice(0, twentyPercent);

  return (
    firstPart.join(" ").charAt(0).toUpperCase() +
    firstPart.join(" ").slice(1) +
    ", " +
    secondPart.join(" ")
  );
}
