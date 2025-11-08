class PopupOrder extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 999;
                }
                
                #orderPopup {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                }
                
                #orderPopup.show {
                    opacity: 1;
                    pointer-events: all;
                }
                
                .popup-content {
                    background: white;
                    border-radius: 20px;
                    padding: 24px;
                    max-width: 320px;
                    width: 90%;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                    transform: translateX(100%);
                    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
                
                .popup-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 16px;
                }
                
                .customer-avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 18px;
                    color: white;
                    margin-right: 12px;
                    background: linear-gradient(135deg, #f59e0b, #e11d48);
                }
                
                .customer-info h4 {
                    margin: 0;
                    font-size: 16px;
                    color: #1f2937;
                }
                
                .customer-info p {
                    margin: 2px 0 0;
                    font-size: 14px;
                    color: #6b7280;
                }
                
                .order-message {
                    background: #fef3c7;
                    border-left: 4px solid #f59e0b;
                    padding: 12px;
                    margin-bottom: 16px;
                    border-radius: 8px;
                }
                
                .order-message p {
                    margin: 0;
                    color: #92400e;
                    font-size: 14px;
                }
                
                .product-info {
                    display: flex;
                    align-items: center;
                    background: #f9fafb;
                    padding: 12px;
                    border-radius: 8px;
                    margin-bottom: 16px;
                }
                
                .product-info img {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-right: 12px;
                }
                
                .product-info div {
                    flex: 1;
                }
                
                .product-info h5 {
                    margin: 0 0 4px;
                    font-size: 14px;
                    color: #1f2937;
                }
                
                .product-info p {
                    margin: 0;
                    font-size: 16px;
                    font-weight: bold;
                    color: #e11d48;
                }
                
                .popup-actions {
                    display: flex;
                    gap: 12px;
                    margin-top: 16px;
                }
                
                .popup-button {
                    flex: 1;
                    padding: 10px;
                    border: none;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .popup-button.skip {
                    background: #f3f4f6;
                    color: #6b7280;
                }
                
                .popup-button.skip:hover {
                    background: #e5e7eb;
                }
                
                .popup-button.order {
                    background: linear-gradient(135deg, #f59e0b, #e11d48);
                    color: white;
                }
                
                .popup-button.order:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(225, 29, 72, 0.3);
                }
                
                .swipe-hint {
                    text-align: center;
                    margin-top: 12px;
                    font-size: 12px;
                    color: #9ca3af;
                }
                
                .swipe-hint svg {
                    width: 16px;
                    height: 16px;
                    margin-right: 4px;
                    vertical-align: middle;
                }
                
                /* Touch gestures for mobile */
                @media (max-width: 768px) {
                    .popup-content {
                        touch-action: pan-y;
                    }
                }
            </style>
            
            <div id="orderPopup">
                <div class="popup-content">
                    <div class="popup-header">
                        <div class="customer-avatar" id="customerInitial">JD</div>
                        <div class="customer-info">
                            <h4 id="customerName">John Doe</h4>
                            <p id="customerRegion">Jakarta</p>
                        </div>
                    </div>
                    
                    <div class="order-message">
                        <p>🎉 Baru saja memesan Medina Abaya Series!</p>
                    </div>
                    
                    <div class="product-info">
                        <img src="https://down-id.img.susercontent.com/file/id-11134207-7rasa-m4si7psl0teb80@resize_w900_nl.webp" alt="Medina Abaya">
                        <div>
                            <h5>Medina Abaya Series</h5>
                            <p>Rp 279.000</p>
                        </div>
                    </div>
                    
                    <div class="popup-actions">
                        <button class="popup-button skip" onclick="skipOrderPopup()">
                            Lewati
                        </button>
                        <button class="popup-button order" onclick="window.location.href='#order'">
                            Pesan Sekarang
                        </button>
                    </div>
                    
                    <div class="swipe-hint">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                        Swipe up untuk tutup
                    </div>
                </div>
            </div>
        `;
        
        // Add touch gesture for swipe up
        const popupContent = this.shadowRoot.querySelector('.popup-content');
        let startY = 0;
        let currentY = 0;
        
        popupContent.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });
        
        popupContent.addEventListener('touchmove', (e) => {
            currentY = e.touches[0].clientY;
            const deltaY = startY - currentY;
            
            if (deltaY > 50) {
                popupContent.style.transform = `translateY(-${deltaY}px)`;
            }
        });
        
        popupContent.addEventListener('touchend', () => {
            const deltaY = startY - currentY;
            if (deltaY > 100) {
                if (typeof swipeUpPopup === 'function') {
                    swipeUpPopup();
                } else {
                    const orderPopup = document.getElementById('orderPopup');
                    if (orderPopup) {
                        orderPopup.classList.remove('show');
                        setTimeout(() => {
                            orderPopup.classList.add('hidden');
                        }, 300);
                    }
                }
            } else {
                popupContent.style.transform = '';
            }
        });
    }
}

customElements.define('popup-order', PopupOrder);
