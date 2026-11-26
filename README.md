<style>
.rm-wrap{position:relative;overflow:hidden;border-radius:20px;padding:34px 28px 30px;margin:0 0 26px;background:linear-gradient(125deg,#0b1020 0%,#161035 38%,#052033 72%,#0b1020 100%);background-size:280% 280%;animation:rm-bg 14s ease infinite;border:1px solid #2b2f57;box-shadow:0 18px 60px rgba(76,29,149,.35)}
@keyframes rm-bg{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.rm-orb{position:absolute;border-radius:50%;filter:blur(2px);opacity:.55;pointer-events:none}
.rm-orb-a{width:190px;height:190px;top:-70px;left:-50px;background:radial-gradient(circle,#a855f7,transparent 68%);animation:rm-float 9s ease-in-out infinite}
.rm-orb-b{width:230px;height:230px;bottom:-110px;right:-60px;background:radial-gradient(circle,#06b6d4,transparent 68%);animation:rm-float 11s ease-in-out infinite reverse}
@keyframes rm-float{0%,100%{transform:translate(0,0)}50%{transform:translate(26px,-22px)}}
.rm-inner{position:relative;z-index:2;text-align:center}
.rm-avatar-wrap{display:inline-block;perspective:800px;margin-bottom:8px}
.rm-avatar{width:136px;height:136px;border-radius:50%;border:3px solid #a78bfa;box-shadow:0 0 0 6px rgba(167,139,250,.12),0 0 44px rgba(34,211,238,.55);animation:rm-tilt 7s ease-in-out infinite}
@keyframes rm-tilt{0%,100%{transform:rotateY(-15deg) rotateX(8deg)}50%{transform:rotateY(15deg) rotateX(-8deg)}}
.rm-title{margin:6px 0 2px;font-size:2.1rem;font-weight:900;letter-spacing:-.5px;background:linear-gradient(90deg,#f0abfc,#67e8f9,#a7f3d0,#fde68a);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:rm-hue 8s linear infinite}
@keyframes rm-hue{to{background-position:300% 0}}
.rm-sub{margin:0 0 14px;color:#c4b5fd;font-size:.95rem;letter-spacing:1.5px;text-transform:uppercase}
.rm-typing{display:inline-block;overflow:hidden;white-space:nowrap;width:26ch;border-right:3px solid #22d3ee;color:#a5f3fc;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:1rem;animation:rm-type 4s steps(26,end) infinite,rm-blink .8s step-end infinite}
@keyframes rm-type{0%{width:0}58%,100%{width:26ch}}
@keyframes rm-blink{50%{border-color:transparent}}
.rm-links{margin-top:18px;display:flex;flex-wrap:wrap;gap:9px;justify-content:center}
.rm-link{padding:8px 14px;border-radius:999px;text-decoration:none;font-weight:700;font-size:.82rem;color:#f8fafc;border:1px solid #475569;background:rgba(255,255,255,.06);transition:transform .25s,border-color .25s,box-shadow .25s}
.rm-link:hover{transform:translateY(-3px) scale(1.04);border-color:#22d3ee;box-shadow:0 8px 24px rgba(34,211,238,.35)}
.rm-scene{width:132px;height:132px;perspective:700px;margin:4px auto 22px}
.rm-cube{position:relative;width:100%;height:100%;transform-style:preserve-3d;animation:rm-spin 15s linear infinite}
.rm-face{position:absolute;top:0;left:0;width:132px;height:132px;display:flex;align-items:center;justify-content:center;font-size:1.35rem;font-weight:900;color:#fff;border:1px solid rgba(255,255,255,.35);box-shadow:inset 0 0 26px rgba(255,255,255,.12)}
.rm-f1{background:linear-gradient(135deg,#7c3aed,#4f46e5);transform:translateZ(66px)}
.rm-f2{background:linear-gradient(135deg,#0891b2,#0ea5e9);transform:rotateY(180deg) translateZ(66px)}
.rm-f3{background:linear-gradient(135deg,#db2777,#7c3aed);transform:rotateY(90deg) translateZ(66px)}
.rm-f4{background:linear-gradient(135deg,#059669,#0891b2);transform:rotateY(-90deg) translateZ(66px)}
.rm-f5{background:linear-gradient(135deg,#d97706,#db2777);transform:rotateX(90deg) translateZ(66px)}
.rm-f6{background:linear-gradient(135deg,#4f46e5,#06b6d4);transform:rotateX(-90deg) translateZ(66px)}
@keyframes rm-spin{from{transform:rotateX(-18deg) rotateY(0)}to{transform:rotateX(-18deg) rotateY(360deg)}}
.rm-h2{margin:30px 0 14px;font-size:1.25rem;font-weight:800;color:#e9d5ff}
.rm-marquee{overflow:hidden;white-space:nowrap;padding:6px 0;mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.rm-track{display:inline-block;animation:rm-scroll 26s linear infinite}
.rm-chip{display:inline-block;margin:0 5px;padding:7px 13px;border-radius:10px;font-size:.78rem;font-weight:700;color:#e0f2fe;background:linear-gradient(135deg,rgba(124,58,237,.45),rgba(6,182,212,.35));border:1px solid rgba(125,211,252,.4)}
@keyframes rm-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.rm-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(225px,1fr));gap:14px;perspective:1100px}
.rm-card{position:relative;overflow:hidden;display:block;padding:17px 16px;border-radius:16px;text-decoration:none;color:#e2e8f0;background:linear-gradient(160deg,#111827,#1c1533);border:1px solid #334155;transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease}
.rm-card:hover{transform:rotateY(9deg) rotateX(6deg) translateY(-7px);border-color:#a78bfa;box-shadow:0 20px 42px rgba(124,58,237,.5)}
.rm-card b{display:block;font-size:.98rem;color:#f5f3ff;margin:6px 0 4px}
.rm-card small{display:block;color:#67e8f9;font-size:.72rem;margin-bottom:7px}
.rm-card span{display:block;font-size:.8rem;line-height:1.45;color:#cbd5e1}
.rm-ico{font-size:1.5rem;filter:drop-shadow(0 0 8px rgba(167,139,250,.8))}
.rm-badges{display:flex;flex-wrap:wrap;gap:7px;justify-content:center;padding:10px 0}
.rm-note{padding:14px 16px;border-radius:14px;border:1px dashed #475569;background:rgba(255,255,255,.03);color:#cbd5e1;font-size:.84rem;line-height:1.6}
.rm-note a{color:#67e8f9;font-weight:700}
</style>

<div class="rm-wrap">
  <div class="rm-orb rm-orb-a"></div>
  <div class="rm-orb rm-orb-b"></div>
  <div class="rm-inner">
    <div class="rm-avatar-wrap"><img class="rm-avatar" src="https://avatars.githubusercontent.com/u/273568622?v=4" alt="Rumesh - Full-Stack and AI Engineer" /></div>
    <h1 class="rm-title">Hi, I'm Rumesh 👋</h1>
    <p class="rm-sub">Full-Stack &amp; AI Engineer · Timisoara, Romania</p>
    <div class="rm-typing">React · Next.js · Python · PyTorch · LLMs</div>
    <div class="rm-links">
      <a class="rm-link" href="mailto:rumeshprasanga66@gmail.com">📫 Hire me</a>
      <a class="rm-link" href="https://rumeshprasanga66-boop.github.io/portfolio/">🌐 Portfolio</a>
      <a class="rm-link" href="https://github.com/rumeshprasanga66-boop?tab=repositories">💻 Repositories</a>
    </div>
  </div>
</div>

<h2 class="rm-h2">🛠️ Tech Stack</h2>
<div class="rm-scene">
  <div class="rm-cube">
    <div class="rm-face rm-f1">AI</div>
    <div class="rm-face rm-f2">LLM</div>
    <div class="rm-face rm-f3">WEB</div>
    <div class="rm-face rm-f4">PY</div>
    <div class="rm-face rm-f5">TS</div>
    <div class="rm-face rm-f6">DEV</div>
  </div>
</div>
<div class="rm-marquee"><div class="rm-track">
  <span class="rm-chip">React</span><span class="rm-chip">Next.js</span><span class="rm-chip">TypeScript</span><span class="rm-chip">Tailwind CSS</span><span class="rm-chip">Node.js</span><span class="rm-chip">Python</span><span class="rm-chip">FastAPI</span><span class="rm-chip">Django / DRF</span><span class="rm-chip">PostgreSQL</span><span class="rm-chip">MongoDB</span><span class="rm-chip">Prisma</span><span class="rm-chip">PyTorch</span><span class="rm-chip">TensorFlow</span><span class="rm-chip">LangChain</span><span class="rm-chip">RAG</span><span class="rm-chip">Prompt Engineering</span><span class="rm-chip">Computer Vision</span><span class="rm-chip">MCP</span><span class="rm-chip">Docker</span><span class="rm-chip">GitHub Actions</span>
  <span class="rm-chip">React</span><span class="rm-chip">Next.js</span><span class="rm-chip">TypeScript</span><span class="rm-chip">Tailwind CSS</span><span class="rm-chip">Node.js</span><span class="rm-chip">Python</span><span class="rm-chip">FastAPI</span><span class="rm-chip">Django / DRF</span><span class="rm-chip">PostgreSQL</span><span class="rm-chip">MongoDB</span><span class="rm-chip">Prisma</span><span class="rm-chip">PyTorch</span><span class="rm-chip">TensorFlow</span><span class="rm-chip">LangChain</span><span class="rm-chip">RAG</span><span class="rm-chip">Prompt Engineering</span><span class="rm-chip">Computer Vision</span><span class="rm-chip">MCP</span><span class="rm-chip">Docker</span><span class="rm-chip">GitHub Actions</span>
</div></div>

<h2 class="rm-h2">🚀 Projects I've Built</h2>
<div class="rm-grid">
  <a class="rm-card" href="https://github.com/rumeshprasanga66-boop/ADHDD-DASHBOARD"><span class="rm-ico">🧠</span><b>Habify ADHD Dashboard</b><small>Next.js · TypeScript · Prisma</small><span>Budgets, ADHD appointments, routines, food and workouts in one calm dashboard.</span></a>
  <a class="rm-card" href="https://github.com/rumeshprasanga66-boop/clean-code-ai"><span class="rm-ico">✨</span><b>Clean Code AI</b><small>Next.js · Tailwind · shadcn/ui</small><span>AI code-quality SaaS landing page with a complete auth flow.</span></a>
  <a class="rm-card" href="https://github.com/rumeshprasanga66-boop/ai-prompt-portfolio"><span class="rm-ico">🎯</span><b>AI Prompt Portfolio</b><small>HTML · CSS · JavaScript</small><span>Static portfolio site about prompt engineering and practical AI prompts.</span></a>
  <a class="rm-card" href="https://github.com/rumeshprasanga66-boop/coding-agent-template"><span class="rm-ico">🤖</span><b>Coding Agent Template</b><small>AI agents · Developer tools</small><span>Setup for Claude Code, Codex, Copilot, Cursor, Gemini CLI and opencode.</span></a>
  <a class="rm-card" href="https://github.com/rumeshprasanga66-boop/ai-demos"><span class="rm-ico">🧪</span><b>AI Demos</b><small>Python · AI experiments</small><span>Small experiments exploring models, prompts and LLM workflows.</span></a>
  <a class="rm-card" href="https://github.com/rumeshprasanga66-boop/awesome-rumesh-ai"><span class="rm-ico">📚</span><b>Awesome Rumesh AI</b><small>Curated list · AI · LLM</small><span>A curated index of AI agents, LLM tools and full-stack starters.</span></a>
</div>

<h2 class="rm-h2">🔭 Upstream Projects I Follow &amp; Fork</h2>
<div class="rm-note">
  These are upstream open-source projects I use as references and starting points — I don't claim authorship of the upstream code.<br><br>
  <a href="https://github.com/rumeshprasanga66-boop/openshorts">OpenShorts</a> ·
  <a href="https://github.com/rumeshprasanga66-boop/MCP-Image-Generator-Uncensored">MCP Image Generator</a> ·
  <a href="https://github.com/rumeshprasanga66-boop/voice-task-manager">Voice Task Manager</a> ·
  <a href="https://github.com/rumeshprasanga66-boop/Instagram-Clone">Instagram Clone</a> ·
  <a href="https://github.com/rumeshprasanga66-boop/openai-agents-python">OpenAI Agents Python</a> ·
  <a href="https://github.com/rumeshprasanga66-boop/mem0">Mem0</a> ·
  <a href="https://github.com/rumeshprasanga66-boop/create-t3-app">Create T3 App</a>
</div>

<h2 class="rm-h2">📈 GitHub</h2>
<div class="rm-badges">
  <img src="https://img.shields.io/github/followers/rumeshprasanga66-boop?style=for-the-badge&amp;logo=github&amp;color=7c3aed" alt="GitHub followers" />
  <img src="https://img.shields.io/github/repos/rumeshprasanga66-boop?style=for-the-badge&amp;logo=github&amp;color=06b6d4" alt="GitHub repositories" />
  <img src="https://img.shields.io/badge/Open%20to%20work-Yes-22c55e?style=for-the-badge" alt="Open to work" />
  <img src="https://img.shields.io/badge/Location-Timisoara%2C%20Romania-f59e0b?style=for-the-badge" alt="Location" />
</div>

<h2 class="rm-h2">🤝 Open-Source Contribution</h2>
<div class="rm-note">
  <a href="https://github.com/t3-oss/create-t3-app/pull/2260">t3-oss/create-t3-app#2260</a> — fixed the broken Stripe tutorial link in the FAQ (issue #1993) across EN/PT/RU/UK docs. Currently awaiting code-owner review.
</div>

<h2 class="rm-h2">📫 Get in Touch</h2>
<div class="rm-note">
  Have a project, idea, or question? I'd love to hear about it.<br>
  Email: <a href="mailto:rumeshprasanga66@gmail.com">rumeshprasanga66@gmail.com</a> ·
  GitHub: <a href="https://github.com/rumeshprasanga66-boop">@rumeshprasanga66-boop</a>
</div>
