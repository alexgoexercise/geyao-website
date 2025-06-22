"use client";

import { useState } from "react";
import { peopleData, Person } from "@/data/people";
import { bandsData } from "@/data/bands";
import { Music, Users, Mic, Drum, Guitar, Piano } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const departmentIcons = {
  "Instrumental": Guitar,
  "Vocals": Mic,
  "Rhythm": Drum,
  "Electronic": Piano,
  "Strings": Music
};

const PeopleGrid = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);

  const filteredPeople = selectedDepartment === "all" 
    ? peopleData 
    : peopleData.filter(person => person.department === selectedDepartment);

  const departments = ["all", ...Array.from(new Set(peopleData.map(p => p.department)))];

  const getPersonBands = (bandIds: string[]) => {
    return bandsData.filter(band => bandIds.includes(band.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Talented musicians and passionate creators who bring Geyao Music to life
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => {
            const Icon = dept === "all" ? Users : departmentIcons[dept as keyof typeof departmentIcons];
            return (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="capitalize">{dept}</span>
              </button>
            );
          })}
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPeople.map((person) => {
            const personBands = getPersonBands(person.bands);
            return (
              <Link
                key={person.id}
                href={`/people/${person.id}`}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
                onMouseEnter={() => setHoveredPerson(person.id)}
                onMouseLeave={() => setHoveredPerson(null)}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Person Photo and Info */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-gray-700 group-hover:border-primary/50 transition-colors duration-300">
                        <Image
                          src={person.photo}
                          alt={person.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                        {person.department}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{person.name}</h3>
                      <p className="text-primary font-medium mb-2">{person.role}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <Users size={14} />
                        <span>{personBands.length} bands</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                        {person.description}
                      </p>
                    </div>
                  </div>

                  {/* Bands */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Music size={16} />
                      Bands
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {personBands.map((band) => (
                        <div
                          key={band.id}
                          className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full text-sm"
                        >
                          <div className="w-4 h-4 rounded-full overflow-hidden">
                            <Image
                              src={band.photo}
                              alt={band.name}
                              width={16}
                              height={16}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-gray-300">{band.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredPeople.length === 0 && (
          <div className="text-center py-12">
            <Music size={64} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">No members found in this department.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeopleGrid; 