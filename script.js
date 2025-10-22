// Update time in milliseconds
function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Dark mode toggle - NO localStorage, just in-memory state
function initDarkMode() {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
    });
  }

  // Optional: Check system preference on load
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    body.classList.add("dark-mode");
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  updateTime();
  initDarkMode();

  // Update time every 100ms for accuracy
  setInterval(updateTime, 100);

  // Keyboard navigation enhancement
  const focusableElements = document.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  focusableElements.forEach((element) => {
    element.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        if (this.tagName === "A" || this.tagName === "BUTTON") {
          e.preventDefault();
          this.click();
        }
      }
    });
  });

  // Stagger animation for sections
  const sections = document.querySelectorAll(".interests-section");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";

    setTimeout(() => {
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 150);
  });
});
