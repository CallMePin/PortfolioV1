(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function sendMail() {
    var fields = {};
    document.addEventListener("DOMContentLoaded", function() {
        fields.firstName = document.getElementById('firstName');
        fields.email = document.getElementById('email');
        fields.mailBody = document.getElementById('mailBody');
        fields.subjectBody = document.getElementById('subjectBody');
    })

    window.location="mailto:StevenW789@hotmail.com?subject="+subjectBody+ "mailto!&body="+mailBody;
}