//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const parentContainer = document.querySelector(".contentabout");

parentContainer.addEventListener('click', event => {
  const current = event.target;
  const isReadMoreBtn = current.classname.includes('read-more-btn');
  if(!isReadMoreBtn) return ;
  const currentText = event.target.parentNode.querySelector('.read-more-text');
  currentText.classList.toggle('read-more-text--show');
  current.textContent = current.textContent.includes('Read More')?
  "Read Less..." : "Read More...";
})


//scroll menu client

const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu-clients");
const IconVisibility = () => {
  let scrollLeftValue = tabMenu.scrollLeft;
  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

btnRight.addEventListener("click", () => {
  tabMenu.scrollLeft += 50;
  IconVisibility();
});

btnLeft.addEventListener("click", () => {
  tabMenu.scrollLeft -= 50;
});

let activeDrag = false ;

tabMenu.addEventListener("mousemove", (drag) => {
  if(!activeDrag) return;
  tabMenu.scrollLeft -= drag.movementX;
});

document.addEventListener("mouseup", () => {
  activeDrag = false;
})

tabMenu.addEventListener("mousedown", (drag) => {
  activeDrag = true;
});

const tabs= document.querySelectorAll('.tab-btn');
const all_content= document.querySelectorAll('.container_clients');

tabs.forEach((tab, index) =>{
  tab.addEventListener('click', () =>{
    tabs.forEach(tab=>{tab.classList.remove('active')});
    tab.classList.add('active');

    all_content.forEach(container_clients=>{container_clients.classList.remove('active')});
    all_content[index].classList.add('active');
  })
})

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;
let slideInterval;

// Fungsi untuk mengatur posisi slide otomatis
function nextSlide() {
    index = (index + 1) % images.length;
    slides.scrollTo({
        left: slides.clientWidth * index,
        behavior: 'smooth'
    });
}

// Fungsi untuk memulai slide otomatis
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 2000);
}

// Fungsi untuk menghentikan slide saat pengguna menggeser
function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event listener untuk menghentikan otomatis saat pengguna menggeser
slides.addEventListener('mousedown', stopSlideShow);
slides.addEventListener('touchstart', stopSlideShow);
slides.addEventListener('scroll', () => {
    clearTimeout(slideInterval);
    slideInterval = setTimeout(startSlideShow, 2000); // Restart otomatis setelah 4 detik tidak ada interaksi
});

// Mulai slide otomatis
startSlideShow();
