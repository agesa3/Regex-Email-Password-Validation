const btn = document.getElementById("submitButtom");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;
  console.log("Email is " + email + "passwords is:" + password);
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  if (email != "" && password != "") {
    if (email.match(validRegex) && password.match(passRegex)) {
      alert("Correct Credentials");
    } else {
      alert("Invalid Credentials");
    }
  } else {
    alert("Fields cant be empty");
  }
});

// function ValidateEmail(input) {
//   var validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (input.value.match(validRegex)) {
//     alert("Valid email address!");
//     document.form1.text1.focus();
//     return true;
//   } else {
//     alert("Invalid email address!");
//     document.form1.text1.focus();
//     return false;
//   }
// }
// function validatePassword(userPassword) {
//   var passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
//   if (userPassword.match(passRegex)) {
//     alert("Good password!");
//   } else {
//     alert("Invalid password!");
//   }
// }
