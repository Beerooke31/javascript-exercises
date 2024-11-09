const add = (step) => {
  // We gave the number element an id of number so we can use that to get the element
  const numberElement = document.getElementById("number");
  // We can use the innerText property to get the text inside the element
  const number = parseInt(numberElement.innerText);
  numberElement.innerText = number + step;
};

const subtract = (step) => {
  const numberElement = document.getElementById("number");
  const number = parseInt(numberElement.innerText);
  numberElement.innerText = number - step;
};

const reset = () => {
  const numberElement = document.getElementById("number");
  //   const number = parseInt(numberElement.innerText);
  numberElement.innerText = "0";
};
