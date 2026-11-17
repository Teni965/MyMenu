'use strict';
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const store={
 get(k,def){try{return JSON.parse(localStorage.getItem(k))??def}catch(e){return def}},
 set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),2400)}
function setNav(k){$$('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===k&&!!a.closest('.nav')))}

// ---------- Любимые рецепты и категории (данные лежат в index.html) ----------
const savedFavorites=store.get('momo-favs',[]);
const pop={
 favs:new Set(Array.isArray(savedFavorites)?savedFavorites.map(id=>String(id).startsWith('recipe-')?String(id):`recipe-${id}`):[])
};
function renderPop(){
 const cards=$('#cards');
 cards.replaceChildren();
 let shown=0;
 items.forEach(({el})=>{
  if(!pop.favs.has(el.id))return;
  const card=el.cloneNode(true);
  card.removeAttribute('id');
  card.dataset.recipeId=el.id;
  card.hidden=false;
  card.querySelectorAll('details').forEach(detail=>{detail.open=false});
  cards.append(card);
  shown+=1;
 });
 $('#cardsEmpty').hidden=shown>0;
 updateFavoriteButtons();
}

// ---------- Каталог «Все рецепты» ----------
const cat={cat:null,q:'',expanded:false};
const items=$$('#recipeList .rcard').map(el=>({el,cat:el.dataset.cat,
 text:['h2','.tag','.rdesc','.ring'].map(s=>el.querySelector(s)?.textContent||'').join(' ').toLowerCase()}));
function makeFavoriteButton(card){
 const button=document.createElement('button');
 button.className='favorite-toggle';
 button.type='button';
 const icon=document.createElement('span');
 icon.setAttribute('aria-hidden','true');
 const label=document.createElement('span');
 button.append(icon,label);
 card.querySelector('.rimg').append(button);
 return button;
}
items.forEach(({el})=>makeFavoriteButton(el));
function updateFavoriteButtons(){
 $$('#recipeList .rcard, #cards .rcard').forEach(card=>{
  const button=card.querySelector('.favorite-toggle');
  const favorite=pop.favs.has(card.id||card.dataset.recipeId);
  const name=card.querySelector('h2').textContent;
  button.setAttribute('aria-pressed',String(favorite));
  button.setAttribute('aria-label',(favorite?'Убрать из любимых блюд: ':'Добавить в любимые блюда: ')+name);
  button.firstElementChild.textContent=favorite?'♥':'♡';
  button.lastElementChild.textContent=favorite?'Убрать из любимых':'В любимые';
 });
}
function toggleFavorite(card){
 const id=card.id||card.dataset.recipeId;
 if(!id)return;
 const name=card.querySelector('h2').textContent;
 const added=!pop.favs.has(id);
 added?pop.favs.add(id):pop.favs.delete(id);
 store.set('momo-favs',[...pop.favs]);
 renderPop();
 toast(added?`«${name}» добавлено в любимые блюда`:`«${name}» удалено из любимых блюд`);
}
function renderCatalog(){
 const q=cat.q.trim().toLowerCase();
 const list=items.filter(i=>(!cat.cat||i.cat===cat.cat)&&(!q||i.text.includes(q)));
 const limited=!cat.expanded&&!cat.cat&&!q;
 items.forEach(i=>i.el.hidden=true);
 list.forEach((i,k)=>i.el.hidden=limited&&k>=12);
 $('#emptyMsg').hidden=list.length>0;
 const more=$('#showAllRecipes');
 more.hidden=!!cat.cat||!!q||list.length<=12;
 more.setAttribute('aria-expanded',cat.expanded);
 more.textContent=cat.expanded?'Свернуть':`Показать всё (${list.length})`;
 $$('#filters .chip').forEach(c=>c.classList.toggle('on',(c.dataset.cat||null)===cat.cat));
}

function resetAll(){
 Object.assign(cat,{cat:null,q:''});
 $('#search').value='';renderPop();renderCatalog();setNav('recipes');
}

function handleFavoriteClick(e){
 const button=e.target.closest('.favorite-toggle');
 if(button)toggleFavorite(button.closest('.rcard'));
}
$('#cards').addEventListener('click',handleFavoriteClick);
$('#recipeList').addEventListener('click',handleFavoriteClick);
$('#filters').addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;cat.cat=b.dataset.cat||null;renderCatalog()});
$('#showAllRecipes').addEventListener('click',()=>{cat.expanded=!cat.expanded;renderCatalog()});
$('#searchForm').addEventListener('submit',e=>{e.preventDefault();$('#recipeCatalog').scrollIntoView()});
$('#search').addEventListener('input',e=>{cat.q=e.target.value;if(cat.q.trim())cat.cat=null;renderCatalog()});
$('#allRecipes').addEventListener('click',e=>{e.preventDefault();$('#recipeCatalog').scrollIntoView({behavior:'smooth'})});
$('#findFavorite').addEventListener('click',()=>$('#recipeCatalog').scrollIntoView({behavior:'smooth'}));
['#findBtn','#openAll'].forEach(s=>$(s).addEventListener('click',resetAll));
$$('[data-nav="fav"]').forEach(a=>a.addEventListener('click',()=>{renderPop();setNav('fav')}));
$('[data-nav="recipes"]').addEventListener('click',resetAll);
$('[data-nav="home"]').addEventListener('click',()=>setNav('home'));

// ---------- Окно рецепта: ингредиенты и шаги берём из карточки каталога ----------
const modal=$('#modal');
const recipeLists=id=>{const r=$('#recipe-'+id);return{ing:r.querySelector('.ring').innerHTML,steps:r.querySelector('.rsteps').innerHTML}};
function openDish(btn){
 const block=btn.closest('.cuisine'),card=btn.closest('.dcard'),{ing,steps}=recipeLists(btn.dataset.recipe),st=block.style;
 const [time,serv]=[...card.querySelectorAll('.dmeta>span')].map(s=>s.textContent);
 $('#modalBody').innerHTML=`<div class="mhead" style="background:linear-gradient(135deg,${st.getPropertyValue('--t')},${st.getPropertyValue('--b')})"><span class="dflag">${card.querySelector('.dflag').textContent}</span><div><p class="kicker">${esc(block.querySelector('.chead h2').textContent)}</p><h2>${esc(card.querySelector('h3').textContent)}</h2><p class="cdesc">${esc(card.querySelector('.dbody>p').textContent)}</p><p class="mmeta">${esc(time)} · ${esc(serv)}</p></div></div><div class="mb"><section><h4>Ингредиенты</h4><ul>${ing}</ul></section><section><h4>Как приготовить</h4><ol>${steps}</ol></section></div>`;
 modal.showModal();
}
$('#close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

// ---------- Кухни мира ----------
function showCuisine(key){
 $$('.cuisine').forEach(b=>b.hidden=b.dataset.cuisine!==key);
 $$('.cucard').forEach(c=>c.classList.toggle('on',c.dataset.cuisine===key));
}
function pickCuisine(e){
 const b=e.target.closest('[data-cuisine]');if(!b)return;
 e.preventDefault();showCuisine(b.dataset.cuisine);
 $('#cu-'+b.dataset.cuisine+' .cu-title').scrollIntoView({behavior:'smooth',block:'start'});
}
$('#quickNav').addEventListener('click',pickCuisine);
$('#cuisineGrid').addEventListener('click',pickCuisine);
document.addEventListener('click',e=>{const b=e.target.closest('.ropen');if(b)openDish(b)});

// ---------- Меню, подписка ----------
$('#burger').addEventListener('click',()=>{const o=$('#nav').classList.toggle('open');$('#burger').setAttribute('aria-expanded',o)});
$('#nav').addEventListener('click',e=>{if(e.target.closest('a')){$('#nav').classList.remove('open');$('#burger').setAttribute('aria-expanded',false)}});
$('#subForm').addEventListener('submit',e=>{e.preventDefault();const v=$('#email').value.trim(),m=$('#subMsg');
 if(!v){m.textContent='Введите email.';m.style.color='#f1a0aa'}
 else if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){m.textContent='Проверьте email: он должен выглядеть как name@example.com.';m.style.color='#f1a0aa'}
 else{m.textContent='Готово! Это демо: письмо на сервер не отправляется.';m.style.color='#b7e0b0';$('#email').value=''}});

// ---------- Регистрация / вход (localStorage) ----------
const AUTH={mode:'reg',user:store.get('momo-user',null)};
const authUsers=()=>store.get('momo-users',[]);
const USER_ICON='<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6.5 8-6.5s8 2.5 8 6.5"/></svg>';
function setAuthUI(){
 const p=$('#profile');
 if(AUTH.user){
  p.classList.add('logged');p.title=AUTH.user.name+' — выйти';
  p.setAttribute('aria-label','Профиль: '+AUTH.user.name+'. Нажмите, чтобы выйти');
  p.innerHTML=`${USER_ICON}<span class="uname">${esc(AUTH.user.name)}</span>`;
 }else{
  p.classList.remove('logged');p.removeAttribute('title');
  p.setAttribute('aria-label','Войти или зарегистрироваться');
  p.innerHTML=USER_ICON;
 }}
function openAuth(mode){AUTH.mode=mode;const d=$('#auth'),reg=mode==='reg';
 $('#authTitle').textContent=reg?'Регистрация':'Вход';
 $('#authSub').textContent=reg?'Создайте аккаунт, чтобы сохранять рецепты':'Рады видеть вас снова!';
 $('#authSubmit').textContent=reg?'Зарегистрироваться':'Войти';
 $('#nameField').style.display=reg?'':'none';
 $('#authEmail').autocomplete=reg?'email':'username';
 $('#authPass').autocomplete=reg?'new-password':'current-password';
 $('.auth-switch').innerHTML=(reg?'Уже есть аккаунт? ':'Нет аккаунта? ')+`<button id="authSwitch" type="button">${reg?'Войти':'Зарегистрируйтесь'}</button>`;
 $('#authSwitch').addEventListener('click',()=>openAuth(reg?'login':'reg'));
 authMsg('');$('#authForm').reset();$('#authPass').type='password';
 d.showModal();setTimeout(()=>$(reg?'#regName':'#authEmail').focus(),50)}
function authMsg(t,err){const m=$('#authMsg');m.textContent=t;m.style.color=err?'#f1a0aa':'#b7e0b0'}
$('#authClose').addEventListener('click',()=>$('#auth').close());
$('#auth').addEventListener('click',e=>{if(e.target.id==='auth')e.target.close()});
$('#passEye').addEventListener('click',()=>{const p=$('#authPass');p.type=p.type==='password'?'text':'password'});
$('#authForm').addEventListener('submit',e=>{e.preventDefault();
 const email=$('#authEmail').value.trim().toLowerCase(),pass=$('#authPass').value,name=$('#regName').value.trim();
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))return authMsg('Проверьте email: он должен выглядеть как name@example.com.',1);
 if(pass.length<6)return authMsg('Пароль должен быть минимум 6 символов.',1);
 const users=authUsers(),found=users.find(u=>u.email===email);
 if(AUTH.mode==='reg'){
  if(!name)return authMsg('Введите имя.',1);
  if(found)return authMsg('Пользователь с таким email уже зарегистрирован. Войдите.',1);
  const u={name,email};users.push({...u,pass:btoa(pass)});store.set('momo-users',users);store.set('momo-user',u);AUTH.user=u;setAuthUI();$('#auth').close();toast('Добро пожаловать, '+name+'! Регистрация завершена');
 }else{
  if(!found||found.pass!==btoa(pass))return authMsg('Неверный email или пароль.',1);
  AUTH.user={name:found.name,email:found.email};store.set('momo-user',AUTH.user);setAuthUI();$('#auth').close();toast('С возвращением, '+found.name+'!');
 }});
$('#profile').addEventListener('click',()=>{
 if(AUTH.user){try{localStorage.removeItem('momo-user')}catch(e){}AUTH.user=null;setAuthUI();toast('Вы вышли из аккаунта')}
 else openAuth('reg')});

// ---------- Запуск ----------
updateFavoriteButtons();renderPop();renderCatalog();
const startCuisine=new URLSearchParams(location.search).get('c');
if(document.getElementById('cu-'+startCuisine))showCuisine(startCuisine);
