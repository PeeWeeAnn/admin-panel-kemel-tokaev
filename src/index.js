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

const closePreviewButton = document.querySelector(".button-close-preview")

const previewModal = document.querySelector(".preview")

const previewButtonSectionCreativity = document.getElementById(
	"previewButtonSectionCreativity",
)
const previewButtonSectionWord = document.getElementById(
	"previewButtonSectionWord",
)
const previewButtonGalleryFilm = document.getElementById(
	"previewButtonGalleryFilm",
)
const previewButtonGalleryInterview = document.getElementById(
	"previewButtonGalleryInterview",
)
const previewButtonGalleryPhoto = document.getElementById(
	"previewButtonGalleryPhoto",
)

const previewSectionCreativity = document.getElementById(
	"previewSectionCreativity",
)
const previewSectionWord = document.getElementById("previewSectionWord")
const previewGalleryPhoto = document.getElementById("previewGalleryPhoto")
const previewGalleryInterview = document.getElementById(
	"previewGalleryInterview",
)
const previewGalleryFilm = document.getElementById("previewGalleryFilm")

if (previewButtonSectionCreativity) {
	previewButtonSectionCreativity.addEventListener("click", function () {
		previewSectionCreativity.style.display = "flex"
	})
}

if (previewButtonSectionWord) {
	previewButtonSectionWord.addEventListener("click", function () {
		previewSectionWord.style.display = "flex"
	})
}

if (previewButtonGalleryPhoto) {
	previewButtonGalleryPhoto.addEventListener("click", function () {
		previewGalleryPhoto.style.display = "flex"
	})
}

if (previewButtonGalleryInterview) {
	previewButtonGalleryInterview.addEventListener("click", function () {
		previewGalleryInterview.style.display = "flex"
	})
}

if (previewButtonGalleryFilm) {
	previewButtonGalleryFilm.addEventListener("click", function () {
		previewGalleryFilm.style.display = "flex"
	})
}

if (closePreviewButton) {
	closePreviewButton.addEventListener("click", function () {
		previewModal.style.display = "none"
	})
}

// Редактирование и сохранение изменений VVV

const editButtons = document.querySelectorAll(".button-edit")

const toggleEdit = (e) => {
	const target = e.target
	const btn = target.parentElement

	const editableForm = btn.parentElement.children[1]

	if (editableForm.disabled) {
		editableForm.disabled = !editableForm.disabled
	}

	initEditButtons()
}

const onEditButtonClick = (e) => {
	e.preventDefault()
	toggleEdit(e)
}

const initEditButtons = () => {
	const saveAllButton = document.querySelector(".save-all")

	if (editButtons.length) {
		editButtons.forEach((btn) => {
			const editableForm = btn.parentElement.children[1]

			if (!editableForm.disabled) {
				btn.style.display = "none"
			} else {
				btn.style.display = "block"
			}

			btn.addEventListener("click", onEditButtonClick)
		})

		if (saveAllButton) {
			saveAllButton.addEventListener("click", () => {
				editButtons.forEach((btn) => {
					const editableForm = btn.parentElement.children[1]

					if (!editableForm.disabled) {
						editableForm.disabled = !editableForm.disabled
					}
					initEditButtons()
				})
			})
		}
	}
}

const onLoad = () => {
	initEditButtons()
}

onLoad()

// Загрузка файлов с прогресс-баром VVV
