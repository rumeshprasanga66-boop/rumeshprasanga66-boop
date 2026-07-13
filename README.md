<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio of Rumesh - Fullstack Web Developer, AI Model Developer, and AI Model Training Specialist. Browse custom neural networks, responsive web apps, and machine learning projects.">
  <meta name="keywords" content="Rumesh, Fullstack Web Developer, AI Model Developer, AI Model Training, PyTorch, TensorFlow, React, Next.js, Deep Learning, Machine Learning Portfolio">
  <meta name="author" content="Rumesh">
  <title>Rumesh | Fullstack &amp; AI Model Developer</title>
  
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Custom CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Floating Controls -->
  <header>
    <div class="logo">
      <i class="fa-solid fa-brain"></i> Rumesh<span>.dev</span>
    </div>
    
    <div class="controls">
      <!-- Theme Toggle -->
      <button class="theme-toggle neo-btn" id="theme-toggle-btn" aria-label="Toggle dark/light mode">
        <i class="fa-solid fa-moon"></i>
      </button>
      
      <!-- Hamburger Menu Button -->
      <button class="hamburger neo-btn" id="menu-btn" aria-label="Open Navigation Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <!-- Side Navigation Overlay -->
  <nav class="nav-overlay" id="nav-overlay">
    <ul class="nav-menu">
      <li><a href="#hero" class="nav-link">Home</a></li>
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#skills" class="nav-link">Skills</a></li>
      <li><a href="#timeline" class="nav-link">Timeline</a></li>
      <li><a href="#showcase" class="nav-link">Showcase</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section id="hero" class="hero">
    <!-- Particle Network Canvas Background -->
    <canvas id="particle-canvas"></canvas>
    
    <div class="hero-container">
      <div class="hero-text fade-in">
        <div class="hero-tag neo-inset">HELLO WORLD</div>
        <h1 class="hero-title">I'm <span>Rumesh</span><br>Fullstack &amp; AI Engineer</h1>
        <p class="hero-desc">
          Building state-of-the-art web architectures while training, optimizing, and deploying deep learning models to bridge the gap between AI research and production applications.
        </p>
        <div class="hero-cta">
          <a href="#showcase" class="neo-btn"><i class="fa-solid fa-cubes"></i> View Showcase</a>
          <a href="#contact" class="neo-btn"><i class="fa-solid fa-paper-plane"></i> Let's Talk</a>
        </div>
      </div>
      
      <div class="hero-img-container fade-in">
        <div class="profile-card">
          <div class="profile-img-inner">
            <!-- Fallback standard avatar if profile.jpg is missing, but user's uploaded photo is the target -->
            <img src="profile.jpg" alt="Rumesh profile picture" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop';">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About & Stats Section -->
  <section id="about">
    <h2 class="section-title fade-in">About Me</h2>
    <div class="about-grid">
      <div class="about-text fade-in">
        <h3 style="color: var(--color-accent); font-size: 1.8rem; margin-bottom: 1.5rem;">Fusing Web Architectures with Intelligent Models</h3>
        <p>
          I am a specialized engineer focusing on two core domains: crafting highly interactive, modern fullstack web applications, and designing/training specialized Artificial Intelligence models.
        </p>
        <p>
          On the web side, I write optimized APIs, handle database clustering, and build responsive, neomorphic UI/UX experiences. On the AI side, I work with deep neural networks, custom dataset labeling, neural network architecture design, and LLM fine-tuning pipelines.
        </p>
        <p>
          My ultimate goal is to build fully autonomous web agents and deploy AI pipelines directly into scalable cloud environments, creating products that feel alive and adaptive.
        </p>
      </div>
      
      <div class="stats-grid fade-in">
        <div class="stat-item neo-card">
          <div class="stat-number">5+</div>
          <div class="stat-label">Years Coding</div>
        </div>
        <div class="stat-item neo-card">
          <div class="stat-number">25+</div>
          <div class="stat-label">AI Models Trained</div>
        </div>
        <div class="stat-item neo-card">
          <div class="stat-number">40+</div>
          <div class="stat-label">Web Apps Launched</div>
        </div>
        <div class="stat-item neo-card">
          <div class="stat-number">99%</div>
          <div class="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills">
    <h2 class="section-title fade-in">Expertise &amp; Skills</h2>
    <div class="skills-grid">
      
      <!-- Fullstack Skills -->
      <div class="skills-category neo-card fade-in">
        <h3><i class="fa-solid fa-code"></i> Fullstack Development</h3>
        <div class="skill-list">
          <div class="skill-item">
            <div class="skill-info">
              <span>Frontend (React, Next.js, HTML5, Vanilla CSS)</span>
              <span>95%</span>
            </div>
            <div class="skill-bar-container neo-inset">
              <div class="skill-bar-fill" data-percent="95"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-info">
              <span>Backend Engines (Node.js, Express, Python)</span>
              <span>90%</span>
            </div>
            <div class="skill-bar-container neo-inset">
              <div class="skill-bar-fill" data-percent="90"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-info">
              <span>Databases (PostgreSQL, MongoDB, Redis)</span>
              <span>85%</span>
            </div>
            <div class="skill-bar-container neo-inset">
              <div class="skill-bar-fill" data-percent="85"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-info">
              <span>DevOps &amp; Cloud (Docker, AWS, Vercel)</span>
              <span>80%</span>
            </div>
            <div class="skill-bar-container neo-inset">
              <div class="skill-bar-fill" data-percent="80"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- AI / ML Skills -->
      <div class="skills-category neo-card fade-in">
        <h3><i class="fa-solid fa-brain"></i> AI &amp; Deep Learning</h3>
        <div class="skill-list">
          <div class="skill-item">
            <div class="skill-info">
              <span>Model Training (PyTorch, TensorFlow)</span>
              <span>92%</span>
            </div>
            <div class="skill-bar-container neo-inset">
              <div class="skill-bar-fill" data-percent="92"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-info">
              <span>LLM Fine-tuning &amp; Prompt Engineering</span>
              <span>88%</span>
            </div>
            <div class="skill-bar-container neo-inset">
              <div class="skill-bar-fill" data-percent="88"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-info">
              <span>Computer Vision &amp; NLP Architectures</span>
              <span>85%</span>
            </div>
            <div class="skill-bar-container neo-inset">
              <div class="skill-bar-fill" data-percent="85"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-info">
              <span>Data Labeling, Curation &amp; Pipelines</span>
              <span>90%</span>
            </div>
            <div class="skill-bar-container neo-inset">
              <div class="skill-bar-fill" data-percent="90"></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>

  <!-- Storytelling Timeline Section -->
  <section id="timeline">
    <h2 class="section-title fade-in">My Growth Timeline</h2>
    <div class="timeline-container">
      
      <!-- Milestone 1 -->
      <div class="timeline-item fade-in">
        <div class="timeline-dot"></div>
        <div class="timeline-content neo-card">
          <div class="timeline-year">2021</div>
          <h4>The Coding Foundation</h4>
          <p>
            Began mastering vanilla Javascript, HTML5, and CSS structures, moving quickly into advanced Node.js backend architectures and relational database structures.
          </p>
        </div>
      </div>
      
      <!-- Milestone 2 -->
      <div class="timeline-item fade-in">
        <div class="timeline-dot"></div>
        <div class="timeline-content neo-card">
          <div class="timeline-year">2023</div>
          <h4>Fullstack Web Architect</h4>
          <p>
            Designed, deployed, and scaled client projects using Next.js and Cloud Providers, establishing high performance structures and modern interactive layouts.
          </p>
        </div>
      </div>
      
      <!-- Milestone 3 -->
      <div class="timeline-item fade-in">
        <div class="timeline-dot"></div>
        <div class="timeline-content neo-card">
          <div class="timeline-year">2024</div>
          <h4>Transition into Machine Learning</h4>
          <p>
            Dived into mathematical foundations of Machine Learning, neural networks, and Python-based frameworks (TensorFlow/PyTorch) to explore AI capabilities.
          </p>
        </div>
      </div>
      
      <!-- Milestone 4 -->
      <div class="timeline-item fade-in">
        <div class="timeline-dot"></div>
        <div class="timeline-content neo-card">
          <div class="timeline-year">2025</div>
          <h4>Specialized AI Model Training</h4>
          <p>
            Began training computer vision models, fine-tuning large language models on curated domain-specific datasets, and working with cloud-based GPU training farms.
          </p>
        </div>
      </div>
      
      <!-- Milestone 5 -->
      <div class="timeline-item fade-in">
        <div class="timeline-dot"></div>
        <div class="timeline-content neo-card">
          <div class="timeline-year">Present</div>
          <h4>Bridging Both Worlds</h4>
          <p>
            Architecting specialized web-based dashboards that run, monitor, and train AI models in real-time, providing unified web + intelligence setups for clients.
          </p>
        </div>
      </div>
      
    </div>
  </section>

  <!-- Portfolio / Showcase Gallery Section -->
  <section id="showcase">
    <h2 class="section-title fade-in">Projects &amp; AI Models</h2>
    
    <!-- Filter Controls -->
    <div class="gallery-filter fade-in">
      <button class="filter-btn active neo-btn" data-filter="all">All Projects</button>
      <button class="filter-btn neo-btn" data-filter="web">Web Apps</button>
      <button class="filter-btn neo-btn" data-filter="ai">AI &amp; ML Models</button>
    </div>
    
    <!-- Grid -->
    <div class="gallery-grid">
      
      <!-- Project 1 -->
      <div class="gallery-item fade-in" data-category="ai" data-title="DeepVision CNN Tracker" data-desc="A custom convolutional neural network designed to track and categorize industrial components in real-time with 98.4% accuracy. Saved training pipelines run via PyTorch." data-image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop">
        <div class="gallery-item-inner">
          <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop" alt="DeepVision CNN Tracker">
          <div class="gallery-overlay">
            <h4>DeepVision CNN</h4>
            <p>Computer Vision model running PyTorch</p>
          </div>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="gallery-item fade-in" data-category="web" data-title="Neomorphic Dashboard Framework" data-desc="A fully interactive admin panel implementing soft-shadow neomorphism, responsive grids, and real-time Chart.js telemetry streams." data-image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop">
        <div class="gallery-item-inner">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop" alt="Neomorphic Dashboard Framework">
          <div class="gallery-overlay">
            <h4>NeoDashboard</h4>
            <p>Interactive web dashboard control panel</p>
          </div>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="gallery-item fade-in" data-category="ai" data-title="Domain-Specific LLM Fine-Tuner" data-desc="Fine-tuning LoRA adapters on top of Llama models for custom healthcare customer support responses. Includes curated dataset cleaning script pipelines." data-image="https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop">
        <div class="gallery-item-inner">
          <img src="https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop" alt="Domain-Specific LLM Fine-Tuner">
          <div class="gallery-overlay">
            <h4>MedLlama Adapters</h4>
            <p>Specialist LLM Fine-tuning workflow</p>
          </div>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="gallery-item fade-in" data-category="web" data-title="SaaS E-Commerce Platform" data-desc="A complete high-traffic e-commerce storefront powered by Next.js, Stripe payments, and a PostgreSQL database. Features sub-second search querying." data-image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop">
        <div class="gallery-item-inner">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop" alt="SaaS E-Commerce Platform">
          <div class="gallery-overlay">
            <h4>NextCart Engine</h4>
            <p>High-performance headless E-Commerce</p>
          </div>
        </div>
      </div>

      <!-- Project 5 -->
      <div class="gallery-item fade-in" data-category="ai" data-title="Predictive Analytics Pipeline" data-desc="An automated regression analysis engine predicting supply chain shortages by analyzing global freight datasets. Powered by XGBoost and Scikit-Learn." data-image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop">
        <div class="gallery-item-inner">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop" alt="Predictive Analytics Pipeline">
          <div class="gallery-overlay">
            <h4>ShortagePredict AI</h4>
            <p>Data science &amp; tabular regression models</p>
          </div>
        </div>
      </div>

      <!-- Project 6 -->
      <div class="gallery-item fade-in" data-category="web" data-title="Real-Time Collaborative Code Editor" data-desc="A websocket-powered collaborative coding space with room tokens, layout options, syntax highlighting, and an embedded compilation terminal." data-image="https://images.unsplash.com/photo-1618401471353-b98aedd07871?w=800&auto=format&fit=crop">
        <div class="gallery-item-inner">
          <img src="https://images.unsplash.com/photo-1618401471353-b98aedd07871?w=600&auto=format&fit=crop" alt="Real-Time Collaborative Code Editor">
          <div class="gallery-overlay">
            <h4>ShareCode Workspace</h4>
            <p>Websocket real-time collaborative workspace</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Lightbox Modal -->
  <div class="lightbox" id="lightbox-modal">
    <button class="lightbox-close" id="lightbox-close-btn" aria-label="Close modal"><i class="fa-solid fa-xmark"></i></button>
    <div class="lightbox-content">
      <div class="lightbox-body">
        <div class="lightbox-img-wrapper">
          <img id="lightbox-img" src="" alt="Project Image">
        </div>
        <div class="lightbox-info">
          <h3 id="lightbox-title">Project Title</h3>
          <p id="lightbox-desc">Project description goes here...</p>
          <button class="neo-btn" onclick="document.getElementById('lightbox-modal').classList.remove('active');"><i class="fa-solid fa-circle-check"></i> Close Preview</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Form Section -->
  <section id="contact">
    <h2 class="section-title fade-in">Get In Touch</h2>
    <div class="contact-container">
      
      <div class="contact-info fade-in">
        <div class="contact-info-card neo-card">
          <div class="contact-icon neo-inset">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div class="contact-details">
            <h4>Email Me</h4>
            <p>rumesh.dev.ai@gmail.com</p>
          </div>
        </div>
        
        <div class="contact-info-card neo-card">
          <div class="contact-icon neo-inset">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div class="contact-details">
            <h4>Location</h4>
            <p>Colombo, Sri Lanka</p>
          </div>
        </div>
        
        <div class="contact-info-card neo-card">
          <div class="contact-icon neo-inset">
            <i class="fa-solid fa-globe"></i>
          </div>
          <div class="contact-details">
            <h4>GitHub Profile</h4>
            <p>github.com/rumesh-dev</p>
          </div>
        </div>
      </div>
      
      <div class="contact-form-wrapper neo-card fade-in">
        <form id="contact-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="name">Your Name</label>
            <input type="text" id="name" class="form-input neo-inset" placeholder="John Doe" required>
            <div class="form-feedback" id="name-feedback">Please enter your name.</div>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="email">Your Email</label>
            <input type="email" id="email" class="form-input neo-inset" placeholder="john@example.com" required>
            <div class="form-feedback" id="email-feedback">Please enter a valid email address.</div>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="subject">Subject</label>
            <input type="text" id="subject" class="form-input neo-inset" placeholder="Collaboration / Job Opportunity" required>
            <div class="form-feedback" id="subject-feedback">Please specify a subject.</div>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="message">Message</label>
            <textarea id="message" class="form-input neo-inset" placeholder="Describe your project or questions in detail..." required></textarea>
            <div class="form-feedback" id="message-feedback">Message content cannot be empty.</div>
          </div>
          
          <button type="submit" class="neo-btn"><i class="fa-solid fa-paper-plane"></i> Send Message</button>
        </form>
      </div>
      
    </div>
  </section>

  <!-- Fat Footer -->
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <h3><i class="fa-solid fa-brain"></i> Rumesh<span>.dev</span></h3>
        <p>
          Dedicated to building advanced web tools and training custom machine learning networks. Fusing visual quality with intelligence.
        </p>
        <div class="social-links">
          <a href="https://github.com" target="_blank" class="social-btn neo-btn" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="https://linkedin.com" target="_blank" class="social-btn neo-btn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://twitter.com" target="_blank" class="social-btn neo-btn" aria-label="Twitter / X"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
      
      <div class="footer-links">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#showcase">Showcase</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-newsletter">
        <h4>Newsletter</h4>
        <p>Subscribe to receive AI training updates, guides, and fullstack tutorials.</p>
        <form class="newsletter-form" id="newsletter-form" novalidate>
          <div style="flex: 1; position: relative;">
            <input type="email" id="newsletter-email" class="form-input neo-inset" placeholder="yourname@gmail.com" required>
            <div class="form-feedback" id="newsletter-feedback" style="position: absolute; bottom: -20px; left: 0;"></div>
          </div>
          <button type="submit" class="neo-btn">Subscribe</button>
        </form>
        
        <!-- Mock Map UI -->
        <div class="mock-map neo-inset">
          <i class="fa-solid fa-earth-asia"></i>
          <p style="font-weight:600; font-size:0.9rem; margin-bottom: 2px;">Colombo, Sri Lanka</p>
          <p style="font-size:0.75rem; color:var(--color-secondary);">Coordinates: 6.9271° N, 79.8612° E</p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2026 Rumesh. All Rights Reserved.</p>
      <p>Designed and Built with Neomorphic aesthetics.</p>
    </div>
  </footer>

  <!-- Floating Scroll Back to Top Button -->
  <button class="back-to-top neo-btn" id="back-to-top-btn" aria-label="Scroll to top">
    <i class="fa-solid fa-arrow-up"></i>
  </button>

  <!-- Script JS -->
  <script src="script.js"></script>
</body>
</html>
