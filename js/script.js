// Toggle mobile menu
document.getElementById('menu-btn').onclick = () =>
  document.getElementById('mobile-menu').classList.toggle('hidden');
AOS.init();

// Initialize Swiper on galeri page
if (document.querySelector('.mySwiper')) {
  new Swiper('.mySwiper', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  });
}
// Ambil elemen button dan mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Tambahkan event click
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});
