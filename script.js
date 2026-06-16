// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    function closeMenu() {
        hamburger?.classList.remove('active');
        navLinks?.classList.remove('active');
        navOverlay?.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        hamburger?.classList.add('active');
        navLinks?.classList.add('active');
        navOverlay?.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    hamburger?.addEventListener('click', function () {
        if (navLinks?.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navOverlay?.addEventListener('click', closeMenu);

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    // Fade-in animation observer
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Skill progress bars animation
    const progressBars = document.querySelectorAll('.skill-progress');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = level + '%';
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (formStatus) {
                formStatus.className = 'form-status loading';
                formStatus.innerHTML = '<div class="loading-spinner"></div>Sending your message...';
                formStatus.style.display = 'block';
            }
            if (submitBtn) submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(function () {
                if (formStatus) {
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = '✓ Thank you! Your message has been sent. I\'ll get back to you soon.';
                }
                contactForm.reset();
                if (submitBtn) submitBtn.disabled = false;

                setTimeout(function () {
                    if (formStatus) formStatus.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    // Copy email functionality
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function () {
            const email = 'rijalsachin58@gmail.com';
            navigator.clipboard.writeText(email).then(function () {
                const originalText = copyEmailBtn.innerHTML;
                copyEmailBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(function () {
                    copyEmailBtn.innerHTML = originalText;
                }, 2000);
            });
        });
    }

    // Scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 45px;
        height: 45px;
        background: var(--gradient-primary);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.3rem;
        cursor: pointer;
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;
    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    // Add loading spinner styles
    const style = document.createElement('style');
    style.textContent = `
        .loading-spinner {
            width: 20px;
            height: 20px;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 0.6s linear infinite;
            display: inline-block;
            margin-right: 8px;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        .form-status {
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 1.5rem;
            display: none;
        }
        .form-status.loading {
            background: rgba(67,97,238,0.2);
            color: var(--primary);
            display: flex;
            align-items: center;
        }
        .form-status.success {
            background: rgba(6,255,165,0.15);
            color: var(--success);
            display: block;
        }
    `;
    document.head.appendChild(style);
});