var greeting = document.getElementById("greeting");

var hour = new Date().getHours();

if (hour < 12) {
    greeting.innerHTML = "Good Morning 👋";
}
else if (hour < 18) {
    greeting.innerHTML = "Good Afternoon 👋";
}
else {
    greeting.innerHTML = "Good Evening 👋";
}
var text = "Beginner Web Developer";
var typingText = document.getElementById("typing-text");

var i = 0;

function typeWriter() {

if (i < text.length) {

    typingText.innerHTML += text.charAt(i);

    i++;

    setTimeout(typeWriter, 100);
}

}

typeWriter();

var themeButton = document.getElementById("themeToggle");

themeButton.onclick = function () {


document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {

    themeButton.innerHTML = "☀️ Light Mode";

} else {

    themeButton.innerHTML = "🌙 Dark Mode";
}


};


var cards = document.querySelectorAll(".card");

function showCards() {

for (var i = 0; i < cards.length; i++) {

    var cardTop = cards[i].getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {

        cards[i].classList.add("show");
    }
}

}

window.addEventListener("scroll", showCards);

showCards();

var year = document.getElementById("year");

year.innerHTML = new Date().getFullYear();

var contactButton = document.getElementById("contactBtn");

contactButton.onclick = function () {

window.location.href = "mailto:ashlu610g@gmail.com";
};
document.addEventListener("mousemove", function(e){

    document.body.style.background =
    `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
    rgba(56,189,248,0.15),
    #111827 40%)`;

});
var skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(function(card){

    card.addEventListener("mouseenter", function(){
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function(){
        card.style.transform = "translateY(0)";
    });

});
