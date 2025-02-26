"use client";
import React from "react";
import CustomerCard from "@/components/customerCard";
import { customerSupport } from "@/app/data";
import Header from "@/components/Header";

export default function CustomerPortal() {
  return (
    <body className="bg-slate-300">
      <Header />
      <section className="flex items-center justify-center font-istok  px-6 md:px-16">
        <div className="flex flex-col w-full min-h-[45rem] max-w-[90rem] p-16 rounded-3xl bg-opacity-75 bg-gray-900 shadow-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black mb-24">
          <h1 className="text-3xl md:text-5xl text-white font-bold text-center">
            Customer Portal
          </h1>
          <p className="text-lg md:text-2xl text-white text-center">
            Access your account information and support resources.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[30rem] justify-items-center">
            {customerSupport.map((support, index) => (
              <CustomerCard
                key={index}
                imageUrl={support.imageUrl}
                description={support.description}
                link={support.link}
              />
            ))}
          </div>
        </div>
      </section>
    </body>
  );
}
