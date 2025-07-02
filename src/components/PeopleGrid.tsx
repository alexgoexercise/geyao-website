"use client";

import { useState } from "react";
import { peopleData } from "@/data/people";
import { Music, Users, Mic, Drum, Guitar, Piano, Settings, MessageSquare, Megaphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const departmentIcons = {
  "Performer": Music,
  "Technician": Settings,
  "Commentator": MessageSquare,
  "Publicity": Megaphone
};

const roleIcons = {
  "Guitar": Guitar,
  "Vocals": Mic,
  "Drums": Drum,
  "Piano": Piano,
  "Violin": Music,
  "Bass": Guitar,
};

const PeopleGrid = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);

  const filteredPeople = selectedDepartment === "all" 
    ? peopleData 
    : peopleData.filter(person => {
        if (Array.isArray(person.department)) {
          return person.department.includes(selectedDepartment);
        }
        return person.department === selectedDepartment;
      });

  const departments = ["all", ...Array.from(new Set(
    peopleData.flatMap(p => 
      Array.isArray(p.department) ? p.department : [p.department]
    )
  ))];

  const isPerformer = (department: string | string[]) => {
    if (Array.isArray(department)) {
      return department.includes("Performer");
    }
    return department === "Performer";
  };

  const getNonPerformerDepartments = (department: string | string[]) => {
    if (Array.isArray(department)) {
      return department.filter(dept => dept !== "Performer");
    }
    return department === "Performer" ? [] : [department];
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
          {filteredPeople.map((person) => (
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
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{person.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {/* Show roles for performers */}
                      {isPerformer(person.department) && person.roles && person.roles.length > 0 && person.roles.map((role, index) => {
                        const RoleIcon = roleIcons[role as keyof typeof roleIcons];
                        return (
                          <span key={`role-${index}`} className="flex items-center gap-1 text-sm text-gray-300 bg-gray-700/50 px-3 py-1 rounded-full">
                            {RoleIcon && <RoleIcon size={14} className="text-primary" />}
                            {role}
                          </span>
                        );
                      })}
                      
                      {/* Show other departments */}
                      {getNonPerformerDepartments(person.department).map((dept, index) => {
                        const DeptIcon = departmentIcons[dept as keyof typeof departmentIcons];
                        return (
                          <span key={`dept-${index}`} className="flex items-center gap-1 text-sm text-gray-300 bg-gray-700/50 px-3 py-1 rounded-full">
                            {DeptIcon && <DeptIcon size={14} className="text-primary" />}
                            {dept}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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