document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       Custom Cursor Glow Effect
       ========================================================================== */
    const cursorGlow = document.getElementById('cursor-glow');
    
    // Check if device supports hover
    const isHoverSupported = window.matchMedia('(hover: hover)').matches;
    
    if (isHoverSupported && cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            // Use requestAnimationFrame for smooth performance
            requestAnimationFrame(() => {
                cursorGlow.style.left = `${e.clientX}px`;
                cursorGlow.style.top = `${e.clientY}px`;
            });
        });
        
        // Expand cursor on clickable elements
        const clickables = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-category, .cert-card');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorGlow.style.width = '150px';
                cursorGlow.style.height = '150px';
                cursorGlow.style.opacity = '0.8';
            });
            el.addEventListener('mouseleave', () => {
                cursorGlow.style.width = '100px';
                cursorGlow.style.height = '100px';
                cursorGlow.style.opacity = '0.6';
            });
        });
    }

    /* ==========================================================================
       Mobile Navigation Toggle
       ========================================================================== */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const menuIcon = mobileMenuBtn.querySelector('i');

    function toggleMenu() {
        mobileNav.classList.toggle('open');
        if (mobileNav.classList.contains('open')) {
            menuIcon.classList.remove('ph-list');
            menuIcon.classList.add('ph-x');
        } else {
            menuIcon.classList.remove('ph-x');
            menuIcon.classList.add('ph-list');
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    /* ==========================================================================
       Navbar Scroll Effect & Active Link Highlighting
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinksDesktop = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        // Navbar background
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active link highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinksDesktop.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       Scroll Reveal Animations
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    /* ==========================================================================
       Typing Animation Effect
       ========================================================================== */
    const typedTextSpan = document.querySelector('.typed-text');
    const textArray = ["Cyber Security Student", "Cyber Security Engineer", "Ethical Hacker", "Penetration Tester"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    // Start typing effect after a brief delay
    if(typedTextSpan) {
        setTimeout(type, 1500);
    }

    /* ==========================================================================
       3D Tilt Effect for Project Cards (Vanilla JS)
       ========================================================================== */
    const tiltElements = document.querySelectorAll('.tilt-element');
    
    if (isHoverSupported) {
        tiltElements.forEach(el => {
            el.addEventListener('mousemove', handleTilt);
            el.addEventListener('mouseleave', resetTilt);
        });
    }

    function handleTilt(e) {
        const card = this;
        const cardRect = card.getBoundingClientRect();
        
        // Calculate mouse position relative to card center
        const x = e.clientX - cardRect.left - cardRect.width / 2;
        const y = e.clientY - cardRect.top - cardRect.height / 2;
        
        // Calculate rotation angles (max 10 degrees)
        const rotateX = -(y / (cardRect.height / 2)) * 10;
        const rotateY = (x / (cardRect.width / 2)) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = 'transform 0.1s ease';
    }

    function resetTilt() {
        this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        this.style.transition = 'transform 0.5s ease';
    }

    /* ==========================================================================
       Contact Form Submission (Mock)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = contactForm.querySelector('.submit-btn span');
            const originalText = btn.textContent;
            
            // Loading state
            btn.textContent = 'Sending...';
            contactForm.querySelector('.submit-btn').style.opacity = '0.7';
            
            // Mock API call
            setTimeout(() => {
                formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
                formStatus.className = 'form-status success';
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                btn.textContent = originalText;
                contactForm.querySelector('.submit-btn').style.opacity = '1';
                
                // Hide status message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    /* ==========================================================================
       Simple Vanilla JS Particles Background
       ========================================================================== */
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            createParticle(particlesContainer);
        }
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // Styling
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = 'rgba(0, 240, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.8)';
        
        // Animation using WAAPI (Web Animations API)
        const animation = particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 0 },
            { opacity: Math.random() * 0.5 + 0.2, offset: 0.1 },
            { opacity: Math.random() * 0.5 + 0.2, offset: 0.9 },
            { transform: `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) scale(${Math.random() + 0.5})`, opacity: 0 }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            iterations: Infinity,
            easing: 'linear'
        });
        
        container.appendChild(particle);
    }
});