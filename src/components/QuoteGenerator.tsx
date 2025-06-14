"use client";
import { useState } from "react";
import { FaGlobe, FaLaptopCode, FaShoppingCart, FaRocket, FaMobileAlt, FaPoundSign, FaDollarSign, FaEuroSign, FaClock, FaCheckCircle } from "react-icons/fa";

const PROJECT_TYPES = [
  { label: "Landing Page", value: "landing", icon: <FaRocket /> },
  { label: "Web App", value: "web", icon: <FaGlobe /> },
  { label: "eCommerce", value: "ecommerce", icon: <FaShoppingCart /> },
  { label: "App Development", value: "app", icon: <FaMobileAlt /> },
];

const COMMON_FEATURES = [
  { label: "Blog", value: "blog" },
  { label: "Contact Form", value: "contact" },
  { label: "Custom Animations", value: "animations" },
  { label: "SEO Optimization", value: "seo" },
  { label: "User Accounts", value: "accounts" },
  { label: "Admin Panel", value: "admin" },
  { label: "API Integration", value: "api" },
  { label: "Payments", value: "payments" },
];

const FEATURE_MAP: Record<string, { label: string; value: string }[]> = {
  web: [
    { label: "Blog", value: "blog" },
    { label: "Contact Form", value: "contact" },
    { label: "User Accounts", value: "accounts" },
    { label: "Admin Panel", value: "admin" },
    { label: "API Integration", value: "api" },
    { label: "SEO Optimization", value: "seo" },
    { label: "Newsletter Signup", value: "newsletter" },
    { label: "Custom Animations", value: "animations" },
  ],
  ecommerce: [
    { label: "Product Management", value: "products" },
    { label: "Shopping Cart", value: "cart" },
    { label: "Payments Integration", value: "payments" },
    { label: "Order Tracking", value: "orders" },
    { label: "Discount Codes", value: "discounts" },
    { label: "Customer Reviews", value: "reviews" },
    { label: "Inventory Management", value: "inventory" },
    { label: "Email Receipts", value: "receipts" },
  ],
  app: [
    { label: "Push Notifications", value: "push" },
    { label: "User Accounts", value: "accounts" },
    { label: "Social Login", value: "social" },
    { label: "In-app Purchases", value: "iap" },
    { label: "Offline Mode", value: "offline" },
    { label: "Location Services", value: "location" },
    { label: "API Integration", value: "api" },
    { label: "Custom Animations", value: "animations" },
  ],
  landing: [
    { label: "Contact Form", value: "contact" },
    { label: "Hero Section", value: "hero" },
    { label: "Testimonials", value: "testimonials" },
    { label: "Pricing Table", value: "pricing" },
    { label: "FAQ Section", value: "faq" },
    { label: "Newsletter Signup", value: "newsletter" },
    { label: "SEO Optimization", value: "seo" },
    { label: "Custom Animations", value: "animations" },
  ],
};

const BASE_PRICES: Record<string, number> = {
  web: 1200,
  ecommerce: 1600,
  landing: 350,
  app: 1800,
};

const CURRENCIES = [
  { code: "GBP", symbol: "£", icon: <FaPoundSign />, rate: 1 },
  { code: "USD", symbol: "$", icon: <FaDollarSign />, rate: 1.28 },
  { code: "EUR", symbol: "€", icon: <FaEuroSign />, rate: 1.17 },
];

const RETAINER_OPTIONS = [
  { hours: 5, price: 180 },
  { hours: 10, price: 340 },
  { hours: 20, price: 600 },
  { hours: 40, price: 1100 },
];

export default function QuoteGenerator() {
  const [type, setType] = useState("landing");
  const [selected, setSelected] = useState<string[]>([]);
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [retainer, setRetainer] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const features = FEATURE_MAP[type] || [];
  const base = BASE_PRICES[type] || 0;
  const retainerTotal = retainer ? RETAINER_OPTIONS.find(r => r.hours === retainer)?.price || 0 : 0;
  const subtotal = base;
  const total = subtotal + retainerTotal;
  const converted = (amount: number) => Math.round(amount * currency.rate);

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="w-[80%] mx-auto bg-white rounded-2xl px-8 py-12 border border-[var(--divider-color)] shadow flex flex-col lg:flex-row gap-12 items-stretch relative overflow-hidden">
      {/* Left: Selection */}
      <div className="flex-1 min-w-[260px] relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="text-lg font-medium text-[var(--foreground)]">What do you want to build?</div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 mr-1">Currency:</span>
            <select
              className="rounded border border-[var(--divider-color)] px-2 py-1 text-sm bg-[var(--off-white)] text-[var(--foreground)] focus:outline-none"
              value={currency.code}
              onChange={e => setCurrency(CURRENCIES.find(c => c.code === e.target.value) || CURRENCIES[0])}
            >
              {CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>{c.symbol} {c.code}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-6">
          {PROJECT_TYPES.map((pt) => (
            <button
              key={pt.value}
              className={`px-5 py-2 rounded-lg border text-base font-medium flex items-center gap-2 transition-all duration-150 ${type === pt.value ? 'bg-[var(--primary-red)] text-white border-[var(--primary-red)] shadow' : 'bg-[var(--off-white)] text-[var(--foreground)] border-[var(--divider-color)] hover:border-[var(--primary-red)]'}`}
              onClick={() => { setType(pt.value); setSelected([]); }}
              type="button"
            >
              <span className="text-lg">{pt.icon}</span>
              {pt.label}
            </button>
          ))}
        </div>
        <div className="mb-6">
          <div className="text-lg font-medium mb-2 text-[var(--foreground)]">What features would you like?</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((f) => (
              <label key={f.value} className="flex items-center gap-2 bg-[var(--off-white)] rounded px-3 py-2 cursor-pointer border border-transparent hover:border-[var(--primary-red)] transition">
                <input
                  type="checkbox"
                  checked={selected.includes(f.value)}
                  onChange={() => setSelected(selected.includes(f.value) ? selected.filter(v => v !== f.value) : [...selected, f.value])}
                  className="accent-[var(--primary-red)]"
                />
                <span className="text-[var(--foreground)] text-base">{f.label}</span>
              </label>
            ))}
            {features.length === 0 && <div className="text-gray-400 text-sm col-span-2">No features available for this type.</div>}
          </div>
        </div>
        <div className="mb-2">
          <div className="text-lg font-medium mb-2 text-[var(--foreground)] flex items-center gap-2"><FaClock className="text-[var(--primary-red)]" /> Monthly Retainer</div>
          <div className="flex flex-wrap gap-3">
            {RETAINER_OPTIONS.map(opt => (
              <button
                key={opt.hours}
                className={`px-4 py-2 rounded-lg border text-base font-medium transition-all duration-150 ${retainer === opt.hours ? 'bg-[var(--primary-red)] text-white border-[var(--primary-red)] shadow' : 'bg-[var(--off-white)] text-[var(--foreground)] border-[var(--divider-color)] hover:border-[var(--primary-red)]'}`}
                onClick={() => setRetainer(retainer === opt.hours ? null : opt.hours)}
                type="button"
              >
                {opt.hours}h/mo — {currency.symbol}{converted(opt.price)}
              </button>
            ))}
          </div>
          <div className="text-xs text-gray-400 mt-2">For ongoing support, updates, or new features. Cancel anytime.</div>
        </div>
      </div>
      {/* Right: Quote & Contact Form */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[var(--off-white)] rounded-xl p-8 min-w-[260px] relative z-10">
        <div className="text-lg text-gray-500 mb-2">Estimated Price</div>
        <div className="text-4xl font-bold text-[var(--primary-red)] mb-2">{currency.symbol}{converted(total).toLocaleString()}</div>
        <div className="text-gray-400 mb-6 text-center text-sm">This is a rough estimate. For a detailed quote, please submit your details below.</div>
        {submitted ? (
          <div className="flex flex-col items-center justify-center w-full h-full p-6 bg-white rounded-xl border border-[var(--divider-color)] shadow">
            <FaCheckCircle className="text-green-500 text-5xl mb-4" />
            <div className="text-2xl font-semibold text-[var(--foreground)] mb-2">Thank you for your request!</div>
            <div className="text-gray-500 text-center text-base">We've received your details and will be in touch soon.<br/>If you need to reach us urgently, please email <a href="mailto:logan@resolvo.dev" className="text-[var(--primary-red)] underline">logan@resolvo.dev</a>.</div>
          </div>
        ) : (
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name*"
              className="rounded border border-[var(--divider-color)] px-4 py-2 bg-white text-[var(--foreground)] focus:outline-none"
              value={form.name}
              onChange={handleFormChange}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email*"
              className="rounded border border-[var(--divider-color)] px-4 py-2 bg-white text-[var(--foreground)] focus:outline-none"
              value={form.email}
              onChange={handleFormChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="rounded border border-[var(--divider-color)] px-4 py-2 bg-white text-[var(--foreground)] focus:outline-none"
              value={form.phone}
              onChange={handleFormChange}
            />
            <textarea
              name="message"
              placeholder="Message Content (optional)"
              className="rounded border border-[var(--divider-color)] px-4 py-3 bg-white text-[var(--foreground)] focus:outline-none min-h-[100px] resize-y"
              value={form.message}
              onChange={handleFormChange}
            />
            <button
              type="submit"
              className="primary-button w-full text-center mt-2"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 