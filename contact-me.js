
const form = document.getElementById("contact-us");
const jobTitle = document.getElementById("job-title");
const compWeb = document.getElementById("company-website");
const codingLang = document.getElementById("coding-lang");
const message = document.getElementById("message");
const select = document.getElementById("reason");
const name = document.getElementById("name");
const email = document.getElementById("email");

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
	if (selectedValue == "job-opportunity") {
		jobTitle.parentElement.classList.remove("hidden");
		compWeb.parentElement.classList.remove("hidden");
		codingLang.parentElement.classList.add("hidden");
		message.parentElement.classList.add("hidden");
	} else if (selectedValue == "talk-code") {
		jobTitle.parentElement.classList.add("hidden");
		compWeb.parentElement.classList.add("hidden");
		codingLang.parentElement.classList.remove("hidden");
		message.parentElement.classList.remove("hidden");
	}
}

select.addEventListener("change", () => handleSelect(select));


form.addEventListener("submit", (e) => {
	handleSelect(select);
	if (validLength(name, 3) && validLength(message, 10) && validateEmail(email)) {
		//To fix: Specific colors
		valid = true;
	} else {
		valid = false;
		console.log("Bad Input");
	}
	e.preventDefault();
}) 