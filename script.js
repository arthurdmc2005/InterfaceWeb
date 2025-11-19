document.addEventListener('DOMContentLoaded', function() {
    
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    

    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navList.classList.remove('active');
            }
        });
    });

    console.log("Duas interações carregadas: FAQ e Menu Mobile.");
});