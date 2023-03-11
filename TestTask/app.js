const container = document.querySelector('.slider__content');
const pagination = document.querySelector('.slider__pagination');
const left = document.querySelector('.slider__left');
const right = document.querySelector('.slider__right');
const btns = document.querySelectorAll('.slider__pagination-btn');
const inputs = document.querySelectorAll('.slider__pagination > input')
const map = new Map();

btns.forEach((btn, id) => {
  map.set(btn, inputs[id]);
});

let currentPage = 1;

function moveSlider(page) {
  const offset = page - 1;
  container.style.marginLeft = `-${100 * offset}%`;
}

function updateBtns() {
  btns.forEach((btn) => {
    const input = map.get(btn);
    input.checked = false;
    if (Number(btn.dataset.page) === currentPage) {
      input.checked = true;
    }
  })
}

left.addEventListener('click', () => {
  if (currentPage === 1) {
    currentPage = 6;
  } else if (currentPage > 1) {
    currentPage -= 1;
  }
  moveSlider(currentPage);
  updateBtns();
  console.log(currentPage);
});

right.addEventListener('click', () => {
  if (currentPage === 6) {
    currentPage = 1;
  }else if (currentPage < 6) {
    currentPage += 1;
  }
  moveSlider(currentPage);
  updateBtns();
  console.log(currentPage);
});

pagination.addEventListener('click', (event) => {
  if (event.target.dataset.page) {
    currentPage = Number(event.target.dataset.page);
    moveSlider(currentPage);
    console.log(currentPage);
  }
});



const modalBg = document.querySelector('.modal__bg');
const closeBtn = document.querySelector('.modal__close');
const openBtn = document.querySelector('#modalBtn');

function toggleModal() {
  document.body.classList.toggle('show');
}

modalBg.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
openBtn.addEventListener('click', toggleModal);

