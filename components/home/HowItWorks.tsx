const steps = [
  {
    title: "Choose a Salon",
    description:
      "Browse nearby salons, services, and real-time availability in your area.",
  },
  {
    title: "Book a Slot or Join Queue",
    description:
      "Select a time slot in advance or join the live queue for walk-in visits.",
  },
  {
    title: "Arrive on Time, No Waiting",
    description:
      "Get notified when your turn is near and walk in at the right moment.",
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
