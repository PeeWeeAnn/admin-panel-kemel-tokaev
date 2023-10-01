import "./scss/app.scss"

const loginButton = document.querySelector(".form-submit__button")

const showPasswordButtons = document.querySelectorAll(
	".form-data-password__button",
)

const inputs = document.querySelectorAll(
	".form-data-email__input, .form-data-password__input, .form-data-name__input",
)

if (showPasswordButtons) {
	for (let button of showPasswordButtons) {
		button.addEventListener("click", (e) => {
			e.preventDefault()
			const passwordInput = e.currentTarget.previousElementSibling
			passwordInput.focus()
			if (passwordInput && passwordInput.type == "password") {
				passwordInput.type = "text"
				button.children[0].src = "../src/img/icons/view.svg"
			} else {
				passwordInput.type = "password"
				button.children[0].src = "../src/img/icons/view-hide.svg"
			}
		})
	}
}

if (loginButton) {
	loginButton.addEventListener("click", (e) => {
		e.preventDefault()
		if (inputs) {
			for (let input of inputs) {
				if (!input.value.length) {
					input.style.border = "1px solid #8f1515"

					// ИНФОРМАЦИЯ ДЛЯ БЭКЕНД-ПРОГРАММИСТА: ВОТ ТАК ВЫДЕЛЯЕТСЯ НЕВАЛИДНОЕ ПОЛЕ (В СЛУЧАЕ ЕСЛИ ЛОГИН/ПАРОЛЬ НЕ СОВПАЛИ ПРИ ЛОГИНЕ)
					input.addEventListener("focus", () => {
						input.style.border = "1px solid #424242"
					})

					input.addEventListener("focusout", () => {
						input.style.border = "1px solid #cecfd2"
					})
				}
			}
			const passwordInputs = document.querySelectorAll(
				".form-data-password__input",
			)
			if (passwordInputs.length === 2) {
				if (passwordInputs[0].value !== passwordInputs[1].value) {
					const validationMessagePasswords = document.querySelector(
						".validation-message-passwords",
					)
					if (validationMessagePasswords) {
						validationMessagePasswords.style.display = "block"
					}
					for (let input of passwordInputs) {
						if (input.value.length) {
							input.addEventListener("focus", () => {
								validationMessagePasswords.style.display = "none"
							})
						}
					}
				}
			}
		}
	})
}
