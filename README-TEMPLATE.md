<!--
  REUSABLE README TEMPLATE — colorful + animated + 3D
  Pure HTML/CSS only. GitHub strips JavaScript, so all motion uses @keyframes.
  EDIT the marked values below, then copy this file into any repo as README.md.
-->
<style>
.tpl-wrap{position:relative;overflow:hidden;border-radius:20px;padding:34px 28px;margin:0 0 26px;background:linear-gradient(125deg,#0b1020,#161035 38%,#052033 72%,#0b1020);background-size:280% 280%;animation:tpl-bg 14s ease infinite;border:1px solid #2b2f57;box-shadow:0 18px 60px rgba(76,29,149,.35)}
@keyframes tpl-bg{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.tpl-orb{position:absolute;border-radius:50%;opacity:.55;pointer-events:none}
.tpl-orb-a{width:190px;height:190px;top:-70px;left:-50px;background:radial-gradient(circle,#a855f7,transparent 68%);animation:tpl-float 9s ease-in-out infinite}
.tpl-orb-b{width:230px;height:230px;bottom:-110px;right:-60px;background:radial-gradient(circle,#06b6d4,transparent 68%);animation:tpl-float 11s ease-in-out infinite reverse}
@keyframes tpl-float{0%,100%{transform:translate(0,0)}50%{transform:translate(26px,-22px)}}
.tpl-inner{position:relative;z-index:2;text-align:center}
.tpl-avatar-wrap{display:inline-block;perspective:800px;margin-bottom:8px}
.tpl-avatar{width:132px;height:132px;border-radius:50%;border:3px solid #a78bfa;box-shadow:0 0 0 6px rgba(167,139,250,.12),0 0 44px rgba(34,211,238,.55);animation:tpl-tilt 7s ease-in-out infinite}
@keyframes tpl-tilt{0%,100%{transform:rotateY(-15deg) rotateX(8deg)}50%{transform:rotateY(15deg) rotateX(-8deg)}}
.tpl-title{margin:6px 0 2px;font-size:2.1rem;font-weight:900;background:linear-gradient(90deg,#f0abfc,#67e8f9,#a7f3d0,#fde68a);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:tpl-hue 8s linear infinite}
@keyframes tpl-hue{to{background-position:300% 0}}
.tpl-sub{color:#c4b5fd;font-size:.95rem;letter-spacing:1.5px;text-transform:uppercase}
.tpl-typing{display:inline-block;overflow:hidden;white-space:nowrap;width:24ch;border-right:3px solid #22d3ee;color:#a5f3fc;font-family:ui-monospace,Menlo,monospace;animation:tpl-type 4s steps(24,end) infinite,tpl-blink .8s step-end infinite}
@keyframes tpl-type{0%{width:0}58%,100%{width:24ch}}
@keyframes tpl-blink{50%{border-color:transparent}}
.tpl-links{margin-top:18px;display:flex;flex-wrap:wrap;gap:9px;justify-content:center}
.tpl-link{padding:8px 14px;border-radius:999px;text-decoration:none;font-weight:700;font-size:.82rem;color:#f8fafc;border:1px solid #475569;background:rgba(255,255,255,.06);transition:transform .25s,border-color .25s,box-shadow .25s}
.tpl-link:hover{transform:translateY(-3px) scale(1.04);border-color:#22d3ee;box-shadow:0 8px 24px rgba(34,211,238,.35)}
.tpl-scene{width:132px;height:132px;perspective:700px;margin:4px auto 22px}
.tpl-cube{position:relative;width:100%;height:100%;transform-style:preserve-3d;animation:tpl-spin 15s linear infinite}
.tpl-face{position:absolute;top:0;left:0;width:132px;height:132px;display:flex;align-items:center;justify-content:center;font-size:1.35rem;font-weight:900;color:#fff;border:1px solid rgba(255,255,255,.35)}
.tpl-f1{background:linear-gradient(135deg,#7c3aed,#4f46e5);transform:translateZ(66px)}
.tpl-f2{background:linear-gradient(135deg,#0891b2,#0ea5e9);transform:rotateY(180deg) translateZ(66px)}
.tpl-f3{background:linear-gradient(135deg,#db2777,#7c3aed);transform:rotateY(90deg) translateZ(66px)}
.tpl-f4{background:linear-gradient(135deg,#059669,#0891b2);transform:rotateY(-90deg) translateZ(66px)}
.tpl-f5{background:linear-gradient(135deg,#d97706,#db2777);transform:rotateX(90deg) translateZ(66px)}
.tpl-f6{background:linear-gradient(135deg,#4f46e5,#06b6d4);transform:rotateX(-90deg) translateZ(66px)}
@keyframes tpl-spin{from{transform:rotateX(-18deg) rotateY(0)}to{transform:rotateX(-18deg) rotateY(360deg)}}
.tpl-h2{margin:30px 0 14px;font-size:1.25rem;font-weight:800;color:#e9d5ff}
.tpl-marquee{overflow:hidden;white-space:nowrap;padding:6px 0}
.tpl-track{display:inline-block;animation:tpl-scroll 26s linear infinite}
.tpl-chip{display:inline-block;margin:0 5px;padding:7px 13px;border-radius:10px;font-size:.78rem;font-weight:700;color:#e0f2fe;background:linear-gradient(135deg,rgba(124,58,237,.45),rgba(6,182,212,.35));border:1px solid rgba(125,211,252,.4)}
@keyframes tpl-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.tpl-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(225px,1fr));gap:14px;perspective:1100px}
.tpl-card{position:relative;overflow:hidden;display:block;padding:17px 16px;border-radius:16px;text-decoration:none;color:#e2e8f0;background:linear-gradient(160deg,#111827,#1c1533);border:1px solid #334155;transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease}
.tpl-card:hover{transform:rotateY(9deg) rotateX(6deg) translateY(-7px);border-color:#a78bfa;box-shadow:0 20px 42px rgba(124,58,237,.5)}
.tpl-card b{display:block;font-size:.98rem;color:#f5f3ff;margin:6px 0 4px}
.tpl-card small{display:block;color:#67e8f9;font-size:.72rem;margin-bottom:7px}
.tpl-card span{display:block;font-size:.8rem;line-height:1.45;color:#cbd5e1}
.tpl-ico{font-size:1.5rem}
</style>

<div class="tpl-wrap">
  <div class="tpl-orb tpl-orb-a"></div>
  <div class="tpl-orb tpl-orb-b"></div>
  <div class="tpl-inner">
    <!-- EDIT: avatar URL, name, role, location -->
    <div class="tpl-avatar-wrap"><img class="tpl-avatar" src="https://avatars.githubusercontent.com/USERNAME?v=4" alt="Your Name" /></div>
    <h1 class="tpl-title">Hi, I'm Your Name 👋</h1>
    <p class="tpl-sub">Your Role · Your City, Your Country</p>
    <div class="tpl-typing">Skill A · Skill B · Skill C · Skill D</div>
    <div class="tpl-links">
      <!-- EDIT: your links -->
      <a class="tpl-link" href="mailto:you@example.com">📫 Email</a>
      <a class="tpl-link" href="https://github.com/USERNAME">💻 GitHub</a>
      <a class="tpl-link" href="https://your-portfolio.example.com">🌐 Portfolio</a>
    </div>
  </div>
</div>

<h2 class="tpl-h2">🛠️ Tech Stack</h2>
<div class="tpl-scene">
  <div class="tpl-cube">
    <!-- EDIT: six short labels for the cube faces -->
    <div class="tpl-face tpl-f1">A</div><div class="tpl-face tpl-f2">B</div>
    <div class="tpl-face tpl-f3">C</div><div class="tpl-face tpl-f4">D</div>
    <div class="tpl-face tpl-f5">E</div><div class="tpl-face tpl-f6">F</div>
  </div>
</div>
<!-- EDIT: duplicate the chip list once so the marquee loops seamlessly -->
<div class="tpl-marquee"><div class="tpl-track">
  <span class="tpl-chip">React</span><span class="tpl-chip">Next.js</span><span class="tpl-chip">TypeScript</span><span class="tpl-chip">Python</span><span class="tpl-chip">Node.js</span><span class="tpl-chip">Docker</span>
  <span class="tpl-chip">React</span><span class="tpl-chip">Next.js</span><span class="tpl-chip">TypeScript</span><span class="tpl-chip">Python</span><span class="tpl-chip">Node.js</span><span class="tpl-chip">Docker</span>
</div></div>

<h2 class="tpl-h2">🚀 Featured Projects</h2>
<div class="tpl-grid">
  <!-- EDIT: copy this card for each project -->
  <a class="tpl-card" href="https://github.com/USERNAME/project-one"><span class="tpl-ico">🧠</span><b>Project One</b><small>Tech · Stack</small><span>One sentence describing what it does and who it helps.</span></a>
  <a class="tpl-card" href="https://github.com/USERNAME/project-two"><span class="tpl-ico">✨</span><b>Project Two</b><small>Tech · Stack</small><span>One sentence describing what it does and who it helps.</span></a>
  <a class="tpl-card" href="https://github.com/USERNAME/project-three"><span class="tpl-ico">🎯</span><b>Project Three</b><small>Tech · Stack</small><span>One sentence describing what it does and who it helps.</span></a>
</div>

<h2 class="tpl-h2">📫 Get in Touch</h2>
Have an idea or a question? Reach out at <a href="mailto:you@example.com">you@example.com</a>.
