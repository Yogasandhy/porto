type Locale = 'en' | 'id';
type Theme = 'light' | 'dark';

const root = document.documentElement;
const localeButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-locale-button]')];
const themeButton = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const siteHeader = document.querySelector<HTMLElement>('.site-header');
const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

function applyLocale(locale: Locale, persist = true) {
  root.lang = locale;
  root.dataset.locale = locale;

  document.querySelectorAll<HTMLElement>('[data-en][data-id]').forEach((element) => {
    const value = element.dataset[locale];
    if (value === undefined) return;

    const attribute = element.dataset.i18nAttribute;
    if (attribute) element.setAttribute(attribute, value);
    else element.textContent = value;
  });

  document.querySelectorAll<HTMLElement>('[data-aria-label-en][data-aria-label-id]').forEach((element) => {
    element.setAttribute('aria-label', element.dataset[`ariaLabel${locale === 'en' ? 'En' : 'Id'}`] ?? '');
  });

  localeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.localeButton === locale));
  });

  if (description) description.content = description.dataset[locale] ?? description.content;
  if (persist) {
    try { localStorage.setItem('portfolio-locale', locale); } catch { /* Keep the chosen locale for this page view. */ }
  }

  syncThemeLabel(root.dataset.theme === 'dark' ? 'dark' : 'light', locale);
}

function syncThemeLabel(theme: Theme, locale: Locale) {
  if (!themeButton) return;
  const mode = theme === 'dark' ? 'dark' : 'light';
  const language = locale === 'id' ? 'Id' : 'En';
  const label = themeButton.dataset[`themeLabel${mode === 'dark' ? 'Dark' : 'Light'}${language}`] ?? '';
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
  themeButton.setAttribute('aria-pressed', String(mode === 'dark'));
}

function applyTheme(theme: Theme, persist = true) {
  root.dataset.theme = theme;
  if (themeColor) themeColor.content = theme === 'dark' ? '#131720' : '#fbfaf6';
  syncThemeLabel(theme, root.lang === 'id' ? 'id' : 'en');
  if (persist) {
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* The theme remains active until navigation. */ }
  }
}

localeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.localeButton === 'en' || button.dataset.localeButton === 'id') {
      applyLocale(button.dataset.localeButton);
    }
  });
});

themeButton?.addEventListener('click', () => {
  applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

let scrollFramePending = false;
function syncHeaderScrollState() {
  if (!siteHeader) return;
  const isCompact = window.scrollY > 72;
  siteHeader.classList.toggle('is-compact', isCompact);
}

window.addEventListener('scroll', () => {
  if (scrollFramePending) return;
  scrollFramePending = true;
  window.requestAnimationFrame(() => {
    scrollFramePending = false;
    syncHeaderScrollState();
  });
}, { passive: true });
window.addEventListener('pageshow', syncHeaderScrollState);
syncHeaderScrollState();

applyLocale(root.lang === 'id' ? 'id' : 'en', false);
applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light', false);
