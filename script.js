/* Script for Rumesh's Portfolio - Interactive Elements & AI Background */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initHamburger();
  initCanvas();
  initScrollAnimations();
  initGallery();
  initForms();
  initScrollTop();
});

/* =========================================================================
   1. Theme Management (Light / Dark Mode)
   ========================================================================= */
let currentTheme = "light";

function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const storedTheme = localStorage.getItem("theme");
  
  // Check user preference or system preference
  if (storedTheme) {
    currentTheme = storedTheme;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    currentTheme = "dark";
  }

  setTheme(currentTheme);

  toggleBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(currentTheme);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const icon = toggleBtn.querySelector("i");
  
  if (theme === "dark") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
  
  // Dispatch custom event so canvas knows colors updated
  window.dispatchEvent(new CustomEvent("themechanged", { detail: { theme } }));
}

/* =========================================================================
   2. Hamburger Menu Interaction
   ========================================================================= */
function initHamburger() {
  const menuBtn = document.getElementById("menu-btn");
  const navOverlay = document.getElementById("nav-overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navOverlay.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navOverlay.classList.remove("active");
    });
  });

  // Close nav on clicking outside menu area when active
  document.addEventListener("click", (e) => {
    if (navOverlay.classList.contains("active") && 
        !navOverlay.contains(e.target) && 
        !menuBtn.contains(e.target)) {
      menuBtn.classList.remove("active");
      navOverlay.classList.remove("active");
    }
  });
}

/* =========================================================================
   3. AI Neural Network Particle Background (Canvas)
   ========================================================================= */
function initCanvas() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  let width = canvas.width = canvas.offsetWidth;
  let height = canvas.height = canvas.offsetHeight;
  
  let particles = [];
  let particleCount = Math.min(80, Math.floor((width * height) / 15000)); // Adaptive count
  let connectionDistance = 120;
  let mouse = { x: null, y: null, radius: 150 };
  
  // Theme-aware color configuration
  let accentColor = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim();
  
  window.addEventListener("themechanged", () => {
    accentColor = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim();
  });

  window.addEventListener("resize", () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    particleCount = Math.min(80, Math.floor((width * height) / 15000));
    createParticles();
  });

  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2.5 + 1.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce boundaries
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactive push/pull effect
      if (mouse.x !== null && mouse.y !== null) {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          let force = (mouse.radius - dist) / mouse.radius;
          let angle = Math.atan2(dy, dx);
          // Gently push away from mouse
          this.x += Math.cos(angle) * force * 1.5;
          this.y += Math.sin(angle) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = accentColor;
      ctx.fill();
    }
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        let p1 = particles[i];
        let p2 = particles[j];
        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;
        let dist = Math.hypot(dx, dy);

        if (dist < connectionDistance) {
          // Opacity fades out as distance approaches connectionDistance limit
          let alpha = (connectionDistance - dist) / connectionDistance * 0.25;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = accentColor;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.globalAlpha = 1.0; // reset
        }
      }
      
      // Also connect to mouse
      if (mouse.x !== null && mouse.y !== null) {
        let p = particles[i];
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          let alpha = (mouse.radius - dist) / mouse.radius * 0.3;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = accentColor;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 1.2;
          ctx.stroke();
          ctx.globalAlpha = 1.0; // reset
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    
    drawConnections();
    requestAnimationFrame(animate);
  }

  createParticles();
  animate();
}

/* =========================================================================
   4. Scroll Triggered Transitions & Progress Animators
   ========================================================================= */
function initScrollAnimations() {
  const faders = document.querySelectorAll(".fade-in");
  const skillSection = document.getElementById("skills");
  const skillBars = document.querySelectorAll(".skill-bar-fill");
  
  const options = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => {
    observer.observe(fader);
  });

  // Track skills section reveal to trigger progress filling
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const percent = bar.getAttribute("data-percent");
          bar.style.width = percent + "%";
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (skillSection) {
    skillObserver.observe(skillSection);
  }

  // Parallax Header Scroll Offset
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.documentElement.style.setProperty("--parallax-offset", `${scrollY * 0.1}px`);
  });
}

/* =========================================================================
   5. Interactive Portfolio Gallery & Lightbox Detail
   ========================================================================= */
function initGallery() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-desc");
  const lightboxClose = document.getElementById("lightbox-close-btn");

  // Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filterValue = btn.getAttribute("data-filter");
      
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        if (filterValue === "all" || itemCategory === filterValue) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 50);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Lightbox Trigger
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const title = item.getAttribute("data-title");
      const desc = item.getAttribute("data-desc");
      const imgUrl = item.getAttribute("data-image");

      lightboxImg.src = imgUrl;
      lightboxTitle.textContent = title;
      lightboxDesc.textContent = desc;
      
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden"; // disable background scroll
    });
  });

  // Close Lightbox
  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // enable background scroll
  };

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Esc Key support
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}

/* =========================================================================
   6. Contact and Newsletter Form Client-Side Validation
   ========================================================================= */
function initForms() {
  const contactForm = document.getElementById("contact-form");
  const newsletterForm = document.getElementById("newsletter-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");
      
      let isValid = true;

      // Validate Name
      if (name.value.trim() === "") {
        showFeedback("name-feedback", true);
        isValid = false;
      } else {
        showFeedback("name-feedback", false);
      }

      // Validate Email
      if (!validateEmail(email.value)) {
        showFeedback("email-feedback", true);
        isValid = false;
      } else {
        showFeedback("email-feedback", false);
      }

      // Validate Subject
      if (subject.value.trim() === "") {
        showFeedback("subject-feedback", true);
        isValid = false;
      } else {
        showFeedback("subject-feedback", false);
      }

      // Validate Message
      if (message.value.trim() === "") {
        showFeedback("message-feedback", true);
        isValid = false;
      } else {
        showFeedback("message-feedback", false);
      }

      if (isValid) {
        // Mock successful form submission
        const submitBtn = contactForm.querySelector("button[type='submit']");
        const originalContent = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
        
        setTimeout(() => {
          submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message Sent!';
          submitBtn.style.boxShadow = "var(--shadow-in-sm)";
          contactForm.reset();
          
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalContent;
            submitBtn.style.boxShadow = "var(--shadow-out-sm)";
          }, 3000);
        }, 1500);
      }
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("newsletter-email");
      const feedback = document.getElementById("newsletter-feedback");

      if (!validateEmail(emailInput.value)) {
        feedback.textContent = "Invalid email format.";
        feedback.style.color = "#ff5252";
        feedback.style.display = "block";
      } else {
        feedback.textContent = "Successfully Subscribed!";
        feedback.style.color = "#4caf50";
        feedback.style.display = "block";
        emailInput.value = "";
        
        setTimeout(() => {
          feedback.style.display = "none";
        }, 3000);
      }
    });
  }
}

function showFeedback(id, isError) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = isError ? "block" : "none";
  }
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

/* =========================================================================
   7. Back to Top Button
   ========================================================================= */
function initScrollTop() {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
