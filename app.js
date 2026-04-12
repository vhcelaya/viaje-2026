// State
var currentView = null;
var showTimer = null;

function navigate(view) {
  if (view) {
    window.location.hash = view;
  } else {
    history.pushState(null, '', window.location.pathname);
    activateView('home');
  }
}

function activateView(id) {
  if (currentView === id) return;
  currentView = id;
  if (showTimer) { clearTimeout(showTimer); showTimer = null; }

  document.querySelectorAll('.view').forEach(function(v) {
    v.classList.remove('active');
    v.querySelectorAll('.fade-in.visible').forEach(function(el) {
      el.classList.remove('visible');
      scrollObs.unobserve(el);
    });
  });

  var target = document.getElementById('view-' + id);
  if (!target) return;
  target.classList.add('active');
  window.scrollTo(0, 0);

  showTimer = setTimeout(function() {
    var items = target.querySelectorAll('.fade-in');
    var vh = window.innerHeight;
    var delay = 0;
    items.forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < vh + 50) {
        (function(e, d) {
          setTimeout(function() { e.classList.add('visible'); }, d);
        })(el, delay);
        delay += 100;
      } else {
        scrollObs.observe(el);
      }
    });
  }, 60);

  var backBtn = document.querySelector('.nav-back');
  backBtn.style.display = (id === 'home') ? 'none' : 'block';

  document.querySelectorAll('.nav-links a').forEach(function(a) { a.classList.remove('active'); });
  var activeLink = document.querySelector('.nav-links a[href="#' + id + '"]');
  if (activeLink) activeLink.classList.add('active');
}

window.addEventListener('hashchange', function() {
  activateView(window.location.hash.slice(1) || 'home');
});

function toggleDay(el) {
  el.classList.toggle('open');
}

var scrollObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.addEventListener('DOMContentLoaded', function() {
  activateView(window.location.hash.slice(1) || 'home');
});
