# Full Stack + IA Course Presentations

Interactive slide deck for the Full Stack web development course with AI integration.

## 📁 Structure

The presentation is organized into 4 main sections:

### Section 0: Web Fundamentals (12 slides)
- `section0-slide01.html` through `section0-slide12.html`
- Topics: HTML, CSS, JavaScript basics, html-pokedex project, Figma, GitHub Pages

### Section 1: Astro Basics (12 slides)
- `section1-slide01.html` through `section1-slide12.html`
- Topics: Astro framework, components, layouts, PokeAPI integration

### Section 2: AI Integration (12 slides)
- `section2-slide01.html` through `section2-slide12.html`
- Topics: Google Gemini API, Islands Architecture, interactive components

### Section 3: Full Stack (12 slides)
- `section3-slide01.html` through `section3-slide12.html`
- Topics: Flask backend, REST APIs, full-stack architecture

## 🎯 Navigation

### Starting the Presentation
Open `index.html` to see all sections and choose where to start.

### Keyboard Shortcuts
- **→ / Space / Page Down**: Next slide
- **← / Page Up**: Previous slide
- **Home / Escape**: Return to index
- Arrows work seamlessly across sections

### Mouse Navigation
- Click the **right arrow** (bottom-right) to advance
- Click the **left arrow** (bottom-right) to go back
- Progress indicator shows current position (bottom-left)

### Section Transitions
- Last slide of a section automatically links to the first slide of the next section
- First slide of a section links back to the last slide of the previous section
- Use Home/Escape to return to the index at any time

## 🎨 Design System

### Dimensions
- Slide size: **1280px × 720px** (16:9 aspect ratio)
- Optimized for presentation displays and export

### Typography
- **Headers**: Saira Condensed (900 weight, 5.5rem)
- **Body**: Raleway (400 weight, 1.25rem)
- **Code**: Courier New (monospace)

### Colors
- Background: `#ececec`
- Text: `#000000`
- Accents: Black with opacity variations

### Layout Elements
- Dot pattern background for texture
- Circle overlays for depth
- Progress bar and slide counter
- Section branding pill (top-left)

## 🔧 Files

### Core Files
- `index.html` - Landing page with section overview
- `shared-styles.css` - Complete design system and utilities
- `navigation.js` - Keyboard navigation and slide linking logic

### Slide Files
- 48 total slide files (12 per section)
- Each slide is self-contained HTML with inline navigation

## 🚀 Usage

### Viewing Locally
1. Open `index.html` in a web browser
2. Navigate using keyboard or mouse
3. No server required - pure HTML/CSS/JS

### Presenting
1. Open `index.html` or any section's first slide
2. Use **F11** (or Cmd+Shift+F on Mac) for fullscreen
3. Navigate with arrow keys
4. Use **Escape** to exit fullscreen

### Exporting
- Each slide is designed at 1280×720px for easy screenshot/PDF export
- Use browser's print function (Cmd/Ctrl+P) to save as PDF
- Select "Print backgrounds" for proper rendering

## 📝 Notes

- Slides use **Tailwind CSS** via CDN for utility classes
- **Font Awesome** icons for visual elements
- **Google Fonts**: Raleway and Saira Condensed
- All external resources loaded via CDN
- No build process required

## 🎓 Course Information

**Course**: Full Stack Web Development + AI Integration  
**Instructor**: Prof. Pelayo Méndez  
**Date**: March 2026  
**Topics**: HTML, CSS, JavaScript, Astro, Google Gemini API, Flask, Python

## 🔄 Updates

To modify slide content:
1. Edit the specific HTML file
2. Keep the navigation structure intact
3. Maintain consistent styling using `shared-styles.css` classes
4. Test keyboard navigation after changes

To add more slides:
1. Update `NAVIGATION_CONFIG` in `navigation.js`
2. Create new slide files following the naming convention
3. Test navigation flow end-to-end
