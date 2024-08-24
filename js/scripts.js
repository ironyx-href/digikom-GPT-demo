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

// Funktion zum Öffnen des Modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Funktion zum Schließen des Modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Event-Listener für den "Mehr anzeigen" Button
document.getElementById("loadMoreBtn").addEventListener("click", function() {
    const hiddenPosts = document.querySelectorAll('.blog-post.hidden');
    hiddenPosts.forEach(post => {
        post.classList.remove('hidden'); // Entfernt die Klasse "hidden"
        post.style.display = "block"; // Zeigt den Post an
    });
    this.style.display = "none"; // Blendet den Button aus
});






document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');

    // Überprüfen, ob der Benutzer bereits eine Entscheidung getroffen hat
    if (!getCookie('clarityConsent')) {
        cookieBanner.style.display = 'flex';
    }

    acceptButton.addEventListener('click', function() {
        setCookie('clarityConsent', 'accepted', 365);
        // Hier Microsoft Clarity-Skript einfügen
        loadClarity();
        cookieBanner.style.display = 'none';
    });

    declineButton.addEventListener('click', function() {
        setCookie('clarityConsent', 'declined', 365);
        cookieBanner.style.display = 'none';
    });


    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
    }
    

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function loadClarity() {
        // Microsoft Clarity Tracking Code einfügen
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "nqef003es7");
    }
});


// Andere Funktionen und Event-Listener
document.getElementById('mehrErfahren').addEventListener('click', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links

    // Scrollen zur Sektion "Das Projekt"
    document.getElementById('dasprojekt').scrollIntoView({ behavior: 'smooth' });

    // Automatisches Abspielen des Videos
    var video = document.getElementById('projektVideo');
    video.play();
});







