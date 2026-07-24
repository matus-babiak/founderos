(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.rail-nav a'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });

  function setActive(id) {
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
    sections.forEach(function (s) { if (s) io.observe(s); });
  }

  var STORAGE_KEY = 'strategia-open-questions-v1';
  var store = {};
  try { store = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) { store = {}; }

  var items = document.querySelectorAll('.open-item');
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
    });
  });
})();
