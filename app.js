/* ==========================================================================
   PURE HEALTHY CARE - INTERACTIVE APP & MULTI-LANGUAGE (i18n) SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  /* ------------------------------------------------------------------------
     1. Multi-Language Translation System (TR, EN, FR)
     ------------------------------------------------------------------------ */
  const translations = {
    tr: {
      navHome: "Ana Sayfa",
      navMenu: "Menü",
      navAbout: "Hakkımızda",
      navContact: "İletişim",
      heroTagline: "LEZZETİN EN SAF HALİ",
      heroSubtitle: "Modern atmosfer ve özenle hazırlanan gurme lezzetler ile tanışın.",
      heroCta: "MENÜ",
      menuTitle: "Menümüz",
      menuSubtitle: "KEŞFETMEYE BAŞLAYIN",
      catBurgerlar: "Burgerlar",
      catKahvalti: "Kahvaltı",
      catCorbalar: "Çorbalar",
      catSalatalar: "Salatalar",
      catMakarnalar: "Makarnalar",
      catTatlilar: "Tatlılar",
      catIcecekler: "İçecekler",
      backToMenu: "Menüye Dön",
      aboutSubtitle: "HAKKIMIZDA",
      aboutTitle: "Pure Deneyimi",
      aboutText: "Pure healthy care Cafe & Bistro, saflığı, tazeliği ve estetiği bir araya getiren modern bir gurme durağıdır. En kaliteli malzemelerle hazırladığımız özel tariflerimizi lezzet tutkunlarıyla buluşturuyoruz.",
      feature1: "Taze & Günlük Malzemeler",
      feature2: "Özel Tarifler",
      feature3: "Nezih & Modern Atmosfer",
      footerTagline: "Lezzetin ve zarafetin buluşma noktası.",
      footerHoursTitle: "Çalışma Saatleri",
      footerHours1: '<i class="fa-regular fa-clock"></i> Pazartesi - Cuma: 08:30 - 23:00',
      footerHours2: '<i class="fa-regular fa-clock"></i> Cumartesi - Pazar: 09:00 - 24:00',
      footerContactTitle: "İletişim & Konum",
      footerAddress: "Merkez Mah. Lezzet Cad. No: 12, İstanbul"
    },
    en: {
      navHome: "Home",
      navMenu: "Menu",
      navAbout: "About Us",
      navContact: "Contact",
      heroTagline: "THE PUREST FORM OF FLAVOR",
      heroSubtitle: "Discover gourmet flavors crafted with care in a modern atmosphere.",
      heroCta: "EXPLORE MENU",
      menuTitle: "Our Menu",
      menuSubtitle: "START EXPLORING",
      catBurgerlar: "Burgers",
      catKahvalti: "Breakfast",
      catCorbalar: "Soups",
      catSalatalar: "Salads",
      catMakarnalar: "Pastas",
      catTatlilar: "Desserts",
      catIcecekler: "Beverages",
      backToMenu: "Back to Menu",
      aboutSubtitle: "ABOUT US",
      aboutTitle: "The Pure Experience",
      aboutText: "Pure healthy care Cafe & Bistro is a modern gourmet destination bringing together purity, freshness, and elegance. We present our signature recipes crafted with the finest ingredients.",
      feature1: "Fresh & Daily Ingredients",
      feature2: "Signature Recipes",
      feature3: "Elegant & Modern Atmosphere",
      footerTagline: "Where flavor meets elegance.",
      footerHoursTitle: "Opening Hours",
      footerHours1: '<i class="fa-regular fa-clock"></i> Monday - Friday: 08:30 - 23:00',
      footerHours2: '<i class="fa-regular fa-clock"></i> Saturday - Sunday: 09:00 - 00:00',
      footerContactTitle: "Contact & Location",
      footerAddress: "Merkez Mah. Lezzet Cad. No: 12, İstanbul"
    },
    fr: {
      navHome: "Accueil",
      navMenu: "Menu",
      navAbout: "À Propos",
      navContact: "Contact",
      heroTagline: "LA FORME LA PLUS PURE DU GOÛT",
      heroSubtitle: "Découvrez des saveurs gourmandes préparées avec soin dans une atmosphère moderne.",
      heroCta: "DÉCOUVRIR LE MENU",
      menuTitle: "Notre Menu",
      menuSubtitle: "COMMENCEZ À EXPLORER",
      catBurgerlar: "Burgers",
      catKahvalti: "Petit-déjeuner",
      catCorbalar: "Soupes",
      catSalatalar: "Salades",
      catMakarnalar: "Pâtes",
      catTatlilar: "Desserts",
      catIcecekler: "Boissons",
      backToMenu: "Retour au Menu",
      aboutSubtitle: "À PROPOS DE NOUS",
      aboutTitle: "L'Expérience Pure",
      aboutText: "Pure healthy care Cafe & Bistro est une destination gourmande moderne alliant pureté, fraîcheur et élégance. Nous présentons nos recettes spéciales conçues avec les meilleurs ingrédients.",
      feature1: "Ingrédients Frais et Quotidiens",
      feature2: "Recettes Signatures",
      feature3: "Atmosphère Élégante et Moderne",
      footerTagline: "Où le goût rencontre l'élégance.",
      footerHoursTitle: "Heures d'Ouverture",
      footerHours1: '<i class="fa-regular fa-clock"></i> Lundi - Vendredi : 08h30 - 23h00',
      footerHours2: '<i class="fa-regular fa-clock"></i> Samedi - Dimanche : 09h00 - 00h00',
      footerContactTitle: "Contact & Emplacement",
      footerAddress: "Merkez Mah. Lezzet Cad. No: 12, İstanbul"
    }
  };

  let currentLang = 'tr';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Update active button state across header & mobile drawer
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Translate all elements with data-i18n
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (key.startsWith('footerHours')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Save language preference in localStorage
    try {
      localStorage.setItem('pure_cafe_lang', lang);
    } catch (e) {}
  }

  // Language button click listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  /* ------------------------------------------------------------------------
     2. Smooth 60fps Navbar Scroll & Active Link Handling
     ------------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const allSections = document.querySelectorAll('section[id], footer[id]');
  let isTicking = false;

  function handleNavbarScroll() {
    const scrollY = window.scrollY;
    
    // Smooth threshold switch to prevent rapid toggle flickering
    if (scrollY > 35) {
      navbar.classList.add('scrolled');
    } else if (scrollY < 15) {
      navbar.classList.remove('scrolled');
    }

    let current = '';

    // Bottom of page check for İletişim / Contact footer section
    if ((window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 80)) {
      current = 'contact';
    } else {
      allSections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    isTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(handleNavbarScroll);
      isTicking = true;
    }
  }, { passive: true });

  // Smooth scroll handler for Navbar links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight + 10;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  /* ------------------------------------------------------------------------
     3. Mobile Drawer Navigation & Backdrop Overlay
     ------------------------------------------------------------------------ */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (drawerOverlay) drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (drawerOverlay) drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMobileDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  /* ------------------------------------------------------------------------
     4. Dedicated Category Detail Modal
     ------------------------------------------------------------------------ */
  const visualCatCards = document.querySelectorAll('.visual-cat-card');
  const categoryDetailModal = document.getElementById('categoryDetailModal');
  const categoryDetailOverlay = document.getElementById('categoryDetailOverlay');
  const closeCategoryModalBtn = document.getElementById('closeCategoryModalBtn');
  const btnBackToMenu = document.getElementById('btnBackToMenu');
  const categoryDetailTitle = document.getElementById('categoryDetailTitle');
  const categoryDetailBody = document.getElementById('categoryDetailBody');

  const categoryItemsData = {
    burgerlar: {
      tr: { title: 'Burgerlar', text: 'Bu kategoriye henüz ürün eklenmedi. Yakında gurme ekmek arası lezzetlerimiz ve enfes burger çeşitlerimiz hizmetinizde.' },
      en: { title: 'Burgers', text: 'No products added to this category yet. Our gourmet burgers and signature sandwiches are coming soon.' },
      fr: { title: 'Burgers', text: 'Aucun produit ajouté à cette catégorie pour le moment. Nos burgers gastronomiques arrivent bientôt.' }
    },
    kahvalti: {
      tr: { title: 'Kahvaltı', text: 'Bu kategoriye henüz ürün eklenmedi. Zengin serpme ve tabağında kahvaltı çeşitlerimiz eklenme aşamasındadır.' },
      en: { title: 'Breakfast', text: 'No products added to this category yet. Our rich breakfast platters are being prepared.' },
      fr: { title: 'Petit-déjeuner', text: 'Aucun produit ajouté pour le moment. Nos formules petit-déjeuner fraîches arrivent bientôt.' }
    },
    corbalar: {
      tr: { title: 'Çorbalar', text: 'Bu kategoriye henüz ürün eklenmedi. Sıcak ve taze günlük çorba çeşitlerimiz yakında burada.' },
      en: { title: 'Soups', text: 'No products added to this category yet. Fresh daily soups coming soon.' },
      fr: { title: 'Soupes', text: 'Aucun produit ajouté pour le moment. Nos soupes fraîches du jour arrivent bientôt.' }
    },
    salatalar: {
      tr: { title: 'Salatalar', text: 'Bu kategoriye henüz ürün eklenmedi. Taptaze, ferahlatıcı ve sağlıklı salata çeşitlerimiz hazırlanıyor.' },
      en: { title: 'Salads', text: 'No products added to this category yet. Fresh, healthy, and crisp salads coming soon.' },
      fr: { title: 'Salades', text: 'Aucun produit ajouté pour le moment. Nos salades fraîches et équilibrées arrivent bientôt.' }
    },
    makarnalar: {
      tr: { title: 'Makarnalar', text: 'Bu kategoriye henüz ürün eklenmedi. İtalyan usulü taze soslu makarnalarımız yakında sizlerle.' },
      en: { title: 'Pastas', text: 'No products added to this category yet. Italian fresh sauced pastas coming soon.' },
      fr: { title: 'Pâtes', text: 'Aucun produit ajouté pour le moment. Nos pâtes fraîches à l\'italienne arrivent bientôt.' }
    },
    tatlilar: {
      tr: { title: 'Tatlılar', text: 'Bu kategoriye henüz ürün eklenmedi. Nefis ev yapımı tatlı ve pasta çeşitlerimiz eklenme aşamasındadır.' },
      en: { title: 'Desserts', text: 'No products added to this category yet. Delicious homemade desserts coming soon.' },
      fr: { title: 'Desserts', text: 'Aucun produit ajouté pour le moment. Nos délicieux desserts maison arrivent bientôt.' }
    },
    icecekler: {
      tr: { title: 'İçecekler', text: 'Bu kategoriye henüz ürün eklenmedi. Sıcak kahve çeşitlerimiz ve soğuk özel içeceklerimiz yakında burada.' },
      en: { title: 'Beverages', text: 'No products added to this category yet. Hot coffee specialties and cold drinks coming soon.' },
      fr: { title: 'Boissons', text: 'Aucun produit ajouté pour le moment. Nos cafés spécialisés et boissons fraîches arrivent bientôt.' }
    }
  };

  function openCategoryDetail(categoryKey, defaultTitle) {
    const langData = (categoryItemsData[categoryKey] && categoryItemsData[categoryKey][currentLang]) 
      ? categoryItemsData[categoryKey][currentLang] 
      : { title: defaultTitle, text: 'Menu items coming soon.' };

    const suffix = currentLang === 'en' ? 'Menu' : (currentLang === 'fr' ? 'Menu' : 'Menüsü');
    categoryDetailTitle.textContent = `${langData.title} ${suffix}`;

    categoryDetailBody.innerHTML = `
      <div class="empty-category-card" style="padding: 4rem 2rem; background: var(--bg-secondary); border-radius: 16px; text-align: center; border: 1px dashed var(--border-color);">
        <div class="empty-icon" style="width:64px; height:64px; margin:0 auto 1.2rem; background:var(--accent-green-light); color:var(--accent-green); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.5rem;">
          <i class="fa-solid fa-utensils"></i>
        </div>
        <h3 style="font-size:1.4rem; color:var(--text-main); margin-bottom:0.6rem; font-weight:700;">${langData.title} ${suffix}</h3>
        <p style="color:var(--text-muted); font-size:0.95rem; max-width:520px; margin:0 auto; line-height:1.6;">${langData.text}</p>
      </div>
    `;

    categoryDetailModal.classList.add('open');
    categoryDetailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCategoryDetail() {
    categoryDetailModal.classList.remove('open');
    categoryDetailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  visualCatCards.forEach(card => {
    card.addEventListener('click', () => {
      const categoryKey = card.getAttribute('data-category');
      const categoryTitle = card.querySelector('.cat-card-title').textContent.trim();
      openCategoryDetail(categoryKey, categoryTitle);
    });
  });

  if (closeCategoryModalBtn) closeCategoryModalBtn.addEventListener('click', closeCategoryDetail);
  if (btnBackToMenu) btnBackToMenu.addEventListener('click', closeCategoryDetail);
  if (categoryDetailOverlay) categoryDetailOverlay.addEventListener('click', closeCategoryDetail);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && categoryDetailModal.classList.contains('open')) {
      closeCategoryDetail();
    }
  });

  /* ------------------------------------------------------------------------
     5. Load Saved Language Preference
     ------------------------------------------------------------------------ */
  try {
    const savedLang = localStorage.getItem('pure_cafe_lang');
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  } catch (e) {}

  console.log('Pure healthy care - Çoklu dil desteği (TR, EN, FR) aktif.');
});
