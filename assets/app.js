/* Interactive conference programme. Plain JS, no build step, no dependencies. */
(function () {
  'use strict';

  var P = window.PROG;
  var LANGS = ['en', 'ru', 'uz'];
  var STORE = { lang: 'prog26:lang', saved: 'prog26:saved', theme: 'prog26:theme' };

  /* ------------------------------------------------------------------ i18n */
  var L = {
    en: {
      skip: 'Skip to content', title: 'Programme · Traumatology & Orthopedics Conference 2026',
      tabProgramme: 'Programme', tabOverview: 'Overview', tabSpeakers: 'Speakers', tabSaved: 'My schedule', tabInfo: 'Information',
      search: 'Search talks, speakers, institutions…', searchSpk: 'Search speakers…', clear: 'Clear search',
      allCountries: 'All countries', allHalls: 'All halls', hall: function (n) { return 'Hall ' + n; },
      talks: function (n) { return n === 1 ? '1 talk' : n + ' talks'; },
      speakersN: function (n) { return n === 1 ? '1 speaker' : n + ' speakers'; },
      noResults: 'Nothing matches your search', noResultsHint: 'Try fewer words or just a surname. Search works across English, Russian and Uzbek, and ignores accents.',
      reset: 'Reset filters', moderators: 'Moderators', plenary: 'Plenary session', breakout: function (n) { return 'Breakout session ' + n; },
      now: 'Happening now', conflict: 'Overlaps another saved talk', save: 'Save to my schedule', unsave: 'Remove from my schedule', link: 'Copy link to this talk',
      copied: 'Link copied', copyFail: 'Could not copy the link', exportIcs: 'Add to calendar (.ics)', print: 'Print', clearAll: 'Remove all',
      emptySaved: 'You have not saved any talks yet. Tap the star on a talk to build your own schedule; it stays on this device.',
      session: 'Session', jumpNow: 'Jump to now', bioNote: 'Biography as published in the programme (original language).',
      talksBy: 'Talks in the programme', showInProgramme: 'Show in programme', close: 'Close', byHall: 'Hall',
      venue: 'Venue', regulations: 'Time limits', materials: 'Presentation materials', contacts: 'Contacts', about: 'About this programme',
      aboutText: 'Based on the organisers’ published programme (final version). Talk titles are shown in the three published languages; speaker biographies appear in their original language. All times are Tashkent time (UTC+5).',
      saveNote: 'Saved talks are stored in this browser only.', theme: 'Toggle dark mode', top: 'Back to top', all: 'All', country: 'Country', lang: 'Language',
      footer: 'Scientific and Practical Conference of Traumatologists and Orthopedists of Uzbekistan · Tashkent, 24 October 2026',
      credit: 'This interactive programme was prepared by the Akfa Medline orthopedic team.', creditProg: 'The conference programme itself was created by the organisers: ', views: 'Views', opening: 'Opening', closing: 'Closing', minShort: 'min', photoAlt: 'Portrait of '
    },
    ru: {
      skip: 'Перейти к содержимому', title: 'Программа · Конференция по травматологии и ортопедии 2026',
      tabProgramme: 'Программа', tabOverview: 'Обзор', tabSpeakers: 'Спикеры', tabSaved: 'Моё расписание', tabInfo: 'Информация',
      search: 'Поиск докладов, спикеров, организаций…', searchSpk: 'Поиск спикеров…', clear: 'Очистить поиск',
      allCountries: 'Все страны', allHalls: 'Все залы', hall: function (n) { return 'Зал №' + n; },
      talks: function (n) { return 'Докладов: ' + n; }, speakersN: function (n) { return 'Спикеров: ' + n; },
      noResults: 'Ничего не найдено', noResultsHint: 'Попробуйте меньше слов или только фамилию. Поиск работает на русском, английском и узбекском языках.',
      reset: 'Сбросить фильтры', moderators: 'Модераторы', plenary: 'Пленарное заседание', breakout: function (n) { return n + '-секционное заседание'; },
      now: 'Идёт сейчас', conflict: 'Пересекается с другим сохранённым докладом', save: 'Добавить в моё расписание', unsave: 'Убрать из моего расписания', link: 'Скопировать ссылку на доклад',
      copied: 'Ссылка скопирована', copyFail: 'Не удалось скопировать ссылку', exportIcs: 'Добавить в календарь (.ics)', print: 'Печать', clearAll: 'Удалить всё',
      emptySaved: 'Вы ещё не сохранили ни одного доклада. Нажмите на звёздочку у доклада, чтобы составить своё расписание; оно хранится на этом устройстве.',
      session: 'Заседание', jumpNow: 'Перейти к текущему', bioNote: 'Биография приведена так, как опубликована в программе (на языке оригинала).',
      talksBy: 'Доклады в программе', showInProgramme: 'Показать в программе', close: 'Закрыть', byHall: 'Зал',
      venue: 'Место проведения', regulations: 'Регламент выступлений', materials: 'Материалы для демонстрации', contacts: 'Контактные телефоны', about: 'О программе',
      aboutText: 'Составлено по опубликованной организаторами программе (финальный вариант). Названия докладов даны на трёх опубликованных языках; биографии спикеров — на языке оригинала. Время указано ташкентское (UTC+5).',
      saveNote: 'Сохранённые доклады хранятся только в этом браузере.', theme: 'Переключить тёмную тему', top: 'Наверх', all: 'Все', country: 'Страна', lang: 'Язык',
      footer: 'Научно-практическая конференция травматологов-ортопедов Узбекистана · Ташкент, 24 октября 2026',
      credit: 'Эта интерактивная программа подготовлена ортопедической командой Akfa Medline.', creditProg: 'Сама программа конференции составлена организаторами: ', views: 'Разделы', opening: 'Открытие', closing: 'Закрытие', minShort: 'мин', photoAlt: 'Портрет: '
    },
    uz: {
      skip: 'Asosiy qismga o‘tish', title: 'Dastur · Travmatologiya va ortopediya konferensiyasi 2026',
      tabProgramme: 'Dastur', tabOverview: 'Umumiy ko‘rinish', tabSpeakers: 'Ma’ruzachilar', tabSaved: 'Mening jadvalim', tabInfo: 'Ma’lumot',
      search: 'Ma’ruza, ma’ruzachi, tashkilot qidirish…', searchSpk: 'Ma’ruzachilarni qidirish…', clear: 'Qidiruvni tozalash',
      allCountries: 'Barcha mamlakatlar', allHalls: 'Barcha zallar', hall: function (n) { return n + '-zal'; },
      talks: function (n) { return n + ' ta ma’ruza'; }, speakersN: function (n) { return n + ' ta ma’ruzachi'; },
      noResults: 'Hech narsa topilmadi', noResultsHint: 'Kamroq so‘z yoki faqat familiyani kiriting. Qidiruv o‘zbek, rus va ingliz tillarida ishlaydi.',
      reset: 'Filtrlarni tozalash', moderators: 'Moderatorlar', plenary: 'Yalpi majlis', breakout: function (n) { return n + '-sho‘ba majlisi'; },
      now: 'Hozir davom etmoqda', conflict: 'Boshqa saqlangan ma’ruza bilan vaqti mos tushadi', save: 'Jadvalimga qo‘shish', unsave: 'Jadvalimdan olib tashlash', link: 'Ma’ruza havolasini nusxalash',
      copied: 'Havola nusxalandi', copyFail: 'Havolani nusxalab bo‘lmadi', exportIcs: 'Kalendarga qo‘shish (.ics)', print: 'Chop etish', clearAll: 'Hammasini o‘chirish',
      emptySaved: 'Hali birorta ma’ruza saqlamadingiz. O‘z jadvalingizni tuzish uchun ma’ruzadagi yulduzchani bosing; u shu qurilmada saqlanadi.',
      session: 'Majlis', jumpNow: 'Hozirgisiga o‘tish', bioNote: 'Tarjimai hol dasturda e’lon qilingan tilda (original) keltirilgan.',
      talksBy: 'Dasturdagi ma’ruzalar', showInProgramme: 'Dasturda ko‘rsatish', close: 'Yopish', byHall: 'Zal',
      venue: 'O‘tkazilish joyi', regulations: 'Ma’ruzalar reglamenti', materials: 'Namoyish materiallari', contacts: 'Aloqa telefonlari', about: 'Dastur haqida',
      aboutText: 'Tashkilotchilar e’lon qilgan dastur (yakuniy variant) asosida tuzilgan. Ma’ruza nomlari e’lon qilingan uch tilda, ma’ruzachilar haqidagi ma’lumot esa original tilda berilgan. Barcha vaqt Toshkent vaqti bilan (UTC+5).',
      saveNote: 'Saqlangan ma’ruzalar faqat shu brauzerda saqlanadi.', theme: 'Tungi rejimni almashtirish', top: 'Yuqoriga', all: 'Hammasi', country: 'Mamlakat', lang: 'Til',
      footer: 'O‘zbekiston travmatolog-ortopedlarining ilmiy-amaliy konferensiyasi · Toshkent, 2026-yil 24-oktabr',
      credit: 'Ushbu interaktiv dastur Akfa Medline ortopedlar jamoasi tomonidan tayyorlangan.', creditProg: 'Konferensiya dasturining o‘zi tashkilotchilar tomonidan tuzilgan: ', views: 'Bo‘limlar', opening: 'Ochilish', closing: 'Yopilish', minShort: 'daq', photoAlt: 'Surat: '
    }
  };

  /* ------------------------------------------------------- search canonical form */
  var CY = { 'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'x', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': '', 'ы': 'i', 'ь': '', 'э': 'e', 'ю': 'u', 'я': 'a', 'қ': 'k', 'ғ': 'g', 'ҳ': 'x' };
  /* Maps text from any of the three languages to one loose Latin form, so that
     "Ходжанов", "Khodjanov" and "Xodjanov" all find each other. Used for both index and query. */
  function canon(s) {
    s = String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/ı/g, 'i').replace(/[’‘ʻʼ`']/g, '')
      .replace(/дж/g, 'j')
      .replace(/[а-яқғҳ]/g, function (c) { return CY[c] || ''; });
    s = s.replace(/dzh|dj|zh/g, 'j').replace(/kh|h/g, 'x')
      .replace(/ya/g, 'a').replace(/yu/g, 'u').replace(/yo/g, 'o').replace(/ye/g, 'e').replace(/y/g, 'i')
      .replace(/q/g, 'k').replace(/w/g, 'v')
      .replace(/([a-z])\1+/g, function (m, c) { return m.length === 2 ? c : m; })   /* double letters only, so "zzzz" stays unmatched */
      .replace(/[^a-z0-9]+/g, ' ');
    return s.trim();
  }
  /* Length-preserving fold used only for highlighting inside displayed text. */
  function fold(s) {
    var o = '';
    for (var i = 0; i < s.length; i++) {
      var ch = s.charAt(i), f = ch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      o += f.length === 1 ? f : ch.toLowerCase().charAt(0);
    }
    return o;
  }

  /* ------------------------------------------------------------------ data prep */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var toMin = function (t) { return parseInt(t.slice(0, 2), 10) * 60 + parseInt(t.slice(3), 10); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };

  var sessions = P.sessions, sessionById = {};
  sessions.forEach(function (s) { s.sMin = toMin(s.start); s.eMin = toMin(s.end); sessionById[s.id] = s; });

  var talks = P.talks;
  talks.forEach(function (t) {
    t.sMin = toMin(t.start); t.eMin = toMin(t.end);
    t.session = sessionById[t.sid]; t.hall = t.session.hall;
    var cc = {}; t.orgs.forEach(function (o) { cc[P.orgs[o][0]] = 1; });
    t.cc = Object.keys(cc);
    var parts = [t.start, t.end, 'hall ' + t.hall];
    LANGS.forEach(function (l) { parts.push(t.title[l]); });
    t.authors.forEach(function (a) { parts.push(a.en, a.ru); });
    t.orgs.forEach(function (o) { parts.push(P.orgs[o][1], P.orgs[o][2], P.orgs[o][3]); });
    t.idx = canon(parts.join(' '));
  });
  var talkById = {}; talks.forEach(function (t) { talkById[t.id] = t; });

  var talksByAuthor = {};
  talks.forEach(function (t) { t.authors.forEach(function (a) { (talksByAuthor[a.en] = talksByAuthor[a.en] || []).push(t); }); });

  var speakers = P.speakers.map(function (r, i) {
    var sp = { i: i, key: r[0], ru: r[1], en: r[2], cc: r[3], bio: r[4] };
    sp.talks = talksByAuthor[sp.key] || [];
    sp.slug = canon(sp.key).replace(/ /g, '-');
    var cn = P.countries[sp.cc] || { en: '', ru: '', uz: '' };
    sp.idx = canon([sp.key, sp.en, sp.ru || '', sp.bio, cn.en, cn.ru, cn.uz].join(' '));
    return sp;
  });

  var ccAll = {}; talks.forEach(function (t) { t.cc.forEach(function (c) { ccAll[c] = 1; }); }); speakers.forEach(function (s) { ccAll[s.cc] = 1; });

  /* ------------------------------------------------------------------ state */
  var S = { lang: 'en', view: 'programme', q: '', hall: 0, cc: '', session: '', saved: {}, jump: '' };
  var VIEWS = ['programme', 'overview', 'speakers', 'saved', 'info'];

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  function loadSaved() { try { (JSON.parse(lsGet(STORE.saved) || '[]') || []).forEach(function (id) { if (talkById[id]) S.saved[id] = 1; }); } catch (e) { /* ignore */ } }
  function persistSaved() { lsSet(STORE.saved, JSON.stringify(Object.keys(S.saved))); }

  function detectLang() {
    var s = lsGet(STORE.lang); if (LANGS.indexOf(s) >= 0) return s;
    var n = (navigator.language || 'en').toLowerCase();
    return n.indexOf('ru') === 0 ? 'ru' : n.indexOf('uz') === 0 ? 'uz' : 'en';
  }

  function readHash() {
    var p = new URLSearchParams(location.hash.replace(/^#/, ''));
    if (LANGS.indexOf(p.get('lang')) >= 0) S.lang = p.get('lang');
    S.view = VIEWS.indexOf(p.get('view')) >= 0 ? p.get('view') : 'programme';
    S.q = p.get('q') || '';
    S.hall = [1, 2, 3, 4].indexOf(+p.get('hall')) >= 0 ? +p.get('hall') : 0;
    S.cc = P.countries[p.get('cc')] ? p.get('cc') : '';
    S.session = sessionById[p.get('session')] ? p.get('session') : '';
    S.jump = talkById[p.get('talk')] ? p.get('talk') : '';
  }
  function writeHash() {
    var p = new URLSearchParams();
    if (S.view !== 'programme') p.set('view', S.view);
    if (S.q) p.set('q', S.q);
    if (S.hall) p.set('hall', S.hall);
    if (S.cc) p.set('cc', S.cc);
    if (S.session) p.set('session', S.session);
    p.set('lang', S.lang);
    var h = '#' + p.toString();
    if (h !== location.hash) { try { history.replaceState(null, '', h); } catch (e) { /* file:// etc. */ } }
  }

  /* ------------------------------------------------------------------ helpers */
  function T() { return L[S.lang]; }
  function nm(a) { return S.lang === 'ru' ? a.ru : a.en; }
  function orgName(k) { return P.orgs[k][S.lang === 'ru' ? 2 : S.lang === 'uz' ? 3 : 1]; }
  function countryName(c) { return (P.countries[c] || {})[S.lang] || c; }
  function hallColor(h) { return 'var(--h' + (h || 0) + ')'; }
  function surnameQuery(en) { return /^\S+ [A-Z]\./.test(en) ? en.split(' ')[0] : en; }

  var hlTokens = [];
  function setHl() { hlTokens = fold(S.q).split(/\s+/).filter(Boolean); }
  function hl(text) {
    if (!hlTokens.length) return esc(text);
    var f = fold(text), r = [], i, k;
    hlTokens.forEach(function (tok) { i = 0; while ((i = f.indexOf(tok, i)) !== -1) { r.push([i, i + tok.length]); i += tok.length; } });
    if (!r.length) return esc(text);
    r.sort(function (a, b) { return a[0] - b[0]; });
    var m = [r[0]];
    for (k = 1; k < r.length; k++) { var last = m[m.length - 1]; if (r[k][0] <= last[1]) last[1] = Math.max(last[1], r[k][1]); else m.push(r[k]); }
    var out = '', pos = 0;
    m.forEach(function (x) { out += esc(text.slice(pos, x[0])) + '<mark>' + esc(text.slice(x[0], x[1])) + '</mark>'; pos = x[1]; });
    return out + esc(text.slice(pos));
  }

  function nowTashkent() {
    var fake = new URLSearchParams(location.search).get('now');            /* ?now=10:15 for testing */
    if (fake && /^\d{1,2}:\d{2}$/.test(fake)) return { date: P.event.date, min: toMin(pad(+fake.split(':')[0]) + ':' + fake.split(':')[1]) };
    try {
      var parts = new Intl.DateTimeFormat('en-CA', { timeZone: P.event.tz, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
      var g = function (t) { return parts.filter(function (x) { return x.type === t; })[0].value; };
      return { date: g('year') + '-' + g('month') + '-' + g('day'), min: +g('hour') * 60 + +g('minute') };
    } catch (e) { return { date: '', min: 0 }; }
  }
  var NOW = nowTashkent();
  function isLive(t) { return NOW.date === P.event.date && NOW.min >= t.sMin && NOW.min < t.eMin; }

  function conflicts() {
    var ids = Object.keys(S.saved), c = {};
    ids.forEach(function (a) { ids.forEach(function (b) {
      var x = talkById[a], y = talkById[b];
      if (a !== b && x.sMin < y.eMin && y.sMin < x.eMin) (c[a] = c[a] || []).push(b);
    }); });
    return c;
  }

  /* ------------------------------------------------------------------ icons */
  var ICON = {
    star: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
    link: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
    x: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    cal: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
    print: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4v-7h16v7h-2"/><rect x="6" y="14" width="12" height="7"/></svg>'
  };

  /* ------------------------------------------------------------------ talk + session markup */
  function hallPill(h) {
    return '<span class="pill" style="--hc:' + hallColor(h) + '">' + esc(h ? T().hall(h) : T().allHalls) + '</span>';
  }
  function sessionLabel(s) {
    return s.kind === 'plenary' ? T().plenary : s.kind === 'breakout' ? T().breakout(s.num) : '';
  }

  function talkHTML(t, ctx, conf) {
    var l = T(), saved = !!S.saved[t.id], live = isLive(t);
    var authors = t.authors.map(function (a) {
      return '<button type="button" class="author" data-author="' + esc(surnameQuery(a.en)) + '">' + hl(nm(a)) + '</button>';
    }).join(', ');
    var orgs = t.orgs.map(function (o) { return '<span class="cc">' + P.orgs[o][0] + '</span>' + hl(orgName(o)); }).join('; ');
    var flags = '';
    if (live) flags += '<span class="tag live">' + esc(l.now) + '</span>';
    if (conf) flags += '<span class="tag conflict">' + esc(l.conflict) + '</span>';
    var context = ctx ? '<p class="orgs">' + hallPill(t.hall) + ' ' + esc(sessionLabel(t.session) + (sessionLabel(t.session) ? ' · ' : '') + t.session.title[S.lang]) + '</p>' : '';
    return '<article class="talk' + (live ? ' live' : '') + (conf ? ' conflict' : '') + '" id="t-' + t.id + '" data-id="' + t.id + '">' +
      '<div class="when"><strong>' + t.start + '</strong><span>– ' + t.end + '</span><span class="no">#' + t.n + '</span></div>' +
      '<div><h3 class="title">' + hl(t.title[S.lang]) + '</h3>' + context +
      '<p class="authors">' + authors + '</p><p class="orgs">' + orgs + '</p>' + (flags ? '<div class="flags">' + flags + '</div>' : '') + '</div>' +
      '<div class="act">' +
      '<button type="button" class="ib" data-save="' + t.id + '" aria-pressed="' + saved + '" aria-label="' + esc(saved ? l.unsave : l.save) + '" title="' + esc(saved ? l.unsave : l.save) + '">' + ICON.star + '</button>' +
      '<button type="button" class="ib" data-link="' + t.id + '" aria-label="' + esc(l.link) + '" title="' + esc(l.link) + '">' + ICON.link + '</button>' +
      '</div></article>';
  }

  function sessionHead(s, shown, total) {
    var l = T(), lab = sessionLabel(s);
    var mods = s.mods ? '<p class="mods"><b>' + esc(l.moderators) + ':</b> ' + s.mods.map(function (m) { var p = m.split('|'); return esc(S.lang === 'ru' ? (p[1] || p[0]) : p[0]); }).join(', ') + '</p>' : '';
    var count = total ? '<span class="count">' + esc(shown === total ? l.talks(total) : shown + ' / ' + total) + '</span>' : '';
    return '<div class="session-head">' +
      '<div class="top">' + hallPill(s.hall) + (lab ? '<span>' + esc(lab) + '</span>' : '') + '<span>' + s.start + '–' + s.end + '</span>' + count + '</div>' +
      '<h2>' + esc(s.title[S.lang]) + '</h2>' + mods +
      (s.lines && s.lines.length ? '<ul class="lines">' + s.lines.map(function (x) { return '<li><time>' + x.start + '–' + x.end + '</time><span>' + esc(x.text[S.lang]) + '</span></li>'; }).join('') + '</ul>' : '') +
      '</div>';
  }

  /* ------------------------------------------------------------------ filtering */
  function filterTalks(onlySaved) {
    var toks = canon(S.q).split(' ').filter(Boolean);
    return talks.filter(function (t) {
      if (onlySaved && !S.saved[t.id]) return false;
      if (S.hall && t.hall !== S.hall) return false;
      if (S.cc && t.cc.indexOf(S.cc) < 0) return false;
      if (S.session && t.sid !== S.session) return false;
      for (var i = 0; i < toks.length; i++) if (t.idx.indexOf(toks[i]) < 0) return false;
      return true;
    });
  }
  function filtersActive() { return !!(S.q || S.hall || S.cc || S.session); }

  /* ------------------------------------------------------------------ views */
  function emptyHTML(msg, hint, showReset) {
    return '<div class="empty"><h2>' + esc(msg) + '</h2><p>' + esc(hint || '') + '</p>' +
      (showReset ? '<button type="button" class="btn" data-reset>' + esc(T().reset) + '</button>' : '') + '</div>';
  }

  function viewProgramme() {
    var l = T(), list = filterTalks(false), html = '';
    var liveAny = list.some(isLive);
    var bar = '<div class="bar">' + (liveAny ? '<button type="button" class="btn" data-jumpnow>' + esc(l.jumpNow) + '</button>' : '') +
      '<button type="button" class="btn ghost" data-print>' + ICON.print + esc(l.print) + '</button></div>';
    var showStatic = !S.q && !S.cc && !S.session;
    sessions.forEach(function (s) {
      if (s.kind === 'ceremony' || s.kind === 'break') {
        if (!showStatic || (S.hall && s.hall && s.hall !== S.hall)) return;
        html += '<section class="session ceremony" style="--hc:' + hallColor(s.hall) + '">' + sessionHead(s, 0, 0) + '</section>';
        return;
      }
      var inS = list.filter(function (t) { return t.sid === s.id; });
      if (!inS.length) return;
      var total = talks.filter(function (t) { return t.sid === s.id; }).length;
      html += '<section class="session" id="s-' + s.id + '" style="--hc:' + hallColor(s.hall) + '" aria-label="' + esc(s.title[S.lang]) + '">' + sessionHead(s, inS.length, total) +
        '<div class="talks">' + inS.map(function (t) { return talkHTML(t, false, false); }).join('') + '</div></section>';
    });
    setStatus(l.talks(list.length));
    if (!list.length) return emptyHTML(l.noResults, l.noResultsHint, true);
    return bar + html;
  }

  function viewSaved() {
    var l = T(), list = filterTalks(true).sort(function (a, b) { return a.sMin - b.sMin || a.hall - b.hall; });
    setStatus(l.talks(list.length));
    if (!Object.keys(S.saved).length) return emptyHTML(l.tabSaved, l.emptySaved, false);
    if (!list.length) return emptyHTML(l.noResults, l.noResultsHint, true);
    var c = conflicts();
    return '<div class="bar"><button type="button" class="btn" data-ics>' + ICON.cal + esc(l.exportIcs) + '</button>' +
      '<button type="button" class="btn ghost" data-print>' + ICON.print + esc(l.print) + '</button>' +
      '<button type="button" class="btn ghost" data-clearsaved>' + esc(l.clearAll) + '</button></div>' +
      '<p class="mods" style="margin-bottom:12px">' + esc(l.saveNote) + '</p>' +
      '<div class="talks">' + list.map(function (t) { return talkHTML(t, true, !!c[t.id]); }).join('') + '</div>';
  }

  function viewOverview() {
    var l = T(), START = 9 * 60, END = 18 * 60, PX = 1.15, H = (END - START) * PX, HR = 60 * PX;
    var live = NOW.date === P.event.date && NOW.min >= START && NOW.min <= END;
    var axis = ''; for (var h = 9; h <= 18; h++) axis += '<span style="top:' + ((h * 60 - START) * PX) + 'px">' + pad(h) + ':00</span>';
    var cols = '', hh = '';
    [1, 2, 3, 4].forEach(function (n) {
      hh += '<div class="tt-h" style="--hc:' + hallColor(n) + '">' + esc(l.hall(n)) + '</div>';
      var blocks = '';
      sessions.forEach(function (s) {
        if (s.kind === 'ceremony' || !(s.hall === n || s.hall === 0)) return;
        var top = (s.sMin - START) * PX, hgt = (s.eMin - s.sMin) * PX - 2;
        var lab = s.kind === 'break' ? '' : sessionLabel(s);
        blocks += '<button type="button" class="blk ' + s.kind + '" style="--hc:' + hallColor(n) + ';top:' + top + 'px;height:' + hgt + 'px" ' + (s.kind === 'break' ? 'tabindex="-1" aria-disabled="true"' : 'data-session="' + s.id + '"') + '>' +
          '<b>' + s.start + '–' + s.end + '</b>' + (lab ? '<span>' + esc(lab) + '</span>' : '') + '<span style="font-weight:' + (lab ? 450 : 600) + '">' + esc(s.title[S.lang]) + '</span></button>';
      });
      if (live) blocks += '<div class="tt-now" style="top:' + ((NOW.min - START) * PX) + 'px"></div>';
      cols += '<div class="tt-col" style="--th:' + H + 'px;--hr:' + HR + 'px">' + blocks + '</div>';
    });
    var open = sessionById.open, close = sessionById.close;
    setStatus('');
    return '<p class="mods" style="margin:0 0 10px"><b>' + esc(l.opening) + ' ' + open.start + ':</b> ' + esc(open.lines[0].text[S.lang]) + '</p>' +
      '<div class="tt-wrap"><div class="tt"><div></div>' + hh + '<div class="tt-axis" style="--th:' + H + 'px">' + axis + '</div>' + cols + '</div></div>' +
      '<p class="mods" style="margin:10px 0 0"><b>' + esc(l.closing) + ' ' + close.start + ':</b> ' + esc(close.title[S.lang]) + '</p>';
  }

  function avatar(sp) {
    var parts = sp.en.replace(/[^\p{L} ]/gu, '').split(' ').filter(Boolean);
    var ini = (parts[0].charAt(0) + (parts.length > 1 ? parts[parts.length - 1].charAt(0) : '')).toUpperCase();
    var hue = 0; for (var i = 0; i < sp.key.length; i++) hue = (hue * 31 + sp.key.charCodeAt(i)) % 360;
    var img = P.hasPhotos ? '<img src="photos/' + sp.slug + '.jpg" alt="" loading="lazy">' : '';
    return '<span class="av" style="--avc:hsl(' + hue + ' 42% 36%)" aria-hidden="true">' + (img || esc(ini)) + '</span>';
  }
  function spName(sp) { return S.lang === 'ru' && sp.ru ? sp.ru : sp.en; }

  function viewSpeakers() {
    var l = T(), toks = canon(S.q).split(' ').filter(Boolean);
    var list = speakers.filter(function (s) {
      if (S.cc && s.cc !== S.cc) return false;
      for (var i = 0; i < toks.length; i++) if (s.idx.indexOf(toks[i]) < 0) return false;
      return true;
    });
    setStatus(l.speakersN(list.length));
    if (!list.length) return emptyHTML(l.noResults, l.noResultsHint, true);
    return '<div class="grid">' + list.map(function (s) {
      return '<button type="button" class="sp" data-spk="' + s.i + '">' + avatar(s) + '<span><h3>' + hl(spName(s)) + '</h3><div class="meta">' + esc(countryName(s.cc)) + ' · ' + esc(l.talks(s.talks.length)) + '</div><p>' + hl(s.bio) + '</p></span></button>';
    }).join('') + '</div>';
  }

  function viewInfo() {
    var l = T(), e = P.event;
    setStatus('');
    return '<div class="info">' +
      '<section class="card"><h2>' + esc(l.venue) + '</h2><p>' + esc(e.venue[S.lang]) + '</p><p>' + esc(e.dateText[S.lang]) + '</p></section>' +
      '<section class="card"><h2>' + esc(l.regulations) + '</h2><ul>' + e.regulations[S.lang].map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></section>' +
      '<section class="card"><h2>' + esc(l.contacts) + '</h2><ul>' + e.phones.map(function (p) { return '<li><a href="tel:' + p.replace(/\s/g, '') + '">' + esc(p) + '</a></li>'; }).join('') + '</ul></section>' +
      '<section class="card wide"><h2>' + esc(l.materials) + '</h2><p>' + esc(e.materials[S.lang]) + '</p></section>' +
      '<section class="card wide"><h2>' + esc(l.about) + '</h2><p>' + esc(l.aboutText) + '</p></section>' +
      '</div>';
  }

  /* ------------------------------------------------------------------ chrome */
  function setStatus(txt) { var el = $('#status'); if (el) el.textContent = txt; }

  function renderTabs() {
    var l = T(), n = Object.keys(S.saved).length;
    var items = [['programme', l.tabProgramme], ['overview', l.tabOverview], ['speakers', l.tabSpeakers], ['saved', l.tabSaved], ['info', l.tabInfo]];
    $('#tabs').innerHTML = items.map(function (it) {
      return '<button type="button" class="tab" data-view="' + it[0] + '"' + (S.view === it[0] ? ' aria-current="page"' : '') + '>' + esc(it[1]) +
        (it[0] === 'saved' ? '<span class="badge" id="savedBadge"' + (n ? '' : ' hidden') + '>' + n + '</span>' : '') + '</button>';
    }).join('');
  }

  function renderFilters() {
    var l = T(), v = S.view;
    var showSearch = v === 'programme' || v === 'speakers' || v === 'saved';
    $('.searchrow').hidden = !showSearch;
    $('#filters').hidden = !showSearch;
    $('#q').placeholder = v === 'speakers' ? l.searchSpk : l.search;
    $('#searchLabel').textContent = l.search;
    $('#clearQ').setAttribute('aria-label', l.clear);
    $('#searchBox').classList.toggle('has-text', !!S.q);
    if ($('#q').value !== S.q) $('#q').value = S.q;

    var sel = $('#country'), ccs = Object.keys(ccAll).sort(function (a, b) { return countryName(a).localeCompare(countryName(b), S.lang); });
    sel.innerHTML = '<option value="">' + esc(l.allCountries) + '</option>' + ccs.map(function (c) { return '<option value="' + c + '"' + (S.cc === c ? ' selected' : '') + '>' + esc(countryName(c)) + '</option>'; }).join('');
    sel.setAttribute('aria-label', l.country);

    var chips = '';
    if (v !== 'speakers') {
      chips += '<button type="button" class="chip" data-hall="0" aria-pressed="' + (!S.hall) + '">' + esc(l.allHalls) + '</button>';
      [1, 2, 3, 4].forEach(function (n) { chips += '<button type="button" class="chip h' + n + '" data-hall="' + n + '" aria-pressed="' + (S.hall === n) + '"><span class="dot"></span>' + esc(l.hall(n)) + '</button>'; });
      if (S.session) chips += '<button type="button" class="chip removable" data-clearsession>' + esc(l.session + ': ' + sessionById[S.session].title[S.lang]) + ' ✕</button>';
    }
    $('#chips').innerHTML = chips;
  }

  function renderStatic() {
    var l = T(), e = P.event;
    document.documentElement.lang = S.lang;
    document.title = l.title;
    $('#orgLine').textContent = e.organisers[S.lang][0] + ' · ' + e.organisers[S.lang][2];
    $('#kicker').textContent = e.kicker[S.lang];
    $('#title').textContent = e.title[S.lang];
    $('#factDate').textContent = e.dateText[S.lang];
    $('#factVenue').textContent = e.venue[S.lang];
    $('.skip').textContent = l.skip;
    $('#themeBtn').setAttribute('aria-label', l.theme);
    $('#toTop').setAttribute('aria-label', l.top);
    $('#langSeg').setAttribute('aria-label', l.lang);
    $$('#langSeg button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.lang === S.lang); });
    $('#foot').innerHTML = '<p>' + esc(l.footer) + '</p><p>' + esc(l.aboutText) + '</p><p class="credit">' + esc(l.credit) + '</p><p>' + esc(l.creditProg + e.organisers[S.lang].join('; ') + '.') + '</p>';
  }

  var lastLive = '';
  function liveKey() { return talks.filter(isLive).map(function (t) { return t.id; }).join(','); }

  function render() {
    setHl();
    renderTabs(); renderFilters();
    var v = S.view, html = v === 'programme' ? viewProgramme() : v === 'overview' ? viewOverview() : v === 'speakers' ? viewSpeakers() : v === 'saved' ? viewSaved() : viewInfo();
    $('#content').innerHTML = html;
    lastLive = liveKey();
    writeHash();
  }
  function renderAll() { renderStatic(); render(); }

  /* ------------------------------------------------------------------ actions */
  function toast(msg) {
    var el = $('#toast');
    if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = msg; el.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove('show'); }, 2200);
  }

  function goTalk(id, keepFilters) {
    var t = talkById[id]; if (!t) return;
    if ($('#dlg').open) $('#dlg').close();
    S.view = 'programme';
    if (!keepFilters) { S.q = ''; S.hall = 0; S.cc = ''; S.session = ''; }
    render();
    var el = document.getElementById('t-' + id);
    if (el) { el.scrollIntoView({ block: 'center' }); el.classList.add('flash'); }
  }

  function toggleSave(id, btn) {
    var l = T();
    if (S.saved[id]) delete S.saved[id]; else S.saved[id] = 1;
    persistSaved();
    var on = !!S.saved[id];
    if (S.view === 'saved') { render(); return; }
    btn.setAttribute('aria-pressed', on); btn.setAttribute('aria-label', on ? l.unsave : l.save); btn.title = on ? l.unsave : l.save;
    var b = $('#savedBadge'), n = Object.keys(S.saved).length; if (b) { b.textContent = n; b.hidden = !n; }
  }

  function copyLink(id) {
    var url = location.href.split('#')[0] + '#' + new URLSearchParams({ talk: id, lang: S.lang }).toString();
    var done = function () { toast(T().copied); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, function () { toast(T().copyFail); });
    else { try { var ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); done(); } catch (e) { toast(T().copyFail); } }
  }

  function icsFold(line) {
    var enc = new TextEncoder(), out = '', cur = '', bytes = 0;
    for (var ch of line) { var b = enc.encode(ch).length; if (bytes + b > 72) { out += cur + '\r\n '; cur = ''; bytes = 1; } cur += ch; bytes += b; }
    return out + cur;
  }
  function icsText(s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); }
  function icsUtc(min) {
    var p = P.event.date.split('-').map(Number), d = new Date(Date.UTC(p[0], p[1] - 1, p[2], 0, min - P.event.tzOffsetMin));
    return d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + '00Z';
  }
  function exportIcs() {
    var ids = Object.keys(S.saved); if (!ids.length) return;
    var stamp = icsUtc(0).slice(0, 9) + '000000Z', lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Conference programme 2026//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH'];
    ids.map(function (i) { return talkById[i]; }).sort(function (a, b) { return a.sMin - b.sMin; }).forEach(function (t) {
      lines.push('BEGIN:VEVENT', 'UID:' + t.id + '@programme.conference2026', 'DTSTAMP:' + stamp, 'DTSTART:' + icsUtc(t.sMin), 'DTEND:' + icsUtc(t.eMin),
        'SUMMARY:' + icsText(t.title[S.lang]),
        'LOCATION:' + icsText(T().hall(t.hall) + ', ' + P.event.venueShort[S.lang]),
        'DESCRIPTION:' + icsText(t.authors.map(nm).join(', ') + '\n' + t.orgs.map(orgName).join('; ')), 'END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    var blob = new Blob([lines.map(icsFold).join('\r\n') + '\r\n'], { type: 'text/calendar;charset=utf-8' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'my-conference-schedule.ics';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  function openSpeaker(i) {
    var l = T(), sp = speakers[i], dlg = $('#dlg');
    var tl = sp.talks.length ? '<h3>' + esc(l.talksBy) + '</h3><ul>' + sp.talks.map(function (t) {
      return '<li><button type="button" data-goto="' + t.id + '"><strong>' + esc(t.title[S.lang]) + '</strong><small>' + esc(l.hall(t.hall) + ' · ' + t.start + '–' + t.end) + '</small></button></li>';
    }).join('') + '</ul>' : '';
    $('#dlgBody').innerHTML = '<div class="dlg-head">' + avatar(sp) + '<div><h2>' + esc(spName(sp)) + '</h2><div class="meta" style="color:var(--muted)">' + esc(countryName(sp.cc)) + '</div></div>' +
      '<button type="button" class="ib x" data-closedlg aria-label="' + esc(l.close) + '">' + ICON.x + '</button></div>' +
      '<p class="bio">' + esc(sp.bio) + '</p><p class="note">' + esc(l.bioNote) + '</p>' + tl +
      '<button type="button" class="btn" data-spkfilter="' + i + '">' + esc(l.showInProgramme) + '</button>';
    if (!dlg.open) dlg.showModal();
  }

  /* ------------------------------------------------------------------ events */
  function bind() {
    document.addEventListener('click', function (e) {
      var el = e.target.closest('button, a'); if (!el) return;
      var d = el.dataset;
      if (d.lang) { S.lang = d.lang; lsSet(STORE.lang, S.lang); renderAll(); return; }
      if (d.view) { S.view = d.view; render(); window.scrollTo({ top: 0 }); return; }
      if (d.hall !== undefined && el.classList.contains('chip')) { S.hall = +d.hall; render(); return; }
      if (el.hasAttribute('data-clearsession')) { S.session = ''; render(); return; }
      if (d.save) { toggleSave(d.save, el); return; }
      if (d.link) { copyLink(d.link); return; }
      if (d.author !== undefined) { S.q = d.author; if (S.view !== 'saved') S.view = 'programme'; render(); window.scrollTo({ top: 0 }); return; }
      if (d.session) { S.session = d.session; S.view = 'programme'; S.q = ''; S.hall = 0; render(); window.scrollTo({ top: 0 }); return; }
      if (d.spk !== undefined) { openSpeaker(+d.spk); return; }
      if (d.goto) { goTalk(d.goto); return; }
      if (d.spkfilter !== undefined) { var sp = speakers[+d.spkfilter]; $('#dlg').close(); S.q = surnameQuery(sp.key); S.view = 'programme'; S.hall = 0; S.cc = ''; S.session = ''; render(); window.scrollTo({ top: 0 }); return; }
      if (el.hasAttribute('data-closedlg')) { $('#dlg').close(); return; }
      if (el.hasAttribute('data-reset')) { S.q = ''; S.hall = 0; S.cc = ''; S.session = ''; render(); return; }
      if (el.hasAttribute('data-print')) { window.print(); return; }
      if (el.hasAttribute('data-ics')) { exportIcs(); return; }
      if (el.hasAttribute('data-clearsaved')) { S.saved = {}; persistSaved(); render(); return; }
      if (el.hasAttribute('data-jumpnow')) { var n = $('.talk.live'); if (n) n.scrollIntoView({ block: 'center' }); return; }
    });

    $('#dlg').addEventListener('click', function (e) { if (e.target === this) this.close(); });
    $('#q').addEventListener('input', function () { S.q = this.value; render(); });
    $('#q').addEventListener('keydown', function (e) { if (e.key === 'Escape' && S.q) { S.q = ''; this.value = ''; render(); } });
    $('#clearQ').addEventListener('click', function () { S.q = ''; $('#q').value = ''; render(); $('#q').focus(); });
    $('#country').addEventListener('change', function () { S.cc = this.value; render(); });
    $('#themeBtn').addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      var dark = cur ? cur === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      var next = dark ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', next); lsSet(STORE.theme, next);
    });
    $('#toTop').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('scroll', function () { $('#toTop').classList.toggle('show', window.scrollY > 700); }, { passive: true });
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
        var sb = $('.searchrow'); if (!sb.hidden) { e.preventDefault(); $('#q').focus(); }
      }
    });
    window.addEventListener('hashchange', function () { readHash(); renderAll(); if (S.jump) { var j = S.jump; S.jump = ''; goTalk(j, true); } });
    setInterval(function () { NOW = nowTashkent(); if (liveKey() !== lastLive && !$('#dlg').open) render(); }, 60000);
  }

  /* ------------------------------------------------------------------ boot */
  function init() {
    S.lang = detectLang();
    loadSaved();
    readHash();
    $('#filters').innerHTML = '<div id="chips" style="display:contents"></div><span class="status" id="status" aria-live="polite"></span>';
    bind();
    renderAll();
    if (S.jump) { var j = S.jump; S.jump = ''; goTalk(j, true); }
  }
  init();
})();
