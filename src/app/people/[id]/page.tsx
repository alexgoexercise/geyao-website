import { notFound } from "next/navigation";
import { peopleData } from "@/data/people";
import { bandsData } from "@/data/bands";
import { Instagram, Youtube, Music, Users, Calendar, ArrowLeft, Mail, Phone, MapPin, Guitar, Mic, Drum, Piano, Music2, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PhoneButton from "@/components/PhoneButton";

interface PersonPageProps {
  params: Promise<{
    id: string;
  }>;
}

const PersonPage = async ({ params }: PersonPageProps) => {
  const { id } = await params;
  const person = peopleData.find(p => p.id === id);
  
  if (!person) {
    notFound();
  }

  const personBands = bandsData.filter(band => band.members.includes(person.id));

  const roleIcons = {
    "Lead Singer": Mic,
    "Guitarist": Guitar,
    "Bassist": Guitar,
    "Drummer": Drum,
    "Keyboardist": Piano,
    "Violinist": Music2,
    "Producer": Music,
    "Manager": Users
  };

  const RoleIcon = roleIcons[person.role as keyof typeof roleIcons] || Users;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          href="/people"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to People
        </Link>

        {/* Hero Section */}
        <div className="relative mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Person Photo */}
            <div className="relative lg:w-1/3">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-gray-700/50">
                <Image
                  src={person.photo}
                  alt={person.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Person Info */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{person.name}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <RoleIcon size={20} />
                  <span>{person.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>{personBands.length} bands</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <div className="flex flex-wrap gap-1">
                    {Array.isArray(person.department) ? (
                      person.department.map((dept, index) => (
                        <span key={index} className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm">
                          {dept}
                        </span>
                      ))
                    ) : (
                      <span>{person.department}</span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {person.description}
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {person.contact.email && (
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail size={20} className="text-primary" />
                    <a href={`mailto:${person.contact.email}`} className="hover:text-white transition-colors">
                      {person.contact.email}
                    </a>
                  </div>
                )}
                {person.contact.phone && (
                  <PhoneButton phoneNumber={person.contact.phone} personName={person.name} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bands Section */}
        {personBands.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Music size={32} />
              Bands
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personBands.map((band) => (
                <Link
                  key={band.id}
                  href={`/bands/${band.id}`}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={band.photo}
                      alt={band.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{band.name}</h3>
                  <p className="text-primary text-sm mb-2">{band.genre}</p>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {band.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                    <Play size={14} />
                    <span>{band.videos.length} videos</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Skills & Interests */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Guitar size={32} />
            Skills & Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Musical Skills</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Instrument Mastery</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Performance</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Collaboration</span>
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Personal Interests</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Music Theory</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Composition</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Live Performance</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Studio Recording</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Music Production</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related People */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Other Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {peopleData
              .filter(p => p.id !== person.id)
              .slice(0, 3)
              .map((relatedPerson) => (
                <Link
                  key={relatedPerson.id}
                  href={`/people/${relatedPerson.id}`}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700">
                      <Image
                        src={relatedPerson.photo}
                        alt={relatedPerson.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{relatedPerson.name}</h3>
                      <p className="text-primary font-medium">{relatedPerson.role}</p>
                      <p className="text-gray-400 text-sm">{relatedPerson.department}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {relatedPerson.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonPage; 