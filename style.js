const otp = 2005;
document.getElementById("btn").addEventListener("click", function show() {
  const emailInput = document.getElementById("email");

  if (emailInput.value == "") {
    alert("enter your email");

    return;
  }
  document.getElementById("ctr").style.display = "block";
});

document
  .getElementById("verify-btn")
  .addEventListener("click", function verify() {
    const pwd = document.getElementById("enter-input");
    console.log(pwd.value);
    const Check = document.getElementById("check");

    if (pwd.value == otp) {
      Check.innerHTML = "otp is correct !!";
      Check.style.textAlign = "center";
      Check.addclsslist = "check"
    } else {
      Check.innerHTML = "otp is incorrect !! try again";
      Check.style.textAlign = "center";
      Check.addclsslist = "check"
    }
  });
