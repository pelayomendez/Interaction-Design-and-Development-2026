/**
 * Navigation Script for Full Stack + IA Course Presentations
 * Handles keyboard navigation and automatic slide linking
 */

// Navigation configuration
const NAVIGATION_CONFIG = {
    sections: [
        { id: 0, name: 'Web Fundamentals', totalSlides: 12 },
        { id: 1, name: 'Astro Basics', totalSlides: 12 },
        { id: 2, name: 'AI Integration', totalSlides: 12 },
        { id: 3, name: 'Full Stack', totalSlides: 12 },
        { id: 4, name: 'Spec Driven Development', totalSlides: 12 },
        { id: 5, name: 'Databases', totalSlides: 12 }
    ]
};

/**
 * Parse the current slide information from the filename
 * Expected format: sectionX-slideYY.html
 */
function getCurrentSlideInfo() {
    const filename = window.location.pathname.split('/').pop();
    const match = filename.match(/section(\d+)-slide(\d+)\.html/);
    
    if (match) {
        return {
            section: parseInt(match[1]),
            slide: parseInt(match[2]),
            isSlide: true
        };
    }
    
    return { isSlide: false };
}

/**
 * Generate the filename for a specific section and slide
 */
function getSlideFilename(section, slide) {
    const slideNum = slide.toString().padStart(2, '0');
    return `section${section}-slide${slideNum}.html`;
}

/**
 * Get the next slide URL
 */
function getNextSlideUrl(currentSection, currentSlide) {
    const sectionConfig = NAVIGATION_CONFIG.sections.find(s => s.id === currentSection);
    
    if (!sectionConfig) return null;
    
    // If not the last slide in section, go to next slide
    if (currentSlide < sectionConfig.totalSlides) {
        return getSlideFilename(currentSection, currentSlide + 1);
    }
    
    // If last slide in section, go to first slide of next section
    const nextSection = NAVIGATION_CONFIG.sections.find(s => s.id === currentSection + 1);
    if (nextSection) {
        return getSlideFilename(nextSection.id, 1);
    }
    
    // If last slide of last section, return to index
    return 'index.html';
}

/**
 * Get the previous slide URL
 */
function getPreviousSlideUrl(currentSection, currentSlide) {
    // If not the first slide in section, go to previous slide
    if (currentSlide > 1) {
        return getSlideFilename(currentSection, currentSlide - 1);
    }
    
    // If first slide in section, go to last slide of previous section
    const prevSection = NAVIGATION_CONFIG.sections.find(s => s.id === currentSection - 1);
    if (prevSection) {
        return getSlideFilename(prevSection.id, prevSection.totalSlides);
    }
    
    // If first slide of first section, return to index
    return 'index.html';
}

/**
 * Update navigation arrows with correct links
 */
function setupNavigation() {
    const slideInfo = getCurrentSlideInfo();
    
    if (!slideInfo.isSlide) return;
    
    const prevArrow = document.getElementById('prevSlide');
    const nextArrow = document.getElementById('nextSlide');
    
    if (prevArrow) {
        const prevUrl = getPreviousSlideUrl(slideInfo.section, slideInfo.slide);
        prevArrow.href = prevUrl;
    }
    
    if (nextArrow) {
        const nextUrl = getNextSlideUrl(slideInfo.section, slideInfo.slide);
        nextArrow.href = nextUrl;
    }
}

/**
 * Update progress indicator
 */
function updateProgress() {
    const slideInfo = getCurrentSlideInfo();
    
    if (!slideInfo.isSlide) return;
    
    const sectionConfig = NAVIGATION_CONFIG.sections.find(s => s.id === slideInfo.section);
    if (!sectionConfig) return;
    
    // Update text indicator
    const progressText = document.getElementById('progressText');
    if (progressText) {
        progressText.textContent = `Slide ${slideInfo.slide}/${sectionConfig.totalSlides}`;
    }
    
    // Update progress bar
    const progressBarFill = document.getElementById('progressBarFill');
    if (progressBarFill) {
        const percentage = (slideInfo.slide / sectionConfig.totalSlides) * 100;
        progressBarFill.style.width = `${percentage}%`;
    }
    
    // Update section indicator
    const sectionIndicator = document.getElementById('sectionIndicator');
    if (sectionIndicator) {
        sectionIndicator.textContent = `Sección ${slideInfo.section}: ${sectionConfig.name}`;
    }
}

/**
 * Handle keyboard navigation
 */
function setupKeyboardNavigation() {
    const slideInfo = getCurrentSlideInfo();
    
    if (!slideInfo.isSlide) return;
    
    document.addEventListener('keydown', (event) => {
        // Ignore if user is typing in an input field
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(event.key) {
            case 'ArrowRight':
            case 'PageDown':
            case ' ': // Space bar
                event.preventDefault();
                const nextUrl = getNextSlideUrl(slideInfo.section, slideInfo.slide);
                if (nextUrl) window.location.href = nextUrl;
                break;
                
            case 'ArrowLeft':
            case 'PageUp':
                event.preventDefault();
                const prevUrl = getPreviousSlideUrl(slideInfo.section, slideInfo.slide);
                if (prevUrl) window.location.href = prevUrl;
                break;
                
            case 'Home':
                event.preventDefault();
                window.location.href = 'index.html';
                break;
                
            case 'Escape':
                event.preventDefault();
                window.location.href = 'index.html';
                break;
        }
    });
}

/**
 * Initialize navigation on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    updateProgress();
    setupKeyboardNavigation();
});

/**
 * Helper function to navigate to a specific section
 * Can be called from index.html
 */
function navigateToSection(sectionId) {
    const filename = getSlideFilename(sectionId, 1);
    window.location.href = filename;
}
