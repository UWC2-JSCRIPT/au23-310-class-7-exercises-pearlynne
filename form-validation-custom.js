// TODO
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const form = document.getElementById("connect-form");
const email = document.getElementById("email");
const select = document.getElementById("contact-kind");
const os = document.getElementById("operating-system");
const employees = document.getElementById("num-of-employees");

let valid = false;

// Last and First name length requirement
const validLength = (input, min) => {
	if (input.value.trim().length > min) {
		input.parentElement.classList.remove("invalid");
		return true;
	} else {
		input.parentElement.classList.add("invalid");
		// To fix: Add error message
		return false;
	}
}

const validateEmail = (emailField) => {
	const re = /\w+@\w+\.\w+/;
	if (re.test(emailField.value.trim())) {
		emailField.parentElement.classList.remove("invalid");
		return true;
	} else {
		emailField.parentElement.classList.add("invalid");
		return false;
	}
}

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

form.addEventListener("submit", (e) => {
	handleSelect(select);
	if (validLength(firstName, 3) && validLength(lastName, 3) && validateEmail(email)) {
		//To fix: Specific colors
		valid = true;
	} else {
		valid = false;
		console.log("Bad Input");
	}
	e.preventDefault();
}) 