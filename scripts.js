<script>
// scroll to a section and highlight the active link
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`nav a[href='#${id}']`);
    activeLink.classList.add('active');
}

// update the active nav link based on scroll position
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSection = section.id;
        }
    });

    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`nav a[href='#${currentSection}']`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  
        const sectionId = this.getAttribute('href').substring(1);  
        scrollToSection(sectionId);  
    });
});
    </script>
