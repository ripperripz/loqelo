/* Loqelo pre-launch — shared runtime
   i18n (auto-detect + switcher), waitlist forms, consent banner, GA4-style events (no PII), countdown. */
(function () {
  'use strict';

  var LANGS = { en: 'English', pl: 'Polski', de: 'Deutsch' };
  var LAUNCH = new Date('2027-02-01T00:00:00+01:00');

  /* ---------- shared strings ---------- */
  var BASE = {
    en: {
      'nav.how': 'How it works', 'nav.film': 'Film', 'nav.pros': 'For professionals', 'nav.join': 'Join the waitlist',
      'launch.label': 'Launching February 2027',
      'cd.days': 'days', 'cd.hours': 'hours', 'cd.min': 'minutes', 'cd.sec': 'seconds',
      'f.customer': 'I need help', 'f.pro': 'I offer services',
      'f.title.customer': 'Get first access as a customer',
      'f.title.pro': 'Get first access as a professional',
      'f.sub.customer': 'Be among the first to describe a job and get offers from local pros.',
      'f.sub.pro': 'Be the first to see jobs in your area when Loqelo opens.',
      'f.email': 'Email address', 'f.email.ph': 'you@example.com',
      'f.country.customer': 'Country you live in', 'f.country.pro': 'Country where you work',
      'f.country.ph': 'Choose a country',
      'f.type': 'I am signing up as', 'f.optional': 'optional',
      'f.individual': 'An individual', 'f.business': 'A business',
      'f.consent': 'Yes, email me about the Loqelo launch and product updates. I can unsubscribe at any time.',
      'f.privacy': 'Privacy policy',
      'f.submit.customer': 'Join as a customer', 'f.submit.pro': 'Join as a professional',
      'f.sending': 'Adding you…',
      'f.err.email': 'Enter an email address like name@example.com.',
      'f.err.country': 'Choose a country so we can tell you when Loqelo opens there.',
      'f.err.consent': 'Tick the box so we are allowed to email you at launch.',
      'f.done.title': 'You are on the list.',
      'f.done.customer': 'We will email you before Loqelo opens in February 2027. Check your inbox to confirm your address.',
      'f.done.pro': 'We will email you before launch so you can set up your profile first. Check your inbox to confirm your address.',
      'f.again': 'Sign up someone else',
      'f.secure': 'Spam-protected form. Your email never goes to analytics.',
      'c.text': 'We use analytics cookies to count visits and sign-ups by country. No emails or form content are shared.',
      'c.accept': 'Allow analytics', 'c.decline': 'Decline',
      'foot.rights': 'Loqelo. All rights reserved.', 'foot.privacy': 'Privacy', 'foot.contact': 'Contact', 'foot.cookies': 'Cookie settings',
      'lang.label': 'Language'
    },
    pl: {
      'nav.how': 'Jak to działa', 'nav.film': 'Film', 'nav.pros': 'Dla wykonawców', 'nav.join': 'Zapisz się',
      'launch.label': 'Start w lutym 2027',
      'cd.days': 'dni', 'cd.hours': 'godz.', 'cd.min': 'min', 'cd.sec': 'sek.',
      'f.customer': 'Szukam pomocy', 'f.pro': 'Oferuję usługi',
      'f.title.customer': 'Dołącz jako klient',
      'f.title.pro': 'Dołącz jako wykonawca',
      'f.sub.customer': 'Bądź wśród pierwszych, którzy opiszą zlecenie i dostaną oferty od lokalnych fachowców.',
      'f.sub.pro': 'Jako pierwszy zobaczysz zlecenia w swojej okolicy, gdy Loqelo wystartuje.',
      'f.email': 'Adres e-mail', 'f.email.ph': 'ty@przyklad.pl',
      'f.country.customer': 'Kraj zamieszkania', 'f.country.pro': 'Kraj, w którym pracujesz',
      'f.country.ph': 'Wybierz kraj',
      'f.type': 'Zapisuję się jako', 'f.optional': 'opcjonalnie',
      'f.individual': 'Osoba prywatna', 'f.business': 'Firma',
      'f.consent': 'Tak, chcę otrzymywać e-maile o starcie Loqelo i nowościach. Mogę zrezygnować w każdej chwili.',
      'f.privacy': 'Polityka prywatności',
      'f.submit.customer': 'Dołącz jako klient', 'f.submit.pro': 'Dołącz jako wykonawca',
      'f.sending': 'Dodajemy Cię…',
      'f.err.email': 'Wpisz adres e-mail, np. imie@przyklad.pl.',
      'f.err.country': 'Wybierz kraj, abyśmy mogli Cię powiadomić o starcie.',
      'f.err.consent': 'Zaznacz zgodę, abyśmy mogli wysłać Ci wiadomość o starcie.',
      'f.done.title': 'Jesteś na liście.',
      'f.done.customer': 'Napiszemy do Ciebie przed startem Loqelo w lutym 2027. Potwierdź adres w swojej skrzynce.',
      'f.done.pro': 'Napiszemy przed startem, abyś mógł jako pierwszy założyć profil. Potwierdź adres w swojej skrzynce.',
      'f.again': 'Zapisz kolejną osobę',
      'f.secure': 'Formularz chroniony przed spamem. Twój e-mail nie trafia do analityki.',
      'c.text': 'Używamy plików cookie analityki, aby liczyć wizyty i zapisy według kraju. Nie udostępniamy e-maili ani treści formularzy.',
      'c.accept': 'Zezwól na analitykę', 'c.decline': 'Odrzuć',
      'foot.rights': 'Loqelo. Wszelkie prawa zastrzeżone.', 'foot.privacy': 'Prywatność', 'foot.contact': 'Kontakt', 'foot.cookies': 'Ustawienia cookie',
      'lang.label': 'Język'
    },
    de: {
      'nav.how': 'So funktioniert’s', 'nav.film': 'Film', 'nav.pros': 'Für Profis', 'nav.join': 'Auf die Warteliste',
      'launch.label': 'Start im Februar 2027',
      'cd.days': 'Tage', 'cd.hours': 'Std.', 'cd.min': 'Min.', 'cd.sec': 'Sek.',
      'f.customer': 'Ich suche Hilfe', 'f.pro': 'Ich biete Leistungen an',
      'f.title.customer': 'Als Kunde zuerst dabei sein',
      'f.title.pro': 'Als Profi zuerst dabei sein',
      'f.sub.customer': 'Beschreibe als Erste:r deinen Auftrag und erhalte Angebote von Profis aus der Nähe.',
      'f.sub.pro': 'Sieh als Erste:r die Aufträge in deiner Region, sobald Loqelo startet.',
      'f.email': 'E-Mail-Adresse', 'f.email.ph': 'du@beispiel.de',
      'f.country.customer': 'Land, in dem du wohnst', 'f.country.pro': 'Land, in dem du arbeitest',
      'f.country.ph': 'Land auswählen',
      'f.type': 'Ich melde mich an als', 'f.optional': 'optional',
      'f.individual': 'Privatperson', 'f.business': 'Unternehmen',
      'f.consent': 'Ja, schickt mir E-Mails zum Start von Loqelo und zu Neuigkeiten. Abmeldung jederzeit möglich.',
      'f.privacy': 'Datenschutz',
      'f.submit.customer': 'Als Kunde anmelden', 'f.submit.pro': 'Als Profi anmelden',
      'f.sending': 'Wird gespeichert…',
      'f.err.email': 'Gib eine E-Mail-Adresse wie name@beispiel.de ein.',
      'f.err.country': 'Wähle ein Land, damit wir dich zum Start informieren können.',
      'f.err.consent': 'Setze das Häkchen, damit wir dir zum Start schreiben dürfen.',
      'f.done.title': 'Du stehst auf der Liste.',
      'f.done.customer': 'Wir schreiben dir vor dem Start von Loqelo im Februar 2027. Bitte bestätige deine Adresse im Postfach.',
      'f.done.pro': 'Wir schreiben dir vor dem Start, damit du dein Profil als Erste:r anlegen kannst. Bitte bestätige deine Adresse.',
      'f.again': 'Weitere Person anmelden',
      'f.secure': 'Spamgeschütztes Formular. Deine E-Mail geht nie an die Analyse.',
      'c.text': 'Wir nutzen Analyse-Cookies, um Besuche und Anmeldungen nach Land zu zählen. E-Mails und Formularinhalte werden nicht weitergegeben.',
      'c.accept': 'Analyse erlauben', 'c.decline': 'Ablehnen',
      'foot.rights': 'Loqelo. Alle Rechte vorbehalten.', 'foot.privacy': 'Datenschutz', 'foot.contact': 'Kontakt', 'foot.cookies': 'Cookie-Einstellungen',
      'lang.label': 'Sprache'
    }
  };

  var COUNTRIES = ['PL','DE','NL','BE','FR','ES','IT','PT','AT','CH','CZ','SK','HU','RO','BG','HR','SI','LT','LV','EE','FI','SE','NO','DK','IE','GB','GR','CY','MT','LU','UA','US','CA','AU','NZ','ZA','AE','IN','SG','BR','MX','TR','IL','JP'];

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  var L = {
    lang: 'en',
    dict: {},
    t: function (k) { var d = L.dict[L.lang] || {}; return d[k] != null ? d[k] : ((L.dict.en || {})[k] != null ? L.dict.en[k] : k); }
  };
  window.Loqelo = L;

  /* ---------- analytics (GA4 consent mode stub; real tag added at deploy) ---------- */
  window.dataLayer = window.dataLayer || [];
  function track(name, params) {
    // Only non-personal parameters. Never pass email, country text typed by user, or form content.
    window.dataLayer.push(Object.assign({ event: name }, params || {}));
  }
  L.track = track;

  /* ---------- language ---------- */
  function detect() {
    var saved = store('loqelo.lang');
    if (saved && LANGS[saved]) return saved;
    var navs = (navigator.languages || [navigator.language || 'en']);
    for (var i = 0; i < navs.length; i++) { var c = String(navs[i]).slice(0, 2).toLowerCase(); if (LANGS[c]) return c; }
    return 'en';
  }
  function detectCountry() {
    var navs = (navigator.languages || [navigator.language || '']);
    for (var i = 0; i < navs.length; i++) { var p = String(navs[i]).split('-')[1]; if (p && p.length === 2) return p.toUpperCase(); }
    return '';
  }

  function apply() {
    document.documentElement.lang = L.lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = L.t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = L.t(el.getAttribute('data-i18n-html')); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', L.t(el.getAttribute('data-i18n-ph'))); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', L.t(el.getAttribute('data-i18n-aria'))); });
    document.querySelectorAll('.lq-lang-current').forEach(function (el) { el.textContent = L.lang.toUpperCase(); });
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-checked', b.getAttribute('data-lang') === L.lang ? 'true' : 'false'); });
    fillCountries();
    document.querySelectorAll('form.lq-form').forEach(function (f) { syncRole(f); });
    document.dispatchEvent(new CustomEvent('loqelo:lang', { detail: L.lang }));
  }
  L.setLang = function (l) { if (!LANGS[l]) return; L.lang = l; store('loqelo.lang', l); apply(); track('language_change', { language: l }); };

  function buildSwitchers() {
    document.querySelectorAll('.lq-lang').forEach(function (wrap) {
      var btn = wrap.querySelector('.lq-lang-btn');
      var menu = wrap.querySelector('.lq-lang-menu');
      if (!btn || !menu) return;
      menu.innerHTML = '';
      Object.keys(LANGS).forEach(function (code) {
        var o = document.createElement('button');
        o.type = 'button'; o.setAttribute('role', 'menuitemradio'); o.setAttribute('data-lang', code);
        o.innerHTML = '<span>' + LANGS[code] + '</span><small>' + code.toUpperCase() + '</small>';
        o.addEventListener('click', function () { L.setLang(code); close(); btn.focus(); });
        menu.appendChild(o);
      });
      function close() { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = menu.hidden; menu.hidden = !open; btn.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) close(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      menu.hidden = true;
    });
  }

  /* ---------- countries (names localised by the browser) ---------- */
  var userCountry = detectCountry();
  function fillCountries() {
    var names;
    try { names = new Intl.DisplayNames([L.lang], { type: 'region' }); } catch (e) { names = null; }
    document.querySelectorAll('select.lq-country').forEach(function (sel) {
      var cur = sel.value;
      var list = COUNTRIES.map(function (c) { return { c: c, n: names ? names.of(c) : c }; });
      list.sort(function (a, b) { return a.n.localeCompare(b.n, L.lang); });
      sel.innerHTML = '';
      var ph = document.createElement('option'); ph.value = ''; ph.textContent = L.t('f.country.ph'); ph.disabled = true; sel.appendChild(ph);
      if (userCountry && COUNTRIES.indexOf(userCountry) > -1) {
        var top = document.createElement('option'); top.value = userCountry; top.textContent = names ? names.of(userCountry) : userCountry; sel.appendChild(top);
        var sep = document.createElement('option'); sep.disabled = true; sep.textContent = '──────────'; sel.appendChild(sep);
      }
      list.forEach(function (x) { if (x.c === userCountry) return; var o = document.createElement('option'); o.value = x.c; o.textContent = x.n; sel.appendChild(o); });
      var oth = document.createElement('option'); oth.value = 'OTHER'; oth.textContent = L.lang === 'pl' ? 'Inny kraj' : L.lang === 'de' ? 'Anderes Land' : 'Another country'; sel.appendChild(oth);
      sel.value = cur || '';
      if (!sel.value) sel.selectedIndex = 0;
    });
  }

  /* ---------- waitlist forms ---------- */
  function syncRole(form) {
    var role = form.getAttribute('data-role') || 'customer';
    form.querySelectorAll('[data-role-text]').forEach(function (el) { el.textContent = L.t(el.getAttribute('data-role-text') + '.' + role); });
    form.querySelectorAll('.lq-role-btn').forEach(function (b) { var on = b.getAttribute('data-set-role') === role; b.setAttribute('aria-pressed', String(on)); b.classList.toggle('is-on', on); });
    var root = form.closest('.lq-waitlist') || form;
    root.setAttribute('data-role', role);
    root.querySelectorAll('[data-role-text]').forEach(function (el) { if (!form.contains(el)) el.textContent = L.t(el.getAttribute('data-role-text') + '.' + role); });
    root.querySelectorAll('.lq-role-btn').forEach(function (b) { var on = b.getAttribute('data-set-role') === role; b.setAttribute('aria-pressed', String(on)); b.classList.toggle('is-on', on); });
  }
  L.setRole = function (role) {
    document.querySelectorAll('form.lq-form').forEach(function (f) { f.setAttribute('data-role', role); syncRole(f); });
  };

  function setErr(field, key) {
    var wrap = field.closest('.lq-field') || field.parentElement;
    var msg = wrap.querySelector('.lq-err');
    if (key) { field.setAttribute('aria-invalid', 'true'); if (msg) { msg.textContent = L.t(key); msg.hidden = false; } wrap.classList.add('has-err'); }
    else { field.removeAttribute('aria-invalid'); if (msg) { msg.hidden = true; } wrap.classList.remove('has-err'); }
  }

  function wireForm(form) {
    var started = false;
    var root = form.closest('.lq-waitlist') || form;
    root.querySelectorAll('.lq-role-btn').forEach(function (b) {
      b.addEventListener('click', function () { L.setRole(b.getAttribute('data-set-role')); track('role_select', { role: b.getAttribute('data-set-role') }); });
    });
    form.addEventListener('input', function (e) {
      if (!started) { started = true; track('form_start', { role: form.getAttribute('data-role') }); }
      if (e.target.getAttribute('aria-invalid')) validate(e.target);
    });
    form.addEventListener('change', function (e) { if (e.target.getAttribute('aria-invalid')) validate(e.target); });
    function validate(el) {
      if (el.name === 'email') { var ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value.trim()); setErr(el, ok ? null : 'f.err.email'); return ok; }
      if (el.name === 'country') { var ok2 = !!el.value; setErr(el, ok2 ? null : 'f.err.country'); return ok2; }
      if (el.name === 'consent') { setErr(el, el.checked ? null : 'f.err.consent'); return el.checked; }
      return true;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var role = form.getAttribute('data-role') || 'customer';
      if (form.querySelector('[name="company_website"]').value) return; // honeypot: bots fill hidden field
      var fields = ['email', 'country', 'consent'].map(function (n) { return form.querySelector('[name="' + n + '"]'); });
      var ok = fields.map(validate).every(Boolean);
      track('form_submit_attempt', { role: role, valid: ok });
      if (!ok) { var first = form.querySelector('[aria-invalid="true"]'); if (first) first.focus(); return; }
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; btn.classList.add('is-busy');
      var label = btn.querySelector('.lq-btn-label'); var prev = label.textContent; label.textContent = L.t('f.sending');
      /* Production: POST to Brevo (double opt-in list, attribute ROLE=customer|contractor, COUNTRY, TYPE)
         via a tiny serverless endpoint that also verifies the Cloudflare Turnstile token. */
      setTimeout(function () {
        btn.disabled = false; btn.classList.remove('is-busy'); label.textContent = prev;
        track(role === 'pro' ? 'contractor_signup' : 'customer_signup', { role: role });
        var done = root.querySelector('.lq-done');
        if (done) {
          done.querySelector('[data-done-text]').textContent = L.t('f.done.' + role);
          root.classList.add('is-done'); done.hidden = false;
          var h = done.querySelector('h3, .lq-done-title'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
          document.dispatchEvent(new CustomEvent('loqelo:signup', { detail: role }));
        }
      }, 1100);
    });
    var again = root.querySelector('.lq-again');
    if (again) again.addEventListener('click', function () {
      form.reset(); fillCountries(); root.classList.remove('is-done'); root.querySelector('.lq-done').hidden = true; started = false;
      form.querySelector('[name="email"]').focus();
    });
  }

  /* ---------- countdown ---------- */
  function tick() {
    var ms = Math.max(0, LAUNCH - new Date());
    var d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
    var v = { d: d, h: h, m: m, s: s };
    document.querySelectorAll('[data-cd]').forEach(function (el) {
      var k = el.getAttribute('data-cd'); var val = k === 'd' ? String(v.d) : String(v[k]).padStart(2, '0');
      if (el.textContent !== val) { el.textContent = val; el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick'); }
    });
  }
  L.daysLeft = function () { return Math.max(0, Math.floor((LAUNCH - new Date()) / 864e5)); };

  /* ---------- consent banner (GA4 Consent Mode v2 defaults to denied) ---------- */
  function consent() {
    var c = store('loqelo.consent');
    window.dataLayer.push(['consent', 'default', { analytics_storage: c === 'granted' ? 'granted' : 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' }]);
    var bar = document.querySelector('.lq-consent');
    if (!bar) return;
    if (!c) setTimeout(function () { bar.hidden = false; requestAnimationFrame(function () { bar.classList.add('is-in'); }); }, 1600);
    function set(v) { store('loqelo.consent', v); window.dataLayer.push(['consent', 'update', { analytics_storage: v }]); bar.classList.remove('is-in'); setTimeout(function () { bar.hidden = true; }, 400); }
    bar.querySelector('[data-consent="granted"]').addEventListener('click', function () { set('granted'); });
    bar.querySelector('[data-consent="denied"]').addEventListener('click', function () { set('denied'); });
    document.querySelectorAll('[data-open-consent]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); bar.hidden = false; requestAnimationFrame(function () { bar.classList.add('is-in'); }); }); });
  }

  L.init = function (pageDict) {
    Object.keys(LANGS).forEach(function (l) { L.dict[l] = Object.assign({}, BASE[l], (pageDict || {})[l] || {}); });
    L.lang = detect();
    buildSwitchers();
    document.querySelectorAll('form.lq-form').forEach(wireForm);
    apply();
    tick(); setInterval(tick, 1000);
    consent();
    document.querySelectorAll('[data-join]').forEach(function (a) {
      a.addEventListener('click', function () { var r = a.getAttribute('data-join'); if (r) L.setRole(r); track('cta_click', { location: a.getAttribute('data-cta') || 'unknown', role: r || 'none' }); });
    });
    var y = document.querySelector('[data-year]'); if (y) y.textContent = new Date().getFullYear();
  };
})();
