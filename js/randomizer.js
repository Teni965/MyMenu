'use strict';

const button = document.querySelector('#randomize');
const buttonLabel = button.querySelector('span');
const result = document.querySelector('#randomResult');
const resultLink = document.querySelector('#randomResultLink');
const resultImage = document.querySelector('#randomResultImage');
const resultCategory = document.querySelector('#randomResultCategory');
const resultTitle = document.querySelector('#randomResultTitle');
const resultDescription = document.querySelector('#randomResultDescription');
const status = document.querySelector('#randomizerStatus');
let allRecipes = [];
let lastRecipeId = '';

function randomIndex(max) {
  const values = new Uint32Array(1);
  crypto.getRandomValues(values);
  return Math.floor((values[0] / 0x100000000) * max);
}

function collectMainRecipes(markup) {
  const documentFromIndex = new DOMParser().parseFromString(markup, 'text/html');
  return [...documentFromIndex.querySelectorAll('#recipeList > .rcard')].flatMap(card => {
    if (!card.id) return [];
    const image = card.querySelector('.rimg img');
    return [{
      id: card.id,
      title: card.querySelector('h2')?.textContent.trim() || '',
      description: card.querySelector('.rdesc')?.textContent.trim() || '',
      category: card.querySelector('.tag')?.textContent.trim() || 'Рецепт Umami',
      image: image?.getAttribute('src') || '',
      href: `index.html#${encodeURIComponent(card.id)}`
    }];
  });
}

function collectGameRecipes(gameRecipes) {
  return gameRecipes.map((recipe, index) => ({
    id: `game-${index + 1}`,
    title: recipe.title,
    description: recipe.description,
    category: recipe.gameName,
    image: `assets/images/game-food/game-${String(index + 1).padStart(2, '0')}.png`,
    href: `games.html#game-${index + 1}`
  }));
}

function showRandomRecipe() {
  if (!allRecipes.length) return;
  let choice = allRecipes[randomIndex(allRecipes.length)];
  if (allRecipes.length > 1 && choice.id === lastRecipeId) {
    choice = allRecipes[(allRecipes.indexOf(choice) + 1 + randomIndex(allRecipes.length - 1)) % allRecipes.length];
  }
  lastRecipeId = choice.id;
  resultLink.href = choice.href;
  resultImage.src = choice.image;
  resultImage.alt = choice.title;
  resultCategory.textContent = choice.category;
  resultTitle.textContent = choice.title;
  resultDescription.textContent = choice.description;
  result.hidden = false;
  buttonLabel.textContent = 'Выбрать другое блюдо';
  status.textContent = `Тебе выпало блюдо «${choice.title}». Нажми на карточку, чтобы открыть рецепт.`;
}

async function loadRecipes() {
  try {
    const response = await fetch('index.html');
    if (!response.ok) throw new Error(`Не удалось загрузить каталог (${response.status}).`);
    const markup = await response.text();
    const mainRecipes = collectMainRecipes(markup);
    const gameRecipes = window.gameFoodRecipes;
    if (!Array.isArray(gameRecipes) || !gameRecipes.length) {
      throw new Error('Не удалось загрузить рецепты из игровых миров.');
    }
    allRecipes = [...mainRecipes, ...collectGameRecipes(gameRecipes)];
    if (!allRecipes.length) throw new Error('В каталоге пока нет рецептов для случайного выбора.');
    button.disabled = false;
    buttonLabel.textContent = 'Выбрать случайное блюдо';
    status.textContent = `В рандомайзере доступно блюд: ${allRecipes.length}.`;
  } catch (error) {
    buttonLabel.textContent = 'Не удалось загрузить блюда';
    status.textContent = 'Не получилось загрузить каталог рецептов. Обнови страницу или вернись на главную.';
    console.error('Ошибка загрузки каталога для рандомайзера.', error);
    return;
  }
}

button.addEventListener('click', showRandomRecipe);

const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');
burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(isOpen));
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

loadRecipes();
