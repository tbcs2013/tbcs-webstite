// Add particle effect to hero section
function createParticles() {
  const hero = document.querySelector(".hero");
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "2px";
    particle.style.height = "2px";
    particle.style.backgroundColor = "rgba(64, 123, 255, 0.5)";
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animation = `float ${
      3 + Math.random() * 4
    }s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 2 + "s";
    hero.appendChild(particle);
  }
}

// Initialize particles
window.addEventListener("load", createParticles);
