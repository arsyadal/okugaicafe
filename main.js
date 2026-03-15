document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Fade-in Animation Observer
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Adjust for navbar height (approx 80px)
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Real-time status logic (Optional enhancement based on time)
    const currentHour = new Date().getHours();
    const statusOpenElement = document.querySelector('.status-open');
    if (statusOpenElement) {
        if (currentHour >= 23 || currentHour < 10) {
            statusOpenElement.textContent = 'Saat ini TUTUP (Buka pkl 10:00 - 23:00)';
            statusOpenElement.style.color = '#EF4444'; // Red
        } else {
            statusOpenElement.textContent = ' Buka sampai 23:00';
            statusOpenElement.style.color = '#10B981'; // Green
        }
    }
});
