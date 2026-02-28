"use client";

import { CircleUser, CircleCheck } from "lucide-react";

const fleetData = [
  { name: "Camry Muscle 2010", image: "/images/fleet-camry-muscle-2010.png", ownerName: "Kayode Jamiu", status: "Active" },
  { name: "Honda Civic 2007", image: "/images/fleet-honda-civic-2007.png", ownerName: "Abdulbasit Abdulrasheed", status: "Active" },
  { name: "Peugeot 206 2005", image: "/images/fleet-peugeot-206-2005.png", ownerName: "Tao Feek", status: "Active" },
  { name: "Peugeot 406", image: "/images/fleet-peugeot-406.png", ownerName: "Ahmad Nagya Kudu", status: "Active" },
  { name: "Toyota Corolla 2010", image: "/images/fleet-toyota-corolla-2010.png", ownerName: "Sunday Yohanna", status: "Active" },
  { name: "Bajaj Boxer 150", image: "/images/motocycle.png", ownerName: "Ibrahim Musa", status: "Active" },
  { name: "Honda ACE 125", image: "/images/motocycle.png", ownerName: "Aliyu Danjuma", status: "Active" },
  { name: "TVS Apache 160", image: "/images/motocycle.png", ownerName: "Suleiman Bello", status: "Active" },
];

export default function FleetGrid() {
  return (
    <section className="py-15">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7.5">
          {fleetData.map((vehicle) => (
            <div
              key={vehicle.name}
              className="bg-surface rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.08)] transition-transform duration-300 cursor-default hover:-translate-y-1.5"
            >
              <div className="w-full h-50 bg-divider flex items-center justify-center overflow-hidden text-text-muted">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1 text-dark">{vehicle.name}</h3>
                <p className="flex items-center text-text-medium text-base my-2">
                  <CircleUser size={16} className="mr-1.5 shrink-0 text-text-medium" />
                  {vehicle.ownerName}
                </p>
                <div className="flex items-center mt-2">
                  <span className="inline-flex items-center text-sm text-accent-green font-medium">
                    <CircleCheck size={14} className="mr-1 shrink-0" />
                    {vehicle.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
