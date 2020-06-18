class App extends HTMLElement {
  constructor() {
    super();
    const ShadowRoot = this.attachShadow({mode: 'open'});
    ShadowRoot.innerHTML = this.template();
  }

  template() {
    return `
      <p>Hoge(This is Shadow Element!)</p>
    `;
  }
}

window.onload = (() => {
  customElements.define('my-app', App);
});
