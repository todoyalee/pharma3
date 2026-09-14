const products = [
  {
    category: "Hematology Analyzer",
    name: "Mission® HA-360",
    tagline: "3-Diff Automatic Hematology Analyzer",
    description:
      "A fully automated 3-part differential hematology analyzer built for busy clinical laboratories. Sheath Flow Impedance technology delivers rapid, accurate CBC results across 21 parameters, while a cyanide-free reagent system keeps daily operation safe for staff and the environment.",
    features: [
      "21 parameters incl. WBC, RBC, HGB, PLT & 3-part WBC differential",
      "60 samples/hour in Whole Blood mode, 14 µL sample volume",
      "10.4\" color touch screen with internal thermal printer",
      "50,000 stored results with histograms, barcoded reagent management",
    ],
    brochures: [
      { label: "Product Sell Sheet", href: "/brochures/mission-ha-360-hematology-analyzer.pdf" },
    ],
    brand: "ACON Biotech",
    icon: "🩸",
  },
  {
    category: "Point-of-Care Analyzer",
    name: "On-Call® MultiPro System",
    tagline: "Multi-Assay HbA1c, ACR & CRP Analyzer",
    description:
      "A compact benchtop analyzer that brings lab-quality diabetes, kidney and inflammation testing to the point of care. One instrument runs three assays — HbA1c, urine ACR and CRP/hsCRP — with immunoturbidimetric and colorimetric methods proven by extensive clinical studies.",
    features: [
      "Just 1 µL blood for HbA1c, 5 µL urine for ACR, 5 µL blood for CRP",
      "7\" touch screen, automatic QR code scanning, minimal hands-on time",
      "Room-temperature cartridge storage with 24-month shelf life",
      "RS232, USB, LAN & WLAN connectivity for 5,500 stored records",
    ],
    brochures: [
      { label: "System Brochure", href: "/brochures/oncall-multipro-system-brochure.pdf" },
      { label: "Operation Catalog", href: "/brochures/oncall-multipro-operation-catalog.pdf" },
    ],
    brand: "ACON Diabetes Care",
    icon: "🩺",
  },
  {
    category: "Rapid Diagnostic Tests",
    name: "Wondfo Rapid Test Range",
    tagline: "Lateral-Flow POCT Product Catalogue",
    description:
      "A comprehensive line of CE-marked rapid tests from a manufacturer trusted in 150+ countries. Covering fertility, infectious disease, drugs of abuse, tumor markers, inflammation, cardiac markers and vitamin D — available as strips, cassettes, panels, midstream devices, T-Cups and Q-Cups.",
    features: [
      "Fertility: HCG, LH, FSH, Ovulation, Progesterone & Sperm tests",
      "Infectious disease: HIV, Hepatitis, Flu/COVID/RSV, Malaria, Dengue, STDs",
      "Drugs of abuse panels for urine, saliva & hair, plus tumor & cardiac markers",
      "WHO pre-qualified & CE/FDA/NMPA options, 20+ years manufacturing experience",
    ],
    brochures: [
      { label: "Full Product Catalogue", href: "/brochures/wondfo-rapid-test-catalogue.pdf" },
    ],
    brand: "Wondfo Biotech",
    icon: "🧪",
  },
];

const DiagnosticSolutions = () => {
  return (
    <section className="py-12 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary dark:text-[#02ADEE]">
            Our Diagnostic Solutions
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nehed Medical Trading supplies clinical laboratories and healthcare facilities with
            trusted diagnostic instruments and rapid test solutions from leading manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="p-6 bg-secondary/30 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up flex flex-col border border-transparent hover:border-primary/10 dark:hover:border-[#02ADEE]/10"
            >
              <div className="text-4xl mb-3">{product.icon}</div>
              <span className="text-xs font-medium uppercase tracking-wide text-primary/70 dark:text-[#02ADEE]/80">
                {product.category}
              </span>
              <h3 className="font-display text-xl font-semibold text-primary dark:text-[#02ADEE] mt-1">
                {product.name}
              </h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                {product.tagline}
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>

              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-5 flex-1">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-primary dark:text-[#02ADEE]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {product.brochures.map((brochure) => (
                  <a
                    key={brochure.href}
                    href={brochure.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1.5 rounded-full bg-primary text-white dark:bg-[#02ADEE] hover:opacity-90 transition-opacity"
                  >
                    {brochure.label} ↓
                  </a>
                ))}
              </div>

              <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">by {product.brand}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSolutions;
