/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById("header")
    if (this.scrollY >= 50) {
        header.classList.add('bg-header');
    } else {
        header.classList.remove('bg-header')
    }
}
window.addEventListener("scroll", scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id")

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }

    })
}
window.addEventListener("scroll", scrollActive)



/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    if (this.scrollY >= 350) {
        scrollUp.classList.add("show-scroll")
    } else {
        scrollUp.classList.remove("show-scroll")
    }
}

window.addEventListener("scroll", scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})

sr.reveal(`.home__data , .footer__container , .footer__group`)
sr.reveal(`.home__img`,{delay:700,origin:'botton'})
sr.reveal(`.logos__img , .program__card , .pricing__card`,{interval:100})
sr.reveal(`.choose__img , .calculate__content`,{origin:'left'})
sr.reveal(`.choose__content,.calculate__img`,{origin:'right'})





/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form"),
    calculateCm = document.getElementById("calculate-cm"),
    calculateKg = document.getElementById("calculate-kg"),
    calculateMessage = document.getElementById("calculate-message")

const calculateBmi = (e) => {
    e.preventDefault()

    // Check if the fields have a value
    if (calculateCm.value === '' || calculateKg === '') {
        // Add and remove color
        calculateMessage.classList.remove("color-green")
        calculateMessage.classList.add("color-red")

        // Show message
        calculateMessage.textContent = 'Fill in the Height and Weight'

        // Remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else {
        // BMI Formula
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))


        // Show your health status
        if (bmi < 18.5) {
            // Add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`
        } else if (bmi < 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} you are healthy`
        } else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} you are overweight`
        }

        // To clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }

}

calculateForm.addEventListener("submit", calculateBmi)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (contactUser.value === '') {
        // Add and remove color
        contactMessage.classList.remove("color-green")
        contactMessage.classList.add("color-red")

        // Show message
        contactMessage.textContent = 'You must enter your email'

        // Remove message three seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else {

        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('', '', '', '')
            .then(() => {
                // Show message and add color
                contactMessage.classList.add("color-green")
                contactMessage.textContent = 'You registered successfully'

                // Remove message after three seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)

            }, (error) => {
                // Mail sending error
                alert('OOPS! SOMETHING HAS FAILED...', error)
            }
            )

        // To clear the input field
        contactUser.value = ''
    }
}

contactForm.addEventListener("submit", sendEmail)