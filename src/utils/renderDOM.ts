const renderDOM = (query: string, block: HTMLElement | any): HTMLElement => {

  const root = document.querySelector(query);
  root && root.appendChild(block.getContent())

  block.dispatchComponentDidMount()

  return root  as HTMLElement;
}

export default renderDOM;