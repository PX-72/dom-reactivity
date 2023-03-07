import Component from './Component.js';
import { build, html, p, button } from './utils/dom-helper.js';

const app = html(
  document.querySelector<HTMLElement>('#app')!, 
  Component(),
  Component(),
  Component(),
);
