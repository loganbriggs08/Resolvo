import Link from "next/link";

const PLANS = [
  {
    hours: 5,
    price: 180,
    description: "For small sites or occasional updates.",
    features: [
      "Priority email support",
      "Bug fixes & minor updates",
      "Consulting & advice",
      "Unused hours roll over (1 month)",
      "Monthly progress report",
      "Direct communication via WhatsApp/iMessage",
    ],
  },
  {
    hours: 10,
    price: 340,
    description: "For growing businesses with regular needs.",
    features: [
      "Everything in 5h plan",
      "New feature development",
      "Performance monitoring",
      "Content updates",
      "Quarterly strategy call",
      "Direct communication via WhatsApp/iMessage",
    ],
  },
  {
    hours: 20,
    price: 600,
    description: "For active businesses with ongoing work.",
    features: [
      "Everything in 10h plan",
      "Proactive site improvements",
      "Security monitoring",
      "Priority scheduling",
      "Unused hours roll over (2 months)",
      "Direct communication via WhatsApp/iMessage",
    ],
  },
  {
    hours: 40,
    price: 1100,
    description: "For agencies or businesses with major needs.",
    features: [
      "Everything in 20h plan",
      "Dedicated support window",
      "Slack/Teams communication",
      "Monthly strategy call",
      "Custom analytics & reporting",
      "Direct communication via WhatsApp/iMessage",
    ],
  },
];

export default function RetainerPlans() {
  return (
    <section className="w-full bg-[var(--secondary-background)] py-20">
      <div className="w-[70%] mx-auto text-center mb-12">
        <h2 className="text-3xl font-medium text-white mb-3">Monthly Retainers</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Get ongoing support, updates, and improvements for your website or app. Choose a plan that fits your needs and enjoy peace of mind every month.
        </p>
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-6">
        {PLANS.map((plan, idx) => (
          <div
            key={plan.hours}
            className={
              "flex flex-col md:flex-row md:items-center justify-between rounded-xl border border-[var(--divider-color)] bg-[#23272b] p-6 md:p-8 shadow transition hover:border-[var(--primary-red)] hover:shadow-lg" +
              (idx === 0 ? " mt-0" : "")
            }
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
              <div className="flex flex-col items-center md:items-start min-w-[90px]">
                <div className="text-[var(--primary-red)] text-2xl font-bold">{plan.hours}h/mo</div>
                <div className="text-xl font-semibold text-white">£{plan.price}</div>
              </div>
              <ul className="text-gray-200 text-sm list-disc ml-5 mt-2 md:mt-0 space-y-1 flex-1">
                <li className="text-gray-400 italic mb-1 list-none">{plan.description}</li>
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0 w-full md:w-auto flex justify-end">
              <Link
                href="mailto:logan@resolvo.dev?subject=Monthly%20Retainer%20Enquiry"
                className="primary-button w-full md:w-auto text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 