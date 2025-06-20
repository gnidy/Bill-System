// Initialize global namespace if it doesn't exist
window.InvoiceSystem = window.InvoiceSystem || {};

// Sample products data
window.allProducts = [
    {id: "a1", name: "فيبر", price: 575, quantity: 33},
    {id: "a2", name: "فيبر محمل", price: 590, quantity: 38},
    {id: "a3", name: "كلادين", price: 750, quantity: 40},
    {id: "a4", name: "U.V", price: 580, quantity: 24},
    {id: "a5", name: "بروديوم", price: 755, quantity: 2},
    {id: "a10", name: "استرتش ثقيل ١٠سم", price: 75, quantity: 13},
    {id: "a11", name: "اكرة بلية صيني اسود", price: 45, quantity: 16},
    {id: "a20", name: "انبوبة فوم", price: 98, quantity: 25},
    {id: "a22", name: "بسكوتة خضراء", price: 12, quantity: 94},
    {id: "a31", name: "بنطة ٥مم", price: 9, quantity: 27},
    {id: "a35", name: "ترباس PS بلاستيك اسود", price: 14, quantity: 80},
    {id: "a39", name: "ترولي ١٦سم GM", price: 575, quantity: 1},
    {id: "a42", name: "ثلاثي ٢٫٥ ابيض SM", price: 2.50, quantity: 690},
    {id: "a50", name: "ثلاثي ٢٫٥ بيج SM", price: 2.50, quantity: 1663},
    {id: "a79", name: "دبل بجناح SM", price: 0.85, quantity: 9440},
    {id: "a80", name: "كابلات كهرباء 2.5 مم", price: 15.75, quantity: 250},
    {id: "a81", name: "مفتاح كهرباء 3 فتحات", price: 25.50, quantity: 180},
    {id: "a82", name: "لمبة ليد 10 وات", price: 35.00, quantity: 320},
    {id: "a83", name: "مفتاح ماء 1 بوصة", price: 18.25, quantity: 150},
    {id: "a84", name: "مواسير مياه 3 بوصة", price: 120.00, quantity: 75},
    {id: "a85", name: "صامولة ستانلس 10 مم", price: 2.75, quantity: 500},
    {id: "a86", name: "براغي حديد 10 سم", price: 1.50, quantity: 800},
    {id: "a87", name: "شريط لاصق عازل", price: 8.00, quantity: 420},
    {id: "a88", name: "مفتاح ضغط هواء", price: 45.00, quantity: 90}
];


// Sample customers data
window.sampleCustomers = [
    { id: 'cust-1', name: 'محمد أحمد', phone: '0123456789', balance: 1500.00 },
    { id: 'cust-2', name: 'شركة النور للمقاولات', phone: '01001234567', balance: 3500.00 },
    { id: 'cust-3', name: 'سارة محمود', phone: '01112233445', balance: 0.00 },
    { id: 'cust-4', name: 'أحمد علي', phone: '01223344556', balance: 1250.00 },
    { id: 'cust-5', name: 'مؤسسة المدينة المنورة', phone: '01004445566', balance: 5000.00 },
    { id: 'cust-6', name: 'عمر خالد', phone: '01112223344', balance: 0.00 },
    { id: 'cust-7', name: 'شركة الأهرام', phone: '0224445556', balance: 2500.00 },
    { id: 'cust-8', name: 'وليد سعيد', phone: '01278889999', balance: 0.00 },
    { id: 'cust-9', name: 'محمود حمدي', phone: '01006667788', balance: 1800.00 },
    { id: 'cust-10', name: 'مطعم الكبابجي', phone: '0234567890', balance: 0.00 }
];

// Helper function to generate random date within range
function randomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

// Initialize sample data and recent invoices
if (typeof window.recentInvoices === 'undefined') {
    window.recentInvoices = [];
    window.today = new Date();
    window.threeMonthsAgo = new Date();
    window.threeMonthsAgo.setMonth(window.today.getMonth() - 3);
    
    // Sample product IDs for invoices
    window.productIds = ['a1', 'a2', 'a3', 'a4', 'a5', 'a10', 'a11', 'a20', 'a22', 'a31', 'a35', 'a39', 
                        'a42', 'a50', 'a79', 'a80', 'a81', 'a82', 'a83', 'a84', 'a85', 'a86', 'a87', 'a88'];
    window.customers = ['cust-1', 'cust-2', 'cust-3', 'cust-4', 'cust-5', 'cust-6', 'cust-7', 'cust-8'];
    window.customerNames = {
        'cust-1': 'محمد أحمد',
        'cust-2': 'أحمد علي',
        'cust-3': 'سارة محمد',
        'cust-4': 'عبدالله خالد',
        'cust-5': 'نورا سعد',
        'cust-6': 'مؤسسة المدينة المنورة',
        'cust-7': 'شركة التقنية المتطورة',
        'cust-8': 'محل الأصيل للمواد'
    };

    // Generate 30 recent invoices
    for (let i = 0; i < 30; i++) {
        const customerId = window.customers[Math.floor(Math.random() * window.customers.length)];
        const customerName = window.customerNames[customerId];
        const date = randomDate(window.threeMonthsAgo, window.today);
        const itemCount = Math.floor(Math.random() * 3) + 1; // 1-3 items per invoice
        const items = [];
        let total = 0;
        
        // Add random items
        for (let j = 0; j < itemCount; j++) {
            const productId = window.productIds[Math.floor(Math.random() * window.productIds.length)];
            const product = window.allProducts.find(p => p.id === productId);
            if (product) {
                const quantity = Math.floor(Math.random() * 5) + 1; // 1-5 quantity
                const itemTotal = product.price * quantity;
                items.push({
                    productId: product.id,
                    quantity: quantity,
                    price: product.price
                });
                total += itemTotal;
            }
        }
        
        // Round total to 2 decimal places
        total = Math.round(total * 100) / 100;
        
        // Random status (80% paid, 20% unpaid)
        const status = Math.random() < 0.8 ? 'paid' : 'unpaid';
        
        window.recentInvoices.push({
            id: `INV-${date.replace(/-/g, '')}-${String(i).padStart(3, '0')}`,
            customer: customerName,
            customerId: customerId,
            date: date,
            items: items,
            status: status,
            total: total
        });
    }
}

// Sort invoices by date (newest first)
recentInvoices.sort((a, b) => new Date(b.date) - new Date(a.date));

// Add invoice numbers based on sorted order
recentInvoices.forEach((invoice, index) => {
    invoice.id = `INV-${String(today.getFullYear())}${String(today.getMonth() + 1).padStart(2, '0')}-${String(1000 - index).padStart(4, '0')}`;
});

// Sample invoices data
window.sampleInvoices = recentInvoices;

// Sample suppliers data
window.sampleSuppliers = [
    { id: 'sup-1', name: 'شركة مواد البناء الحديثة', phone: '01123456789' },
    { id: 'sup-2', name: 'مؤسسة النور للمواد الكهربائية', phone: '01234567890' },
    { id: 'sup-3', name: 'شركة المصنع العربي للحديد', phone: '01098765432' },
    { id: 'sup-4', name: 'مؤسسة الأصيل للأدوات الصحية', phone: '0155554433' },
    { id: 'sup-5', name: 'شركة النصر للألوان والدهانات', phone: '01112223334' },
    { id: 'sup-6', name: 'شركة الأمانة للمواد الكهربائية', phone: '01223334455' },
    { id: 'sup-7', name: 'مؤسسة النهضة للمواد الإنشائية', phone: '01004445556' },
    { id: 'sup-8', name: 'شركة التقوى للأدوات المنزلية', phone: '01116667778' },
    { id: 'sup-9', name: 'مؤسسة الرشاد للأدوات الصحية', phone: '01228889990' },
    { id: 'sup-10', name: 'شركة النيل للمواد العازلة', phone: '01001112223' }
];

// Make sample data globally available

// Initialize data when the script loads
(function() {
    try {
        // Initialize products
        if (localStorage.getItem('products')) {
            window.InvoiceSystem.products = JSON.parse(localStorage.getItem('products'));
        } else {
            window.InvoiceSystem.products = [...allProducts];
            localStorage.setItem('products', JSON.stringify(window.InvoiceSystem.products));
        }

        // Initialize customers
        if (localStorage.getItem('customers')) {
            window.InvoiceSystem.customers = JSON.parse(localStorage.getItem('customers'));
        } else {
            window.InvoiceSystem.customers = [...sampleCustomers];
            localStorage.setItem('customers', JSON.stringify(window.InvoiceSystem.customers));
        }

        // Initialize invoices
        if (localStorage.getItem('invoices')) {
            window.InvoiceSystem.invoices = JSON.parse(localStorage.getItem('invoices'));
        } else {
            window.InvoiceSystem.invoices = [...sampleInvoices];
            localStorage.setItem('invoices', JSON.stringify(window.InvoiceSystem.invoices));
        }

        // For backward compatibility
        window.products = window.InvoiceSystem.products;
        window.invoices = window.InvoiceSystem.invoices;
        window.customers = window.InvoiceSystem.customers;
        
        console.log('Data initialized successfully');
    } catch (error) {
        console.error('Error initializing data:', error);
        // Fallback to sample data if there's an error
        window.InvoiceSystem.products = [...allProducts];
        window.InvoiceSystem.invoices = [...sampleInvoices];
        window.InvoiceSystem.customers = [...sampleCustomers];
        window.products = window.InvoiceSystem.products;
        window.invoices = window.InvoiceSystem.invoices;
        window.customers = window.InvoiceSystem.customers;
    }
})();

// Initialize window.invoices if not already set
if (typeof window.invoices === 'undefined') {
    window.invoices = window.InvoiceSystem.invoices || [];
}
