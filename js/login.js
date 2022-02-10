document.getElementById("bank-btn").addEventListener("click", function () {
  const inputEmailValue = document.getElementById("email-value").value;
  const inputPasswordValue = document.getElementById("password-value").value;
  if (
    inputEmailValue === "matirbank@self.com" &&
    inputPasswordValue === "dashbank"
  ) {
    window.location.href = "banking.html";
  } else {
    alert("Sorry! Boss Wrong email and pass Disen!");
  }
});
