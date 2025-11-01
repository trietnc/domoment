
/* Theme toggle functionality */
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Initialize theme from localStorage or default to light
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
}

// Apply theme to the document
function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  const isOn = theme === 'dark';
  if (themeToggle) {
    themeToggle.setAttribute('aria-checked', isOn.toString());
  }
  localStorage.setItem('theme', theme);
}

// Toggle between light and dark themes
themeToggle && themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
});

// Initialize on page load
initTheme();