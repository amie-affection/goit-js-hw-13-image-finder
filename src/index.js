import './styles.css';
import api from './js/apiService';
import card from './card.hbs';

const form = document.forms.namedItem('search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.buttonMore');

loadMoreBtn.addEventListener('click', () => {
  api.getImage().then(res => createCardItem(res));

  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(form.elements.query.value);
  const value = form.elements.query.value;
  api.query = value;
  api.reset();
  gallery.innerHTML = '';
  api.getImage().then(res => createCardItem(res));
  form.reset();
});
// console.log(form);

const createCardItem = array => {
  const cardList = array.reduce((acc, item) => {
    return (acc += card(item));
  }, '');
  gallery.insertAdjacentHTML('beforeend', cardList);
};
