// document.addEventListener('DOMContentLoaded', function() {
//   const carousel = document.getElementById('fixedSizeCarousel');
//   const cards = Array.from(document.querySelectorAll('.carousel-card'));
//   let currentIndex = 0;
//   let isAnimating = false;
//   const animationDuration = 800; 

//   carousel.addEventListener('wheel', function(e) {
//     e.preventDefault();
    
//     if (isAnimating) return;
//     isAnimating = true;
    
//     if (e.deltaY > 0 && currentIndex < cards.length - 1) {
//       currentIndex++;
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       currentIndex--;
//     } else {
//       isAnimating = false;
//       return;
//     }
    
//     updateCarousel();
//         setTimeout(() => {
//       isAnimating = false;
//     }, animationDuration);
//   });

//   function updateCarousel() {
//     cards.forEach((card, index) => {
//       card.classList.remove('active');
      
//       if (index === currentIndex) {
//         card.classList.add('active');
//         card.style.transform = 'translateY(0) scale(1)';
//         card.style.opacity = '1';
//         card.style.zIndex = '10';
//       } 
//       else if (index > currentIndex) {
//         const distance = (index - currentIndex) * 110;
//         card.style.transform = `translateY(${distance}%) scale(${1 - (0.1 * (index - currentIndex))})`;
//         card.style.opacity = `${1 - (0.2 * (index - currentIndex))}`;
//         card.style.zIndex = `${10 - (index - currentIndex)}`;
//       }
//       else {
//         const distance = (currentIndex - index) * -110;
//         card.style.transform = `translateY(${distance}%) scale(${1 - (0.1 * (currentIndex - index))})`;
//         card.style.opacity = `${1 - (0.2 * (currentIndex - index))}`;
//         card.style.zIndex = `${10 - (currentIndex - index)}`;
//       }
//     });
//   }

//   updateCarousel();
// });

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('fixedSizeCarousel');
  const cards = Array.from(document.querySelectorAll('.carousel-card'));
  let currentIndex = 0;
  let isAnimating = false;
  const animationDuration = 800;

  carousel.addEventListener('wheel', function (e) {
    e.preventDefault();

    if (isAnimating) return;
    isAnimating = true;

    if (e.deltaY > 0 && currentIndex < cards.length - 1) {
      currentIndex++;
    } else if (e.deltaY < 0 && currentIndex > 0) {
      currentIndex--;
    } else {
      isAnimating = false;
      return;
    }

    updateCarousel();
    setTimeout(() => {
      isAnimating = false;
    }, animationDuration);
  });

  function updateCarousel() {
    cards.forEach((card, index) => {
      const offset = (index - currentIndex) * 100;
      card.style.transform = `translateY(${offset}%)`;
      card.style.opacity = index === currentIndex ? '1' : '0';
      card.style.zIndex = index === currentIndex ? '2' : '1';
    });
  }

  updateCarousel();
});
