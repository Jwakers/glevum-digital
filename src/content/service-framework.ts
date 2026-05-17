export type ServiceCategory = {
  id:
    | "essential"
    | "growth"
    | "ecommerce"
    | "bespoke"
    | "care";
  title: string;
  summary: string;
  whoFor: string;
  outcomes: string;
  includes: string[];
  pricingNote: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "essential",
    title: "Essential web partnership",
    summary:
      "Fix and improve your website so it is clear, modern, easy to update, and easier for customers to trust.",
    whoFor:
      "Small Gloucester businesses with an outdated site or no clear digital setup.",
    outcomes:
      "A faster, clearer online presence that is easier to manage and easier for customers to trust.",
    includes: [
      "Website rebuilds and upgrades",
      "Simple editing setup so you can update content yourself",
      "Accessibility improvements so more people can use your site",
      "Visitor tracking setup so you can see what is working",
      "Foundations to help your business show up in Google search",
    ],
    pricingNote:
      "Quoted based on scope, with clear breakdowns and no unnecessary extras.",
  },
  {
    id: "growth",
    title: "Visibility and enquiry growth",
    summary:
      "Help people find your business on Google and turn more website visits into enquiries.",
    whoFor:
      "Businesses that want more local discovery and better enquiry conversion.",
    outcomes:
      "More local visibility, clearer pages, and a smoother journey from first visit to enquiry.",
    includes: [
      "Google Business Profile setup and improvement",
      "Improvements that help people discover you in local search",
      "Clearer pages that explain what you do quickly",
      "Better enquiry forms and stronger call-to-action flow",
    ],
    pricingNote:
      "Organic and website-led growth only; paid ads management is not a packaged service.",
  },
  {
    id: "ecommerce",
    title: "Shopify and ecommerce delivery",
    summary:
      "Shopify setup and custom online shop builds for businesses that want to sell online confidently.",
    whoFor:
      "Businesses launching ecommerce or upgrading a current online shop.",
    outcomes:
      "A cleaner buying journey, easier product management, and stronger confidence for online customers.",
    includes: [
      "Shopify setup and configuration",
      "Custom Shopify design and build",
      "Store and checkout flow improvements to reduce drop-off",
      "Product and content structure support",
    ],
    pricingNote:
      "Custom scope with transparent quoting tied to catalog size and build complexity.",
  },
  {
    id: "bespoke",
    title: "Bespoke digital tools",
    summary:
      "Custom tools built around your exact process where off-the-shelf options do not fit.",
    whoFor:
      "Businesses with repetitive admin, unique workflows, or specific operational requirements.",
    outcomes:
      "Less manual work, smoother internal processes, and tools that fit how your business actually runs.",
    includes: [
      "Custom web tools and mini systems",
      "Workflow simplification",
      "Business-specific digital features",
    ],
    pricingNote:
      "Separately priced after discovery; always scoped around practical business value.",
  },
  {
    id: "care",
    title: "Ongoing care, support, and training",
    summary:
      "Monthly care plans plus handover/training so your team can confidently run day-to-day updates.",
    whoFor:
      "Businesses that want long-term support instead of one-off delivery.",
    outcomes:
      "Consistent progress, better stability, and less stress around website and digital upkeep.",
    includes: [
      "Monthly support and maintenance",
      "Monitoring, fixes, and ongoing improvements",
      "Owner and staff training sessions",
      "Clear handover guidance and easy-to-follow notes",
    ],
    pricingNote:
      "Simple monthly options and right-sized support based on your pace and priorities.",
  },
];

export const partnershipBoundaries = {
  model:
    "Lean, local, and direct. Without agency overhead, quotes are usually very competitive.",
  transparency:
    "You only pay for work that genuinely helps your business. No upsell for unnecessary extras.",
  scope:
    "If you need digital help outside the listed services, ask. If I am not the best fit, I will help you find someone who is.",
  ads:
    "Paid ads management is not a core package. The focus is organic visibility and website-led growth.",
};
