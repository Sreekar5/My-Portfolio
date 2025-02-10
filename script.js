// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Active section tracking
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .section-title').forEach(element => {
    observer.observe(element);
});

// Render functions
function renderProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3 class="card-title">${project.title}</h3>
            <ul>
                ${project.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
        `;
        container.appendChild(card);
    });
}

function renderEducation() {
    const container = document.getElementById('education-container');
    education.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3 class="card-title">${edu.institution}</h3>
            <p class="card-subtitle">${edu.degree}</p>
            ${edu.major ? `<p>${edu.major}</p>` : ''}
            <p><strong>${edu.grade}</strong></p>
        `;
        container.appendChild(card);
    });
}

function renderActivities() {
    const container = document.getElementById('activities-container');
    activities.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3 class="card-title">${activity.title}</h3>
            <p class="card-subtitle">${activity.role}</p>
            <ul>
                ${activity.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        `;
        container.appendChild(card);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle"); // Button to toggle menu
    const navMenu = document.querySelector(".nav-links"); // Your menu

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Show/hide menu
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active"); // Hide menu
        });
    });
});
// Hide loading screen and show main content after page loads
window.addEventListener('load', function () {
    const loadingPage = document.getElementById('loading-page');
    const mainContent = document.getElementById('main-content');

    // Hide loading screen
    loadingPage.style.display = 'none';

    // Show main content
    mainContent.style.display = 'block';
});

// Initialize
renderProjects();
renderEducation();
renderActivities();