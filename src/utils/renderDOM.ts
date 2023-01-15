import { Block } from "../services/Block";

const renderDOM = (query: string, block:  Block): HTMLElement => {
  const root = document.querySelector(query);
  root && root.appendChild(block.getContent());
  block.dispatchComponentDidMount();

  return root as HTMLElement;
};

export { renderDOM };
