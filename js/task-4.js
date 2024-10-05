

const jsForm = document.querySelector(".login-form");


jsForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    return console.log("All form fields must be filled in");
  }
  else {
      console.log(`email: ${email.trim()}, password: ${password.trim()}`);
      form.reset();
    }
 
}

const emailInput = document.querySelector('input[name="email"]');

emailInput.addEventListener('focus', function() {
  emailInput.placeholder = "Type area";
});

emailInput.addEventListener('blur', function() {
  emailInput.placeholder = ""; 
});