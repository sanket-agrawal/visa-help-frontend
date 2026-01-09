const features = [
  "Country-specific visa rules",
  "Professionally written cover letters",
  "No generic templates",
  "Aligned with embassy expectations",
  "Save and reuse documents",
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold">
          Built for Serious Applicants
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="rounded-md border border-gray-200 p-4"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
