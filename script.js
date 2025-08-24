// Smooth scrolling animation observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Calculator Functions
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    // Replace × with * for calculation
    const expression = display.value.replace(/×/g, "*");
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

const display = document.getElementById("display");
const operators = ["+", "-", "*", "/", "."];

function appendToDisplay(char) {
  const last = display.value.slice(-1);
  if (display.value === "" && operators.includes(char) && char !== "-") return;
  if (operators.includes(char) && operators.includes(last)) {
    display.value = display.value.slice(0, -1) + char;
    return;
  }
  display.value += char;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  if (!display.value) return;
  try {
    const result = Function('"use strict";return (' + display.value + ")")();
    display.value = String(result);
  } catch {
    alert("Invalid expression");
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key)) {
    appendToDisplay(key);
  } else if (operators.includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter" || key === "=") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape" || key.toLowerCase() === "c") {
    clearDisplay();
  }
});

// optional: allow Enter key to calculate
display.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  }
});

// Theme Switcher
function changeTheme(color) {
  const themeDemo = document.getElementById("themeDemo");
  const colors = {
    blue: { bg: "#2563eb", name: "Blue" },
    green: { bg: "#10b981", name: "Green" },
    orange: { bg: "#f59e0b", name: "Orange" },
    red: { bg: "#ef4444", name: "Red" },
  };

  const selectedColor = colors[color];
  themeDemo.style.background = selectedColor.bg;
  themeDemo.textContent = `Current Theme: ${selectedColor.name}`;
}

// Dynamic List
function addItem() {
  const input = document.getElementById("itemInput");
  const list = document.getElementById("dynamicList");

  if (input.value.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerHTML = `
                    ${input.value}
                    <button class="btn btn-sm btn-outline-danger" onclick="removeItem(this)">Remove</button>
                `;
    list.appendChild(listItem);
    input.value = "";
  }
}

function removeItem(button) {
  button.parentElement.remove();
}

// Current Time
function updateTime() {
  const timeElement = document.getElementById("currentTime");
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString();
}

// Range Input Value Display
document.getElementById("rangeInput")?.addEventListener("input", function () {
  document.getElementById("rangeValue").textContent = this.value;
});

// Allow Enter key to add items
document
  .getElementById("itemInput")
  ?.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addItem();
    }
  });

// Initialize time display
updateTime();
setInterval(updateTime, 1000);

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
  }
});

// Enhanced form validation example
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Form validation logic would go here
    });
  });
});

// Local Storage demo (save theme preference)
function saveThemePreference(theme) {
  localStorage.setItem("portfolioTheme", theme);
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem("portfolioTheme");
  if (savedTheme) {
    changeTheme(savedTheme);
  }
}

// Load saved theme on page load
loadThemePreference();

// Demonstrate modern JavaScript features
const portfolioData = {
  technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React"],
  skills: {
    frontend: 90,
    backend: 75,
    database: 80,
  },
};

// Example of async function and Promise
const simulateApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded successfully!");
    }, 1000);
  });
};

// Use async/await
const loadData = async () => {
  try {
    const result = await simulateApiCall();
    console.log(result);
  } catch (error) {
    console.error("Error loading data:", error);
  }
};

console.log("Portfolio JavaScript loaded successfully!");
console.log("Technologies used:", portfolioData.technologies.join(", "));
