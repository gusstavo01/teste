const initialAmountInput = document.querySelector("#initialAmount");
const interestRateInput = document.querySelector("#interestRate");
const timePeriodInput = document.querySelector("#timePeriod");
const calculateButton = document.querySelector("#calculate");
const infoButton = document.querySelector("#info");
const resultParagraph = document.querySelector("#result");
const infoSection = document.querySelector("#infoSection");

// Essa váriavel removes os botões de incremento e decremento de valor dentro dos inputs do tipo number em navegadores que não suportam os psudo-elementos "::-webkit-inner-spin-button" e "::-webkit-outer-spin-button".

const disableIncrementInput = document.querySelectorAll("input[type='number']");

disableIncrementInput.forEach(function(input) {
    input.style.WebkitAppearance = "none"; 
    input.style.MozAppearance = "textfield";
});

calculateButton.addEventListener("click", function () {
  if (!initialAmountInput.value || !interestRateInput.value || !timePeriodInput.value) {
    initialAmountInput.style.border = "1px solid red";
    interestRateInput.style.border = "1px solid red";
    timePeriodInput.style.border = "1px solid red";
    resultParagraph.innerHTML = "Preencha todos os campos!";
    resultParagraph.style.color = "red";
  } else {
    resultParagraph.style.color = "black";
    initialAmountInput.style.border = "1px solid lightgray";
    interestRateInput.style.border = "1px solid lightgray";
    timePeriodInput.style.border = "1px solid lightgray";
    const initialAmount = parseFloat(initialAmountInput.value);
    const interestRate = parseFloat(interestRateInput.value);
    const timePeriod = parseFloat(timePeriodInput.value);
    const result = initialAmount * (1 + (interestRate / 100)) ** timePeriod;
    resultParagraph.innerHTML = `O montante final é de R$ ${result.toFixed(2)}`;
  }
});


infoButton.addEventListener("click", function () {
  infoSection.style.display = "block";
});



infoSection.addEventListener("click", function () {
  infoSection.style.display = "none";
});
