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
            Skip the Waiting.
            <span className="block text-indigo-600">
              Book Your Salon Slot in Advance.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Book haircut and grooming slots, join live queues, and avoid
            unnecessary waiting — all from your phone. Built for local salons
            and busy customers.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button>
              Book a Slot
            </Button>

            <Button variant="secondary">
              Join Live Queue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
