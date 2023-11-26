// TODO
// Get elements of form
const form = document.getElementById("connect-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");


// Get hidden elements
const select = document.getElementById("contact-kind");
const os = document.getElementById("operating-system");
const employees = document.getElementById("num-of-employees");


// Validation for length of first and last names
const validLength = (input, min) => {
	if (input.value.trim().length >= min) {
		input.parentElement.classList.remove("invalid");
		return true;
	} else {
		input.parentElement.classList.add("invalid");
		input.nextElementSibling.innerText = "Your name should have at least 3 characters."
		return false;
	}
}


// Validation for email regex
const validateEmail = (emailField) => {
	const re = /\w+@\w+\.\w+/;
	if (re.test(emailField.value.trim())) {
		emailField.parentElement.classList.remove("invalid");
		return true;
	} else {
		emailField.parentElement.classList.add("invalid");
		emailField.nextElementSibling.innerText = "The format of your email address is invalid."
		return false;
	}
}

// Toggle hidden select fields
const handleSelect = (selectElement) => {
	const selectedValue = selectElement.value;
	if (selectedValue == "business") {
		employees.parentElement.classList.remove("hidden");
		os.parentElement.classList.add("hidden");
	} else if (selectedValue == "technical") {
		os.parentElement.classList.remove("hidden");
		employees.parentElement.classList.add("hidden");
	}
}


select.addEventListener("change", () => handleSelect(select));


// Validate form
form.addEventListener("submit", (e) => {
	handleSelect(select);
	if (!validLength(firstName, 3) || !validLength(lastName, 3) || !validateEmail(email)) {

		e.preventDefault();
		console.log("Bad Input");
	}
}) 