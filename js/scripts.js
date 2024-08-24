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

// Setzt ein Cookie mit einem Ablaufdatum in Stunden
function setCookie(name, value, hours, domain) {
    var expires = "";
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000)); // Stunden in Millisekunden umrechnen
        expires = "; expires=" + date.toUTCString();
    }
    var domainAttribute = domain ? "; domain=" + domain : "";
    document.cookie = name + "=" + (value || "") + expires + "; path=/" + domainAttribute + "; samesite=lax";
    console.log('Cookie set:', name + "=" + (value || "") + expires + "; path=/" + domainAttribute);
}

// Liest ein Cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Überprüft, ob der Cookie-Banner angezeigt werden muss
function checkCookieConsent() {
    var cookieConsent = getCookie('cookies_accepted');
    console.log("Cookie Consent Check:", cookieConsent); // Debugging-Log
    if (!cookieConsent) {
        document.getElementById('cookie-banner').style.display = 'block';
    } else {
        document.getElementById('cookie-banner').style.display = 'none';
        if (cookieConsent === 'true') {
            loadClarity();  // Clarity nur laden, wenn Cookies akzeptiert wurden
        }
    }
}

// Microsoft Clarity laden
function loadClarity() {
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "nqef003es7");
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', function () {
    checkCookieConsent();

    document.getElementById('accept-cookies').addEventListener('click', function () {
        setCookie('cookies_accepted', 'true', 5, '.nexus-428.github.io');
        document.getElementById('cookie-banner').style.display = 'none';
        loadClarity();
    });

    document.getElementById('decline-cookies').addEventListener('click', function () {
        setCookie('cookies_accepted', 'false', 5, '.nexus-428.github.io');
        document.getElementById('cookie-banner').style.display = 'none';
    });
});

// Event-Listener für den "Mehr Erfahren"-Button
document.getElementById('mehrErfahren').addEventListener('click', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links

    // Scrollen zur Sektion "Das Projekt"
    document.getElementById('dasprojekt').scrollIntoView({ behavior: 'smooth' });

    // Automatisches Abspielen des Videos
    var video = document.getElementById('projektVideo');
    video.play();
});



