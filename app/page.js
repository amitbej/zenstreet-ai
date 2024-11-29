"use client";

import Image from "next/image";
import { ArrowLeft, Share2, CheckCircle2, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShareDialog } from "./components/share-dialog";
import { Testimonials } from "./components/testimonials";
import Link from "next/link";

export default function TherapistProfile() {
  return (
    <div className="min-h-screen  bg-white flex flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="w-full lg:w-[450px] lg:fixed lg:left-0 lg:top-0 lg:h-screen bg-[#29B6F6] p-6">
        <button className="flex items-center text-white mb-8">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span className="text-lg">Back</span>
        </button>

        <Card className="bg-white rounded-lg p-6 relative">
          <ShareDialog />
          <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
            <Image
              src={"/images/profile.png"}
              alt="Therapist profile"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-xl font-semibold">Swetha Varma</h2>
            <CheckCircle2 className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-gray-600 mb-2">Consultant Clinical Psychologist</p>
          <p className="text-gray-600 mb-2">10+ Years of experience</p>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-gray-600">Starts at</span>
            <span className="font-semibold">1,200</span>
            <span className="text-gray-600">/Session</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Home className="w-4 h-4" />
            <span>Block A2, Delhi</span>
          </div>
        </Card>
        <Link href="/pricing"> 
        <Button
className="w-full bg-white text-black hover:bg-gray-100 mt-6"

>
          Book session
        </Button>
          </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-[450px] p-4 md:p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About me</h2>
          <p className="text-gray-600 mb-2">
            Hello, Im Swetha, a licensed therapist dedicated to guiding
            individuals through lifes challenges with empathy and expertise.
            With over 10 years of experience, I specialize in helping clients
            manage anxiety, depression, and relationship issues through
            personalized, evidence-based practices.
          </p>
          <button className="text-blue-500">Read more</button>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Credentials</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-blue-500">🎓</div>
              <span>Ph.D. in Clinical Psychology - Harvard University</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-blue-500">🎓</div>
              <span>
                M.A. in Counseling - University of California, Berkeley
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-blue-500">📋</div>
              <span>Licensed Professional Counselor (LPC) - State of DEF</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-blue-500">📋</div>
              <span>Certified Cognitive Behavioral Therapist (CBT)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-blue-500">👥</div>
              <span>Member, American Psychological Association (APA)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-blue-500">⏱️</div>
              <span>
                10+ years of experience in individual and group therapy
              </span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Available on</h2>
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-blue-50 rounded-lg flex flex-col items-center justify-center">
              <Home className="w-6 h-6 mb-2" />
              <span className="text-sm">In-person</span>
            </div>
            <div className="w-24 h-24 bg-blue-50 rounded-lg flex flex-col items-center justify-center">
              <Phone className="w-6 h-6 mb-2" />
              <span className="text-sm">Video/Voice call</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">I offer therapy for</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Stress Management",
              "Relationship Skills",
              "Anxiety Reduction",
              "Depression Relief",
              "Behavioral",
              "Trauma Healing",
            ].map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-4 py-2 rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">I am from</h2>
            <p className="text-gray-600">Chennai, India</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Languages</h2>
            <p className="text-gray-600">English, Hindi</p>
          </section>
        </div>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Client Testimonials</h2>
            <button className="text-gray-600 flex items-center">
              Show more
              <ArrowLeft className="w-4 h-4 ml-1 rotate-[-90deg]" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <p className="text-gray-600 mb-4">
                The guidance I received helped me manage my stress and live a
                more balanced life.
              </p>
              <p className="text-gray-500">Anonymous</p>
            </Card>
            <Card className="p-6">
              <p className="text-gray-600 mb-4">
                Therapy helped me build self-esteem and confidence that I never
                thought possible.
              </p>
              <p className="text-gray-500">Anonymous</p>
            </Card>
          </div>
        </section>
        <div className="p-4 max-w-md mx-auto">           
        <Testimonials/>
        </div>
      </div>
    </div>
  );
}
