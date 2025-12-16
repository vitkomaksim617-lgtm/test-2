const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu--open')
});

const mainImage = document.getElementById('mainImage');
const galleryThumbs = document.getElementById('galleryThumbs');

galleryThumbs.addEventListener('click', (e) => {
	if (e.target.tagName !== 'IMG') return;
	const clickedThumb = e.target;

	const currentMainSrc = mainImage.src;

	mainImage.src = clickedThumb.src;

	clickedThumb.src = currentMainSrc;

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


