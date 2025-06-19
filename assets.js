// Initialize global namespace if it doesn't exist
window.InvoiceSystem = window.InvoiceSystem || {};

// Sample products data
const allProducts = [
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
    {id: "a79", name: "دبل بجناح SM", price: 0.85, quantity: 9440},
    {id: "a79", name: "دبل بجناح SM", price: 0.85, quantity: 9440},
    {id: "a79", name: "دبل بجناح SM", price: 0.85, quantity: 9440},
    {id: "a79", name: "دبل بجناح SM", price: 0.85, quantity: 9440},
];

// Sample customers data
const sampleCustomers = [
    {
        id: "CUST-001",
        name: "محمد أحمد",
        phone: "0123456789",
        address: "القاهرة - مصر الجديدة",
        balance: 0,
        joinDate: "2023-01-15"
    },
    {
        id: "CUST-002",
        name: "شركة النور للمقاولات",
        phone: "0111223344",
        address: "الجيزة - الدقى",
        balance: 1250.50,
        joinDate: "2022-11-05"
    },
    {
        id: "CUST-003",
        name: "أحمد علي",
        phone: "0109876543",
        address: "الإسكندرية - سموحة",
        balance: 0,
        joinDate: "2023-03-22"
    },
    {
        id: "CUST-004",
        name: "مؤسسة المدينة المنورة",
        phone: "0155555555",
        address: "المنصورة - شارع الجلاء",
        balance: 3750.25,
        joinDate: "2022-09-10"
    },
    {
        id: "CUST-005",
        name: "سارة محمود",
        phone: "0123456000",
        address: "المنيا - مدينة المنيا الجديدة",
        balance: 0,
        joinDate: "2023-05-18"
    }
];

// Sample invoices data
const sampleInvoices = [
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
        status: "pending",
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
        id: "INV-2023-0124",
        customer: "شركة النور",
        date: "2023-08-14",
        items: [
            { productId: "a3", quantity: 3, price: 750 },
            { productId: "a11", quantity: 10, price: 45 }
        ],
        status: "pending",
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
        status: "pending",
        total: 925
    }
];

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
