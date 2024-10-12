// Lightbox functionality for viewing videos
const videoCards = document.querySelectorAll('.video-card');
const lightbox = document.getElementById('lightbox');
const lightboxVideo = lightbox.querySelector('video');

// When clicking a video card, open the lightbox
videoCards.forEach(card => {
  card.addEventListener('click', () => {
    const videoSrc = 'path-to-video.mp4'; // Add appropriate video paths dynamically
    lightboxVideo.src = videoSrc;
    lightbox.classList.add('active');
  });
});

// Close the lightbox when clicking outside the video
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxVideo) {
    lightbox.classList.remove('active');
    lightboxVideo.pause();
    lightboxVideo.src = ''; // Stop the video
  }
});

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-buttons button');
const videoCardsArray = Array.from(videoCards);

filterButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const filter = e.target.getAttribute('data-filter');
    videoCardsArray.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
