// Light mode/Dark mode theme

let darkmode = localStorage.getItem('dark-mode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');   
    localStorage.setItem('dark-mode', null);
}

if(darkmode === 'enabled') enableDarkMode();

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('dark-mode');
    darkmode !== 'enabled' ? enableDarkMode() : disableDarkMode();
})

  const sliderTrack = document.querySelector('.slider-track');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');

  let currentIndex = 0;
  const cards = document.querySelectorAll('.project-card');

  function updateSlider() {
    const slideWidth = cards[0].offsetWidth;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

// Slider

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  window.addEventListener('resize', updateSlider);

// Hamburger navigation bar

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
  if(menuList.style.maxHeight == "0px")
  {
      menuList.style.maxHeight = "400px";
  }
  else{
      menuList.style.maxHeight = "0px";
  }
}


