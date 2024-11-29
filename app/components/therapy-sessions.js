"use client";

import { useState } from "react";
import { ArrowLeft, X, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const therapyTypes = [
  {
    title: "Group Therapy",
    price: "3,200",
    features: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
  },
  {
    title: "Individual Therapy",
    price: "3,200",
    features: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
  },
  {
    title: "Couple Therapy",
    price: "3,200",
    features: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
  },
];

const durations = [
  { label: "45 min", value: 45 },
  { label: "60 min", value: 60 },
  { label: "90 min", value: 90 },
];

export function TherapySessions() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [selectedDurations, setSelectedDurations] = useState({});

  const handleDurationClick = (therapyType, duration) => {
    setSelectedDurations((prev) => ({
      ...prev,
      [therapyType]: duration,
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-semibold">Available sessions</h1>
      </div>

      {showTooltip && (
        <div className="relative mb-6">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span className="text-sm">
              Click on the duration to see the pricing details
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-auto hover:bg-blue-200 rounded-full p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {therapyTypes.map((therapy) => (
          <Card
            key={therapy.title}
            className="bg-blue-500 text-white p-6 rounded-lg"
          >
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">₹{therapy.price}</span>
                <span className="text-sm opacity-90">/ session</span>
              </div>

              <div className="flex gap-2 my-4">
                {durations.map((duration) => (
                  <button
                    key={duration.value}
                    onClick={() =>
                      handleDurationClick(therapy.title, duration.value)
                    }
                    className={`px-3 py-1 rounded-full text-sm border border-white/30 hover:bg-blue-400 transition-colors
                      ${
                        selectedDurations[therapy.title] === duration.value
                          ? "bg-blue-400"
                          : "bg-transparent"
                      }`}
                  >
                    {duration.label}
                  </button>
                ))}
              </div>

              <h2 className="text-xl font-semibold mb-4">{therapy.title}</h2>

              <ul className="space-y-2 mb-6">
                {therapy.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              className="w-full bg-white text-blue-500 hover:bg-blue-50"
              asChild
            >
              <Link href="/booking">Proceed</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
