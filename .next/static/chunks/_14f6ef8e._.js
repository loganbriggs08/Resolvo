(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ClientButtons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientButtons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ClientButtons() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row mt-7 justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    router.push("/work");
                },
                className: "primary-button",
                children: "Previous Work"
            }, void 0, false, {
                fileName: "[project]/src/components/ClientButtons.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-2 mr-2"
            }, void 0, false, {
                fileName: "[project]/src/components/ClientButtons.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    router.push("/work");
                },
                className: "secondary-button",
                children: "Get in Touch"
            }, void 0, false, {
                fileName: "[project]/src/components/ClientButtons.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ClientButtons.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(ClientButtons, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ClientButtons;
var _c;
__turbopack_context__.k.register(_c, "ClientButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/QuoteGenerator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>QuoteGenerator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PROJECT_TYPES = [
    {
        label: "Landing Page",
        value: "landing",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRocket"], {}, void 0, false, {
            fileName: "[project]/src/components/QuoteGenerator.tsx",
            lineNumber: 6,
            columnNumber: 52
        }, this)
    },
    {
        label: "Web App",
        value: "web",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGlobe"], {}, void 0, false, {
            fileName: "[project]/src/components/QuoteGenerator.tsx",
            lineNumber: 7,
            columnNumber: 43
        }, this)
    },
    {
        label: "eCommerce",
        value: "ecommerce",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShoppingCart"], {}, void 0, false, {
            fileName: "[project]/src/components/QuoteGenerator.tsx",
            lineNumber: 8,
            columnNumber: 51
        }, this)
    },
    {
        label: "App Development",
        value: "app",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMobileAlt"], {}, void 0, false, {
            fileName: "[project]/src/components/QuoteGenerator.tsx",
            lineNumber: 9,
            columnNumber: 51
        }, this)
    }
];
const COMMON_FEATURES = [
    {
        label: "Blog",
        value: "blog"
    },
    {
        label: "Contact Form",
        value: "contact"
    },
    {
        label: "Custom Animations",
        value: "animations"
    },
    {
        label: "SEO Optimization",
        value: "seo"
    },
    {
        label: "User Accounts",
        value: "accounts"
    },
    {
        label: "Admin Panel",
        value: "admin"
    },
    {
        label: "API Integration",
        value: "api"
    },
    {
        label: "Payments",
        value: "payments"
    }
];
const FEATURE_MAP = {
    web: [
        {
            label: "Blog",
            value: "blog"
        },
        {
            label: "Contact Form",
            value: "contact"
        },
        {
            label: "User Accounts",
            value: "accounts"
        },
        {
            label: "Admin Panel",
            value: "admin"
        },
        {
            label: "API Integration",
            value: "api"
        },
        {
            label: "SEO Optimization",
            value: "seo"
        },
        {
            label: "Newsletter Signup",
            value: "newsletter"
        },
        {
            label: "Custom Animations",
            value: "animations"
        }
    ],
    ecommerce: [
        {
            label: "Product Management",
            value: "products"
        },
        {
            label: "Shopping Cart",
            value: "cart"
        },
        {
            label: "Payments Integration",
            value: "payments"
        },
        {
            label: "Order Tracking",
            value: "orders"
        },
        {
            label: "Discount Codes",
            value: "discounts"
        },
        {
            label: "Customer Reviews",
            value: "reviews"
        },
        {
            label: "Inventory Management",
            value: "inventory"
        },
        {
            label: "Email Receipts",
            value: "receipts"
        }
    ],
    app: [
        {
            label: "Push Notifications",
            value: "push"
        },
        {
            label: "User Accounts",
            value: "accounts"
        },
        {
            label: "Social Login",
            value: "social"
        },
        {
            label: "In-app Purchases",
            value: "iap"
        },
        {
            label: "Offline Mode",
            value: "offline"
        },
        {
            label: "Location Services",
            value: "location"
        },
        {
            label: "API Integration",
            value: "api"
        },
        {
            label: "Custom Animations",
            value: "animations"
        }
    ],
    landing: [
        {
            label: "Contact Form",
            value: "contact"
        },
        {
            label: "Hero Section",
            value: "hero"
        },
        {
            label: "Testimonials",
            value: "testimonials"
        },
        {
            label: "Pricing Table",
            value: "pricing"
        },
        {
            label: "FAQ Section",
            value: "faq"
        },
        {
            label: "Newsletter Signup",
            value: "newsletter"
        },
        {
            label: "SEO Optimization",
            value: "seo"
        },
        {
            label: "Custom Animations",
            value: "animations"
        }
    ]
};
const BASE_PRICES = {
    web: 1200,
    ecommerce: 1600,
    landing: 350,
    app: 1800
};
const CURRENCIES = [
    {
        code: "GBP",
        symbol: "£",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPoundSign"], {}, void 0, false, {
            fileName: "[project]/src/components/QuoteGenerator.tsx",
            lineNumber: 74,
            columnNumber: 37
        }, this),
        rate: 1
    },
    {
        code: "USD",
        symbol: "$",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDollarSign"], {}, void 0, false, {
            fileName: "[project]/src/components/QuoteGenerator.tsx",
            lineNumber: 75,
            columnNumber: 37
        }, this),
        rate: 1.28
    },
    {
        code: "EUR",
        symbol: "€",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEuroSign"], {}, void 0, false, {
            fileName: "[project]/src/components/QuoteGenerator.tsx",
            lineNumber: 76,
            columnNumber: 37
        }, this),
        rate: 1.17
    }
];
const RETAINER_OPTIONS = [
    {
        hours: 5,
        price: 180
    },
    {
        hours: 10,
        price: 340
    },
    {
        hours: 20,
        price: 600
    },
    {
        hours: 40,
        price: 1100
    }
];
function QuoteGenerator() {
    _s();
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("landing");
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(CURRENCIES[0]);
    const [retainer, setRetainer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const features = FEATURE_MAP[type] || [];
    const base = BASE_PRICES[type] || 0;
    const retainerTotal = retainer ? RETAINER_OPTIONS.find((r)=>r.hours === retainer)?.price || 0 : 0;
    const subtotal = base;
    const total = subtotal + retainerTotal;
    const converted = (amount)=>Math.round(amount * currency.rate);
    function handleFormChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[80%] mx-auto bg-white rounded-2xl px-8 py-12 border border-[var(--divider-color)] shadow flex flex-col lg:flex-row gap-12 items-stretch relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-[260px] relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-medium text-[var(--foreground)]",
                                children: "What do you want to build?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 mr-1",
                                        children: "Currency:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "rounded border border-[var(--divider-color)] px-2 py-1 text-sm bg-[var(--off-white)] text-[var(--foreground)] focus:outline-none",
                                        value: currency.code,
                                        onChange: (e)=>setCurrency(CURRENCIES.find((c)=>c.code === e.target.value) || CURRENCIES[0]),
                                        children: CURRENCIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: c.code,
                                                children: [
                                                    c.symbol,
                                                    " ",
                                                    c.code
                                                ]
                                            }, c.code, true, {
                                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3 mb-6",
                        children: PROJECT_TYPES.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `px-5 py-2 rounded-lg border text-base font-medium flex items-center gap-2 transition-all duration-150 ${type === pt.value ? 'bg-[var(--primary-red)] text-white border-[var(--primary-red)] shadow' : 'bg-[var(--off-white)] text-[var(--foreground)] border-[var(--divider-color)] hover:border-[var(--primary-red)]'}`,
                                onClick: ()=>{
                                    setType(pt.value);
                                    setSelected([]);
                                },
                                type: "button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: pt.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    pt.label
                                ]
                            }, pt.value, true, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-medium mb-2 text-[var(--foreground)]",
                                children: "What features would you like?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                children: [
                                    features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 bg-[var(--off-white)] rounded px-3 py-2 cursor-pointer border border-transparent hover:border-[var(--primary-red)] transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: selected.includes(f.value),
                                                    onChange: ()=>setSelected(selected.includes(f.value) ? selected.filter((v)=>v !== f.value) : [
                                                            ...selected,
                                                            f.value
                                                        ]),
                                                    className: "accent-[var(--primary-red)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuoteGenerator.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--foreground)] text-base",
                                                    children: f.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/QuoteGenerator.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, f.value, true, {
                                            fileName: "[project]/src/components/QuoteGenerator.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)),
                                    features.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 text-sm col-span-2",
                                        children: "No features available for this type."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                                        lineNumber: 156,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-medium mb-2 text-[var(--foreground)] flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClock"], {
                                        className: "text-[var(--primary-red)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                                        lineNumber: 160,
                                        columnNumber: 102
                                    }, this),
                                    " Monthly Retainer"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: RETAINER_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `px-4 py-2 rounded-lg border text-base font-medium transition-all duration-150 ${retainer === opt.hours ? 'bg-[var(--primary-red)] text-white border-[var(--primary-red)] shadow' : 'bg-[var(--off-white)] text-[var(--foreground)] border-[var(--divider-color)] hover:border-[var(--primary-red)]'}`,
                                        onClick: ()=>setRetainer(retainer === opt.hours ? null : opt.hours),
                                        type: "button",
                                        children: [
                                            opt.hours,
                                            "h/mo — ",
                                            currency.symbol,
                                            converted(opt.price)
                                        ]
                                    }, opt.hours, true, {
                                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400 mt-2",
                                children: "For ongoing support, updates, or new features. Cancel anytime."
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuoteGenerator.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col items-center justify-center bg-[var(--off-white)] rounded-xl p-8 min-w-[260px] relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg text-gray-500 mb-2",
                        children: "Estimated Price"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-4xl font-bold text-[var(--primary-red)] mb-2",
                        children: [
                            currency.symbol,
                            converted(total).toLocaleString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-400 mb-6 text-center text-sm",
                        children: "This is a rough estimate. For a detailed quote, please submit your details below."
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center w-full h-full p-6 bg-white rounded-xl border border-[var(--divider-color)] shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                                className: "text-green-500 text-5xl mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-semibold text-[var(--foreground)] mb-2",
                                children: "Thank you for your request!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500 text-center text-base",
                                children: [
                                    "We've received your details and will be in touch soon.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                                        lineNumber: 185,
                                        columnNumber: 120
                                    }, this),
                                    "If you need to reach us urgently, please email ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:logan@resolvo.dev",
                                        className: "text-[var(--primary-red)] underline",
                                        children: "logan@resolvo.dev"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                                        lineNumber: 185,
                                        columnNumber: 172
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "w-full flex flex-col gap-4",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "name",
                                required: true,
                                placeholder: "Your Name*",
                                className: "rounded border border-[var(--divider-color)] px-4 py-2 bg-white text-[var(--foreground)] focus:outline-none",
                                value: form.name,
                                onChange: handleFormChange
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                name: "email",
                                required: true,
                                placeholder: "Your Email*",
                                className: "rounded border border-[var(--divider-color)] px-4 py-2 bg-white text-[var(--foreground)] focus:outline-none",
                                value: form.email,
                                onChange: handleFormChange
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                name: "phone",
                                placeholder: "Phone (optional)",
                                className: "rounded border border-[var(--divider-color)] px-4 py-2 bg-white text-[var(--foreground)] focus:outline-none",
                                value: form.phone,
                                onChange: handleFormChange
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                name: "message",
                                placeholder: "Message Content (optional)",
                                className: "rounded border border-[var(--divider-color)] px-4 py-3 bg-white text-[var(--foreground)] focus:outline-none min-h-[100px] resize-y",
                                value: form.message,
                                onChange: handleFormChange
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "primary-button w-full text-center mt-2",
                                children: "Submit Request"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteGenerator.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuoteGenerator.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuoteGenerator.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QuoteGenerator.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(QuoteGenerator, "d8aT+yDFIcTpwaIFjK8kquvKTVY=");
_c = QuoteGenerator;
var _c;
__turbopack_context__.k.register(_c, "QuoteGenerator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/website_example.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/website_example.67873abd.png");}}),
"[project]/public/website_example.png.mjs { IMAGE => \"[project]/public/website_example.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$website_example$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/website_example.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$website_example$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1971,
    height: 1010,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAh0lEQVR42iXGTQsBQQCA4fm9Du6uTnKQ0xbK57aRsraNnRmjts3iMIZNiiJy8CvU6+D2iCRZorXGmBVKJigl/1aKIAi+4vO+c8qm2PWInexi9YzL1lBsQs7FAfG8OWS/QtwqE3kl8mEdF3bIwiZHmyNejyuR32A+qDFpV0kXPmnUIx57OLvnBw5eZC0Qh5ohAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 4
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/trusted-by/trusted_by_analyse.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/trusted_by_analyse.1df1b3c0.webp");}}),
"[project]/public/trusted-by/trusted_by_analyse.webp.mjs { IMAGE => \"[project]/public/trusted-by/trusted_by_analyse.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_analyse$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/trusted-by/trusted_by_analyse.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_analyse$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 1920,
    height: 515,
    blurDataURL: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4THIAAAAvB0AAEM1VICICHgggAQAAAIA3AGb/AABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBoAdAABAhAcCIAAAAABw/hEIAAAAAAiAEA0AAAAAAAAAAAAAQAAQIAAAAAAAAAEp2TW5/ctID8DdCJm4podVKAM=",
    blurWidth: 8,
    blurHeight: 2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/trusted-by/trusted_by_zinara-1.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/trusted_by_zinara-1.681b1c96.webp");}}),
"[project]/public/trusted-by/trusted_by_zinara-1.webp.mjs { IMAGE => \"[project]/public/trusted-by/trusted_by_zinara-1.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_zinara$2d$1$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/trusted-by/trusted_by_zinara-1.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_zinara$2d$1$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 557,
    height: 149,
    blurDataURL: "data:image/webp;base64,UklGRn8AAABXRUJQVlA4THMAAAAvB0AAEM1VICICHgggAQAAAIAT2zAYDAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAADAwA2AAAAAgwgMBqQEAAAA4f9MJeAABAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAADAA1TK/unyypfv0Z46GTFMCRwAAA==",
    blurWidth: 8,
    blurHeight: 2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/trusted-by/trusted_by_cherubs_childrenswear.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/trusted_by_cherubs_childrenswear.b806bbb1.webp");}}),
"[project]/public/trusted-by/trusted_by_cherubs_childrenswear.webp.mjs { IMAGE => \"[project]/public/trusted-by/trusted_by_cherubs_childrenswear.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_cherubs_childrenswear$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/trusted-by/trusted_by_cherubs_childrenswear.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_cherubs_childrenswear$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 557,
    height: 149,
    blurDataURL: "data:image/webp;base64,UklGRn0AAABXRUJQVlA4THEAAAAvB0AAEM1VICICHgiAAAAAAAAiDAAAAAAACQAAAAAAAAAAAAAAgBBRAEAAEABAAAAABQAAgAgPBJAAAAAA4PwZAwAYBgAwDA+YAQAAAAAAAAAAAAAAAAAAAACAAAAAAGagtD0BCviRHYpXurXMKp/xaAA=",
    blurWidth: 8,
    blurHeight: 2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/trusted-by/trusted_by_pavise-1.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/trusted_by_pavise-1.a167956c.webp");}}),
"[project]/public/trusted-by/trusted_by_pavise-1.webp.mjs { IMAGE => \"[project]/public/trusted-by/trusted_by_pavise-1.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_pavise$2d$1$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/trusted-by/trusted_by_pavise-1.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_pavise$2d$1$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 557,
    height: 149,
    blurDataURL: "data:image/webp;base64,UklGRn8AAABXRUJQVlA4THMAAAAvB0AAEM1VICICHgggAQAAAID/GQQYADAAGAAAAAAYAAAAAAAAAAAAAAAAAAAAAACAGWADAABAhAcCSAAAAABw/oEZAwAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAwAwAPAA/nC2V2Su6gnHTMAoNO3Dh/8AAA==",
    blurWidth: 8,
    blurHeight: 2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/trusted-by/trusted_by_validate.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/trusted_by_validate.ddace357.png");}}),
"[project]/public/trusted-by/trusted_by_validate.png.mjs { IMAGE => \"[project]/public/trusted-by/trusted_by_validate.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_validate$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/trusted-by/trusted_by_validate.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_validate$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 2149,
    height: 514,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AI2NjVCLi4tQ8PDwD/T09A309PQN8/PzD/b29gvz8/MOAGVlZWGLi4tgurq6UbKysluxsbFduLi4VLq6ulGsrKxjM1wnqfxITgEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/trusted-by/trusted_by_heli.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/trusted_by_heli.1538c6d8.webp");}}),
"[project]/public/trusted-by/trusted_by_heli.webp.mjs { IMAGE => \"[project]/public/trusted-by/trusted_by_heli.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_heli$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/trusted-by/trusted_by_heli.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$trusted$2d$by$2f$trusted_by_heli$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 557,
    height: 149,
    blurDataURL: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4THIAAAAvB0AAEM1VICICHgggAQAAAAD4AQAAYAAYAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAyDMZAbAAAgwgPBJgAAAAA4/2cEBECBAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAIAgAAACFzYHFViHVfe5GKIs8x3Qk=",
    blurWidth: 8,
    blurHeight: 2
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AnimatedHome.tsx [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/components/AnimatedHome.tsx'

Unexpected token `main`. Expected jsx identifier`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
}]);

//# sourceMappingURL=_14f6ef8e._.js.map