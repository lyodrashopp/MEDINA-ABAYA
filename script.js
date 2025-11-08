// Countdown Timer
function startCountdown() {
    // Set end time (24 hours from now)
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update main countdown
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        
        // Update final countdown
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById('countdown').textContent = "EXPIRED";
            document.getElementById('hours').textContent = "00";
            document.getElementById('minutes').textContent = "00";
            document.getElementById('seconds').textContent = "00";
        }
    }, 1000);
}

// Dynamic Counter Animation
function animateCounter(elementId, targetValue, duration = 2000) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startValue = parseInt(element.textContent);
    const increment = (targetValue - startValue) / (duration / 50);
    let currentValue = startValue;
    
    const counterInterval = setInterval(() => {
        currentValue += increment;
        if ((increment > 0 && currentValue >= targetValue) || (increment < 0 && currentValue <= targetValue)) {
            currentValue = targetValue;
            clearInterval(counterInterval);
        }
        element.textContent = Math.floor(currentValue);
        element.classList.add('counter-animation');
    }, 50);
}

// Update viewer count randomly
function updateViewerCount() {
    const viewerElement = document.getElementById('viewerCount');
    if (!viewerElement) return;
    
    setInterval(() => {
        const currentCount = parseInt(viewerElement.textContent);
        const change = Math.floor(Math.random() * 7) - 3; // Random between -3 and +3
        const newCount = Math.max(50, Math.min(500, currentCount + change));
        viewerElement.textContent = newCount;
    }, 3000);
}

// Update stock count (decreasing over time)
function updateStockCount() {
    const stockElement = document.getElementById('stockCount');
    if (!stockElement) return;
    
    setInterval(() => {
        const currentStock = parseInt(stockElement.textContent);
        if (currentStock > 5) {
            const decrease = Math.random() > 0.7 ? 1 : 0; // 30% chance to decrease
            stockElement.textContent = Math.max(5, currentStock - decrease);
        }
    }, 5000);
}

// Fake Order Popup
const customerNames = [
    { name: 'Ratna Sari', initial: 'RS', region: 'Jakarta Selatan' },
    { name: 'Maya Anggraini', initial: 'MA', region: 'Bandung' },
    { name: 'Dewi Lestari', initial: 'DL', region: 'Surabaya' },
    { name: 'Sarah Putri', initial: 'SP', region: 'Medan' },
    { name: 'Fitri Handayani', initial: 'FH', region: 'Yogyakarta' },
    { name: 'Annisa Rahman', initial: 'AR', region: 'Semarang' },
    { name: 'Nurmaliza', initial: 'NM', region: 'Makassar' },
    { name: 'Citra Dewi', initial: 'CD', region: 'Denpasar' },
    { name: 'Aulia Putri', initial: 'AP', region: 'Palembang' },
    { name: 'Siti Aminah', initial: 'SA', region: 'Batam' }
];

function showOrderPopup() {
    const popup = document.getElementById('orderPopup');
    const customerInfo = customerNames[Math.floor(Math.random() * customerNames.length)];
    
    // Update customer information
    document.getElementById('customerInitial').textContent = customerInfo.initial;
    document.getElementById('customerName').textContent = customerInfo.name;
    document.getElementById('customerRegion').textContent = customerInfo.region;
    
    // Show popup with animation
    popup.classList.remove('hidden');
    setTimeout(() => {
        popup.classList.remove('opacity-0');
        popup.querySelector('.popup-content').classList.add('animate-slide-in-right');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideOrderPopup();
    }, 5000);
}

function hideOrderPopup() {
    const popup = document.getElementById('orderPopup');
    popup.querySelector('.popup-content').classList.remove('animate-slide-in-right');
    popup.classList.add('opacity-0');
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 300);
}

function skipOrderPopup() {
    hideOrderPopup();
}

function swipeUpPopup() {
    const popupContent = document.getElementById('orderPopup').querySelector('.popup-content');
    popupContent.classList.add('swipe-up');
    setTimeout(() => {
        hideOrderPopup();
        popupContent.classList.remove('swipe-up');
    }, 300);
}

// Image Modal Functions
function setupImageGallery() {
    const galleryItems = document.querySelectorAll('.product-gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            modalImage.src = this.src;
            modal.classList.remove('hidden');
        });
    });
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown
    startCountdown();
    
    // Start dynamic counters
    updateViewerCount();
    updateStockCount();
    
    // Animate initial counters
    setTimeout(() => {
        animateCounter('viewerCount', 247, 1500);
        animateCounter('stockCount', 15, 1500);
    }, 500);
    
    // Setup image gallery
    setupImageGallery();
    
    // Show first popup after 3 seconds
    setTimeout(() => {
        showOrderPopup();
    }, 3000);
    
    // Show popup every 15 seconds
    setInterval(() => {
        if (Math.random() > 0.3) { // 70% chance
            showOrderPopup();
        }
    }, 15000);
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
    
    // Close modal on background click
    document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeImageModal();
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Initialize OrderOnline embed script when page loads
window.addEventListener('load', function() {
    if (typeof xLogError != 'function') {
        var xLogError = function (error) {
            var req = new XMLHttpRequest();
            var payload = JSON.stringify({ url: document.location.href, line: error.line, stack: error.stack });
            var params = 'message=' + encodeURIComponent(error.name) + '&payload=' + encodeURIComponent(payload) + '&type=embed&level=error';
            req.open('POST', 'https://api.orderonline.id/log', true);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.send(params);
        };
    }
    try {
        if (typeof xEmbedScript != 'function') {
            var xEmbedScript = function () {
                !function(w, d, e, v, id, t, s) {
                    if (d.getElementById(id)) return; t = d.createElement(e);t.async = !0;t.src = v;t.id = id;
                    s = d.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
                }(window, document, 'script', 'https://cdn.orderonline.id/js/embed-v2-slim.min.js?v=8.0.4', 'oo-embed-js');
            };
        }
        if (typeof xEmbedInit != 'function') {
            var xEmbedInit = function (w, n) {
                if (w.ooe) return; n = w.ooe = function() { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
                if (!w._ooe) w._ooe = n; n.push = n;n.loaded = !0;n.version = '8.0.4';n.queue = [];
            };
        }
        xEmbedInit(window);
        ooe('setup', 'redirect', 'https://luna.orderonline.id');
        ooe('init', '5f1133129d8e8e34501812c2', '690f4170b651c3563d0d6253', '690f4171b651c3563d0d6254', 'oo-embed-form-medina-abaya-series-4671', {"mode":"page","action":"Klik untuk pemesanan","title":"Form Pemesanan","triggerPixel":true,"triggerGtm":false});
        if (!window.jQuery) {
            !function(w, d, e, v, id, t, s) {
                if (d.getElementById(id)) return; t = d.createElement(e);t.async = !0;t.src = v;t.id = id;
                t.addEventListener('load', xEmbedScript); s = d.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
            }(window, document, 'script', 'https://cdn.orderonline.id/js/vendor/jquery.min.js', 'oo-embed-jquery');
        } else {
            xEmbedScript();
        }
    } catch (e) {
        xLogError(e);
        throw e;
    }
});
