import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-indigo-600 py-20 px-6 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold">
          Stop Waiting. Get Your Turn on Time.
        </h2>

        <p className="mt-4 text-indigo-100">
          Long queues waste time and frustrate customers.
          Book your slot or join the live queue before you arrive.
        </p>

        <div className="mt-8">
          <Button variant="light">
            Book a Slot Now
          </Button>
        </div>
      </div>
    </section>
  );
}
