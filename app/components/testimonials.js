"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    text: "The guidance I received helped me manage my stress and live a more balanced life.",
    author: "Anonymous",
  },
  {
    id: 2,
    text: "Therapy helped me build self-esteem and confidence that I never thought possible.",
    author: "Anonymous",
  },
  {
    id: 3,
    text: "The guidance I received helped me manage my stress and live a more balanced life.",
    author: "Anonymous",
  },
  {
    id: 4,
    text: "Therapy helped me build self-esteem and confidence that I never thought possible.",
    author: "Anonymous",
  },
  {
    id: 5,
    text: "The guidance I received helped me manage my stress and live a more balanced life.",
    author: "Anonymous",
  },
  {
    id: 6,
    text: "Therapy helped me build self-esteem and confidence that I never thought possible.",
    author: "Anonymous",
  },
  {
    id: 7,
    text: "The guidance I received helped me manage my stress and live a more balanced life.",
    author: "Anonymous",
  },
  {
    id: 8,
    text: "Therapy helped me build self-esteem and confidence that I never thought possible.",
    author: "Anonymous",
  },
];

export function Testimonials() {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedTestimonials = isExpanded
    ? testimonials
    : testimonials.slice(0, 3);

  return (
    <section className=" space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Client Testimonials</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span>{isExpanded ? "Show less" : "Show more"}</span>
          <ChevronUp
            className={`ml-1 w-3 h-3 transition-transform duration-200 ${
              isExpanded ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {displayedTestimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="p-3 aspect-square flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative">
              <div className="text-4xl leading-[0] font-serif text-blue-200 absolute -top-2 -left-1"></div>
              <blockquote className="text-gray-800 text-xs mt-3 line-clamp-4">
                {testimonial.text}
              </blockquote>
            </div>
            <cite className="text-gray-600 not-italic text-xs">
              {testimonial.author}
            </cite>
          </Card>
        ))}
      </div>
    </section>
  );
}
