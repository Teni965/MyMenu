'use strict';

(() => {
  const illustration = `
    <svg class="momo-cat-art" viewBox="0 0 120 120" aria-hidden="true">
      <g class="momo-tail">
        <path d="M75 91c18 9 31-2 23-12-5-6-13-2-10 3 2 3 7 2 8-1" fill="none" stroke="#777487" stroke-width="9" stroke-linecap="round"/>
        <path d="M75 91c18 9 31-2 23-12-5-6-13-2-10 3 2 3 7 2 8-1" fill="none" stroke="#d7c8ce" stroke-width="4" stroke-linecap="round"/>
      </g>
      <g class="momo-body">
        <path d="m33 48 4-25c1-5 5-6 9-2l14 14 15-14c4-4 8-3 9 2l4 26c8 7 12 17 10 29-2 17-17 26-38 26S34 94 32 77c-2-12 1-22 8-29Z" fill="#fff6ec" stroke="#7b6470" stroke-width="2.5" stroke-linejoin="round"/>
        <path class="momo-ear momo-ear-left" d="m40 29 2-1 10 10-12 8-1-1 1-16Z" fill="#eac9c7"/>
        <path class="momo-ear momo-ear-right" d="m76 38 10-10 2 1 1 16-1 1-12-8Z" fill="#eac9c7"/>
        <g class="momo-eyes-open" fill="#463a42">
          <ellipse cx="49" cy="61" rx="3.3" ry="5"/>
          <ellipse cx="75" cy="61" rx="3.3" ry="5"/>
        </g>
        <g class="momo-eyes-closed" fill="none" stroke="#463a42" stroke-width="2.5" stroke-linecap="round">
          <path d="M44 62q5 5 10 0M70 62q5 5 10 0"/>
        </g>
        <path d="m59 69 3 2 3-2-3-2-3 2Z" fill="#c98288"/>
        <path class="momo-mouth momo-mouth-smile" d="M62 71v2m0 0q-4 5-7 0m7 0q4 5 7 0" fill="none" stroke="#765765" stroke-width="1.8" stroke-linecap="round"/>
        <ellipse class="momo-mouth momo-mouth-o" cx="62" cy="75" rx="3.2" ry="4" fill="#c98288"/>
        <path class="momo-mouth momo-mouth-sad" d="M55 77q7-8 14 0" fill="none" stroke="#765765" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M38 85q9 12 24 12t24-12q-2 19-24 19T38 85Z" fill="#f3e5dc"/>
        <path d="M51 88q11 6 22 0l-3 13q-8 5-16 0l-3-13Z" fill="#777487"/>
        <path d="M58 90h7l-3.5 5-3.5-5Z" fill="#e7c491"/>
        <g class="momo-flower">
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
      <g class="momo-sparkles" fill="#d6aa73">
        <path d="M19 48v8m-4-4h8M101 42v8m-4-4h8"/>
      </g>
    </svg>`;

  const widget = document.createElement('div');
  widget.className = 'momo-mascot';
  widget.dataset.state = 'idle';
  widget.innerHTML = `
    <div class="momo-bubble" id="momoBubble" aria-live="polite"></div>
    <button class="momo-mascot-button" type="button" aria-label="Позвать помощника Момо">
      ${illustration}
    </button>`;
  document.body.append(widget);

  const button = widget.querySelector('button');
  const bubble = widget.querySelector('.momo-bubble');
  let resetTimer;
  let hideTimer;

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

  function attach(target, state, message) {
    if (!target || target.querySelector('.momo-inline')) return;
    const inline = document.createElement('span');
    inline.className = `momo-inline momo-inline-${state}`;
    inline.setAttribute('aria-hidden', 'true');
    inline.innerHTML = illustration;
    target.prepend(inline);
    if (message) target.dataset.momoHint = message;
  }

  button.addEventListener('click', () => {
    const hint = location.pathname.endsWith('games.html')
      ? 'Выбери блюдо из игры и сохрани любимое сердечком!'
      : 'Найди рецепт и добавь его в любимые!';
    say('curious', hint, 5000);
    widget.classList.remove('momo-tap');
    void widget.offsetWidth;
    widget.classList.add('momo-tap');
  });

  window.momoMascot = {
    say,
    celebrate(message = 'Ура! Новое любимое блюдо!') {
      say('happy', message);
    },
    attach,
  };

  say('hint', 'Привет! Нажми на меня, если нужна подсказка.', 5200);
})();
