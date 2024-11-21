// countdown.js

// Set the date we're counting down to (for example, a course launch)
var launchDate = new Date("Dec 31, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(function() {
    var now = new Date().getTime();
    var distance = launchDate - now;

    // Time calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);


// newsletter subscription form validation
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var message = document.getElementById("form-message");

    // Basic email validation
    if (email && validateEmail(email)) {
        message.textContent = "Thank you for subscribing!";
        message.style.color = "green";
        message.style.fontWeight = "bold";
    } else {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        message.style.fontWeight = "bold";
    }
});

// Simple email validation function
function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
