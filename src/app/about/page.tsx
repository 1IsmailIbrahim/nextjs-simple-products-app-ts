// components/AboutUs.tsx
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative w-full mx-auto pt-16 p-8 bg-gray-900 rounded-lg shadow-lg"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url("/images/about-bg.jpg")' }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              Elimr is dedicated to providing high-quality products that meet
              your needs and exceed your expectations. Our commitment to
              excellence is reflected in everything we do.
            </p>
            <p className="text-lg mb-4">
              Founded in 2024, Elimr has grown from a small startup to a leading
              provider of premium products in various categories. Our team
              consists of passionate professionals who are constantly innovating
              and improving our offerings.
            </p>
            <p className="text-lg mb-4">
              We believe in sustainability and ethical business practices. Our
              products are sourced and manufactured with the highest standards
              of quality and responsibility.
            </p>
            <p className="text-lg mb-4">
              Our mission is to provide our customers with exceptional service
              and products that enhance their lives. Thank you for choosing
              Elimr!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/our-team.jpg"
              alt="Our Team"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-blue-400">
            Our Values
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Customer Satisfaction</li>
            <li>Quality and Excellence</li>
            <li>Innovation and Improvement</li>
            <li>Sustainability and Responsibility</li>
            <li>Integrity and Transparency</li>
          </ul>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-blue-400">
            Our Journey
          </h3>
          <p className="text-lg mb-4">
            Over the years, Elimr has achieved significant milestones and has
            been recognized for its outstanding contributions to the industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-semibold mb-2">Milestones</h4>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>2024: Elimr was founded</li>
                <li>2025: Launched our first product line</li>
                <li>2026: Reached 10,000 satisfied customers</li>
                <li>2027: Expanded to international markets</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Awards</h4>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Best Startup of 2025</li>
                <li>Top Innovator Award 2026</li>
                <li>Customer Choice Award 2027</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-blue-400">
            Customer Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <p className="text-lg italic mb-4">
                &#34; Elimr&apos;s products are top-notch! I am extremely
                satisfied with the quality and customer service. Highly
                recommend!&#34;
              </p>
              <p className="text-lg font-bold">- John Doe</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <p className="text-lg italic mb-4">
                &#34;Excellent products and great value for money. Elimr has
                never disappointed me. Keep up the great work!&#34;
              </p>
              <p className="text-lg font-bold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
