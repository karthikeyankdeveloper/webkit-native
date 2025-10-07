const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');

  root.classList.toggle('dark', !isDark);
  root.classList.toggle('light', isDark);

  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Optional: Load theme from storage on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.className = savedTheme;
  }
});
