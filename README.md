# Cyber Security Engineer Portfolio

A premium, interactive, and responsive portfolio website designed for a Cyber Security Student & Engineer. Built using modern design patterns, showcasing an elegant glassmorphism theme, smooth animations, and optimized layout spacing for both desktop and mobile devices.

## 🚀 Live Demo
You can view the live website here: [https://monesh-portfolio14.netlify.app/](https://monesh-portfolio14.netlify.app/)

---

## ✨ Key Features
* **Modern Glassmorphic Design:** Sleek dark theme with vibrant cyber-cyan/purple glowing accents and transparent card elements.
* **Interactive Elements:**
  * **Custom Cursor Glow:** A glowing ambient cursor highlight that follows the mouse (automatically disabled on touch devices).
  * **Dynamic Particles:** Interactive background particles floating across the Hero section.
  * **Typewriter Animation:** Cycles through key professional roles automatically.
  * **3D Card Tilt:** Immersive 3D interactive tilting effect on featured project cards.
* **Fully Responsive & Mobile-Optimized:**
  * Clean layout alignment without horizontal overflows.
  * Adaptive sections that shrink/expand organically according to viewport size, preventing excessive mobile spacing.
  * Mobile navigation overlay toggled via a hamburger menu.
* **Secure Contact Form:** Fully styled form layout with dynamic status messages.

---

## 🛠️ Technology Stack
* **HTML5:** Semantic document structure.
* **CSS3:** Custom properties (CSS variables), grid layouts, flexbox, glassmorphic filters, and keyframe animations.
* **JavaScript (ES6+):** Custom particle system, 3D tilt calculations, typewriter cycles, navigation states, and scroll observer animations.
* **Phosphor Icons:** For high-quality, modern, and light icons.
* **Google Fonts:** Utilizing **Outfit** for clean headings/body and **Fira Code** for code-style/date elements.

---

## 📁 File Structure
```text
├── index.html            # Main markup and layout
├── style.css             # Component styling and responsive media queries
├── app.js                # Typing animation, custom cursor, particles, & card tilt physics
├── assets/               # Project screenshots and images
└── moneshresume1 (1).pdf # Resume download asset
```

---

## 💻 Getting Started Locally

Since this is a lightweight static website, you don't need any complex installation. You can run it locally in two simple ways:

### Option 1: Direct Open
Double-click the `index.html` file in your directory to open it in any web browser.

### Option 2: Local Server (Recommended)
Running through a local web server ensures all paths, assets, and document requests load correctly. 

**Using Python:**
1. Open terminal inside the project directory.
2. Run the following command:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to `http://localhost:8000`.

**Using Node.js (npx):**
1. Run the following command:
   ```bash
   npx http-server
   ```
2. Open the URL provided in the terminal.

---

## 📝 Sections Included
1. **Hero Section:** Greeting, typewriter roles, descriptions, Call-To-Action buttons, and a circular profile picture with floating badges.
2. **About Me:** Academic history timeline (BE CSE Cyber Security at 2023-2027, HSC, SSLC) and student overview.
3. **Technical Skills:** Category-wise proficiency meters (Programming & Scripting, Web Dev, Data & Tools, Cyber Security) with animated progress bars.
4. **Featured Projects:** Interactive preview cards of key works (e.g. Voice-to-SQL Tutor, Rail Tracer) with link hooks and tag categorization.
5. **Certificates:** Showcases achievements like Digital Marketing credentials and internships.
6. **Get In Touch:** Contact details, social platform links, and a contact form.
