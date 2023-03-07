import { build, append } from './utils/dom-helper.js';

const app = append(
  document.querySelector<HTMLElement>('#app')!, 
  build('p', { text: 'hello...' })
);
