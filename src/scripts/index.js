/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/navi.css';
import '../styles/skip-link.css';
import '../styles/hero.css';
import '../styles/spinner.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import '../styles/snackbar.css';

import './components/app-bar';
import './components/my-hero';
import './components/my-footer';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './views/app';
import swRegister from './utils/sw-register';

// Navigation
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
