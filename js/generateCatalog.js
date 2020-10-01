// объявление функции которая: вставляет разметку catalog в конец тега body
const generateCatalog = () => {
  const catalogElement = `
    <div class="catalog">
      <button type="button" class="btn btn-close catalog-btn" id="hnf-menu-close-btn" aria-expanded="true"
        title="Закрыть меню" aria-label="Закрыть меню">
        <svg focusable="false" class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12.0002 13.4144L16.9499 18.3642L18.3642 16.9499L13.4144 12.0002L18.3642 7.05044L16.95 5.63623L12.0002 10.586L7.05044 5.63623L5.63623 7.05044L10.586 12.0002L5.63624 16.9499L7.05046 18.3642L12.0002 13.4144Z">
          </path>
        </svg>
      </button>
      <h2>Каталог</h2>
      <ul class="catalog-list">
        <li class="catalog-list__item active"><a href="goods.html?cat=Мебель">Мебель</a></li>
        <li class="catalog-list__item"><a href="goods.html?cat=Кухня">Кухня</a></li>
        <li class="catalog-list__item"><a href="goods.html?cat=Текстиль">Текстиль</a></li>
        <li class="catalog-list__item"><a href="goods.html?cat=Освещение">Освещение</a></li>
        <li class="catalog-list__item"><a href="goods.html?cat=Декор">Декор</a></li>
      </ul>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', catalogElement);
}
export default generateCatalog;