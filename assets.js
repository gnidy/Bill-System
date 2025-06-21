// Initialize global namespace if it doesn't exist
window.InvoiceSystem = window.InvoiceSystem || {};

// Sample products data
window.allProducts = [
    {id: "a1", name: "فيبر", balance: 575, quantity: 33, supplierHistory: [
        {supplierId: "sup-1", quantity: 33, price: 575, total: 575 * 33, date: "2025-06-20"},
        {supplierId: "sup-5", quantity: 34, price: 75, total: 75 * 34, date: "2025-06-21"}
    ]},
    {id: "a2", name: "فيبر محمل", balance: 590, quantity: 38, supplierHistory: [
        {supplierId: "sup-1", quantity: 38, price: 590, total: 590 * 38, date: "2025-06-20"},
    ]},
    {id: "a3", name: "كلادين", balance: 750, quantity: 40, supplierHistory: [
        {supplierId: "sup-1", quantity: 40, price: 750, total: 30000, date: "2025-06-20"}
    ]},
    {id: "a4", name: "U.V", balance: 580, quantity: 24, supplierHistory: [
        {supplierId: "sup-2", quantity: 24, price: 580, total: 13920, date: "2025-06-20"}
    ]},
    {id: "a5", name: "بروديوم", balance: 755, quantity: 2, supplierHistory: [
        {supplierId: "sup-2", quantity: 2, price: 755, total: 1510, date: "2025-06-20"}
    ]},
    {id: "a10", name: "استرتش ثقيل ١٠سم", balance: 75, quantity: 13, supplierHistory: [
        {supplierId: "sup-3", quantity: 13, price: 75, total: 975, date: "2025-06-20"}
    ]},
    {id: "a11", name: "اكرة بلية صيني اسود", balance: 45, quantity: 16, supplierHistory: [
        {supplierId: "sup-3", quantity: 16, price: 45, total: 720, date: "2025-06-20"}
    ]},
    {id: "a20", name: "انبوبة فوم", balance: 98, quantity: 25, supplierHistory: [
        {supplierId: "sup-4", quantity: 25, price: 98, total: 2450, date: "2025-06-20"}
    ]},
    {id: "a22", name: "بسكوتة خضراء", balance: 12, quantity: 94, supplierHistory: [
        {supplierId: "sup-4", quantity: 94, price: 12, total: 1128, date: "2025-06-20"}
    ]},
    {id: "a31", name: "بنطة ٥مم", balance: 9, quantity: 27, supplierHistory: [
        {supplierId: "sup-5", quantity: 27, price: 9, total: 243, date: "2025-06-20"}
    ]},
    {id: "a35", name: "ترباس PS بلاستيك اسود", balance: 14, quantity: 80, supplierHistory: [
        {supplierId: "sup-5", quantity: 80, price: 14, total: 1120, date: "2025-06-20"}
    ]},
    {id: "a39", name: "ترولي ١٦سم GM", balance: 575, quantity: 1, supplierHistory: [
        {supplierId: "sup-6", quantity: 1, price: 575, total: 575, date: "2025-06-20"}
    ]},
    {id: "a42", name: "ثلاثي ٢٫٥ ابيض SM", balance: 2.50, quantity: 690, supplierHistory: [
        {supplierId: "sup-6", quantity: 690, price: 2.50, total: 1725, date: "2025-06-20"}
    ]},
    {id: "a50", name: "ثلاثي ٢٫٥ بيج SM", balance: 2.50, quantity: 1663, supplierHistory: [
        {supplierId: "sup-7", quantity: 1663, price: 2.50, total: 4157.5, date: "2025-06-20"}
    ]},
    {id: "a79", name: "دبل بجناح SM", balance: 0.85, quantity: 9440, supplierHistory: [
        {supplierId: "sup-7", quantity: 9440, price: 0.85, total: 8024, date: "2025-06-20"}
    ]},
    {id: "a80", name: "كابلات كهرباء 2.5 مم", balance: 15.75, quantity: 250, supplierHistory: [
        {supplierId: "sup-8", quantity: 250, price: 15.75, total: 3937.5, date: "2025-06-20"}
    ]},
    {id: "a81", name: "مفتاح كهرباء 3 فتحات", balance: 25.50, quantity: 180, supplierHistory: [
        {supplierId: "sup-8", quantity: 180, price: 25.50, total: 4590, date: "2025-06-20"}
    ]},
    {id: "a82", name: "لمبة ليد 10 وات", balance: 35.00, quantity: 320, supplierHistory: [
        {supplierId: "sup-9", quantity: 200, price: 34.5, total: 6900, date: "2025-06-15"},
        {supplierId: "sup-9", quantity: 120, price: 35.00, total: 4200, date: "2025-06-20"}
    ]},
    {id: "a83", name: "مفتاح ماء 1 بوصة", balance: 18.25, quantity: 150, supplierHistory: [
        {supplierId: "sup-9", quantity: 100, price: 18, total: 1800, date: "2025-06-15"},
        {supplierId: "sup-9", quantity: 50, price: 18.25, total: 912.5, date: "2025-06-20"}
    ]},
    {id: "a84", name: "مواسير مياه 3 بوصة", balance: 120.00, quantity: 75, supplierHistory: [
        {supplierId: "sup-10", quantity: 50, price: 118, total: 5900, date: "2025-06-15"},
        {supplierId: "sup-10", quantity: 25, price: 120.00, total: 3000, date: "2025-06-20"}
    ]},
    {id: "a85", name: "صامولة ستانلس 10 مم", balance: 2.75, quantity: 500, supplierHistory: [
        {supplierId: "sup-10", quantity: 300, price: 2.7, total: 810, date: "2025-06-15"},
        {supplierId: "sup-10", quantity: 200, price: 2.75, total: 550, date: "2025-06-20"}
    ]},
    {id: "a86", name: "براغي حديد 10 سم", balance: 1.50, quantity: 800, supplierHistory: [
        {supplierId: "sup-11", quantity: 500, price: 1.45, total: 725, date: "2025-06-15"},
        {supplierId: "sup-11", quantity: 300, price: 1.50, total: 450, date: "2025-06-20"}
    ]},
    {id: "a87", name: "شريط لاصق عازل", balance: 8.00, quantity: 420, supplierHistory: [
        {supplierId: "sup-11", quantity: 250, price: 7.8, total: 1950, date: "2025-06-15"},
        {supplierId: "sup-11", quantity: 170, price: 8.00, total: 1360, date: "2025-06-20"}
    ]},
    {id: "a88", name: "مفتاح ضغط هواء", balance: 45.00, quantity: 90, supplierHistory: [
        {supplierId: "sup-11", quantity: 60, price: 44.5, total: 2670, date: "2025-06-15"},
        {supplierId: "sup-11", quantity: 30, price: 45.00, total: 1350, date: "2025-06-20"}
    ]}
];


// Sample invoices data
window.sampleInvoices = [
    {
        id: 'inv-1',
        customerId: 'cust-1',
        date: '2025-06-20',
        items: [
            { productId: 'a1', quantity: 2, price: 600, total: 1200 },
            { productId: 'a3', quantity: 1, price: 750, total: 750 }
        ],
        subtotal: 1950,
        discount: 0,
        total: 1950,
        paid: 1000,
        remaining: 950,
        status: 'unpaid'
    },
    {
        id: 'inv-2',
        customerId: 'cust-2',
        date: '2025-06-21',
        items: [
            { productId: 'a2', quantity: 1, price: 590, total: 590 },
            { productId: 'a4', quantity: 2, price: 580, total: 1160 }
        ],
        subtotal: 1750,
        discount: 50,
        total: 1700,
        paid: 1700,
        remaining: 0,
        status: 'paid'
    },
    {
        id: 'inv-3',
        customerId: 'cust-3',
        date: '2025-06-19',
        items: [
            { productId: 'a5', quantity: 3, price: 755, total: 2265 },
            { productId: 'a7', quantity: 2, price: 1200, total: 2400 }
        ],
        subtotal: 4665,
        discount: 200,
        total: 4465,
        paid: 0,
        remaining: 4465,
        status: 'unpaid'
    },
    {
        id: 'inv-4',
        customerId: 'cust-4',
        date: '2025-06-18',
        items: [
            { productId: 'a10', quantity: 5, price: 850, total: 4250 },
            { productId: 'a15', quantity: 2, price: 600, total: 1200 }
        ],
        subtotal: 5450,
        discount: 0,
        total: 5450,
        paid: 5450,
        remaining: 0,
        status: 'paid'
    },
    {
        id: 'inv-5',
        customerId: 'cust-5',
        date: '2025-06-17',
        items: [
            { productId: 'a20', quantity: 10, price: 350, total: 3500 },
            { productId: 'a25', quantity: 5, price: 420, total: 2100 }
        ],
        subtotal: 5600,
        discount: 100,
        total: 5500,
        paid: 0,
        remaining: 5500,
        status: 'unpaid'
    },
    {
        id: 'inv-6',
        customerId: 'cust-6',
        date: '2025-06-16',
        items: [
            { productId: 'a30', quantity: 15, price: 200, total: 3000 },
            { productId: 'a35', quantity: 10, price: 500, total: 5000 }
        ],
        subtotal: 8000,
        discount: 500,
        total: 7500,
        paid: 7500,
        remaining: 0,
        status: 'paid'
    },
    {
        id: 'inv-7',
        customerId: 'cust-7',
        date: '2025-06-15',
        items: [
            { productId: 'a40', quantity: 8, price: 650, total: 5200 },
            { productId: 'a45', quantity: 4, price: 700, total: 2800 }
        ],
        subtotal: 8000,
        discount: 0,
        total: 8000,
        paid: 0,
        remaining: 8000,
        status: 'unpaid'
    },
    {
        id: 'inv-8',
        customerId: 'cust-1',
        date: '2025-06-14',
        items: [
            { productId: 'a50', quantity: 20, price: 150, total: 3000 },
            { productId: 'a55', quantity: 10, price: 300, total: 3000 }
        ],
        subtotal: 6000,
        discount: 300,
        total: 5700,
        paid: 5700,
        remaining: 0,
        status: 'paid'
    },
    {
        id: 'inv-9',
        customerId: 'cust-2',
        date: '2025-06-13',
        items: [
            { productId: 'a60', quantity: 5, price: 800, total: 4000 },
            { productId: 'a65', quantity: 3, price: 1000, total: 3000 }
        ],
        subtotal: 7000,
        discount: 0,
        total: 7000,
        paid: 0,
        remaining: 7000,
        status: 'unpaid'
    },
    {
        id: 'inv-10',
        customerId: 'cust-3',
        date: '2025-06-12',
        items: [
            { productId: 'a70', quantity: 2, price: 1500, total: 3000 },
            { productId: 'a75', quantity: 4, price: 750, total: 3000 }
        ],
        subtotal: 6000,
        discount: 200,
        total: 5800,
        paid: 5800,
        remaining: 0,
        status: 'paid'
    },
    {
        id: 'inv-11',
        customerId: 'cust-4',
        date: '2025-06-11',
        items: [
            { productId: 'a80', quantity: 3, price: 900, total: 2700 },
            { productId: 'a85', quantity: 2, price: 1200, total: 2400 }
        ],
        subtotal: 5100,
        discount: 100,
        total: 5000,
        paid: 0,
        remaining: 5000,
        status: 'unpaid'
    },
    {
        id: 'inv-12',
        customerId: 'cust-5',
        date: '2025-06-10',
        items: [
            { productId: 'a1', quantity: 5, price: 600, total: 3000 },
            { productId: 'a2', quantity: 3, price: 590, total: 1770 },
            { productId: 'a3', quantity: 2, price: 750, total: 1500 }
        ],
        subtotal: 6270,
        discount: 270,
        total: 6000,
        paid: 6000,
        remaining: 0,
        status: 'paid'
    }
];

// Sample customers data with purchase history
window.sampleCustomers = [
    { 
        id: 'cust-1', 
        name: 'محمد أحمد', 
        phone: '0123456789', 
        balance: 1500.00,
        purchases: [
            { date: '2025-06-10',   items: [
                { id: 'a20', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a22', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' },
            { date: '2025-06-15', items: [
                { id: 'a1', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a5', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' },
            { date: '2025-06-10', items: [
                { id: 'a20', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a22', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'paid' },
            { date: '2025-05-28', items: [
                { id: 'a35', balance: 14, quantity: 10, subtotal: 140 },
                { id: 'a39', balance: 575, quantity: 1, subtotal: 575 }
            ], total: 715.00, status: 'unpaid' }
        ]
    },
    { 
        id: 'cust-2', 
        name: 'شركة النور للمقاولات', 
        phone: '01001234567', 
        balance: 3500.00,
        purchases: [
            { date: '2025-06-14', items: [
                { id: 'a50', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a79', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' },
            { date: '2025-06-01', items: [
                { id: 'a82', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a83', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' }
        ]
    },
    { 
        id: 'cust-3', 
        name: 'سارة محمود', 
        phone: '01112233445', 
        balance: 0.00,
        purchases: [
            { date: '2025-05-28', items: [
                { id: 'a84', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a85', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' },
            { date: '2025-05-15', items: [
                { id: 'a86', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a87', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' }
        ]
    },
    { 
        id: 'cust-4', 
        name: 'أحمد علي', 
        phone: '01223344556', 
        balance: 1250.00,
        purchases: [
            { date: '2025-06-10', items: [
                { id: 'a88', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a1', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' },
            { date: '2025-05-25', items: [
                { id: 'a3', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a4', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' }
        ]
    },
    { 
        id: 'cust-5', 
        name: 'مؤسسة المدينة المنورة', 
        phone: '01004445566', 
        balance: 5000.00,
        purchases: [
            { date: '2025-06-08', items: [
                { id: 'a5', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a10', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' },
            { date: '2025-05-20', items: [
                { id: 'a22', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a31', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' }
        ]
    },
    { 
        id: 'cust-6', 
        name: 'عمر خالد', 
        phone: '01112223344', 
        balance: 0.00,
        purchases: [
            { date: '2025-05-20', items: [
                { id: 'a35', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a39', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' },
            { date: '2025-05-05', items: [
                { id: 'a42', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a50', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' }
        ]
    },
    { 
        id: 'cust-7', 
        name: 'شركة الأهرام', 
        phone: '0224445556', 
        balance: 2500.00,
        purchases: [
            { date: '2025-06-05', items: [
                { id: 'a79', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a80', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' },
            { date: '2025-05-15', items: [
                { id: 'a82', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a83', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' }
        ]
    },
    { 
        id: 'cust-8', 
        name: 'وليد سعيد', 
        phone: '01278889999', 
        balance: 0.00,
        purchases: []
    },
    { 
        id: 'cust-8', 
        name: 'وليد سعي1', 
        phone: '01278889999', 
        balance: 0.00,
        purchases: []
    },
    { 
        id: 'cust-8', 
        name: 'وليد سعيد2', 
        phone: '01278889999', 
        balance: 0.00,
        purchases: []
    },
    { 
        id: 'cust-8', 
        name: '3وليد سعيد', 
        phone: '01278889999', 
        balance: 0.00,
        purchases: []
    },
    { 
        id: 'cust-9', 
        name: 'محمود حمدي', 
        phone: '01006667788', 
        balance: 1800.00,
        purchases: [
            { date: '2025-06-12', items: [
                { id: 'a84', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a85', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' },
            { date: '2025-05-25', items: [
                { id: 'a86', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a87', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' }
        ]
    },
    { 
        id: 'cust-10', 
        name: 'مطعم الكبابجي', 
        phone: '0234567890', 
        balance: 0.00,
        purchases: [
            { date: '2025-05-15', items: [
                { id: 'a1', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a2', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'unpaid' },
            { date: '2025-05-01', items: [
                { id: 'a4', balance: 500, quantity: 10, subtotal: 5000 },
                { id: 'a5', balance: 12, quantity: 94, subtotal: 1128 }
            ], total: 6128.00, status: 'paid'}
        ]
    }
];

// Function to get product details by ID
function getProductDetails(productId) {
    return window.allProducts.find(p => p.id === productId) || { name: 'منتج غير معروف', balance: 0 };
}

// Function to format purchase history for display
function formatPurchaseHistory(customerId) {
    const customer = window.sampleCustomers.find(c => c.id === customerId);
    if (!customer) return [];
    
    return customer.purchases.map(purchase => ({
        date: purchase.date,
        items: purchase.items.map(id => getProductDetails(id).name).join('، '),
        total: purchase.total.toFixed(2),
        status: purchase.status === 'paid' ? 'مدفوع' : 'غير مدفوع',
        remaining: purchase.status === 'paid' ? '0.00' : purchase.total.toFixed(2)
    }));
}

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
    
    // For backward compatibility
    window.customerNames = window.sampleCustomers.reduce((acc, customer) => {
        acc[customer.id] = customer.name;
        return acc;
    }, {});

    // Generate 30 recent invoices
    for (let i = 0; i < 30; i++) {
        const randomCustomer = window.sampleCustomers[Math.floor(Math.random() * window.sampleCustomers.length)];
        const customerId = randomCustomer.id;
        const customerName = randomCustomer.name;
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
                const itemTotal = product.balance * quantity;
                items.push({
                    productId: product.id,
                    quantity: quantity,
                    balance: product.balance
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

// Sample suppliers data
window.sampleSuppliers = [
    { id: 'sup-1', name: 'شركة مواد البناء الحديثة', phone: '01123456789' },
    { 
        id: 'sup-2', 
        name: 'مؤسسة النور للمواد الكهربائية', 
        phone: '01234567890'
    },
    { 
        id: 'sup-3', 
        name: 'شركة المصنع العربي للحديد', 
        phone: '01098765432'
    },
    { 
        id: 'sup-4', 
        name: 'مؤسسة الأصيل للأدوات الصحية', 
        phone: '0155554433'
    },
    { 
        id: 'sup-5', 
        name: 'شركة النصر للألوان والدهانات', 
        phone: '01112223334'
    },
    { 
        id: 'sup-6', 
        name: 'شركة الأمانة للمواد الكهربائية', 
        phone: '01223334455'
    },
    { 
        id: 'sup-7', 
        name: 'مؤسسة النهضة للمواد الإنشائية', 
        phone: '01004445556'
    },
    { 
        id: 'sup-8', 
        name: 'شركة التقوى للأدوات المنزلية', 
        phone: '01116667778'
    },
    { 
        id: 'sup-9', 
        name: 'مؤسسة الرشاد للأدوات الصحية', 
        phone: '01228889990'
    },
    { 
        id: 'sup-10', 
        name: 'شركة النيل للمواد العازلة', 
        phone: '01001112223'
    },
    { 
        id: 'sup-11', 
        name: 'شركة النيل للمواد العازلة', 
        phone: '01001112223'
    },
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
