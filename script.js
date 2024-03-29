let slideIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  showSlide(slideIndex);
});

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  const slides = document.querySelectorAll(".slider img");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(" + -100 * slideIndex + "%)";
  }
}

/* Existing functions */

function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const slides = document.querySelectorAll(".slider img");
  lightboxImage.src = slides[index].src;
  lightbox.style.display = "block";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

/* Existing functions */

function downloadAllPhotos() {
  const images = document.querySelectorAll(".slider img");
  images.forEach((img) => {
    const link = document.createElement("a");
    link.href = img.src;
    link.download = img.alt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

/* Existing functions */

function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const slides = document.querySelectorAll(".slider img");
  const body = document.querySelector("body");

  // Set background image to the clicked image
  body.style.backgroundImage = `url('${slides[index].src}')`;
  body.style.backgroundSize = "cover"; // Adjust background size to cover the entire page

  // Set lightbox image
  lightboxImage.src = slides[index].src;
  lightbox.style.display = "block";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const body = document.querySelector("body");

  // Reset background image and hide lightbox
  body.style.backgroundImage = "none";
  lightbox.style.display = "none";
}
