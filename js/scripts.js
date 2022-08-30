function modalTemplate () {
    const main = document.querySelector(".main__login")
    const modal = document.createElement("div")
    const titulo = document.createElement("h1")
    const form = document.createElement("form")
    const inputEmail = document.createElement("input")
    const inputPass = document.createElement("input")
    const inputConfirm = document.createElement("input")
    const button = document.createElement("button")
    const spanLog = document.createElement("span")
    const divLogo = document.createElement("div")
    const imgGoogle = document.createElement("img")
    const imgFb = document.createElement("img")
    const spanAny = document.createElement("span")
    const closeModal = document.createElement("p")

    button.addEventListener("click", (e) => {
        e.preventDefault()
    })

    modal.classList.add("modal", "bgGradient")
    titulo.classList.add("title2", "colorTitle2")
    form.classList.add("form__modal")
    inputConfirm.classList.add("text1")
    inputPass.classList.add("text1")
    inputEmail.classList.add("text1")
    button.classList.add("bgThird", "text1")
    spanLog.classList.add("text3", "colorSubtitle2")
    divLogo.classList.add("main__div--logos2")
    spanAny.classList.add("text3", "colorSubtitle2")
    closeModal.classList.add("closeModal", "text1", "colorTitle1")

    titulo.innerHTML = `<strong>Create Account</strong> <br />
    to get started now!`
    inputEmail.placeholder = "Email Address"
    inputPass.placeholder = "Passowrd"
    inputConfirm.placeholder = "Confirm Passowrd"
    button.innerText = "Sign Up"
    spanLog.innerText = "Or login with"
    imgGoogle.src = "/assets/google.png"
    imgGoogle.alt = "Google"
    imgFb.src = "/assets/facebook.png"
    imgFb.alt = "Facebook"
    closeModal.innerText = "X"

    form.append(inputEmail, inputPass, inputConfirm, button)
    divLogo.append(imgGoogle, imgFb)
    modal.append(titulo, form, spanLog, divLogo, spanAny, closeModal)
    main.append(modal)
}
modalTemplate()


function aparecerModal () {
    const sign = document.querySelector(".form__btnSign")

    sign.addEventListener("click", (e) => {
        document.querySelector(".modal").style.top = "0"
        document.querySelector(".form__div").style.display = "none"
        document.querySelector(".span__divLogos").style.display = "none"
        document.querySelector(".main__div--logos").style.display = "none"
        document.querySelector(".login__anyCount").style.display = "none"
    })
}

function closeModal () {
    const close = document.querySelector(".closeModal")

    close.addEventListener("click", (e) => {
        document.querySelector(".modal").style.top = "-150%"
        document.querySelector(".form__div").style.display = "flex"
        document.querySelector(".span__divLogos").style.display = "flex"
        document.querySelector(".main__div--logos").style.display = "flex"
        document.querySelector(".login__anyCount").style.display = "flex"
    })
}
aparecerModal()
closeModal()