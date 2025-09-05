/* ============================================
   NEON PORTFOLIO JAVASCRIPT - Interactive Features
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // LOADING SCREEN
    // ============================================
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });
    
    // ============================================
    // NAVIGATION
    // ============================================
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger?.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animate hamburger bars
        const spans = hamburger.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.transform = hamburger.classList.contains('active') 
                ? `rotate(${index === 0 ? 45 : index === 2 ? -45 : 0}deg) translate(${index === 1 ? '10px' : '0'}, ${index === 1 ? '0' : index === 0 ? '6px' : '-6px'})`
                : 'none';
            span.style.opacity = index === 1 && hamburger.classList.contains('active') ? '0' : '1';
        });
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Reset hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
    
    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .info-item, .social-link');
    animateElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // ============================================
    // SKILL BARS ANIMATION
    // ============================================
    const skillBars = document.querySelectorAll('.skill-bar');
    const skillsSection = document.querySelector('#skills');
    
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const level = bar.getAttribute('data-level');
                    setTimeout(() => {
                        bar.style.width = level + '%';
                    }, 300);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
    
    // ============================================
    // CONTACT FORM
    // ============================================
    const contactForm = document.getElementById('contact-form');
    
    contactForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields!', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address!', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.btn-neon');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.style.pointerEvents = 'none';
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.pointerEvents = 'auto';
        }, 2000);
    });
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // ============================================
    // NOTIFICATION SYSTEM
    // ============================================
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'rgba(0, 255, 0, 0.1)' : type === 'error' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 255, 0.1)'};
            border: 1px solid ${type === 'success' ? '#00ff00' : type === 'error' ? '#ff0000' : '#00ffff'};
            border-radius: 10px;
            padding: 1rem;
            color: white;
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            max-width: 300px;
        `;
        
        // Add to document
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // ============================================
    // INTERACTIVE EFFECTS
    // ============================================
    
    // Floating cubes animation enhancement
    const floatingCubes = document.querySelectorAll('.floating-cube');
    floatingCubes.forEach((cube, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            cube.style.transform += ` translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 1000);
    });
    
    // Particle effect on hover for skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            createParticleEffect(this);
        });
    });
    
    function createParticleEffect(element) {
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #00ffff;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
            `;
            
            const rect = element.getBoundingClientRect();
            particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            
            document.body.appendChild(particle);
            
            // Animate particle
            particle.animate([
                { transform: 'translateY(0) scale(1)', opacity: 1 },
                { transform: 'translateY(-50px) scale(0)', opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }
    
    // ============================================
    // CURSOR GLOW EFFECT
    // ============================================
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Enhanced cursor effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.background = 'radial-gradient(circle, rgba(255, 0, 255, 0.3) 0%, transparent 70%)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)';
        });
    });
    
    // ============================================
    // TYPING EFFECT FOR HERO TAGLINE
    // ============================================
    const tagline = document.querySelector('.hero-tagline');
    const originalText = tagline.textContent;
    
    function typeWriter(element, text, speed = 50) {
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        // Start typing after hero animation
        setTimeout(type, 1500);
    }
    
    // Only run typing effect on desktop
    if (window.innerWidth > 768) {
        typeWriter(tagline, originalText);
    }
    
    // ============================================
    // DYNAMIC BACKGROUND EFFECTS
    // ============================================
    function createBackgroundEffect() {
        const heroSection = document.querySelector('.hero');
        
        setInterval(() => {
            const glowEffect = document.createElement('div');
            glowEffect.style.cssText = `
                position: absolute;
                width: ${Math.random() * 100 + 50}px;
                height: ${Math.random() * 100 + 50}px;
                background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                z-index: 1;
                animation: fadeInOut 4s ease-in-out;
            `;
            
            heroSection.appendChild(glowEffect);
            
            // Remove after animation
            setTimeout(() => {
                glowEffect.remove();
            }, 4000);
        }, 2000);
    }
    
    // Add CSS for background effect animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0%, 100% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1); }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 1.2rem;
            cursor: pointer;
            margin-left: auto;
        }
    `;
    document.head.appendChild(style);
    
    // Start background effect
    createBackgroundEffect();
    
    // ============================================
    // ACTIVE NAVIGATION HIGHLIGHT
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // ============================================
    // PERFORMANCE OPTIMIZATION
    // ============================================
    
    // Throttle scroll events
    let ticking = false;
    function updateOnScroll() {
        // Update scroll-dependent features here
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
    
    // Preload images
    function preloadImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // Call preload on page load
    preloadImages();
    
    console.log('🎉 Neon Portfolio initialized successfully!');
    console.log('💡 To customize:');
    console.log('📝 Edit personal info in HTML');
    console.log('🖼️ Replace profile picture');
    console.log('🔗 Update social media links');
    console.log('⚡ Add real projects in the projects section');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/* ============================================
   CUSTOMIZATION GUIDE (COMMENTS)
   ============================================

   📝 TO EDIT PERSONAL INFORMATION:
   1. Replace "ALEX KUMAR" with your name in HTML
   2. Update the hero tagline
   3. Modify the about section content
   4. Update education details

   🖼️ TO REPLACE PROFILE PICTURE:
   1. Add your photo to the project folder
   2. Update the src attribute in the hero section:
      <img src="path/to/your/photo.jpg" alt="Profile Picture" class="profile-pic">

   🔗 TO UPDATE SOCIAL MEDIA LINKS:
   1. Find the social-links section in HTML
   2. Replace the href="#" with your actual social media URLs:
      <a href="https://linkedin.com/in/yourprofile" class="social-link linkedin">
      <a href="https://github.com/yourusername" class="social-link github">
      <a href="https://instagram.com/yourusername" class="social-link instagram">

   ⚡ TO ADD REAL PROJECTS:
   1. Replace the "coming-soon" project cards with actual project cards
   2. Add project images, descriptions, and live links
   3. Update the tech stack tags
   4. Example project card structure:
      <div class="project-card">
          <img src="project-image.jpg" alt="Project Name">
          <div class="project-content">
              <h3>Project Name</h3>
              <p>Project description...</p>
              <div class="project-tech">
                  <span class="tech-tag">HTML</span>
                  <span class="tech-tag">CSS</span>
                  <span class="tech-tag">JavaScript</span>
              </div>
              <div class="project-links">
                  <a href="#" class="btn-neon">Live Demo</a>
                  <a href="#" class="btn-outline">GitHub</a>
              </div>
          </div>
      </div>

   🎨 TO CUSTOMIZE COLORS:
   1. Edit the CSS custom properties in :root selector
   2. Change --neon-cyan, --neon-pink, etc. to your preferred colors

   📱 TO ADD MORE SKILLS:
   1. Copy an existing skill-card div in the skills section
   2. Update the icon, skill name, and proficiency level
   3. Add appropriate Font Awesome icon class

   🔧 TO MODIFY ANIMATIONS:
   1. Adjust animation durations in CSS
   2. Change animation delays in JavaScript
   3. Modify transition properties for different effects

   ============================================ */