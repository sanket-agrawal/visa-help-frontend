import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-indigo-600 py-20 px-6 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold">
          Stop Guessing. Apply With Confidence.
        </h2>

        <p className="mt-4 text-indigo-100">
          Thousands of applications fail due to poor documentation.
          Do not let yours be one of them.
        </p>

        <div className="mt-8">
          <Button variant="light">
            Start Free
          </Button>
        </div>
      </div>
    </section>
  );
}
