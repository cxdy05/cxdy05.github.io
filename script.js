// <!--Highlights active Navbar on click-->
const navLinks = document.querySelectorAll(".header .navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
    navLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");
    });
});


// <!--Highlights active Navbar on scroll-->
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function activateNavOnScroll() {
        let currentSectionId = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSectionId = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSectionId)) {
        link.classList.add("active");
        }
    });
    }

    window.addEventListener("scroll", activateNavOnScroll);

    activateNavOnScroll();
});


// Background-->
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

const mouse = {
    x: null,
    y: null,
    radius: 100
};

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

class Particle {
    constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = "white";
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) this.dx = -this.dx;
        if (this.y + this.size > canvas.height || this.y - this.size < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
        this.x -= dx * 0.03;
        this.y -= dy * 0.03;
        }

        this.draw();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 80; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const dx = (Math.random() - 0.5) * 1.5;
        const dy = (Math.random() - 0.5) * 1.5;
        particles.push(new Particle(x, y, dx, dy, size));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => p.update());
    requestAnimationFrame(animate);
}

initParticles();
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});


// Typewriter Effect-->
var i = 0;
var txt = " Data Science and Psychology"; 
var speed = 80;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('typewriter').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            document.getElementById('typewriter').innerHTML = ""; 
            i = 0;
            typeWriter();
        }, 1000);
    }
}
typeWriter();
