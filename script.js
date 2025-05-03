// --- Local Storage for User Preferences ---
const themePreferenceKey = 'precisionAgTheme';
const bodyElement = document.body;
const defaultTheme = 'light';

// Function to store theme preference
function storeThemePreference(theme) {
    localStorage.setItem(themePreferenceKey, theme);
}

// Function to retrieve theme preference
function getThemePreference() {
    return localStorage.getItem(themePreferenceKey) || defaultTheme;
}

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark') {
        bodyElement.classList.add('dark-theme');
    } else {
        bodyElement.classList.remove('dark-theme');
    }
}

// Apply theme on page load
applyTheme(getThemePreference());

// Add a button to toggle theme (in index.html)
const themeToggleButton = document.getElementById('themeToggleButton');
if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = getThemePreference();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        storeThemePreference(newTheme);
        applyTheme(newTheme);
    });
}

// --- Animation Triggered by User Action ---
const droneButton = document.getElementById('droneButton');
const serviceGallery = document.querySelector('.service-gallery');

// Function to add a temporary animation class
function animateElement(element, animationClass, duration = 1000) {
    element.classList.add(animationClass);
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, duration);
}

// Trigger animation on drone button hover
droneButton.addEventListener('mouseover', () => {
    animateElement(droneButton, 'button-shake');
});

// Trigger animation on service gallery click
serviceGallery.addEventListener('click', () => {
    animateElement(serviceGallery, 'gallery-pulse', 1500);
});

// --- Event Handling ---
const droneMessage = document.getElementById('droneMessage');

droneButton.addEventListener('click', () => {
    droneMessage.textContent = 'Initiating drone field scan... 🚁';
    droneButton.disabled = true;
    setTimeout(() => {
        droneMessage.textContent = 'Drone scan complete! Data being processed... 📊';
        droneButton.disabled = false;
    }, 4000);
});

const galleryMessage = document.getElementById('galleryMessage');
const serviceItems = document.querySelectorAll('.service-item');

serviceGallery.addEventListener('mouseover', () => {
    galleryMessage.textContent = 'Click on a service for more info!';
});
serviceGallery.addEventListener('mouseout', () => {
    galleryMessage.textContent = '';
});

serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        const serviceName = item.querySelector('p').textContent;
        alert(`You selected: ${serviceName} - More details coming soon!`);
    });
});

document.addEventListener('keypress', (event) => {
    if (event.key === 'i') {
        alert('Secret: Displaying advanced infrastructure map!');
    }
});

// Bonus: Secret Action (Long Press on Drone Button - refined)
let dronePressTimer;
droneButton.addEventListener('mousedown', () => {
    dronePressTimer = setTimeout(() => {
        droneButton.textContent = 'Analyzing Deep Data...';
        