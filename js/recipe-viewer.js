'use strict';

(() => {
  const dialog = document.createElement('dialog');
  dialog.className = 'recipe-viewer';
  dialog.setAttribute('aria-labelledby', 'recipeViewerTitle');
  dialog.innerHTML = `
    <button class="recipe-viewer-close" type="button" aria-label="Закрыть рецепт">×</button>
    <div class="recipe-viewer-layout">
      <div class="recipe-viewer-visual">
        <img class="recipe-viewer-image" alt="">
        <button class="recipe-viewer-save" type="button" aria-pressed="false">
          <span aria-hidden="true">♡</span><span>Сохранить рецепт</span>
        </button>
      </div>
      <article class="recipe-viewer-content">
        <p class="kicker recipe-viewer-kicker"></p>
        <h2 id="recipeViewerTitle"></h2>
        <p class="recipe-viewer-meta"></p>
        <p class="recipe-viewer-description"></p>
        <section>
          <h3><span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 10h18l-2 10H5L3 10Zm0 0 3-6h12l3 6M8 13v4m4-4v4m4-4v4"/></svg></span> Ингредиенты</h3>
          <ul class="recipe-viewer-ingredients"></ul>
        </section>
        <section>
          <h3><span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 14a7 7 0 0 1 14 0v1H5v-1Zm-2 1h18v5H3v-5Zm6-9a2 2 0 0 1 0-4m6 4a2 2 0 0 1 0-4"/></svg></span> Приготовление</h3>
          <ol class="recipe-viewer-steps"></ol>
        </section>
      </article>
    </div>`;
  document.body.append(dialog);

  const image = dialog.querySelector('.recipe-viewer-image');
  const title = dialog.querySelector('#recipeViewerTitle');
  const meta = dialog.querySelector('.recipe-viewer-meta');
  const description = dialog.querySelector('.recipe-viewer-description');
  const kicker = dialog.querySelector('.recipe-viewer-kicker');
  const ingredients = dialog.querySelector('.recipe-viewer-ingredients');
  const steps = dialog.querySelector('.recipe-viewer-steps');
  const saveButton = dialog.querySelector('.recipe-viewer-save');
  let onFavoriteToggle = null;
  let favorite = false;

  function populateList(list, sourceList) {
    list.replaceChildren();
    sourceList?.querySelectorAll('li').forEach(item => {
      const entry = document.createElement('li');
      entry.textContent = item.textContent;
      list.append(entry);
    });
  }

  function setFavoriteState(value) {
    favorite = value;
    saveButton.setAttribute('aria-pressed', String(favorite));
    saveButton.setAttribute(
      'aria-label',
      `${favorite ? 'Убрать из' : 'Добавить в'} любимые блюда`
    );
    saveButton.firstElementChild.textContent = favorite ? '♥' : '♡';
    saveButton.lastElementChild.textContent = favorite ? 'Убрать из любимых' : 'Сохранить рецепт';
  }

  function open(card, options = {}) {
    const source = options.source || card;
    const imageElement = card.querySelector('.rimg img');
    const ingredientList = source.querySelector('.ring');
    const stepList = source.querySelector('.rsteps');
    const metadataElement = card.querySelector('.dmeta, .rmeta');
    const metadataText = metadataElement
      ? [...metadataElement.querySelectorAll('span')].map(item => item.textContent.trim()).join(' · ')
        || metadataElement.textContent.trim()
      : '';

    image.src = options.image || imageElement?.src || '';
    image.alt = options.title || card.querySelector('h2, h3')?.textContent || 'Блюдо';
    title.textContent = options.title || card.querySelector('h2, h3')?.textContent || '';
    description.textContent = options.description || card.querySelector('.rdesc, .dbody > p')?.textContent || '';
    meta.textContent = options.metadata || metadataText;
    kicker.textContent = options.kicker || '';
    kicker.hidden = !kicker.textContent;
    populateList(ingredients, ingredientList);
    populateList(steps, stepList);
    onFavoriteToggle = options.onFavoriteToggle || null;
    saveButton.hidden = !onFavoriteToggle;
    setFavoriteState(Boolean(options.isFavorite));
    dialog.showModal();
  }

  dialog.querySelector('.recipe-viewer-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  saveButton.addEventListener('click', () => {
    if (onFavoriteToggle) setFavoriteState(Boolean(onFavoriteToggle()));
  });

  window.recipeViewer = { open };
})();
