// Custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.opacity = '0';
        document.querySelector('.loading-screen').style.visibility = 'hidden';
        document.querySelector('.content-wrapper').style.opacity = '1';
    }, 2000);
});

// Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00c9a7'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00c9a7',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Typed.js
const typed = new Typed('.typing', {
    strings: ['AI/Blockchain Developer', 'Master Student', 'Computer Vision Enthusiast'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Improved smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Get the height of the navigation bar to offset the scroll
            const navHeight = document.querySelector('.main-nav').offsetHeight;
            
            // Calculate the target position with offset
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
            
            // Perform the smooth scroll with a longer duration
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Add active class to the clicked nav item
            document.querySelectorAll('.main-nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Add CSS for smooth scrolling to the document
document.head.insertAdjacentHTML('beforeend', `
    <style>
        html {
            scroll-behavior: smooth;
        }
        .main-nav a.active {
            color: var(--secondary-color);
        }
        .main-nav a.active::after {
            width: 100%;
        }
    </style>
`);

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Section animations
gsap.utils.toArray('.section-card').forEach(section => {
    gsap.fromTo(section, 
        { y: 100, opacity: 0 }, 
        {
            y: 0, 
            opacity: 1, 
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1
            }
        }
    );
});

// Timeline items animation
gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.fromTo(item, 
        { x: item.classList.contains('left') ? -100 : 100, opacity: 0 }, 
        {
            x: 0, 
            opacity: 1, 
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'top 60%',
                scrub: 1
            }
        }
    );
});

// Education items animation
gsap.utils.toArray('.education-item').forEach((item, i) => {
    gsap.fromTo(item, 
        { y: 50, opacity: 0 }, 
        {
            y: 0, 
            opacity: 1, 
            duration: 0.6,
            delay: i * 0.2,
            scrollTrigger: {
                trigger: '.education-grid',
                start: 'top 80%'
            }
        }
    );
});

// Project cards animation
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.fromTo(card, 
        { y: 50, opacity: 0 }, 
        {
            y: 0, 
            opacity: 1, 
            duration: 0.6,
            delay: i * 0.2,
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top 80%'
            }
        }
    );
});

// Conference items animation
gsap.utils.toArray('.conference-item').forEach((item, i) => {
    gsap.fromTo(item, 
        { y: 30, opacity: 0 }, 
        {
            y: 0, 
            opacity: 1, 
            duration: 0.5,
            delay: i * 0.15,
            scrollTrigger: {
                trigger: '.conferences-list',
                start: 'top 80%'
            }
        }
    );
});

// 3D tilt effect for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = x / rect.width;
        const yPercent = y / rect.height;
        
        const rotateX = (0.5 - yPercent) * 10;
        const rotateY = (xPercent - 0.5) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

//profileImage.style.backgroundImage = `url('/images/profilna.jpg')`;


// Update copyright year and last updated date
document.querySelector('.footer-content p:first-child').textContent = `© ${new Date().getFullYear()} Igor Radulović`;
document.querySelector('.footer-content p:last-child').textContent = `Last updated: March 30, 2025`;

// Sticky navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Highlight active section in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    let currentSection = '';
    const navHeight = document.querySelector('.main-nav').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 50;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for sticky navigation
const style = document.createElement('style');
style.textContent = `
    .main-nav.sticky {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
`;


// Funkcija za konverziju ISO koda države u emoji zastave
function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

// Dodaj zastavice u education items
document.querySelectorAll('.education-item .country-flag').forEach(flagElement => {
    const countryCode = flagElement.textContent.trim();
    if (countryCode) {
        // Konvertuj ISO kod u emoji zastave
        const flagEmoji = getFlagEmoji(countryCode.replace('🇲🇪', 'ME').replace('🇨🇳', 'CN').replace('🇪🇸', 'ES').replace('🇭🇺', 'HU'));
        flagElement.textContent = flagEmoji;
    }
});


// Mobilna navigacija
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.body.appendChild(mobileMenuToggle);

let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.main-nav');
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Samo za mobilne uređaje (ispod 768px)
  if (window.innerWidth <= 768) {
    // Prikaži navbar kada korisnik skroluje prema gore
    if (currentScrollTop < lastScrollTop) {
      navbar.classList.add('show');
    } else {
      navbar.classList.remove('show');
    }
  }
  
  lastScrollTop = currentScrollTop;
});

// Toggle mobilni meni
mobileMenuToggle.addEventListener('click', () => {
  const navbar = document.querySelector('.main-nav');
  navbar.classList.toggle('show');
});


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});


document.head.appendChild(style);
