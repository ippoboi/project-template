import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay updated
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Get the latest updates, articles, and resources delivered to your
            inbox.
          </p>
          <div className="mt-6 flex max-w-md gap-x-4 mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-auto border-gray-300"
            />
            <Button type="submit" className="bg-gray-900 hover:bg-gray-800">
              Subscribe
            </Button>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            We care about your data. Read our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
}
