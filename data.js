// Cross-Cultural E-Commerce Data
// USA, Japan, Ethiopia (Amharic), Saudi Arabia, Spain

const COUNTRIES = {
    usa: {
        code: 'usa',
        name: 'United States',
        flag: '🇺🇸',
        currency: '$',
        dir: 'ltr',
        theme: 'usa',
        product: {
            title: 'Sony WH-1000XM5 Wireless Headphones',
            price: 348.00,
            originalPrice: 399.99,
            discount: '13% OFF',
            rating: 4.7,
            reviews: 12483,
            reviewText: '12,483 verified reviews',
            badge: 'Best Seller',
            description: 'Industry-leading noise cancellation, exceptional sound quality, and premium comfort for all-day listening. Perfect for work, travel, and immersive entertainment.',
            specs: [
                { label: 'Battery Life', value: '30 hours' },
                { label: 'Weight', value: '250g' },
                { label: 'Connectivity', value: 'Bluetooth 5.2' },
                { label: 'Warranty', value: '1 Year' }
            ],
            trustBadges: [
                { icon: '🛡️', text: '1-Year Warranty' },
                { icon: '↩️', text: '30-Day Returns' },
                { icon: '🔒', text: 'Secure Checkout' },
                { icon: '✅', text: 'BBB Accredited' }
            ],
            socialProof: null,
            ctaPrimary: 'Add to Cart',
            ctaSecondary: 'Add to Wishlist'
        },
        checkout: {
            title: 'Checkout',
            subtitle: 'Complete your purchase securely',
            shippingTitle: '📦 Shipping Information',
            paymentTitle: '💳 Payment Method',
            fields: [
                { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
                { name: 'address', label: 'Street Address', type: 'text', placeholder: '123 Main Street', required: true, full: true },
                { name: 'city', label: 'City', type: 'text', placeholder: 'New York', required: true },
                { name: 'state', label: 'State', type: 'select', options: ['NY', 'CA', 'TX', 'FL', 'WA'], required: true },
                { name: 'zip', label: 'ZIP Code', type: 'text', placeholder: '10001', required: true },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567', required: true }
            ],
            paymentMethods: [
                { id: 'card', icon: '💳', name: 'Credit / Debit Card', desc: 'Visa, Mastercard, Amex, Discover' },
                { id: 'paypal', icon: '🅿️', name: 'PayPal', desc: 'Pay with your PayPal account' },
                { id: 'applepay', icon: '🍎', name: 'Apple Pay', desc: 'Fast, secure checkout' }
            ],
            orderSummary: {
                subtotal: 348.00,
                shipping: 0.00,
                tax: 29.16,
                total: 377.16
            },
            submitBtn: 'Place Order — $377.16',
            securityNote: '🔒 Your payment is secured with 256-bit SSL encryption'
        },
        confirmation: {
            icon: '🎉',
            title: 'Order Confirmed!',
            message: 'Thank you for your purchase, John! Your order has been received and is being processed. You will receive a confirmation email shortly with tracking details.',
            orderNumber: 'US-2026-78432',
            deliveryEstimate: 'Estimated delivery: July 22 — July 24',
            cta: 'Continue Shopping'
        }
    },

    japan: {
        code: 'japan',
        name: '日本',
        flag: '🇯🇵',
        currency: '¥',
        dir: 'ltr',
        theme: 'japan',
        product: {
            title: 'ソニー WH-1000XM5 ワイヤレスヘッドホン',
            price: 49800,
            originalPrice: 56800,
            discount: '12% OFF',
            rating: 4.8,
            reviews: 45291,
            reviewText: '45,291件のレビュー',
            badge: '売れ筋ランキング1位',
            description: '業界最高峰のノイズキャンセリング機能を搭載。圧倒的な音質と、長時間の使用でも快適な装着感を実現しました。通勤・通学、在宅勤務、旅行など、あらゆるシーンで最高の音楽体験をお届けします。',
            specs: [
                { label: 'バッテリー持続時間', value: '30時間' },
                { label: '重量', value: '250g' },
                { label: '接続方式', value: 'Bluetooth 5.2' },
                { label: 'メーカー保証', value: '1年間' },
                { label: '防水性能', value: 'IPX4' },
                { label: '対応コーデック', value: 'LDAC / AAC / SBC' }
            ],
            trustBadges: [
                { icon: '🏆', text: '家電批評 満足度No.1' },
                { icon: '📋', text: '技適マーク取得済' },
                { icon: '🔄', text: '7日間返品保証' },
                { icon: '🌸', text: '正規代理店商品' }
            ],
            socialProof: '🔥 本日 2,384人が購入しました！残り在庫わずか',
            ctaPrimary: 'カートに追加',
            ctaSecondary: 'お気に入りに登録'
        },
        checkout: {
            title: 'お支払い情報の入力',
            subtitle: '安全な決済環境でお買い物を完了してください',
            shippingTitle: '📦 配送先情報',
            paymentTitle: '💳 お支払い方法',
            fields: [
                { name: 'fullName', label: 'お名前（漢字）', type: 'text', placeholder: '山田 太郎', required: true },
                { name: 'kanaName', label: 'お名前（カナ）', type: 'text', placeholder: 'ヤマダ タロウ', required: true },
                { name: 'email', label: 'メールアドレス', type: 'email', placeholder: 'yamada@example.co.jp', required: true },
                { name: 'postal', label: '郵便番号', type: 'text', placeholder: '150-0001', required: true },
                { name: 'prefecture', label: '都道府県', type: 'select', options: ['東京都', '大阪府', '神奈川県', '愛知県', '福岡県'], required: true },
                { name: 'address', label: '市区町村・番地', type: 'text', placeholder: '渋谷区神宮前1-1-1', required: true, full: true },
                { name: 'phone', label: '電話番号', type: 'tel', placeholder: '090-1234-5678', required: true },
                { name: 'deliveryDate', label: '配達希望日', type: 'select', options: ['指定なし', '7月20日', '7月21日', '7月22日'], required: false }
            ],
            paymentMethods: [
                { id: 'card', icon: '💳', name: 'クレジットカード', desc: 'Visa / Mastercard / JCB' },
                { id: 'konbini', icon: '🏪', name: 'コンビニ決済', desc: 'ローソン、ファミリーマート、セブン-イレブン' },
                { id: 'paypay', icon: '📱', name: 'PayPay', desc: 'スマホでかんたん決済' },
                { id: 'cod', icon: '💴', name: '代金引換', desc: '商品お届け時に現金でお支払い' }
            ],
            orderSummary: {
                subtotal: 49800,
                shipping: 0,
                tax: 4980,
                total: 54780
            },
            submitBtn: 'ご注文を確定する — ¥54,780',
            securityNote: '🔒 SSL暗号化通信でお客様の情報を保護しています'
        },
        confirmation: {
            icon: '🙇',
            title: 'ご注文ありがとうございます',
            message: '山田様、この度はご注文いただき誠にありがとうございます。ご注文の確認メールをお送りいたしました。商品の発送準備が整い次第、再度ご連絡させていただきます。今後ともGlobalShopをよろしくお願い申し上げます。',
            orderNumber: 'JP-2026-45291',
            deliveryEstimate: 'お届け予定: 7月22日〜7月24日',
            cta: 'トップページへ戻る'
        }
    },

    ethiopia: {
        code: 'ethiopia',
        name: 'ኢትዮጵያ',
        flag: '🇪🇹',
        currency: 'ETB',
        dir: 'ltr',
        theme: 'ethiopia',
        product: {
            title: 'Sony WH-1000XM5 ዋይርሌስ ሄድፎኖች',
            price: 18500,
            originalPrice: 22000,
            discount: 'ETB 3,500 ትንሽ',
            rating: 4.6,
            reviews: 842,
            reviewText: '842 የተረጋገጡ ግዢዎች',
            badge: 'ከፍተኛ ደረጃ',
            description: 'በዓለም ላይ ከሚገኙት ምርጥ የድምፅ መረታት ጋር የተሟላ ዋይርሌስ ሄድፎን። ለትምህርት፣ ለስራ፣ እና ለሙዚቃ መዝናኛ ተስማሚ። በኢትዮጵያ ውስጥ በሺህዎች የሚቆጠሩ ደንበኞች የተረጋገጠ።',
            specs: [
                { label: 'የባትሪ ዘመን', value: '30 ሰዓታት' },
                { label: 'ክብደት', value: '250ግራም' },
                { label: 'መገናኛ', value: 'ብሉቱዝ 5.2' },
                { label: 'ዋስትና', value: '6 ወራት' }
            ],
            trustBadges: [
                { icon: '🤝', text: 'በ5,000+ ደንበኞች የተረጋገጠ' },
                { icon: '📞', text: 'ይደውሉ: 0911-234-567' },
                { icon: '🚚', text: 'በአዲስ አበባ ነፃ ደረሰኝ' },
                { icon: '💰', text: 'የገንዘብ ክፍያ በደረሰኝ' }
            ],
            socialProof: '👥 ከአካባቢዎ 47 ሰዎች በዚህ ሳምንት ገዝተዋል',
            ctaPrimary: 'ወደ ጋሪ አክል',
            ctaSecondary: 'ለጓደኞች አጋራ'
        },
        checkout: {
            title: 'ትዕዛዝዎን ያጠናቅቁ',
            subtitle: 'በፍጥነት እና በደህናነት ይግዙ — ወደ ደጃፍዎ እናደርሳለን',
            shippingTitle: '📦 የማስረከቢያ ዝርዝሮች',
            paymentTitle: '💰 የክፍያ አማራጮች',
            fields: [
                { name: 'fullName', label: 'ሙሉ ስም', type: 'text', placeholder: 'አበበ ከበደ', required: true },
                { name: 'phone', label: 'ስልክ ቁጥር *', type: 'tel', placeholder: '0911 234 567', required: true },
                { name: 'altPhone', label: 'አማራጭ ስልክ (አማራጭ)', type: 'tel', placeholder: '0922 345 678', required: false },
                { name: 'city', label: 'ከተማ', type: 'select', options: ['አዲስ አበባ', 'ድሬዳዋ', 'ባህር ዳር', 'ሀዋሳ', 'መቀሌ'], required: true },
                { name: 'subcity', label: 'ክፍለ ከተማ / ቀበሌ', type: 'text', placeholder: 'ቦሌ, ቀበሌ 15', required: true },
                { name: 'landmark', label: 'በአቅራቢያው ያለ ምልክት', type: 'text', placeholder: 'ከኤድና ሞል አጠገብ / ከቦሌ መድኃኔዓለም ቤ/ክ አጠገብ', required: true, full: true },
                { name: 'deliveryNote', label: 'የማስረከቢያ መመሪያ', type: 'text', placeholder: 'በደጃፍ ሲደርሱ ይደውሉ', required: false, full: true }
            ],
            paymentMethods: [
                { id: 'cod', icon: '💵', name: 'የገንዘብ ክፍያ በደረሰኝ', desc: 'ደረሰኝ ሲደርስ በደጃፍዎ ይክፈሉ' },
                { id: 'telebirr', icon: '📲', name: 'ቴሌብር', desc: 'በቴሌብር ሞባይል መንዣ የሚከፍሉ' },
                { id: 'cbe', icon: '🏦', name: 'CBE ብር', desc: 'በኢትዮጵያ ንግድ ባንክ ያስተላልፉ' },
                { id: 'card', icon: '💳', name: 'ባንክ ካርድ', desc: 'ቪዛ ወይም ማስተርካርድ (ካለ)' }
            ],
            orderSummary: {
                subtotal: 18500,
                shipping: 0,
                tax: 0,
                total: 18500
            },
            submitBtn: 'ትዕዛዝ ያረጋግጡ — ETB 18,500',
            securityNote: '✅ ለየገንዘብ ክፍያ በደረሰኝ አሁን ምንም ክፍያ አያስፈልግም'
        },
        confirmation: {
            icon: '🎊',
            title: 'ትዕዛዝ ተቀብለናል!',
            message: 'አበበ አመሰግናለሁ! ትዕዛዝዎ በተሳካ ሁኔታ ተልኳል። የማስረከቢያ ቡድናችን በ24 ሰዓታት ውስጥ ይደውሉዎታል ለአድራሻዎ ማረጋገጥ። ETB 18,500 የሚከፈልዎት ፓኬጅዎ ሲደርስ ነው። ከጓደኞችዎ ጋር ይጋሩ እና ሽልማቶችን ያግኙ!',
            orderNumber: 'ET-2026-00842',
            deliveryEstimate: 'ማስረከቢያ: በአዲስ አበባ ውስጥ በ2-3 የስራ ቀናት',
            cta: 'ተጨማሪ ይግዙ'
        }
    },

    saudi: {
        code: 'saudi',
        name: 'المملكة العربية السعودية',
        flag: '🇸🇦',
        currency: 'SAR',
        dir: 'rtl',
        theme: 'saudi',
        product: {
            title: 'سماعات سوني WH-1000XM5 اللاسلكية',
            price: 1299,
            originalPrice: 1499,
            discount: 'خصم 13%',
            rating: 4.8,
            reviews: 15234,
            reviewText: '15,234 تقييم',
            badge: 'الأكثر مبيعاً',
            description: 'سماعات راقية بتقنية إلغاء الضوضاء الرائدة في الصناعة. صوت استثنائي وراحة فائقة للاستخدام طوال اليوم. مثالية للعمل والسفر والترفيه. حاصلة على شهادة الجودة السعودية.',
            specs: [
                { label: 'عمر البطارية', value: '30 ساعة' },
                { label: 'الوزن', value: '250 جرام' },
                { label: 'الاتصال', value: 'بلوتوث 5.2' },
                { label: 'الضمان', value: 'سنتان' }
            ],
            trustBadges: [
                { icon: '✅', text: 'SASO Certified' },
                { icon: '✅', text: 'شهادة الجودة السعودية' },
                { icon: '📜', text: 'ضمان سنتان شامل' },
                { icon: '🏠', text: 'توصيل مجاني للمنزل' }
            ],
            socialProof: null,
            ctaPrimary: 'أضف إلى السلة',
            ctaSecondary: 'المفضلة'
        },
        checkout: {
            title: 'إتمام الشراء',
            subtitle: 'إكمال طلبك بأمان وسرعة',
            shippingTitle: '📦 معلومات الشحن',
            paymentTitle: '💳 طريقة الدفع',
            fields: [
                { name: 'fullName', label: 'الاسم الكامل', type: 'text', placeholder: 'محمد عبدالله العتيبي', required: true },
                { name: 'email', label: 'البريد الإلكتروني', type: 'email', placeholder: 'mohammed@example.sa', required: true },
                { name: 'phone', label: 'رقم الجوال', type: 'tel', placeholder: '050 123 4567', required: true },
                { name: 'city', label: 'المدينة', type: 'select', options: ['الرياض', 'جدة', 'الدمام', 'مكة المكرمة', 'المدينة المنورة'], required: true },
                { name: 'district', label: 'الحي', type: 'text', placeholder: 'حي النزهة', required: true },
                { name: 'street', label: 'الشارع / الرقم الإضافي', type: 'text', placeholder: 'شارع الملك فهد، عمارة 5', required: true, full: true },
                { name: 'building', label: 'رقم المبنى / الشقة', type: 'text', placeholder: 'مبنى 12، شقة 4', required: true }
            ],
            paymentMethods: [
                { id: 'card', icon: '💳', name: 'بطاقة ائتمان / مدى', desc: 'فيزا / ماستركارد / مدى' },
                { id: 'applepay', icon: '🍎', name: 'Apple Pay', desc: 'دفع سريع وآمن' },
                { id: 'tamara', icon: '💎', name: 'تمارا / تابي', desc: 'قسّطها على 4 دفعات بدون فوائد' },
                { id: 'cod', icon: '💵', name: 'الدفع عند الاستلام', desc: 'ادفع نقداً عند استلام طلبك' }
            ],
            orderSummary: {
                subtotal: 1299,
                shipping: 0,
                tax: 194.85,
                total: 1493.85
            },
            submitBtn: 'تأكيد الطلب — 1,493.85 ر.س',
            securityNote: '🔒 جميع المعاملات محمية بتشفير SSL 256-bit'
        },
        confirmation: {
            icon: '🎉',
            title: 'تم تأكيد طلبك!',
            message: 'شكراً لك محمد! تم استلام طلبك بنجاح وسيتم التواصل معك قريباً لتأكيد موعد التوصيل. نسأل الله أن ينفعك بما اشتريت. يمكنك تتبع طلبك من خلال رقم الطلب أدناه.',
            orderNumber: 'SA-2026-15234',
            deliveryEstimate: 'التوصيل المتوقع: 22 - 24 يوليو',
            cta: 'مواصلة التسوق'
        }
    },

    spain: {
        code: 'spain',
        name: 'España',
        flag: '🇪🇸',
        currency: '€',
        dir: 'ltr',
        theme: 'spain',
        product: {
            title: 'Auriculares Inalámbricos Sony WH-1000XM5',
            price: 329.00,
            originalPrice: 379.00,
            discount: '13% DTO',
            rating: 4.7,
            reviews: 8932,
            reviewText: '8,932 opiniones verificadas',
            badge: 'Más Vendido',
            description: 'Cancelación de ruido líder en la industria, calidad de sonido excepcional y comodidad premium para escuchar todo el día. Perfectos para trabajar, viajar y disfrutar del entretenimiento inmersivo.',
            specs: [
                { label: 'Duración Batería', value: '30 horas' },
                { label: 'Peso', value: '250g' },
                { label: 'Conectividad', value: 'Bluetooth 5.2' },
                { label: 'Garantía', value: '2 Años' }
            ],
            trustBadges: [
                { icon: '🛡️', text: 'Garantía 2 Años' },
                { icon: '↩️', text: 'Devolución 30 Días' },
                { icon: '🔒', text: 'Pago Seguro' },
                { icon: '🇪🇺', text: 'Producto UE' }
            ],
            socialProof: null,
            ctaPrimary: 'Añadir al Carrito',
            ctaSecondary: 'Guardar para Después'
        },
        checkout: {
            title: 'Finalizar Compra',
            subtitle: 'Completa tu compra de forma segura',
            shippingTitle: '📦 Información de Envío',
            paymentTitle: '💳 Método de Pago',
            fields: [
                { name: 'fullName', label: 'Nombre Completo', type: 'text', placeholder: 'Juan García López', required: true },
                { name: 'email', label: 'Correo Electrónico', type: 'email', placeholder: 'juan@example.es', required: true },
                { name: 'address', label: 'Dirección', type: 'text', placeholder: 'Calle Mayor 123, 4ºB', required: true, full: true },
                { name: 'city', label: 'Ciudad', type: 'text', placeholder: 'Madrid', required: true },
                { name: 'province', label: 'Provincia', type: 'select', options: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Málaga'], required: true },
                { name: 'postal', label: 'Código Postal', type: 'text', placeholder: '28001', required: true },
                { name: 'phone', label: 'Teléfono', type: 'tel', placeholder: '+34 612 345 678', required: true },
                { name: 'dni', label: 'DNI / NIE', type: 'text', placeholder: '12345678A', required: true }
            ],
            paymentMethods: [
                { id: 'card', icon: '💳', name: 'Tarjeta de Crédito / Débito', desc: 'Visa, Mastercard, American Express' },
                { id: 'paypal', icon: '🅿️', name: 'PayPal', desc: 'Paga con tu cuenta de PayPal' },
                { id: 'bizum', icon: '📱', name: 'Bizum', desc: 'Pago instantáneo desde tu móvil' },
                { id: 'klarna', icon: '💎', name: 'Klarna', desc: 'Paga en 3 plazos sin intereses' }
            ],
            orderSummary: {
                subtotal: 329.00,
                shipping: 0.00,
                tax: 68.09,
                total: 397.09
            },
            submitBtn: 'Confirmar Pedido — 397,09 €',
            securityNote: '🔒 Tu pago está protegido con encriptación SSL de 256 bits'
        },
        confirmation: {
            icon: '🎉',
            title: '¡Pedido Confirmado!',
            message: '¡Gracias por tu compra, Juan! Tu pedido ha sido recibido y está siendo procesado. Recibirás un correo de confirmación con los detalles de seguimiento en breve.',
            orderNumber: 'ES-2026-08932',
            deliveryEstimate: 'Entrega estimada: 22 - 24 de julio',
            cta: 'Seguir Comprando'
        }
    }
};
