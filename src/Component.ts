import { build, html, fragment, button } from './utils/dom-helper.js';
import { createSignal, createEffect } from './utils/reactivity.js';

const BUTTON_STYLE = `
  outline: 0;
  border: none;
  cursor: pointer;
  border-radius: 0.6rem;
  height: 2rem;
  background-color: #b4b0b06d;
  color: #0e0e10;
  padding: 0 1rem;
  margin-left: 2rem;
`;

const Component = (): DocumentFragment => {
  const [getCounter, setCounter] = createSignal(0);
  const counterElement = build('span');

  createEffect(() => {
    counterElement.innerText = getCounter().toString();
  });

  return fragment(
    html(build('p', { text: 'Counter: ' }), counterElement),
    button('Add', () => setCounter(getCounter() + 1), BUTTON_STYLE)
  );
};

export default Component;
