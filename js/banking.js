document.getElementById("deposite-btn").addEventListener("click", function () {
  // get the elements
  const depositeEliment = document.getElementById("input-amount");
  const depoCurrElement = document.getElementById("current-ammount");
  const currentBalanceElement = document.getElementById("current-balance");
  //   get values and convert to float
  if (depositeEliment.value == "") {
    return alert("please make sure to input something");
  }
  if (depositeEliment.value <= 0) {
    return alert("Why don't you enter positive number");
  }
  if (isNaN(depositeEliment.value) == true) {
    return alert("String returns NaN Here so avoid that");
  }
  if (
    depositeEliment.value == 1 ||
    depositeEliment.value == 2 ||
    depositeEliment.value == 5
  ) {
    const depositeInput = parseFloat(depositeEliment.value);
    const depoCurValue = parseFloat(depoCurrElement.innerText);
    const currentBalanceValue = parseFloat(currentBalanceElement.innerText);
    depoCurrElement.innerText = depoCurValue + depositeInput;
    currentBalanceElement.innerText = currentBalanceValue + depositeInput;

    depositeEliment.value = "";
  } else {
    return alert("Only Coins input valid in this Matik Bank");
  }
});
