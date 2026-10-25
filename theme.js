// Google Clean Theme Switcher for Literature & Composition I Honors
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  try {
    localStorage.setItem('lit_theme', isDark ? 'dark' : 'light');
  } catch (e) {}
  updateThemeToggleBtn(isDark);
}

function updateThemeToggleBtn(isDark) {
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.innerHTML = isDark ? '☀️ Google Clean' : '🌙 Dark Mode';
  }
}

function initTheme() {
  try {
    const isDark = localStorage.getItem('lit_theme') === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateThemeToggleBtn(isDark);
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', initTheme);
