// Dark/Light mode change

document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
	
	this.textContent = document.body.classList.contains("dark-mode") ? "Modo de luz" : "Modo oscuro";
	
});


// Carousel functionality with fade in/out

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-inner .slide");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = "0"; // Hide all slides
    });

    // Show the current slide
    slides[index].style.opacity = "1";
}

// Set the interval to change slides every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 3000);

// Initially show the first slide
showSlide(currentIndex);



// Scroll animations for cards
const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", function() {
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardPosition < windowHeight - 100) {
            card.style.transform = "translateY(0)";
            card.style.opacity = 1;
        }
    });
});



//Footer animations 
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');
    images.forEach((img, index) => {
        img.style.animationDelay = `${index * 2}s`; // image animation delay
    });
});
