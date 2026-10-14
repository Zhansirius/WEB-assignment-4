document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector("span");
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
                icon.textContent = "-";
            } else {
                answer.style.display = "none";
                icon.textContent = "+";
            }
        });
    });

    const contactBtn = document.getElementById("contactUsBtn");
    const popupForm = document.getElementById("popupForm");
    const closePopup = document.getElementById("closePopup");

    if (contactBtn && popupForm) {

        contactBtn.addEventListener("click", (e) => {
            e.preventDefault();
            popupForm.style.display = "flex";
        });
    }

    if (closePopup && popupForm) {

        closePopup.addEventListener("click", () => {
            popupForm.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === popupForm) {
            popupForm.style.display = "none";
        }
    });

    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const email = document.getElementById("popEmail").value;
            const password = document.getElementById("popPassword").value;
            const confirm = document.getElementById("popConfirm").value;
            
            const emailError = document.getElementById("emailError");
            const passwordError = document.getElementById("passwordError");
            const confirmError = document.getElementById("confirmError");
            
            let isValid = true;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                emailError.style.display = "block";
                isValid = false;
            } else {
                emailError.style.display = "none";
            }

            if (password.length < 6) {
                passwordError.style.display = "block";
                isValid = false;
            } else {
                passwordError.style.display = "none";
            }

            if (password !== confirm) {
                confirmError.style.display = "block";
                isValid = false;
            } else {
                confirmError.style.display = "none";
            }

            if (isValid) {
                alert("Form send succesfully!");
                form.reset();
                popupForm.style.display = "none";
            }
        });
    }
});