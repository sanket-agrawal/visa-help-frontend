const steps = [
  {
    title: "Select Country & Visa Type",
    description:
      "Choose your destination and visa category to get precise requirements.",
  },
  {
    title: "Enter Your Details",
    description:
      "Provide travel purpose, employment details, and supporting information.",
  },
  {
    title: "Get Embassy-Ready Documents",
    description:
      "Receive professionally structured cover letters and checklists.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold">
          How It Works
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <div className="mb-4 text-2xl font-bold text-indigo-600">
                {index + 1}
              </div>
              <h3 className="text-lg font-medium">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
