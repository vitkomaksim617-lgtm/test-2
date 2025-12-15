const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu--open')
});

const mainImage = document.getElementById('mainImage');
const galleryThumbs = document.getElementById('galleryThumbs');

galleryThumbs.addEventListener('click', (e) => {
	if (e.target.tagName !== 'IMG') return; // тільки картинки
	const clickedThumb = e.target;

	// Зберігаємо поточний src головного зображення
	const currentMainSrc = mainImage.src;

	// Міняємо головне зображення на клікнуте
	mainImage.src = clickedThumb.src;

	// Замінюємо клікнуту мініатюру на попереднє головне
	clickedThumb.src = currentMainSrc;

	// Переміщаємо клікнуту мініатюру в кінець ряду
	galleryThumbs.appendChild(clickedThumb);
});


document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		grabCursor: true,
		loop: true,
		centeredSlides: false,
		freeMode: true,

	});
});


