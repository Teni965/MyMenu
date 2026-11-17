'use strict';

const recipes = [
  {
    title: 'Белоснежная роса',
    game: 'genshin',
    gameName: 'Genshin Impact',
    description: 'Нежное творожное суфле с карамелью, арахисом и мятой. Рецепт можно купить у Аруэ в Кур-де-Фонтейне за 2500 моры.',
    ingredients: [
      'Творог — 150 г',
      'Молоко — 100 г',
      'Сахар — 2–3 ч. л.',
      'Желатин — 7 г',
      'Ванилин — по желанию',
      'Для карамели: сахар — 100 г, молоко — 40 г, сливочное масло — 10 г, щепотка соли',
      'Для украшения: арахис и несколько листиков мяты'
    ],
    steps: [
      'Смешай желатин с молоком. Растапливай в микроволновке импульсами по 15 секунд, каждый раз помешивая.',
      'Соедини творог, сахар, ванилин и желатин. При желании пробей блендером до однородности. Перелей в форму и убери в холодильник на несколько часов.',
      'Растопи сахар в сотейнике на среднем огне. Убавь огонь, добавь молоко комнатной температуры и сливочное масло, перемешай и дай карамели немного остыть.',
      'Выложи суфле на тарелку, полей карамелью и укрась мятой и арахисом.'
    ]
  },
  {
    title: 'Крумкаке с ягодами лакка',
    game: 'genshin',
    gameName: 'Genshin Impact',
    description: 'Хрустящий десерт Нод-Края с ягодами и взбитыми сливками.',
    ingredients: [
      'Пшеничная мука — 120 г',
      'Яйца — 3 шт.',
      'Ваниль — щепотка',
      'Сахар — 80–100 г',
      'Сливочное масло — 100 г',
      'Для подачи: ягоды и взбитые сливки'
    ],
    steps: [
      'Взбей яйца с сахаром. Растопи сливочное масло, влей к яйцам и перемешай.',
      'Просей муку, добавь ваниль и замеси тесто без комочков.',
      'Испеки крумкаке в вафельнице. Пока вафля горячая, сверни её в трубочку или рожок.',
      'Подавай с ягодами и взбитыми сливками.'
    ]
  },
  {
    title: 'Фруктовое трио',
    game: 'genshin',
    gameName: 'Genshin Impact',
    description: 'Тарталетки с заварным кремом и меренгой. Рецепт дают за 4-й уровень репутации в Фонтейне.',
    ingredients: [
      'Для теста (4–5 штук): мука — 120 г, яйцо — 1 шт., сливочное масло — 80 г, разрыхлитель — 1/2 ч. л., сахар — 60 г',
      'Для крема: желтки — 2 шт., сахар — 30 г, кукурузный крахмал — 20 г, молоко — 200 г, лимонный сок и цедра, ваниль, сливочное масло — 20 г',
      'Для меренги: белки — 2 шт., сахар — 100 г',
      'Для украшения: лимон, мята и шоколадная роза по желанию'
    ],
    steps: [
      'Смешай ингредиенты для теста, замеси эластичное тесто. Распредели по формочкам для тарталеток.',
      'Выпекай при 180 °C 10–15 минут.',
      'Для крема смешай ингредиенты в сотейнике и вари на среднем огне 5–7 минут, постоянно помешивая, пока он не загустеет.',
      'Взбей белки с сахаром 5–7 минут до устойчивых пиков и переложи меренгу в кондитерский мешок.',
      'Наполни тарталетки кремом, укрась меренгой и поставь в духовку при 200 °C на 3–4 минуты.',
      'Укрась лимоном, мятой и шоколадной розой.'
    ]
  },
  {
    title: 'Кофейный баваруа',
    game: 'genshin',
    gameName: 'Genshin Impact',
    description: 'Сливочный кофейный десерт. Рецепт продаёт Вулси в крепости Меропид за 150 премиальных купонов.',
    ingredients: [
      'Яичные желтки — 2 шт.',
      'Сливки 10% — 300 г',
      'Сахар — 30–40 г',
      'Ванилин — щепотка',
      'Кофе — 1 ч. л. и вода — 50 г',
      'Желатин — 10 г',
      'Для украшения: горький шоколад, шоколадный или карамельный сироп, кофейные зёрна'
    ],
    steps: [
      'Залей желатин 150 г сливок и оставь на 10–15 минут.',
      'В сотейнике смешай оставшиеся сливки, желтки, сахар и ванилин. Готовь на среднем огне около 5 минут, постоянно помешивая, до загустения.',
      'Сними сотейник с огня, добавь набухший желатин и перемешай до однородности.',
      'Завари кофе. Раздели сливочную массу пополам и вмешай кофе в одну часть.',
      'Разлей обе части по креманкам и убери в холодильник на несколько часов. Укрась шоколадом, сиропом и кофейными зёрнами.'
    ]
  },
  {
    title: 'Миндальный тофу',
    game: 'genshin',
    gameName: 'Genshin Impact',
    description: 'Нежный десерт с миндальным молоком и сиропом. Рецепт можно найти на кухне постоялого двора «Ваншу».',
    ingredients: [
      'Миндальное молоко — 300 г',
      'Желатин — 10 г',
      'Сахар — 2 ч. л.',
      'Сироп топинамбура или другой сироп — по вкусу',
      'Для украшения: миндаль — 5 г и несколько листиков мяты',
      'Для домашнего миндального молока: миндаль — 50 г и вода — 300 г'
    ],
    steps: [
      'Можно взять готовое миндальное молоко. Для домашнего варианта измельчи миндаль с водой в блендере и процеди смесь.',
      'Смешай миндальное молоко, сахар и желатин в сотейнике. Готовь на среднем огне 2–3 минуты, помешивая, пока желатин полностью не растворится.',
      'Перелей смесь в прямоугольную форму, застеленную пищевой плёнкой. Охлаждай несколько часов до застывания.',
      'Нарежь десерт кубиками, полей сиропом и укрась миндалём и мятой.'
    ]
  },
  {
    title: 'Тахчин',
    game: 'genshin',
    gameName: 'Genshin Impact',
    description: 'Рис с курицей и специями. Рецепт дают за 4-й уровень репутации в Сумеру.',
    ingredients: [
      'Куриное филе — 250 г',
      'Рис — 100 г',
      'Лук и чеснок — по 1 шт.',
      'Соль, перец, паприка, куркума и другие специи — по вкусу',
      'Зелень для подачи'
    ],
    steps: [
      'Нарежь куриное филе и овощи. Обжарь на сковороде до золотистого цвета, добавь соль и специи.',
      'Отвари рис до готовности.',
      'Добавь рис в сковороду, перемешай с курицей и овощами и готовь ещё пару минут.',
      'Выложи тахчин на тарелку и укрась зеленью.'
    ]
  },
  {
    title: 'Мясное торнадо',
    game: 'genshin',
    gameName: 'Genshin Impact',
    description: 'Мясной рулет с беконом. Рецепт продаёт Сара в Мондштадте за 5000 моры.',
    ingredients: [
      'Свинина или говядина — 800 г',
      'Соль, перец, сухой чеснок и другие специи — по вкусу',
      'Бекон — 8–10 полосок',
      'Для подачи: картофельное пюре, зелень, соус барбекю или терияки'
    ],
    steps: [
      'Сделай вдоль куска мяса глубокий надрез, не прорезая его насквозь. Затем сделай боковые надрезы и разверни мясо.',
      'Посоли и приправь мясо. Разложи часть бекона, сверни мясо рулетом и оберни оставшимся беконом.',
      'Запекай рулет при 180 °C 40–50 минут, до полной готовности мяса.',
      'Подавай с картофельным пюре, соусом и зеленью.'
    ]
  },
  {
    title: 'Грибной крем-суп',
    game: 'genshin',
    gameName: 'Genshin Impact',
    description: 'Сливочный суп с шампиньонами и картофелем. Рецепт можно купить у Сангинетти в отеле «Дебор» за 2500 моры.',
    ingredients: [
      'Шампиньоны — 400 г',
      'Картофель — 300 г',
      'Куриный бульон или вода — 200 г',
      'Сливки — 120 г',
      'Морковь — 100 г',
      'Лук — 80 г',
      'Чеснок — 1 зубчик',
      'Оливковое масло для жарки, соль, специи и зелень'
    ],
    steps: [
      'Нарежь шампиньоны, лук, морковь и чеснок. Обжарь на оливковом масле до золотистого цвета.',
      'Отвари картофель до готовности.',
      'Переложи овощи и картофель в блендер или сотейник, добавь бульон и сливки. Измельчи до однородной консистенции.',
      'Подавай суп с зеленью и сливками.'
    ]
  },
  {
    title: 'Шашлычок из жареных деликатесов',
    game: 'hsr',
    gameName: 'Honkai: Star Rail',
    description: 'Белобожские шашлычки из мяса и грибов, обжаренные до румяной корочки.',
    ingredients: [
      'Свинина — 200 г',
      'Грибы (шампиньоны или лисички) — 50 г',
      'Зелёный лук',
      'Растительное масло — 2–3 ч. л.',
      'Соль, перец и другие специи — по вкусу'
    ],
    steps: [
      'Нарежь свинину кубиками. Смажь растительным маслом, добавь соль и специи.',
      'Нанижи мясо и грибы на шпажки.',
      'Запекай в разогретой до 180 °C духовке 25–30 минут.',
      'Подавай, посыпав нарезанным зелёным луком.'
    ]
  },
  {
    title: 'Жаренные на фруктовых дровах крылышки шантака-моа',
    game: 'hsr',
    gameName: 'Honkai: Star Rail',
    description: 'Пряные запечённые рёбрышки в медово-апельсиновом маринаде — версия игрового блюда для домашней кухни.',
    ingredients: [
      'Свиные или говяжьи рёбрышки — 300 г',
      'Апельсин — 1 шт.',
      'Растительное масло — 40 г',
      'Мёд — 30 г',
      'Соль, перец, чеснок, паприка и другие специи — по вкусу',
      'Несколько листиков мяты'
    ],
    steps: [
      'Смешай растительное масло, мёд, сок половины апельсина, соль и специи.',
      'Полей рёбрышки маринадом, накрой плёнкой и оставь примерно на час.',
      'Переложи рёбрышки в форму и запекай при 180 °C 30–35 минут, до полной готовности мяса.',
      'Подавай с дольками апельсина и листиками мяты.'
    ]
  },
  {
    title: 'Фруктовый дуэт',
    game: 'genshin',
    gameName: 'Genshin Impact',
    description: 'Двухслойный фруктовый напиток с манго, бананом и кокосом. Рецепт — награда почтового события HEYTEA.',
    ingredients: [
      'Вишнёвый сок — 100 мл',
      'Ананасовый сок — 150 мл',
      'Манго — 100 г',
      'Банан — 200 г',
      'Натуральный йогурт — 300 г',
      'Кокосовая стружка — 40 г'
    ],
    steps: [
      'Взбей в блендере 100 г банана, 150 г йогурта, 20 г кокосовой стружки и вишнёвый сок. Перелей первый слой в бокал.',
      'Взбей оставшиеся банан, йогурт и кокосовую стружку с манго и ананасовым соком.',
      'Аккуратно налей второй слой поверх первого.',
      'Укрась кокосовой стружкой и цветами по желанию.'
    ]
  },
  {
    title: 'Лёгкий морской бриз',
    game: 'genshin',
    gameName: 'Genshin Impact',
    description: 'Освежающий мятно-лимонный напиток с ярким голубым цветом и льдом.',
    ingredients: [
      'Мята — несколько листиков',
      'Лимон — 1 шт.',
      'Сироп «Блю Кюрасао» — 50 мл',
      'Спрайт — 500 мл',
      'Лёд — несколько кубиков'
    ],
    steps: [
      'Положи в кувшин мяту и несколько долек лимона. Добавь сироп и спрайт.',
      'Перемешай и разлей по бокалам.',
      'Добавь лёд и укрась долькой лимона и мятой.'
    ]
  },
  {
    title: 'Сок из волчьих крюков',
    game: 'genshin',
    gameName: 'Genshin Impact',
    description: 'Ягодный газированный напиток с лимоном и мятой. В игре его можно купить у Чарльза в Мондштадте за 1500 моры.',
    ingredients: [
      'Свежие или замороженные ягоды — 100 г',
      'Лимон — 1 шт.',
      'Мята — несколько листиков',
      'Джем или ягодное варенье — 2 ч. л.',
      'Сироп «Блю Кюрасао» — 50 мл для цвета, по желанию',
      'Газированная вода — 600 мл',
      'Лёд — несколько кубиков',
      'Ягоды или виноград для украшения'
    ],
    steps: [
      'Положи в кувшин ягоды, мяту и джем. Добавь сироп по желанию и сок лимона.',
      'Влей газированную воду, перемешай и оставь настаиваться 10–15 минут.',
      'Разлей напиток по бокалам со льдом.',
      'Укрась листиком мяты и ягодой или виноградом.'
    ]
  }
];

window.gameFoodRecipes = recipes;

if (document.querySelector('#gameRecipeList')) {
const list = document.querySelector('#gameRecipeList');
const favoriteList = document.querySelector('#gameFavoriteList');
const search = document.querySelector('#search');
const empty = document.querySelector('#gameEmpty');
const favoritesEmpty = document.querySelector('#gameFavoritesEmpty');
const favoritesStatus = document.querySelector('#gameFavoriteStatus');
const filters = document.querySelector('#gameFilters');
const FAVORITES_KEY = 'momo-game-favs';
let savedFavorites = [];
try {
  const parsedFavorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
  if (Array.isArray(parsedFavorites)) savedFavorites = parsedFavorites;
} catch (error) {
  console.error('Не удалось загрузить любимые игровые блюда.', error);
}
const favoriteIds = new Set(savedFavorites.filter(id => /^game-\d+$/.test(id)));
let activeGame = 'all';

function makeList(className, items) {
  const listElement = document.createElement('ul');
  listElement.className = className;
  for (const text of items) {
    const item = document.createElement('li');
    item.textContent = text;
    listElement.append(item);
  }
  return listElement;
}

function makeRecipeDetails(recipe) {
  const details = document.createElement('details');
  details.className = 'rdet';
  const summary = document.createElement('summary');
  summary.textContent = 'Открыть рецепт';
  const ingredientsTitle = document.createElement('h3');
  ingredientsTitle.className = 'rdet-section-title';
  ingredientsTitle.textContent = 'Ингредиенты';
  const stepsTitle = document.createElement('h3');
  stepsTitle.className = 'rdet-section-title';
  stepsTitle.textContent = 'Приготовление';
  details.append(
    summary,
    ingredientsTitle,
    makeList('ring', recipe.ingredients),
    stepsTitle,
    makeList('rsteps', recipe.steps)
  );
  return details;
}

function makeCard(recipe, index) {
  const card = document.createElement('article');
  card.className = 'rcard';
  card.dataset.game = recipe.game;
  card.dataset.recipeId = `game-${index + 1}`;

  const imageWrap = document.createElement('div');
  imageWrap.className = 'rimg';
  const image = document.createElement('img');
  image.src = `assets/images/game-food/game-${String(index + 1).padStart(2, '0')}.png`;
  image.alt = recipe.title;
  image.loading = 'lazy';
  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = recipe.gameName;
  const favoriteButton = document.createElement('button');
  favoriteButton.className = 'favorite-toggle';
  favoriteButton.type = 'button';
  favoriteButton.setAttribute('aria-pressed', 'false');
  const favoriteIcon = document.createElement('span');
  favoriteIcon.setAttribute('aria-hidden', 'true');
  const favoriteLabel = document.createElement('span');
  favoriteButton.append(favoriteIcon, favoriteLabel);
  imageWrap.append(image, tag, favoriteButton);

  const body = document.createElement('div');
  body.className = 'rbody';
  const title = document.createElement('h2');
  title.textContent = recipe.title;
  const description = document.createElement('p');
  description.className = 'rdesc';
  description.textContent = recipe.description;
  const meta = document.createElement('p');
  meta.className = 'rmeta';
  meta.textContent = `🎮 ${recipe.gameName}`;
  body.append(
    title,
    description,
    meta,
    makeRecipeDetails(recipe)
  );
  card.append(imageWrap, body);
  updateFavoriteButton(card);
  return card;
}

function updateFavoriteButton(card) {
  const button = card.querySelector('.favorite-toggle');
  const favorite = favoriteIds.has(card.dataset.recipeId);
  const name = card.querySelector('h2').textContent;
  button.setAttribute('aria-pressed', String(favorite));
  button.setAttribute(
    'aria-label',
    `${favorite ? 'Убрать из любимых блюд: ' : 'Добавить в любимые блюда: '}${name}`
  );
  button.firstElementChild.textContent = favorite ? '♥' : '♡';
  button.lastElementChild.textContent = favorite ? 'Убрать из любимых' : 'В любимые';
}

function renderFavorites() {
  favoriteList.replaceChildren();
  window.momoMascot?.attach(favoritesEmpty, 'hint', 'Добавь любимое игровое блюдо сердечком.');
  recipes.forEach((recipe, index) => {
    if (favoriteIds.has(`game-${index + 1}`)) {
      favoriteList.append(makeCard(recipe, index));
    }
  });
  favoritesEmpty.hidden = favoriteList.childElementCount > 0;
  list.querySelectorAll('.rcard').forEach(updateFavoriteButton);
}

function toggleFavorite(button) {
  const card = button.closest('.rcard');
  const id = card.dataset.recipeId;
  const wasFavorite = favoriteIds.has(id);
  if (wasFavorite) favoriteIds.delete(id);
  else favoriteIds.add(id);
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favoriteIds]));
  } catch (error) {
    if (wasFavorite) favoriteIds.add(id);
    else favoriteIds.delete(id);
    favoritesStatus.textContent = 'Не удалось сохранить избранное. Проверь настройки хранилища браузера.';
    console.error('Не удалось сохранить любимые игровые блюда.', error);
    renderFavorites();
    return;
  }
  renderFavorites();
  list.querySelectorAll('.rcard').forEach(updateFavoriteButton);
  favoritesStatus.textContent = `Блюдо «${card.querySelector('h2').textContent}» ${wasFavorite ? 'удалено из' : 'добавлено в'} любимых.`;
  if (!wasFavorite) window.momoMascot?.celebrate(`Ура! «${card.querySelector('h2').textContent}» теперь в любимых!`);
  return favoriteIds.has(id);
}

recipes.forEach((recipe, index) => list.append(makeCard(recipe, index)));
renderFavorites();

for (const recipeList of [list, favoriteList]) {
  recipeList.addEventListener('click', event => {
    const button = event.target.closest('.favorite-toggle');
    if (button) toggleFavorite(button);
  });
  recipeList.addEventListener('click', event => {
    const summary = event.target.closest('.rdet summary');
    if (!summary) return;
    event.preventDefault();
    const card = summary.closest('.rcard');
    window.recipeViewer.open(card, {
      kicker: card.querySelector('.tag')?.textContent || '',
      isFavorite: favoriteIds.has(card.dataset.recipeId),
      onFavoriteToggle: () => toggleFavorite(card.querySelector('.favorite-toggle'))
    });
  });
}

function renderRecipes() {
  const query = search.value.trim().toLocaleLowerCase('ru');
  let visible = 0;
  for (const card of list.children) {
    const matchesGame = activeGame === 'all' || card.dataset.game === activeGame;
    const matchesQuery = !query || card.textContent.toLocaleLowerCase('ru').includes(query);
    card.hidden = !matchesGame || !matchesQuery;
    if (!card.hidden) visible += 1;
  }
  empty.hidden = visible > 0;
  window.momoMascot?.attach(empty, 'sad');
  if (visible === 0 && query) {
    window.momoMascot?.say('sad', 'Не нашёл такое блюдо. Попробуй другой запрос.', 4200);
  }
}

filters.addEventListener('click', event => {
  const button = event.target.closest('[data-game-filter]');
  if (!button) return;
  activeGame = button.dataset.gameFilter;
  for (const filter of filters.querySelectorAll('[data-game-filter]')) {
    const isActive = filter === button;
    filter.classList.toggle('on', isActive);
    filter.setAttribute('aria-pressed', String(isActive));
  }
  renderRecipes();
});

search.addEventListener('input', renderRecipes);
document.querySelector('#searchForm').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#gameRecipes').scrollIntoView({ behavior: 'smooth' });
});

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

renderRecipes();

const recipeHash = decodeURIComponent(location.hash.slice(1));
if (/^game-\d+$/.test(recipeHash)) {
  const card = [...list.children].find(item => item.dataset.recipeId === recipeHash);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      window.recipeViewer.open(card, {
        kicker: card.querySelector('.tag')?.textContent || '',
        isFavorite: favoriteIds.has(recipeHash),
        onFavoriteToggle: () => toggleFavorite(card.querySelector('.favorite-toggle'))
      });
    }, 250);
  }
}
}
