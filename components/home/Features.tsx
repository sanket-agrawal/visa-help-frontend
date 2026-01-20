const features = [
  "Real-time slot availability",
  "Live walk-in queue tracking",
  "Instant turn notifications",
  "No waiting inside the salon",
  "Works on any smartphone",
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold">
          Built for Busy Customers & Local Salons
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
