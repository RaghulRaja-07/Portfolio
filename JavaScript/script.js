// Select the h1 element and add click event listener to reload the page
const navTitle = document.getElementById('nav-title');
navTitle.addEventListener('click', function() {
    window.location.reload();
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default submission behavior

    const name = document.querySelector('input[name="entry.1502164838"]').value.trim();
    const phone = document.querySelector('input[name="entry.1191112970"]').value.trim();
    const email = document.querySelector('input[name="entry.211793575"]').value.trim();
    const subject = document.querySelector('input[name="entry.2017585366"]').value.trim();
    const message = document.querySelector('textarea[name="entry.309620281"]').value.trim();

    // URL to post the form data
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScNFkg9uzc9ldz7CI5784ZeYl9yM9z_5NB0QVXwmcHk2YA0Sw/formResponse";
    
    const formData = new URLSearchParams({
        'entry.1502164838': name,
        'entry.1191112970': phone,
        'entry.211793575': email,
        'entry.2017585366': subject,
        'entry.309620281': message,
    });

    // Fetch request to send data to Google Forms
    fetch(googleFormURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(() => {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset(); // Reset form after submission
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("error").textContent = 'An error occurred while submitting the form.';
    });
});


// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabName, event) {
    Array.from(tablinks).forEach(tablink => tablink.classList.remove("active-link"));
    Array.from(tabcontents).forEach(tabcontent => tabcontent.classList.remove("active-tab"));

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// Side menu functionality
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}