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

// Hamburger navigation bar

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
  if(menuList.style.maxHeight == "0px")
  {
      menuList.style.maxHeight = "100vh";
  }
  else{
      menuList.style.maxHeight = "0px";
  }
}



// Smooth scrolling for navigation links

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const navHeight = document.querySelector("nav").offsetHeight;

    if (target) {
      const targetPosition = target.offsetTop - navHeight; // offset by header
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }

    // Close mobile menu after clicking
    const menuList = document.getElementById("menuList");
    if (menuList) menuList.style.maxHeight = "0px";
  });
});


// Slider for projects section

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


