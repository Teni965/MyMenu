'use strict';

(() => {
  const illustration = `
    <svg class="umami-cat-art" viewBox="0 0 120 120" aria-hidden="true">
      <g class="umami-tail">
        <path d="M75 91c18 9 31-2 23-12-5-6-13-2-10 3 2 3 7 2 8-1" fill="none" stroke="#777487" stroke-width="9" stroke-linecap="round"/>
        <path d="M75 91c18 9 31-2 23-12-5-6-13-2-10 3 2 3 7 2 8-1" fill="none" stroke="#d7c8ce" stroke-width="4" stroke-linecap="round"/>
      </g>
      <g class="umami-body">
        <path d="m33 48 4-25c1-5 5-6 9-2l14 14 15-14c4-4 8-3 9 2l4 26c8 7 12 17 10 29-2 17-17 26-38 26S34 94 32 77c-2-12 1-22 8-29Z" fill="#fff6ec" stroke="#7b6470" stroke-width="2.5" stroke-linejoin="round"/>
        <path class="umami-ear umami-ear-left" d="m40 29 2-1 10 10-12 8-1-1 1-16Z" fill="#eac9c7"/>
        <path class="umami-ear umami-ear-right" d="m76 38 10-10 2 1 1 16-1 1-12-8Z" fill="#eac9c7"/>
        <g class="umami-eyes-open" fill="#463a42">
          <ellipse cx="49" cy="61" rx="3.3" ry="5"/>
          <ellipse cx="75" cy="61" rx="3.3" ry="5"/>
        </g>
        <g class="umami-eyes-closed" fill="none" stroke="#463a42" stroke-width="2.5" stroke-linecap="round">
          <path d="M44 62q5 5 10 0M70 62q5 5 10 0"/>
        </g>
        <path d="m59 69 3 2 3-2-3-2-3 2Z" fill="#c98288"/>
        <path class="umami-mouth umami-mouth-smile" d="M62 71v2m0 0q-4 5-7 0m7 0q4 5 7 0" fill="none" stroke="#765765" stroke-width="1.8" stroke-linecap="round"/>
        <ellipse class="umami-mouth umami-mouth-o" cx="62" cy="75" rx="3.2" ry="4" fill="#c98288"/>
        <path class="umami-mouth umami-mouth-sad" d="M55 77q7-8 14 0" fill="none" stroke="#765765" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M38 85q9 12 24 12t24-12q-2 19-24 19T38 85Z" fill="#f3e5dc"/>
        <path d="M51 88q11 6 22 0l-3 13q-8 5-16 0l-3-13Z" fill="#777487"/>
        <path d="M58 90h7l-3.5 5-3.5-5Z" fill="#e7c491"/>
        <g class="umami-flower">
          <g fill="#e8b8b2" stroke="#bf8d8c" stroke-width="1">
            <ellipse cx="56" cy="35" rx="3.5" ry="6"/>
            <ellipse cx="56" cy="35" rx="3.5" ry="6" transform="rotate(72 56 35)"/>
            <ellipse cx="56" cy="35" rx="3.5" ry="6" transform="rotate(144 56 35)"/>
            <ellipse cx="56" cy="35" rx="3.5" ry="6" transform="rotate(216 56 35)"/>
            <ellipse cx="56" cy="35" rx="3.5" ry="6" transform="rotate(288 56 35)"/>
          </g>
          <circle cx="56" cy="35" r="3" fill="#d9a85d"/>
        </g>
        <path d="M34 79q-8 9-1 15m55-15q8 9 1 15" fill="none" stroke="#fff6ec" stroke-width="8" stroke-linecap="round"/>
      </g>
      <g class="umami-sparkles" fill="#d6aa73">
        <path d="M19 48v8m-4-4h8M101 42v8m-4-4h8"/>
      </g>
    </svg>`;

  const widget = document.createElement('div');
  widget.className = 'umami-mascot';
  widget.dataset.state = 'idle';
  widget.innerHTML = `
    <div class="umami-bubble" id="umamiBubble" aria-live="polite"></div>
    <button class="umami-mascot-button" type="button" aria-label="Позвать помощника Умами">
      ${illustration}
    </button>`;
  document.body.append(widget);

  const button = widget.querySelector('button');
  const bubble = widget.querySelector('.umami-bubble');
  const phrases = {
    home: [
      'Добро пожаловать! С чего начнём кулинарное путешествие?',
      'Ищи рецепт по названию или выбери кухню мира.',
      'Здесь найдутся идеи и для будней, и для праздника!',
      'Хочешь чего-то нового? Попробуй рандомайзер.',
      'Сохраняй любимые блюда сердечком, чтобы не потерять.',
      'Может, сегодня приготовим что-нибудь уютное?',
      'Любопытно, какие вкусы ты откроешь сегодня!',
      'Выбирай рецепт — я буду рядом и подбодрю.',
      'Прокатимся по кухням мира, не выходя из дома?',
      'Порадуй себя вкусным блюдом!'
    ],
    recipes: [
      'Подберём блюдо по настроению или ингредиентам?',
      'Нажми «Открыть рецепт», чтобы увидеть все шаги.',
      'Нашёл интересное? Добавь его в любимые!',
      'В каталоге есть супы, десерты и многое другое.',
      'Введи название в поиск — помогу найти.',
      'Какой рецепт хочется попробовать первым?',
      'Не забудь проверить ингредиенты перед готовкой.',
      'Каждое блюдо начинается с хорошей идеи!',
      'Могу помочь выбрать — загляни в рандомайзер.',
      'Пусть новый рецепт станет твоим любимым!'
    ],
    favorites: [
      'Здесь собраны рецепты, которые тебе понравились.',
      'Список пуст? Добавь сердечком что-нибудь вкусное.',
      'Из любимого блюда всегда можно приготовить ужин.',
      'Какой рецепт из коллекции приготовим сегодня?',
      'Любимые блюда всегда под рукой!',
      'Можно убрать рецепт из списка одним нажатием.',
      'Добавляй новые вкусы в свою коллекцию.',
      'Твоя подборка становится всё аппетитнее!',
      'Выбери рецепт и загляни за деталями.',
      'Вдохновение уже сохранено здесь!'
    ],
    cuisines: [
      'Куда отправимся за вкусами сегодня?',
      'Открой кухню и выбери блюдо этой страны.',
      'У каждой кухни есть своя вкусная история.',
      'Сегодня можно устроить маленькое гастропутешествие!',
      'Есть знакомые блюда и новые открытия.',
      'Выбирай страну — а я поддержу!',
      'Как насчёт ароматов Азии или Средиземноморья?',
      'Попробуй рецепт, который ещё не готовил.',
      'Путешествовать можно и через домашнюю кухню.',
      'Какой уголок мира окажется на тарелке?'
    ],
    games: [
      'Какое блюдо из игрового мира попробуем воплотить?',
      'Выбери рецепт из Genshin Impact или Honkai: Star Rail.',
      'Не забудь раскрыть рецепт — ингредиенты и шаги вместе.',
      'Сохрани любимое игровое блюдо сердечком!',
      'Из игры прямо на твою кухню!',
      'Сегодня готовим что-нибудь из Тейвата или Белобога?',
      'В каждом игровом рецепте есть вкусное приключение.',
      'Найди блюдо по названию или выбери свою игру.',
      'Какое игровое блюдо удивит тебя сегодня?',
      'Пора превратить пиксельное вдохновение в настоящий ужин!'
    ],
    randomizer: [
      'Нажми кнопку — выберем блюдо наугад!',
      'Не понравился вариант? Давай попробуем ещё.',
      'Следующее блюдо может быть из игрового мира!',
      'Доверимся случаю и приготовим что-то новое?',
      'Нажми на карточку выпавшего блюда, чтобы открыть рецепт.',
      'Пусть случай подскажет вкусный план на ужин!',
      'В рандомайзере есть обычные и игровые рецепты.',
      'Каждое нажатие — новая идея для готовки.',
      'Интересно, что выпадет в следующий раз?',
      'Готов к ещё одному вкусному сюрпризу?'
    ]
  };
  const phraseIndexes = Object.fromEntries(
    Object.keys(phrases).map(context => [context, 0])
  );
  let resetTimer;
  let hideTimer;
  let context = getPageContext();

  function say(state, message, duration = 3600) {
    widget.dataset.state = state;
    bubble.textContent = message;
    bubble.classList.add('visible');
    clearTimeout(resetTimer);
    clearTimeout(hideTimer);
    if (state !== 'idle') {
      resetTimer = setTimeout(() => {
        widget.dataset.state = 'idle';
      }, duration);
    }
    hideTimer = setTimeout(() => bubble.classList.remove('visible'), duration);
  }

  function getPageContext() {
    const path = location.pathname;
    if (path.endsWith('/games.html')) return 'games';
    if (path.endsWith('/randomizer.html')) return 'randomizer';
    if (!path.endsWith('/index.html') && path !== '/') return 'home';

    const section = document.elementFromPoint(
      Math.round(window.innerWidth / 2),
      Math.round(window.innerHeight * 0.4)
    )?.closest('section');
    if (section?.id === 'recipes') return 'favorites';
    if (section?.id === 'recipeCatalog') return 'recipes';
    if (section?.id === 'cuisines' || section?.classList.contains('cuisine')) return 'cuisines';
    return 'home';
  }

  function syncContext() {
    const nextContext = getPageContext();
    if (nextContext !== context) {
      context = nextContext;
      phraseIndexes[context] = 0;
    }
  }

  function attach(target, state, message) {
    if (!target || target.querySelector('.umami-inline')) return;
    const inline = document.createElement('span');
    inline.className = `umami-inline umami-inline-${state}`;
    inline.setAttribute('aria-hidden', 'true');
    inline.innerHTML = illustration;
    target.prepend(inline);
    if (message) target.dataset.umamiHint = message;
  }

  button.addEventListener('click', () => {
    syncContext();
    const contextPhrases = phrases[context];
    const phraseIndex = phraseIndexes[context];
    phraseIndexes[context] = (phraseIndex + 1) % contextPhrases.length;
    say(context === 'randomizer' ? 'curious' : 'hint', contextPhrases[phraseIndex], 5000);
    widget.classList.remove('umami-tap');
    void widget.offsetWidth;
    widget.classList.add('umami-tap');
  });
  window.addEventListener('scroll', syncContext, { passive: true });
  window.addEventListener('hashchange', syncContext);

  window.umamiMascot = {
    say,
    celebrate(message = 'Ура! Новое любимое блюдо!') {
      say('happy', message);
    },
    attach,
  };

  const greetings = {
    home: 'Привет! Давай найдём что-нибудь вкусное.',
    recipes: 'Ты в каталоге рецептов. Ищем вдохновение?',
    favorites: 'Заглянем в твою коллекцию любимых блюд?',
    cuisines: 'Готов к путешествию по кухням мира?',
    games: 'Привет! Заглянем за рецептами из игр?',
    randomizer: 'Привет! Давай доверим выбор случаю?'
  };
  say('hint', greetings[context], 5200);
})();
