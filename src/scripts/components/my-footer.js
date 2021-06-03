class MyFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer">
      <div class="footer-copyright">
        <span class="white-text">© 2021 Phionsoft Studios</span>
      </div>
    </footer>
    `;
  }
}

customElements.define('my-footer', MyFooter);
