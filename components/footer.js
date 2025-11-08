class Footer extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: linear-gradient(135deg, #1f2937, #374151);
                    color: white;
                    padding: 3rem 0 1rem;
                    margin-top: 4rem;
                }
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                .footer-section h3 {
                    margin-bottom: 1rem;
                    color: #f59e0b;
                    font-size: 1.25rem;
                }
                .footer-section p, .footer-section a {
                    color: #9ca3af;
                    text-decoration: none;
                    line-height: 1.8;
                    transition: color 0.3s ease;
                }
                .footer-section a:hover {
                    color: #f59e0b;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .social-link {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                .social-link:hover {
                    background: #f59e0b;
                    transform: translateY(-3px);
                }
                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: 1rem;
                    text-align: center;
                    color: #6b7280;
                }
                .payment-methods {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                    margin-top: 1rem;
                }
                .payment-badge {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                    font-size: 0.875rem;
                }
            </style>
            <footer>
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>Tentang Produk kami</h3>
                            <p>Menyediakan gamis premium berkualitas tinggi untuk wanita muslimah modern. Dapatkan koleksi eksklusif dengan desain elegan dan bahan terbaik.</p>
                            <div class="social-links">
                                <a href="#" class="social-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a href="#" class="social-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                                    </svg>
                                </a>
                                <a href="#" class="social-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="footer-section">
                            <h3>Layanan Pelanggan</h3>
                            <p><a href="#">Cara Pemesanan</a></p>
                            <p><a href="#">Pengiriman</a></p>
                            <p><a href="#">Pengembalian</a></p>
                            <p><a href="#">FAQ</a></p>
                            <p><a href="#">Hubungi Kami</a></p>
                        </div>
                        <div class="footer-section">
                            <h3>Metode Pembayaran</h3>
                            <p>Kami menerima berbagai metode pembayaran yang aman dan terpercaya:</p>
                            <div class="payment-methods">
                                <span class="payment-badge">BCA</span>
                                <span class="payment-badge">Mandiri</span>
                                <span class="payment-badge">BNI</span>
                                <span class="payment-badge">BRI</span>
                                <span class="payment-badge">Gopay</span>
                                <span class="payment-badge">OVO</span>
                                <span class="payment-badge">DANA</span>
                            </div>
                        </div>
                        <div class="footer-section">
                            <h3>Hubungi Kami</h3>
                            <p><strong>Alamat:</strong> Jakarta, Indonesia</p>
                            <p><strong>Jam Operasional:</strong> Senin - Sabtu, 09:00 - 17:00</p>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2024 .All rights reserved. | Privacy Policy | Terms of Service</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
