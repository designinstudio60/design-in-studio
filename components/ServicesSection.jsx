"use client";
import React from "react";

const services = [
  {
    name: "Resumes",
    image:
      "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=240&h=192",
  },
  {
    name: "Album Covers",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=240&h=192",
  },
  {
    name: "Flyers",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=240&h=192",
  },
  {
    name: "Instagram Stories",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=240&h=192",
  },
  {
    name: "Facebook Posts",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=240&h=192",
  },
  {
    name: "Logos",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=240&h=192",
  },
];

export default function ServicesSection() {
  const duplicatedServices = [...services, ...services]; // Repeat for infinite feel

  return (
    <section className="w-full py-12 overflow-hidden relative mt-10">
      <div className="group overflow-hidden">
        <div className="flex gap-5 animate-marquee whitespace-nowrap group-hover:paused">
          {duplicatedServices.map((service, index) => (
            <ServiceCard key={`service-${index}`} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ service }) => (
  <div className="relative inline-flex w-60 h-48 rounded-lg overflow-hidden flex-shrink-0">
    <img
      src={service.image}
      alt={service.name}
      className="w-full h-full object-cover"
      loading="lazy"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=240&h=192";
      }}
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
      <h3 className="text-white text-base font-medium">{service.name}</h3>
    </div>
  </div>
);
