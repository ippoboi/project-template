import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      body: "This platform has completely transformed how we work. The intuitive design and powerful features make complex tasks simple.",
      author: {
        name: "Sarah Chen",
        role: "Product Manager",
        company: "TechCorp",
      },
    },
    {
      body: "The best investment we've made for our team. The time savings and improved collaboration are incredible.",
      author: {
        name: "Michael Rodriguez",
        role: "Engineering Lead",
        company: "StartupXYZ",
      },
    },
    {
      body: "Outstanding support and a product that actually delivers on its promises. Highly recommended for any growing team.",
      author: {
        name: "Emily Johnson",
        role: "CEO",
        company: "GrowthCo",
      },
    },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by teams worldwide
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, testimonialIdx) => (
            <Card key={testimonialIdx} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-900">
                  <p>{testimonial.body}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.author.role}, {testimonial.author.company}
                    </div>
                  </div>
                </figcaption>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
