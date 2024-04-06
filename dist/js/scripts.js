/* navigation */

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});

/* right below the heading */

var textWrapper = document.querySelector('.subhead .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.subhead .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })

  .add({
    targets: '.subhead .line',
    translateX: [0, document.querySelector('.subhead .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100

  }).add({
    targets: '.subhead .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
    
  }).add({
    targets: '.subhead',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

/* bouncing dot h1 */

const bouncingDot = document.querySelector('.bouncing-dot');

const bouncingPatterns = [
  {
    startTime: 0,
    duration: 1000,
    endY: '20%',
    endScale: 1.2
  },
  {
    startTime: 1000,
    duration: 800,
    endY: '40%',
    endScale: 1
  },
  {
    startTime: 2000,
    duration: 800,
    endY: '60%',
    endScale: 1.3
  },
  {
    startTime: 3000,
    duration: 800,
    endY: '80%',
    endScale: 1.2
  },
  {
    startTime: 4000,
    duration: 800,
    endY: '10%',
    endScale: 1.3
  }
];

function generateBouncingAnimation() {
  let currentPatternIndex = 0;
  let startTime = null;

  function updateBouncingDot(time) {
    if (startTime === null) {
      startTime = time;
    }

    const elapsedTime = time - startTime;
    const currentPattern = bouncingPatterns[currentPatternIndex];

    if (elapsedTime < currentPattern.duration) {
      const progress = elapsedTime / currentPattern.duration;
      const translateY = `calc(${currentPattern.endY} * ${progress})`;
      const scale = 1 + (currentPattern.endScale - 1) * progress;

      bouncingDot.style.transform = `translate(-50%, ${translateY}) scale(${scale})`;
    } else {
      currentPatternIndex++;

      if (currentPatternIndex >= bouncingPatterns.length) {
        currentPatternIndex = 0;
      }

      startTime = null;
    }
    requestAnimationFrame(updateBouncingDot);
  }
  requestAnimationFrame(updateBouncingDot);
}
generateBouncingAnimation();

/* for the project cards */

const projectCards = document.querySelectorAll('.project-card');
const projectModals = document.querySelectorAll('.modal');

projectCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    projectModals[index].style.display = 'block';
  });
});

projectModals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

