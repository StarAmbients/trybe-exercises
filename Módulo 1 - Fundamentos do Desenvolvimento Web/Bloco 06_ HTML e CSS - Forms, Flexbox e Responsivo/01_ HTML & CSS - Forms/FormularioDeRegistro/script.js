// Reference: https://www.w3schools.com/php/php_form_complete.asp 
// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// check if name only contains letters and whitespace
const name = document.getElementById("name");
if (!preg_match("/^[a-zA-Z-' ]*$/", name)) {
  const nameErr = "Only letters and white space allowed";
}

// check if e-mail address is well-formed
const email = document.getElementById("email");
if (!filter_var(email, FILTER_VALIDATE_EMAIL)) {
  const emailErr = "Invalid email format";
}

// check if URL address syntax is valid (this regular expression also allows dashes in the URL)
const website = document.getElementById("website");
if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",website)) {
  const websiteErr = "Invalid URL";
}

