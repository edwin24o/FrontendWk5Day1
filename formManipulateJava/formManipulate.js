document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing page
  
    let userInput = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
  
    console.log(userInput);  // You can later store this in an array, database, etc.
    alert("Form submitted successfully!");
  });
  
  function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
        alert("All fields must be filled out!");
        return false;
    }
    return true;
  }
  
  document.getElementById('user-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
  });