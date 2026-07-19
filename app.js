// Cross-Cultural E-Commerce App
// Handles routing, rendering, dark mode, country switching

let currentCountry = 'usa';
let currentView = 'product';
let cart = [];
let selectedPayment = null;
let darkMode = false;

// Initialize
function init() {
    loadCountry();
    loadTheme();
    render();
}

// Dark Mode Toggle
function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);

    const icon = document.getElementById('themeToggle');
    if (icon) {
        icon.querySelector('.theme-icon').textContent = darkMode ? '☀️' : '🌙';
    }
}

function loadTheme() {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
        darkMode = true;
        document.body.classList.add('dark-mode');
    }
}

// Country Switching
function setCountry(countryCode) {
    currentCountry = countryCode;
    localStorage.setItem('selectedCountry', countryCode);

    // Update dropdown
    const select = document.getElementById('countrySelect');
    if (select) select.value = countryCode;

    // Apply theme and direction
    const data = COUNTRIES[countryCode];
    document.body.setAttribute('data-theme', data.theme);
    document.documentElement.setAttribute('dir', data.dir);
    document.documentElement.setAttribute('lang', 
        countryCode === 'japan' ? 'ja' : 
        countryCode === 'saudi' ? 'ar' : 
        countryCode === 'spain' ? 'es' : 'en'
    );

    // Reset to product view on country change for demo clarity
    currentView = 'product';
    render();
}

function loadCountry() {
    const saved = localStorage.getItem('selectedCountry');
    if (saved && COUNTRIES[saved]) {
        currentCountry = saved;
    }
    // Don't call setCountry here to avoid double render, just apply settings
    const data = COUNTRIES[currentCountry];
    document.body.setAttribute('data-theme', data.theme);
    document.documentElement.setAttribute('dir', data.dir);
    document.documentElement.setAttribute('lang', 
        currentCountry === 'japan' ? 'ja' : 
        currentCountry === 'saudi' ? 'ar' : 
        currentCountry === 'spain' ? 'es' : 'en'
    );

    const select = document.getElementById('countrySelect');
    if (select) select.value = currentCountry;
}

// Navigation
function navigateTo(view) {
    currentView = view;
    render();
    window.scrollTo(0, 0);
}

// Main Render
function render() {
    const app = document.getElementById('app');
    const data = COUNTRIES[currentCountry];

    app.innerHTML = `<div class="view-enter">${getViewHTML(data)}</div>`;

    // Re-attach event listeners after render
    attachListeners();

    // Update theme toggle icon
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.querySelector('.theme-icon').textContent = darkMode ? '☀️' : '🌙';
    }

    // Ensure dropdown matches current country
    const select = document.getElementById('countrySelect');
    if (select) select.value = currentCountry;
}

function getViewHTML(data) {
    switch(currentView) {
        case 'product': return renderProduct(data);
        case 'checkout': return renderCheckout(data);
        case 'confirmation': return renderConfirmation(data);
        default: return renderProduct(data);
    }
}

// ===== PRODUCT PAGE =====
function renderProduct(data) {
    const p = data.product;
    const fmtPrice = formatPrice(p.price, data.currency);
    const fmtOriginal = formatPrice(p.originalPrice, data.currency);

    const trustBadgesHTML = p.trustBadges.map(b => 
        `<div class="trust-badge"><span class="icon">${b.icon}</span>${b.text}</div>`
    ).join('');

    const specsHTML = p.specs.map(s => 
        `<div class="spec-item"><span class="spec-label">${s.label}</span><span class="spec-value">${s.value}</span></div>`
    ).join('');

    const socialProofHTML = p.socialProof ? `<div class="social-proof">${p.socialProof}</div>` : '';

    return `
        <div class="container">
            <div class="product-page">
                <div class="product-image-section">
                    <div class="product-image">🎧</div>
                    <div class="badge-ribbon">${p.badge}</div>
                </div>
                <div class="product-info">
                    <h1 class="product-title">${p.title}</h1>
                    <div class="product-meta">
                        <div class="rating">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '½' : ''} <span style="color:var(--text);margin-left:4px;">${p.rating}</span></div>
                        <span class="review-count">${p.reviewText}</span>
                    </div>
                    <div class="price-section">
                        <span class="price">${fmtPrice}</span>
                        <span class="price-original">${fmtOriginal}</span>
                        <span class="discount-tag">${p.discount}</span>
                    </div>
                    ${socialProofHTML}
                    <p class="product-description">${p.description}</p>
                    <div class="specs-grid">${specsHTML}</div>
                    <div class="trust-badges">${trustBadgesHTML}</div>
                    <div class="action-buttons">
                        <button class="btn btn-primary" onclick="addToCart()">${p.ctaPrimary}</button>
                        <button class="btn btn-secondary" onclick="addToWishlist()">${p.ctaSecondary}</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ===== CHECKOUT PAGE =====
function renderCheckout(data) {
    const c = data.checkout;
    const fmt = n => formatPrice(n, data.currency);

    // Build form fields
    const fieldsHTML = c.fields.map(field => {
        const fullClass = field.full ? 'full' : '';
        let inputHTML = '';

        if (field.type === 'select') {
            const options = field.options.map(o => `<option value="${o}">${o}</option>`).join('');
            inputHTML = `<select name="${field.name}" id="${field.name}">${options}</select>`;
        } else {
            inputHTML = `<input type="${field.type}" name="${field.name}" id="${field.name}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}>`;
        }

        return `
            <div class="form-group ${fullClass}">
                <label for="${field.name}">${field.label}</label>
                ${inputHTML}
            </div>
        `;
    }).join('');

    // Build payment methods
    const paymentHTML = c.paymentMethods.map((pm, idx) => `
        <label class="payment-option ${selectedPayment === pm.id ? 'selected' : ''}" data-payment="${pm.id}">
            <input type="radio" name="payment" value="${pm.id}" ${selectedPayment === pm.id ? 'checked' : ''}>
            <span class="payment-icon">${pm.icon}</span>
            <div class="payment-details">
                <div class="payment-name">${pm.name}</div>
                <div class="payment-desc">${pm.desc}</div>
            </div>
        </label>
    `).join('');

    return `
        <div class="container checkout-page">
            <div class="progress-bar">
                <div class="progress-step completed"><span class="step-number">✓</span> ${getProductLabel()}</div>
                <div class="progress-step active"><span class="step-number">2</span> ${getCheckoutLabel()}</div>
                <div class="progress-step"><span class="step-number">3</span> ${getConfirmLabel()}</div>
            </div>
            <div class="checkout-header">
                <h2>${c.title}</h2>
                <p>${c.subtitle}</p>
            </div>
            <div class="checkout-grid">
                <div class="checkout-form">
                    <div class="form-section">
                        <h3>${c.shippingTitle}</h3>
                        <div class="form-row">${fieldsHTML}</div>
                    </div>
                    <div class="form-section">
                        <h3>${c.paymentTitle}</h3>
                        <div class="payment-methods">${paymentHTML}</div>
                    </div>
                    <button class="btn btn-primary" style="width:100%;" onclick="submitOrder()">${c.submitBtn}</button>
                    <p style="text-align:center;color:var(--text-secondary);font-size:0.875rem;margin-top:0.5rem;">${c.securityNote}</p>
                </div>
                <div class="order-summary">
                    <h3>${getOrderSummaryLabel()}</h3>
                    <div class="summary-item"><span>${getSubtotalLabel()}</span><span>${fmt(c.orderSummary.subtotal)}</span></div>
                    <div class="summary-item"><span>${getShippingLabel()}</span><span>${c.orderSummary.shipping === 0 ? getFreeLabel() : fmt(c.orderSummary.shipping)}</span></div>
                    <div class="summary-item"><span>${getTaxLabel()}</span><span>${fmt(c.orderSummary.tax)}</span></div>
                    <div class="summary-item total"><span>${getTotalLabel()}</span><span>${fmt(c.orderSummary.total)}</span></div>
                </div>
            </div>
        </div>
    `;
}

// ===== CONFIRMATION PAGE =====
function renderConfirmation(data) {
    const c = data.confirmation;
    return `
        <div class="container confirmation-page">
            <div class="progress-bar">
                <div class="progress-step completed"><span class="step-number">✓</span> ${getProductLabel()}</div>
                <div class="progress-step completed"><span class="step-number">✓</span> ${getCheckoutLabel()}</div>
                <div class="progress-step active"><span class="step-number">3</span> ${getConfirmLabel()}</div>
            </div>
            <div class="confirmation-card">
                <div class="confirmation-icon">${c.icon}</div>
                <h2 class="confirmation-title">${c.title}</h2>
                <p class="confirmation-message">${c.message}</p>
                <div class="order-details">
                    <h4>${getOrderDetailsLabel()}</h4>
                    <div class="detail-row"><span>${getOrderNumberLabel()}</span><span style="font-weight:600;">${c.orderNumber}</span></div>
                    <div class="detail-row"><span>${c.deliveryEstimate}</span></div>
                </div>
                <button class="btn btn-primary" onclick="navigateTo('product')">${c.cta}</button>
            </div>
        </div>
    `;
}

// ===== LOCALIZED LABELS =====
function getProductLabel() {
    const labels = { usa: 'Product', japan: '商品', ethiopia: 'ምርት', saudi: 'المنتج', spain: 'Producto' };
    return labels[currentCountry] || 'Product';
}
function getCheckoutLabel() {
    const labels = { usa: 'Checkout', japan: '決済', ethiopia: 'ክፍያ', saudi: 'الدفع', spain: 'Pago' };
    return labels[currentCountry] || 'Checkout';
}
function getConfirmLabel() {
    const labels = { usa: 'Confirm', japan: '確認', ethiopia: 'ማረጋገጫ', saudi: 'تأكيد', spain: 'Confirmar' };
    return labels[currentCountry] || 'Confirm';
}
function getOrderSummaryLabel() {
    const labels = { usa: 'Order Summary', japan: '注文内容', ethiopia: 'የትዕዛዝ ማጠቃለያ', saudi: 'ملخص الطلب', spain: 'Resumen del Pedido' };
    return labels[currentCountry] || 'Order Summary';
}
function getSubtotalLabel() {
    const labels = { usa: 'Subtotal', japan: '小計', ethiopia: 'ዋና ዋጋ', saudi: 'المجموع الفرعي', spain: 'Subtotal' };
    return labels[currentCountry] || 'Subtotal';
}
function getShippingLabel() {
    const labels = { usa: 'Shipping', japan: '送料', ethiopia: 'ደረሰኝ', saudi: 'الشحن', spain: 'Envío' };
    return labels[currentCountry] || 'Shipping';
}
function getTaxLabel() {
    const labels = { usa: 'Tax', japan: '消費税', ethiopia: 'ግብር', saudi: 'الضريبة', spain: 'Impuestos' };
    return labels[currentCountry] || 'Tax';
}
function getTotalLabel() {
    const labels = { usa: 'Total', japan: '合計', ethiopia: 'ጠቅላላ', saudi: 'الإجمالي', spain: 'Total' };
    return labels[currentCountry] || 'Total';
}
function getFreeLabel() {
    const labels = { usa: 'FREE', japan: '無料', ethiopia: 'ነፃ', saudi: 'مجاني', spain: 'GRATIS' };
    return labels[currentCountry] || 'FREE';
}
function getOrderDetailsLabel() {
    const labels = { usa: 'Order Details', japan: '注文詳細', ethiopia: 'የትዕዛዝ ዝርዝሮች', saudi: 'تفاصيل الطلب', spain: 'Detalles del Pedido' };
    return labels[currentCountry] || 'Order Details';
}
function getOrderNumberLabel() {
    const labels = { usa: 'Order Number', japan: '注文番号', ethiopia: 'የትዕዛዝ ቁጥር', saudi: 'رقم الطلب', spain: 'Número de Pedido' };
    return labels[currentCountry] || 'Order Number';
}

// ===== HELPERS =====
function formatPrice(amount, currency) {
    if (currency === '$') return `$${amount.toFixed(2)}`;
    if (currency === '¥') return `¥${amount.toLocaleString()}`;
    if (currency === 'ETB') return `ETB ${amount.toLocaleString()}`;
    if (currency === 'SAR') return `${amount.toFixed(2)} ر.س`;
    if (currency === '€') return `${amount.toFixed(2).replace('.', ',')} €`;
    return `${currency} ${amount}`;
}

function attachListeners() {
    // Payment selection
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.addEventListener('click', function() {
            selectedPayment = this.dataset.payment;
            document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            this.querySelector('input').checked = true;
        });
    });
}

// ===== ACTIONS =====
function addToCart() {
    cart.push({ product: 'Sony WH-1000XM5', country: currentCountry });
    navigateTo('checkout');
}

function addToWishlist() {
    const messages = {
        usa: 'Added to wishlist!',
        japan: 'お気に入りに登録しました！',
        ethiopia: 'በወደድኩት ውስጥ ተጨምሯል!',
        saudi: 'تمت الإضافة إلى المفضلة!',
        spain: '¡Guardado para más tarde!'
    };
    alert(messages[currentCountry] || 'Added to wishlist!');
}

function submitOrder() {
    // Simple validation
    const data = COUNTRIES[currentCountry];
    const requiredFields = data.checkout.fields.filter(f => f.required);
    let valid = true;

    for (const field of requiredFields) {
        const el = document.getElementById(field.name);
        if (el && !el.value.trim()) {
            el.style.borderColor = '#dc2626';
            valid = false;
        } else if (el) {
            el.style.borderColor = '';
        }
    }

    if (!selectedPayment) {
        const messages = {
            usa: 'Please select a payment method',
            japan: 'お支払い方法を選択してください',
            ethiopia: 'እባክዎ የክፍያ ዘዴ ይምረጡ',
            saudi: 'الرجاء اختيار طريقة الدفع',
            spain: 'Por favor selecciona un método de pago'
        };
        alert(messages[currentCountry] || 'Please select a payment method');
        return;
    }

    if (!valid) {
        const messages = {
            usa: 'Please fill in all required fields',
            japan: '必須項目を入力してください',
            ethiopia: 'እባክዎ ሁሉንም አስፈላጊ መስኮች ይሙሉ',
            saudi: 'الرجاء ملء جميع الحقول المطلوبة',
            spain: 'Por favor completa todos los campos obligatorios'
        };
        alert(messages[currentCountry] || 'Please fill in all required fields');
        return;
    }

    navigateTo('confirmation');
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
