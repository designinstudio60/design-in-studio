


"use client";
import React from "react";
import { useSelector } from "react-redux";

const ServiceCard = ({ service }) => (
  <div className="relative inline-flex w-60 h-48 rounded-lg overflow-hidden flex-shrink-0">
    <img
      src={service.image}
      alt={service.name}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
      <h3 className="text-white text-base font-medium">{service.name}</h3>
    </div>
  </div>
);

export default function ServicesSection() {
  const services = useSelector((state) => state.services.services);
  const duplicatedServices = [...services, ...services];

  return (
    <section className="w-full py-10 overflow-hidden relative ">
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