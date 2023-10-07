import "./scss/app.scss"

// Регистрация и авторизация VVV

const loginButton = document.querySelector(".form-submit__button")

const showPasswordButtons = document.querySelectorAll(
	".form-data-password__button",
)

const inputs = document.querySelectorAll(
	".form-data-email__input, .form-data-password__input, .form-data-name__input",
)

if (showPasswordButtons.length) {
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

loginButton?.addEventListener("click", (e) => {
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

// Предпросмотр VVV

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
const previewButtonHome = document.getElementById("previewButtonHome")
const previewSectionCreativity = document.getElementById(
	"previewSectionCreativity",
)
const previewSectionWord = document.getElementById("previewSectionWord")
const previewGalleryPhoto = document.getElementById("previewGalleryPhoto")
const previewGalleryInterview = document.getElementById(
	"previewGalleryInterview",
)
const previewGalleryFilm = document.getElementById("previewGalleryFilm")
const previewHome = document.getElementById("previewHome")

previewButtonSectionCreativity?.addEventListener("click", () => {
	previewSectionCreativity.style.display = "flex"
})

previewButtonSectionWord?.addEventListener("click", () => {
	previewSectionWord.style.display = "flex"
})

previewButtonGalleryPhoto?.addEventListener("click", () => {
	previewGalleryPhoto.style.display = "flex"
})

previewButtonGalleryInterview?.addEventListener("click", () => {
	previewGalleryInterview.style.display = "flex"
})

previewButtonGalleryFilm?.addEventListener("click", () => {
	previewGalleryFilm.style.display = "flex"
})

previewButtonHome?.addEventListener("click", () => {
	previewHome.style.display = "flex"
})

closePreviewButton?.addEventListener("click", () => {
	previewModal.style.display = "none"
})

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
	const saveAllButtons = document.querySelectorAll(".save-all")

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

		if (saveAllButtons.length) {
			saveAllButtons.forEach((btn) => {
				btn.addEventListener("click", () => {
					editButtons.forEach((btn) => {
						const editableForm = btn.parentElement.children[1]

						if (!editableForm.disabled) {
							editableForm.disabled = !editableForm.disabled
						}

						if (!editableForm.disabled) {
							btn.style.display = "none"
						} else {
							btn.style.display = "block"
						}
					})
				})
			})
		}
	}
}

const onLoad = () => {
	initEditButtons()
}

onLoad()

// Вызов модалок VVV

const modals = document.querySelectorAll(".modal")
const buttonsCloseModal = document.querySelectorAll(".button-close-modal")

const buttonDownloadPhotos = document.querySelectorAll(".button-download-photo")
const buttonDownloadFiles = document.querySelectorAll(".button-download-file")

const modalPhoto = document.getElementById("modalPhoto")
const modalFile = document.getElementById("modalFile")

if (buttonDownloadPhotos) {
	buttonDownloadPhotos.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault()
			modalPhoto.style.display = "flex"
		})
	})
}

if (buttonDownloadFiles.length) {
	buttonDownloadFiles.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault()
			modalFile.style.display = "flex"
		})
	})
}

if (buttonsCloseModal.length) {
	buttonsCloseModal.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault()
			modals.forEach((modal) => {
				modal.style.display = "none"
			})
		})
	})
}

const photoUploaders = document.querySelectorAll('.upload-photo-wrapper > input')

if(photoUploaders.length) {
	photoUploaders.forEach(photoUploader => {
		photoUploader?.addEventListener('change', (e) => {
			const modalInformation = modalPhoto.querySelector('.modal-information')
			const modalLoading = modalPhoto.querySelector('.modal-loading');
			const modalUploaded = modalPhoto.querySelector('.modal-uploaded');

			const progress = modalPhoto.querySelector('.modal-loading-progress-bar__filled')
			const uploadedImage = modalUploaded.querySelector('.modal-uploaded img');
			const saveChangesButton = modalPhoto.querySelector('.modal-uploaded__button');

			const [photo] = photoUploader.files
			if(photo) {
				uploadedImage.src = URL.createObjectURL(photo)
			}
		
			modalInformation.style.display = 'none'
			modalLoading.style.display = 'flex'
			
			progress.classList.remove('finished')
		
			window.setTimeout(() => {
				progress.classList.add('finished')
			}, 800)
		
			window.setTimeout(() => {
				modalLoading.style.display = 'none'
				modalUploaded.style.display = 'flex'
			}, 2000)

			window.setTimeout(() => {
				modalLoading.style.display = 'none'
				modalUploaded.style.display = 'flex'
			}, 2000)

			saveChangesButton.addEventListener('click', () => {
				modalUploaded.style.display = 'none'
				modalPhoto.style.display = 'none'

				modalInformation.style.display = 'grid'
			}) 
		})
	})
}