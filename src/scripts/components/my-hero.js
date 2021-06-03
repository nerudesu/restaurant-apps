class MyHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">Delicious food is just <mark>one-click</mark> away.</h1>
        <p class="hero-tagline">Easiest way to find your favorite restaurants around you.</p>
      </div>
    </div>
    `;
  }
}

customElements.define('my-hero', MyHero);
