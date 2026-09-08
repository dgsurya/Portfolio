/* =========================================================
   SURYA D G — PORTFOLIO SCRIPT
========================================================= */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(pointer: coarse)').matches;

  /* ---------- 1. PRELOADER ---------- */
  var preloader = document.getElementById('preloader');
  window.addEventListener('load', function () {
    setTimeout(function () {
      if (preloader) preloader.classList.add('hide');
    }, 700);
  });
  // Fallback in case load event is delayed
  setTimeout(function () {
    if (preloader) preloader.classList.add('hide');
  }, 2500);

  /* ---------- 2 & 15. NAVBAR: mobile toggle + scroll effect ---------- */
  var navbar = document.getElementById('navbar');
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  function toggleNav() {
    var isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
  if (hamburger) hamburger.addEventListener('click', toggleNav);

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navLinks.classList.contains('open')) toggleNav();
    });
  });

  function handleNavbarScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /* ---------- 3. ACTIVE NAV HIGHLIGHT (via IntersectionObserver) ---------- */
  var sections = document.querySelectorAll('main .section, .hero');
  var navMap = {};
  document.querySelectorAll('.nav-link').forEach(function (l) {
    navMap[l.dataset.section] = l;
  });

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        Object.keys(navMap).forEach(function (key) {
          navMap[key].classList.toggle('active', key === id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(function (s) {
    if (s.id) sectionObserver.observe(s);
  });

  /* ---------- 4. SMOOTH SCROLL (native CSS handles most; ensure offset) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var targetId = a.getAttribute('href');
      if (targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var offset = 76;
          var top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: reducedMotion ? 'auto' : 'smooth' });
        }
      }
    });
  });

  /* ---------- 5. SCROLL REVEAL ANIMATIONS ---------- */
  var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(function (el) { revealObserver.observe(el); });

  /* ---------- 6. ANIMATED COUNTERS ---------- */
  var statsRow = document.getElementById('statsRow');
  var counted = false;

  function animateCounters() {
    if (counted) return;
    counted = true;
    document.querySelectorAll('.stat-num').forEach(function (el) {
      var target = parseInt(el.dataset.target, 10) || 0;
      var suffix = el.dataset.suffix || '';
      var duration = 1200;
      var start = null;

      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + (progress === 1 ? suffix : '');
        if (progress < 1) requestAnimationFrame(step);
      }
      if (reducedMotion) {
        el.textContent = target + suffix;
      } else {
        requestAnimationFrame(step);
      }
    });
  }

  if (statsRow) {
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.4 });
    statsObserver.observe(statsRow);
  }

  /* ---------- 7. ROLE CHANGING TEXT ---------- */
  var roles = ['AI/ML Engineer', 'Data Science Enthusiast', 'Python Developer', 'Deep Learning Explorer'];
  var roleEl = document.getElementById('roleText');
  var roleIndex = 0;

  if (roleEl && !reducedMotion) {
    setInterval(function () {
      roleIndex = (roleIndex + 1) % roles.length;
      roleEl.style.opacity = '0';
      setTimeout(function () {
        roleEl.textContent = roles[roleIndex];
        roleEl.style.opacity = '1';
        roleEl.style.animation = 'none';
        void roleEl.offsetWidth;
        roleEl.style.animation = 'roleFade .5s cubic-bezier(0.22,1,0.36,1)';
      }, 260);
    }, 2600);
  }

  /* ---------- 8 & 14. CERTIFICATE MODAL ---------- */
  var certModal = document.getElementById('certModal');
  var certModalBackdrop = document.getElementById('certModalBackdrop');
  var certModalClose = document.getElementById('certModalClose');
  var modalImg = document.getElementById('modalImg');
  var modalTitle = document.getElementById('modalTitle');
  var modalIssuer = document.getElementById('modalIssuer');
  var modalVerify = document.getElementById('modalVerify');
  var lastFocused = null;

  function imgSrcFromKey(key) {
    return 'images/' + key + '.jpg';
  }

  function openCertModal(btn) {
    var key = btn.dataset.cert;
    var title = btn.dataset.title || '';
    var issuer = btn.dataset.issuer || '';
    var verify = btn.dataset.verify || '';
    var issued = btn.dataset.issued || '';

    modalImg.src = imgSrcFromKey(key);
    modalImg.alt = title + ' certificate';
    modalTitle.textContent = title;
    modalIssuer.textContent = issuer + (issued ? ' \u00B7 ' + issued : '');

    if (verify) {
      modalVerify.href = verify;
      modalVerify.style.display = 'inline-flex';
    } else {
      modalVerify.style.display = 'none';
    }

    lastFocused = document.activeElement;
    certModal.classList.add('open');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    certModalClose.focus();
  }

  function closeCertModal() {
    certModal.classList.remove('open');
    certModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('.cert-img-btn, .cert-link-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { openCertModal(btn); });
  });

  if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
  if (certModalBackdrop) certModalBackdrop.addEventListener('click', closeCertModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && certModal.classList.contains('open')) {
      closeCertModal();
    }
  });

  /* ---------- 9. CERTIFICATE FILTERS ---------- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var certCards = document.querySelectorAll('.cert-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.dataset.filter;

      certCards.forEach(function (card) {
        var cats = (card.dataset.cat || '').split(' ');
        var show = filter === 'all' || cats.indexOf(filter) !== -1;
        card.style.transition = 'opacity .35s ease, transform .35s ease';
        if (show) {
          card.classList.remove('hidden');
          requestAnimationFrame(function () {
            card.style.opacity = '1';
            card.style.transform = 'none';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(function () {
            if (card.style.opacity === '0') card.classList.add('hidden');
          }, 350);
        }
      });
    });
  });

  /* ---------- 10. SCROLL PROGRESS ---------- */
  var scrollProgress = document.getElementById('scrollProgress');
  function updateScrollProgress() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = pct + '%';
  }

  /* ---------- 11. BACK TO TOP ---------- */
  var backToTop = document.getElementById('backToTop');
  function updateBackToTop() {
    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 500);
  }
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Combined scroll listener (perf) ---------- */
  var ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        handleNavbarScroll();
        updateScrollProgress();
        updateBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 12. LIGHTWEIGHT PARTICLES ---------- */
  var particleField = document.getElementById('particleField');
  if (particleField && !reducedMotion) {
    var count = isTouch ? 12 : 28;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var p = document.createElement('span');
      p.className = 'particle';
      var size = 2 + Math.random() * 3;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = (Math.random() * 20 - 10) + '%';
      p.style.animationDuration = (14 + Math.random() * 14) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      frag.appendChild(p);
    }
    particleField.appendChild(frag);
  }

  /* ---------- 13. MAGNETIC HOVER (desktop only) ---------- */
  // Mouse-following magnetic effect: elements with [data-magnet] drift
  // toward the cursor within a padding radius, then ease back on exit.
  if (!isTouch && !reducedMotion) {
    document.querySelectorAll('[data-magnet]').forEach(function (el) {
      var strength = parseFloat(el.dataset.magnetStrength) || 4;
      var padding = parseFloat(el.dataset.magnetPadding) || 100;
      el.style.willChange = 'transform';

      function onMove(e) {
        var rect = el.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = e.clientX - cx;
        var dy = e.clientY - cy;
        var dist = Math.hypot(dx, dy);
        var reach = Math.max(rect.width, rect.height) / 2 + padding;

        if (dist < reach) {
          el.style.transition = 'transform 0.3s ease-out';
          el.style.transform = 'translate3d(' + (dx / strength) + 'px,' + (dy / strength) + 'px,0)';
        } else {
          resetMagnet();
        }
      }
      function resetMagnet() {
        el.style.transition = 'transform 0.6s ease-in-out';
        el.style.transform = 'translate3d(0,0,0)';
      }
      window.addEventListener('mousemove', onMove, { passive: true });
      el.addEventListener('mouseleave', resetMagnet);
    });
  }

  /* ---------- 16. MARQUEE (dual-direction, scroll-linked) ---------- */
  var marqueeSection = document.querySelector('.marquee-section');
  var row1 = document.getElementById('marqueeRow1');
  var row2 = document.getElementById('marqueeRow2');

  if (marqueeSection && row1 && row2) {
    var certImages = [
      { src: 'images/ai-fundamentals.jpg', label: 'AI Fundamentals' },
      { src: 'images/deep-learning-tensorflow.jpg', label: 'Deep Learning · TensorFlow' },
      { src: 'images/data-science-internship-tech-vedhu.jpg', label: 'Data Science Internship' },
      { src: 'images/ai-ml-internship-averixis.jpg', label: 'AI & ML Internship' },
      { src: 'images/rdbms-ibm.jpg', label: 'RDBMS' },
      { src: 'images/python-internship-codtech.jpg', label: 'Python Internship' }
    ];
    var skillWords = ['Python', 'Machine Learning', 'TensorFlow', 'Deep Learning', 'SQL', 'Data Science'];

    function buildTiles(items, count) {
      var frag = document.createDocumentFragment();
      for (var i = 0; i < count; i++) {
        var item = items[i % items.length];
        var tile = document.createElement('div');
        if (item.src) {
          tile.className = 'marquee-tile';
          var img = document.createElement('img');
          img.src = item.src; img.alt = ''; img.loading = 'lazy';
          var span = document.createElement('span');
          span.textContent = item.label;
          tile.appendChild(img); tile.appendChild(span);
        } else {
          tile.className = 'marquee-tile ' + (i % 3 === 0 ? 'accent-tile' : 'text-tile');
          var span2 = document.createElement('span');
          span2.textContent = item.label;
          tile.appendChild(span2);
        }
        frag.appendChild(tile);
      }
      return frag;
    }

    row1.appendChild(buildTiles(certImages, certImages.length * 3));
    row2.appendChild(buildTiles(skillWords.map(function (w) { return { label: w }; }), skillWords.length * 3));

    if (!reducedMotion) {
      var row1Width = 0, row2Width = 0;
      function measure() {
        row1Width = row1.scrollWidth / 3;
        row2Width = row2.scrollWidth / 3;
      }
      measure();
      window.addEventListener('resize', measure);

      var mTicking = false;
      function updateMarquee() {
        var sectionTop = marqueeSection.getBoundingClientRect().top + window.scrollY;
        var offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        var o1 = ((offset % row1Width) + row1Width) % row1Width;
        var o2 = ((offset % row2Width) + row2Width) % row2Width;
        row1.style.transform = 'translateX(' + (-o1) + 'px)';
        row2.style.transform = 'translateX(' + (o2 - row2Width) + 'px)';
        mTicking = false;
      }
      window.addEventListener('scroll', function () {
        if (!mTicking) { requestAnimationFrame(updateMarquee); mTicking = true; }
      }, { passive: true });
      updateMarquee();
    }
  }

  /* ---------- 17. CHARACTER-REVEAL (About intro line) ---------- */
  var charEl = document.getElementById('aboutCharReveal');
  if (charEl && !reducedMotion) {
    var text = charEl.textContent;
    charEl.textContent = '';
    var chars = [];
    text.split('').forEach(function (ch) {
      var s = document.createElement('span');
      s.className = 'ch';
      s.textContent = ch === ' ' ? '\u00A0' : ch;
      charEl.appendChild(s);
      chars.push(s);
    });

    var charObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          chars.forEach(function (s, i) {
            setTimeout(function () { s.style.opacity = '1'; }, i * 14);
          });
          charObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    charObserver.observe(charEl);
  }

})();
