class Navbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .navbar {
                    background: white;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: bold;
                    font-size: 1.25rem;
                    background: linear-gradient(135deg, #f59e0b, #e11d48);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .logo img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid #f59e0b;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                .nav-link {
                    color: #4b5563;
                    text-decoration: none;
                    transition: color 0.3s ease;
                    font-weight: 500;
                }
                .nav-link:hover {
                    color: #e11d48;
                }
                .cta-button {
                    background: linear-gradient(135deg, #f59e0b, #e11d48);
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                .cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(225, 29, 72, 0.3);
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                }
            </style>
            <nav class="navbar">
                <div class="navbar-container">
                    <a href="#" class="logo">
                        <img src="https://scontent.fmlg9-1.fna.fbcdn.net/v/t39.30808-6/537194122_122187416900326048_1676337191538174460_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a" alt="FREYANA.ID">
                        FREYANA.ID
                    </a>
                    <div class="nav-links">
                        <a href="#products" class="nav-link">Produk</a>
                        <a href="#testimonials" class="nav-link">Testimoni</a>
                        <a href="#order" class="nav-link">Pesan</a>
                        <a href="#order" class="cta-button">Beli Sekarang</a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('navbar-component', Navbar);
