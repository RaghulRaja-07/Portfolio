// Select the h1 element and add click event listener to reload the page
const navTitle = document.getElementById('nav-title');
navTitle.addEventListener('click', function() {
    window.location.reload();
});

// Contact form submission logic
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form values
    const name = document.querySelector('input[name="Name"]').value.trim();
    const phone = document.querySelector('input[name="Phone"]').value.trim();
    const email = document.querySelector('input[name="Email"]').value.trim();
    const subject = document.querySelector('input[name="Subject"]').value.trim();
    const message = document.querySelector('textarea[name="Message"]').value.trim();

    // Google Form URL and entry IDs
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScNFkg9uzc9ldz7CI5784ZeYl9yM9z_5NB0QVXwmcHk2YA0Sw/viewform?usp=sf_link/formResponse";
    const googleFormEntries = {
        'entry.1502164838': name,
        'entry.1191112970': phone,
        'entry.211793575': email,
        'entry.2017585366': subject,
        'entry.309620281': message,
    };

    // Create the payload for the request
    const formData = new URLSearchParams(googleFormEntries);

    // Send the data to Google Form
    fetch(googleFormURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(() => {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset(); // Reset the form
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