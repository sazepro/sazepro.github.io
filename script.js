function switchLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

    // Update active button
    document.getElementById('en-btn').classList.toggle('active', lang === 'en');
    document.getElementById('fa-btn').classList.toggle('active', lang === 'fa');

    // Update all texts
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(lang === 'fa' ? 'data-fa' : 'data-en');
    });
}

// Load English by default
window.onload = () => switchLang('en');
