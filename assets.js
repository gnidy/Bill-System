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


// Sample invoices data
window.sampleInvoices = [
    {
        id: "INV-2023-0250",
        customer: "محمد أحمد",
        date: "2023-08-20",
        items: [
            { productId: "a5", quantity: 1, price: 755 },
            { productId: "a10", quantity: 5, price: 75 }
        ],
        status: "paid",
        total: 1130
    },
    {
        id: "INV-2023-0249",
        customer: "مؤسسة المدينة المنورة",
        date: "2023-08-19",
        items: [
            { productId: "a1", quantity: 10, price: 575 },
            { productId: "a4", quantity: 15, price: 580 }
        ],
        status: "paid",
        total: 17450
    },
    {
        id: "INV-2023-0248",
        customer: "سارة محمود",
        date: "2023-08-18",
        items: [
            { productId: "a22", quantity: 30, price: 12 },
            { productId: "a31", quantity: 50, price: 9 }
        ],
        status: "unpaid",
        total: 810
    },
    {
        id: "INV-2023-0247",
        customer: "شركة النور للمقاولات",
        date: "2023-08-17",
        items: [
            { productId: "a3", quantity: 5, price: 750 },
            { productId: "a20", quantity: 10, price: 98 },
            { productId: "a79", quantity: 200, price: 0.85 }
        ],
        status: "paid",
        total: 5470
    },
    {
        id: "INV-2023-0246",
        customer: "أحمد علي",
        date: "2023-08-16",
        items: [
            { productId: "a2", quantity: 3, price: 590 },
            { productId: "a11", quantity: 8, price: 45 },
            { productId: "a35", quantity: 20, price: 14 }
        ],
        status: "paid",
        total: 2710
    },
    {
        id: "INV-2023-0125",
        customer: "محمد أحمد",
        date: "2023-08-15",
        items: [
            { productId: "a2", quantity: 2, price: 590 },
            { productId: "a20", quantity: 5, price: 98 }
        ],
        status: "paid",
        total: 1680
    },
    {
        id: "INV-2023-0124",
        customer: "شركة النور",
        date: "2023-08-14",
        items: [
            { productId: "a3", quantity: 3, price: 750 },
            { productId: "a11", quantity: 10, price: 45 }
        ],
        status: "unpaid",
        total: 2700
    },
    {
        id: "INV-2023-0123",
        customer: "أحمد علي",
        date: "2023-08-13",
        items: [
            { productId: "a1", quantity: 1, price: 575 },
            { productId: "a4", quantity: 2, price: 580 },
            { productId: "a22", quantity: 20, price: 12 }
        ],
        status: "paid",
        total: 1819
    },
    {
        id: "INV-2023-0122",
        customer: "مؤسسة المدينة المنورة",
        date: "2023-08-12",
        items: [
            { productId: "a5", quantity: 2, price: 755 },
            { productId: "a10", quantity: 10, price: 75 }
        ],
        status: "paid",
        total: 2260
    },
    {
        id: "INV-2023-0121",
        customer: "سارة محمود",
        date: "2023-08-11",
        items: [
            { productId: "a79", quantity: 500, price: 0.85 },
            { productId: "a42", quantity: 100, price: 2.50 }
        ],
        status: "unpaid",
        total: 925
    },
    {
        id: "INV-2023-0120",
        customer: "محمد أحمد",
        date: "2023-08-10",
        items: [
            { productId: "a3", quantity: 2, price: 750 },
            { productId: "a11", quantity: 15, price: 45 }
        ],
        status: "paid",
        total: 2175
    },
    {
        id: "INV-2023-0119",
        customer: "شركة النور للمقاولات",
        date: "2023-08-09",
        items: [
            { productId: "a1", quantity: 5, price: 575 },
            { productId: "a4", quantity: 5, price: 580 }
        ],
        status: "paid",
        total: 5775
    },
    {
        id: "INV-2023-0118",
        customer: "أحمد علي",
        date: "2023-08-08",
        items: [
            { productId: "a22", quantity: 50, price: 12 },
            { productId: "a31", quantity: 30, price: 9 }
        ],
        status: "unpaid",
        total: 870
    },
    {
        id: "INV-2023-0117",
        customer: "مؤسسة المدينة المنورة",
        date: "2023-08-07",
        items: [
            { productId: "a3", quantity: 4, price: 750 },
            { productId: "a20", quantity: 8, price: 98 },
            { productId: "a79", quantity: 150, price: 0.85 }
        ],
        status: "paid",
        total: 4467.5
    },
    {
        id: "INV-2023-0116",
        customer: "سارة محمود",
        date: "2023-08-06",
        items: [
            { productId: "a2", quantity: 2, price: 590 },
            { productId: "a11", quantity: 12, price: 45 },
            { productId: "a35", quantity: 15, price: 14 }
        ],
        status: "paid",
        total: 2170
    },
    {
        id: "INV-2023-0115",
        customer: "محمد أحمد",
        date: "2023-08-05",
        items: [
            { productId: "a1", quantity: 3, price: 575 },
            { productId: "a4", quantity: 3, price: 580 }
        ],
        status: "paid",
        total: 3465
    },
    {
        id: "INV-2023-0114",
        customer: "شركة النور للمقاولات",
        date: "2023-08-04",
        items: [
            { productId: "a5", quantity: 1, price: 755 },
            { productId: "a10", quantity: 8, price: 75 }
        ],
        status: "paid",
        total: 1355
    },
    {
        id: "INV-2023-0113",
        customer: "أحمد علي",
        date: "2023-08-03",
        items: [
            { productId: "a79", quantity: 300, price: 0.85 },
            { productId: "a42", quantity: 200, price: 2.50 }
        ],
        status: "unpaid",
        total: 1055
    },
    {
        id: "INV-2023-0112",
        customer: "مؤسسة المدينة المنورة",
        date: "2023-08-02",
        items: [
            { productId: "a3", quantity: 2, price: 750 },
            { productId: "a11", quantity: 20, price: 45 }
        ],
        status: "paid",
        total: 2400
    },
    {
        id: "INV-2023-0111",
        customer: "سارة محمود",
        date: "2023-08-01",
        items: [
            { productId: "a1", quantity: 4, price: 575 },
            { productId: "a4", quantity: 4, price: 580 }
        ],
        status: "paid",
        total: 4620
    }
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

// Make sample data globally available
window.sampleInvoices = sampleInvoices;
window.sampleCustomers = sampleCustomers;

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

if (typeof window.invoices === 'undefined') {
    window.invoices = [...invoices];
}
