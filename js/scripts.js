// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Fade-in Sections on Scroll
const faders = document.querySelectorAll('.fade-in-section');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('is-visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Verhindert die Standard-Formularübermittlung

        // Extrahiere die Formulardaten
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const subject = document.querySelector("#subject").value;
        const message = document.querySelector("#message").value;

        // Hier könntest du die Daten an einen Server senden, z.B. mit fetch oder AJAX
        // fetch('/path/to/your/api', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ name, email, subject, message })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Hier könntest du die Antwort verarbeiten
        // });

        // Zeige eine Bestätigungsnachricht an
        alert("Vielen Dank für Ihre Nachricht, " + name + "! Wir werden uns so schnell wie möglich bei Ihnen melden.");

        // Leere das Formular nach der Übermittlung
        document.querySelector("form").reset();
    });
});

document.getElementById("loadMoreBtn").addEventListener("click", function() {
    // Hier könnten weitere Blog-Posts dynamisch geladen werden.
    alert("Weitere Blog-Beiträge laden...");
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.getElementById("loadMoreBtn").addEventListener("click", function() {
    alert("Weitere Blog-Beiträge laden...");
});




