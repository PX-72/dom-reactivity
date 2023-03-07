export type HtmlElementBuilderOptions = {
  text?: string;
  style?: string;
  className?: string;
  visible?: boolean;
  attributes?: object;
  eventType?: string;
  eventCallback?: (e: HTMLElement) => void;
};

export const build = (type: string, options: HtmlElementBuilderOptions = {}): HTMLElement => {
  const { text, style = '', className = '', visible = true, attributes = {}, eventType, eventCallback } = options;

  const element = document.createElement(type);
  if (text) element.innerText = text;

  if (!visible) {
    element.style.display = 'none';
    return element;
  }

  if (style) {
    element.setAttribute('style', style.replace(/\n/g, '').trim());
  } 

  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  if (eventType && eventCallback) {
    element.addEventListener(eventType, () => eventCallback(element));
  }

  return element;
};

export const html = (parent: HTMLElement, ...children: Array<HTMLElement | DocumentFragment>): HTMLElement => {
  for (const childElement of children) parent.appendChild(childElement);
  return parent;
};

export const fragment = (...elements: HTMLElement[]): DocumentFragment => {
  const htmlFragment = document.createDocumentFragment();
  for (const childElement of elements) htmlFragment.appendChild(childElement);
  return htmlFragment;
};

export const toggleVisibility = (elements: HTMLElement[] = [], visibleStyle = 'block'): void => {
  elements.forEach((element) => {
    element.style.display = element.style.display === 'none' ? visibleStyle : 'none';
  });
};

export const button = (text: string, onclick: () => void, style: string = '', className = ''): HTMLElement =>
  build('button', {
    text: text,
    style: style,
    className: className,
    eventType: 'click',
    eventCallback: () => onclick(),
  });