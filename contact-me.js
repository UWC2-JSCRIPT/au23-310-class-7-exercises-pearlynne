
// Get elements of form
const form = document.getElementById("contact-us");
const contactName = document.getElementById("name");
const email = document.getElementById("email");
const select = document.getElementById("reason");
const message = document.getElementById("message");


// Get hidden elements
const jobTitle = document.getElementById("job-title");
const compWeb = document.getElementById("company-website");
const codingLang = document.getElementById("coding-lang");


// Validation for length (name and company)
const validLength = (input, min) => {
	if (input.value.trim().length >= min) { 
		input.parentElement.classList.remove("invalid");
		input.validity.valid = true;
		input.setCustomValidity("");
	} else {
		input.parentElement.classList.add("invalid");
		input.validity.valid = false;
		input.setCustomValidity(`Please enter at least ${min} characters`);
		input.reportValidity();
	}
	return input.validity.valid;
}


// Validation for Regex (email and company website)
const validateRegex = (field, re) => {
	if (re.test(field.value.trim())) {
		field.parentElement.classList.remove("invalid");
		field.validity.valid = true;
		field.setCustomValidity("");
	} else {
		field.parentElement.classList.add("invalid");
		field.validity.valid = false;
		field.setCustomValidity(field.dataset.invalidMessage);
		field.reportValidity();
	}
	return field.validity.valid;
}


// Validation for select fields
const validateSelect = (selectElement) => {
	const chosenElement = selectElement.value;
	if (chosenElement != "") {
		selectElement.parentElement.classList.remove("invalid");
		selectElement.validity.valid = true;
		selectElement.setCustomValidity("");
	} else {
		selectElement.parentElement.classList.add("invalid");
		selectElement.validity.valid = false;
		selectElement.setCustomValidity(selectElement.dataset.invalidMessage);
		selectElement.reportValidity()
	}
	return selectElement.validity.valid;
}


// Selecting elements for reason
const handleSelect = (selectElement) => {
	const selectedValue = selectElement.value;

	if (selectedValue == "job-opportunity") {
		jobTitle.parentElement.classList.remove("hidden");
		compWeb.parentElement.classList.remove("hidden");
		codingLang.parentElement.classList.add("hidden");
	} else if (selectedValue == "talk-code") {
		jobTitle.parentElement.classList.add("hidden");
		compWeb.parentElement.classList.add("hidden");
		codingLang.parentElement.classList.remove("hidden");
	} else {
		jobTitle.parentElement.classList.add("hidden");
		compWeb.parentElement.classList.add("hidden");
		codingLang.parentElement.classList.add("hidden");
	}
	return selectElement.validity.valid;
}

// Change event listeners for form validation  
contactName.addEventListener("change", () => validLength(contactName, 3));
email.addEventListener("change", () => validateRegex(email, /\w+@\w+\.\w+/));

select.addEventListener("change", () => handleSelect(select));
select.addEventListener("change", () => validateSelect(select));

jobTitle.addEventListener("change", () => validLength(jobTitle, 0));
compWeb.addEventListener("change", () => validateRegex(compWeb, /https?\:\/\/.+\..+/));

codingLang.addEventListener("change", () => handleSelect(codingLang));
codingLang.addEventListener("change", () => validateSelect(codingLang));

message.addEventListener("change", () => validLength(message, 10));


// Form validation function 
function formValidation(e) {
	let valid = true;
	
	//  Validate length of name
	if (!validLength(contactName, 3)) {
		valid = false;
	}

	//  Validate regex of email
	if (!validateRegex(email, /\w+@\w+\.\w+/)) {
		valid = false;
	}

	//  Validate select reason field 
	if(!validateSelect(select)) {
		valid = false;
	}

	// Validate hidden elements
	if (!jobTitle.parentElement.classList.contains('hidden')) {
		if (!validLength(jobTitle, 0)) {
			valid = false;
		}
		if (!validateRegex(compWeb, /https?\:\/\/.+\..+/)) {
			valid = false;
		}
	} else if (!codingLang.parentElement.classList.contains('hidden')) {
		if (!validateSelect(codingLang)) {
			valid = false;
		}
	}

	// Validate length of emmssage
	if (!validLength(message, 10)) {
		valid = false;
	}

	return valid;
}


// Event listener to submit form
form.addEventListener("submit", (e) => {
	//Check form validation 
	if (formValidation(e)) {
		form.submit();
	} else {
		e.preventDefault(); 
		form.reportValidity(); 
	}
})