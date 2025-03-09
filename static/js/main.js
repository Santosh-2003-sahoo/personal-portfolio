document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        // Add shadow when scrolled
        header.classList.add('shadow-on-scroll');
      } else {
        // Remove shadow when at the top
        header.classList.remove('shadow-on-scroll');
      }
    });
  });

// // Initialize GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile menu toggle
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');
    
//     if (menuToggle) {
//         menuToggle.addEventListener('click', function() {
//             navLinks.classList.toggle('show');
//         });
//     }
    
//     // Smooth scroll for navigation links
//     const navItems = document.querySelectorAll('.nav-item');
    
//     navItems.forEach(item => {
//         item.addEventListener('click', function(e) {
//             // Only apply to internal links
//             if (this.getAttribute('href').startsWith('#')) {
//                 e.preventDefault();
//                 const targetId = this.getAttribute('href');
//                 const targetElement = document.querySelector(targetId);
                
//                 if (targetElement) {
//                     // Close mobile menu if open
//                     navLinks.classList.remove('show');
                    
//                     // Smooth scroll to target
//                     window.scrollTo({
//                         top: targetElement.offsetTop - 80,
//                         behavior: 'smooth'
//                     });
//                 }
//             }
//         });
//     });
    
//     // GSAP Animations
    
//     // Hero section animations
//     gsap.from('.hero-text h1', {
//         duration: 1,
//         y: 50,
//         opacity: 0,
//         ease: 'power3.out'
//     });
    
//     gsap.from('.hero-text .subtitle', {
//         duration: 1,
//         y: 30,
//         opacity: 0,
//         ease: 'power3.out',
//         delay: 0.3
//     });
    
//     gsap.from('.social-icons', {
//         duration: 1,
//         y: 30,
//         opacity: 0,
//         ease: 'power3.out',
//         delay: 0.6
//     });
    
//     gsap.from('.profile-img-container', {
//         duration: 1.2,
//         scale: 0.8,
//         opacity: 0,
//         ease: 'back.out(1.7)',
//         delay: 0.3
//     });
    
//     // Tech stack animations
//     gsap.from('.tech-icon', {
//         scrollTrigger: {
//             trigger: '.tech-stack',
//             start: 'top 80%'
//         },
//         duration: 0.8,
//         y: 50,
//         opacity: 0,
//         stagger: 0.1,
//         ease: 'power3.out'
//     });
    
//     // Project card animations
//     gsap.from('.project-card', {
//         scrollTrigger: {
//             trigger: '.projects-grid, .full-projects-grid',
//             start: 'top 80%'
//         },
//         duration: 0.8,
//         y: 50,
//         opacity: 0,
//         stagger: 0.2,
//         ease: 'power3.out'
//     });
    
//     // About page animations
//     if (document.querySelector('.about-grid')) {
//         gsap.from('.about-image', {
//             scrollTrigger: {
//                 trigger: '.about-grid',
//                 start: 'top 80%'
//             },
//             duration: 1,
//             x: -50,
//             opacity: 0,
//             ease: 'power3.out'
//         });
        
//         gsap.from('.about-text', {
//             scrollTrigger: {
//                 trigger: '.about-grid',
//                 start: 'top 80%'
//             },
//             duration: 1,
//             x: 50,
//             opacity: 0,
//             ease: 'power3.out'
//         });
//     }
    
//     // Timeline animations
//     gsap.from('.timeline-item', {
//         scrollTrigger: {
//             trigger: '.timeline',
//             start: 'top 80%'
//         },
//         duration: 0.8,
//         x: -30,
//         opacity: 0,
//         stagger: 0.2,
//         ease: 'power3.out'
//     });
    
//     // Skills animations
//     gsap.from('.skill-item', {
//         scrollTrigger: {
//             trigger: '.skills-grid',
//             start: 'top 80%'
//         },
//         duration: 0.6,
//         scale: 0.8,
//         opacity: 0,
//         stagger: 0.05,
//         ease: 'back.out(1.7)'
//     });
    
//     // Contact form animations
//     if (document.querySelector('.contact-content')) {
//         gsap.from('.contact-text', {
//             scrollTrigger: {
//                 trigger: '.contact-content',
//                 start: 'top 80%'
//             },
//             duration: 1,
//             x: -50,
//             opacity: 0,
//             ease: 'power3.out'
//         });
        
//         gsap.from('.contact-form-container', {
//             scrollTrigger: {
//                 trigger: '.contact-content',
//                 start: 'top 80%'
//             },
//             duration: 1,
//             x: 50,
//             opacity: 0,
//             ease: 'power3.out'
//         });
//     }
    
//     // Hover animations for project cards
//     const projectCards = document.querySelectorAll('.project-card');
    
//     projectCards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             gsap.to(this, {
//                 y: -10,
//                 boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
//                 duration: 0.3
//             });
//         });
        
//         card.addEventListener('mouseleave', function() {
//             gsap.to(this, {
//                 y: 0,
//                 boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//                 duration: 0.3
//             });
//         });
//     });
    
//     // Tab functionality for Education and Experience sections
//     const tabBtns = document.querySelectorAll('.tab-btn');
//     const tabContents = document.querySelectorAll('.tab-content');
    
//     tabBtns.forEach(btn => {
//         btn.addEventListener('click', function() {
//             const tabId = this.getAttribute('data-tab');
            
//             // Remove active class from all buttons and hide all contents
//             tabBtns.forEach(b => b.classList.remove('active'));
//             tabContents.forEach(c => c.classList.add('hidden'));
            
//             // Add active class to current button and show current content
//             this.classList.add('active');
//             document.getElementById(tabId).classList.remove('hidden');
//         });
//     });
    
//     // Projects filter functionality
//     const filterBtns = document.querySelectorAll('.filter-btn');
//     const projectItems = document.querySelectorAll('.project-card');
    
//     filterBtns.forEach(btn => {
//         btn.addEventListener('click', function() {
//             const filter = this.getAttribute('data-filter');
            
//             // Remove active class from all buttons
//             filterBtns.forEach(b => b.classList.remove('active'));
            
//             // Add active class to current button
//             this.classList.add('active');
            
//             // Filter projects with animation
//             if (filter === 'all') {
//                 projectItems.forEach(item => {
//                     gsap.to(item, {
//                         opacity: 1,
//                         scale: 1,
//                         duration: 0.4,
//                         display: 'block'
//                     });
//                 });
//             } else {
//                 projectItems.forEach(item => {
//                     if (item.getAttribute('data-category') === filter) {
//                         gsap.to(item, {
//                             opacity: 1,
//                             scale: 1,
//                             duration: 0.4,
//                             display: 'block'
//                         });
//                     } else {
//                         gsap.to(item, {
//                             opacity: 0,
//                             scale: 0.9,
//                             duration: 0.4,
//                             onComplete: function() {
//                                 item.style.display = 'none';
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     });
// });