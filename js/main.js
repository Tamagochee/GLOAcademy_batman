const swiper = new Swiper('.main-slider', {
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.main-slider__arrow',
    },
  breakpoints: {
      420: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    } 
  });

  let burger = document.querySelector('.burger_button');
  let closemenu = document.querySelector('.header__menu-close');
  let menumobile = document.querySelector('header');

  burger.addEventListener('click', () => {
    menumobile.style.display = 'block';
  })

  closemenu.addEventListener('click', () => {
    menumobile.style.display = 'none';
  })

  const modalwindow = document.querySelector('.modal');
  const buttonModal = document.querySelector('.main__button-play');
  

  buttonModal.addEventListener('click', (e) => {
    modalwindow.classList.add('active');
  })

  modalwindow.addEventListener('click', (e) => {
    const ismodal = e.target.closest('.modal__inner');

    if (!ismodal) {
      modalwindow.classList.remove('active');
    }
  })