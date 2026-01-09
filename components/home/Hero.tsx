import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white px-6">
      {/* Decorative background blur */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[80vh] max-w-4xl items-center text-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Visa Documents Done Right.
            <span className="block text-indigo-600">
              Embassy-Ready. Country-Specific.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Generate visa cover letters, document checklists, and explanations
            tailored to your destination — without guesswork or generic templates.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button>
              Generate Cover Letter
            </Button>

            <Button variant="secondary">
              View Supported Countries
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
