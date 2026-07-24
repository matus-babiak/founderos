(function () {
  var STORAGE_KEY = 'strategia-open-questions-v1';
  var THEME_KEY = 'founderos-theme';

  /* ---------- theme toggle ---------- */
  function currentTheme() {
    var attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'dark' || attr === 'light') return attr;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  });

  /* ---------- mobile drawer ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var drawer = document.getElementById('drawer');
  var drawerClose = document.getElementById('drawerClose');
  var drawerBackdrop = document.getElementById('drawerBackdrop');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (menuToggle && drawer) {
    menuToggle.addEventListener('click', function () {
      drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });
    drawerClose.addEventListener('click', closeDrawer);
    drawerBackdrop.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
    drawer.querySelectorAll('.drawer-nav a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });
  }

  /* ---------- nav active highlight (sidebar + drawer) ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.rail-nav a, .drawer-nav a'));
  var sectionIds = [];
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    if (sectionIds.indexOf(id) === -1) sectionIds.push(id);
  });
  var sections = sectionIds.map(function (id) { return document.getElementById(id); });

  function setActive(id) {
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  }

  if ('IntersectionObserver' in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
    sections.forEach(function (s) { if (s) navObserver.observe(s); });
  }

  /* ---------- reveal on scroll ---------- */
  document.documentElement.classList.add('reveal-ready');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('revealed'); });
  }

  /* ---------- animated dashboard: progress fill + count up ---------- */
  var dashGrid = document.querySelector('.dash-grid');
  if (dashGrid && 'IntersectionObserver' in window) {
    var dashObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        dashObserver.unobserve(entry.target);
        entry.target.querySelectorAll('.dash-card').forEach(function (card) {
          var fill = card.querySelector('.progress-fill');
          var pctSpan = card.querySelector('.pct-row span');
          if (!fill || !pctSpan) return;
          var target = parseInt(fill.style.width, 10) || 0;
          var targetLabel = pctSpan.textContent;
          fill.style.width = '0%';
          pctSpan.textContent = '0 %';
          requestAnimationFrame(function () {
            fill.style.width = target + '%';
          });
          var start = null;
          var duration = 1100;
          function step(ts) {
            if (!start) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var value = Math.round(eased * target);
            pctSpan.textContent = value + ' %';
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              pctSpan.textContent = targetLabel;
            }
          }
          requestAnimationFrame(step);
        });
      });
    }, { threshold: 0.3 });
    dashObserver.observe(dashGrid);
  }

  /* ---------- scroll progress bar + back to top ---------- */
  var progressFill = document.getElementById('scrollProgressFill');
  var toTop = document.getElementById('toTop');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var docEl = document.documentElement;
      var scrollTop = docEl.scrollTop || document.body.scrollTop;
      var height = docEl.scrollHeight - docEl.clientHeight;
      var pct = height > 0 ? (scrollTop / height) * 100 : 0;
      if (progressFill) progressFill.style.width = pct + '%';
      if (toTop) toTop.classList.toggle('visible', scrollTop > 600);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- open questions: persistence + live counters ---------- */
  var store = {};
  try { store = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) { store = {}; }

  function updateListCounter(list) {
    var items = list.querySelectorAll('.open-item');
    var total = items.length;
    var checked = list.querySelectorAll('.open-item.checked').length;
    var badge = list.counterBadge;
    if (!badge) return;
    badge.textContent = checked + ' / ' + total + ' vyriešené';
    badge.classList.toggle('complete', total > 0 && checked === total);
  }

  document.querySelectorAll('.open-list').forEach(function (list) {
    var heading = list.previousElementSibling;
    if (heading && heading.classList.contains('subhead')) {
      var badge = document.createElement('span');
      badge.className = 'subhead-counter';
      heading.appendChild(badge);
      list.counterBadge = badge;
    }

    var items = list.querySelectorAll('.open-item');
    items.forEach(function (item) {
      var key = item.getAttribute('data-key');
      var box = item.querySelector('input[type="checkbox"]');
      if (store[key]) {
        box.checked = true;
        item.classList.add('checked');
      }
      box.addEventListener('change', function () {
        item.classList.toggle('checked', box.checked);
        store[key] = box.checked;
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); } catch (e) {}
        updateListCounter(list);
      });
    });
    updateListCounter(list);
  });
})();
