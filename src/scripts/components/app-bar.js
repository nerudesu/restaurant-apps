class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <!-- Mobile Navbar -->
        <div class="menumob">
          <img src="images/logo/logo.webp" alt="Company Logo">
          <a class="nav-menu" id="menu" aria-label="menu">
            <i class="fas fa-bars"></i>
          </a>
        </div>

        <nav id="drawer" class="navmob">
          <ul class="navlistmob">
            <li class="navitemsmob"><a href="#/home" class="active">Home</a></li>
            <li class="navitemsmob"><a href="#favorite">Favorite</a></li>
            <li class="navitemsmob"><a href="https://github.com/nerudesu" target="_blank" rel="noreferrer">About Us</a></li>
          </ul>
        </nav>

        <!-- Desktop Navbar -->
        <nav class="nav">
          <img src="images/logo/logo.webp" alt="Company Logo">
          <ul class="navlist">
            <li class="navitems"><a href="#/home" class="active">Home</a></li>
            <li class="navitems"><a href="#favorite">Favorite</a></li>
            <li class="navitems"><a href="https://github.com/nerudesu" target="_blank" rel="noreferrer" id="aboutus">About Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
