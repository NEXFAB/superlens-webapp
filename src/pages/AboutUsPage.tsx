import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Naveen Govindan",
      position: "CEO & Founder",
      bio: "Led Data Engineering teams at DAZN, WBD. I've seen firsthand how hard it is for business teams to get timely, actionable insights. Here, we are building SuperLens to eliminate the bottlenecks in BI with a conversational AI experience that delivers reliable, fast and context-aware narratives!"
    },
    {
      name: "Visweswarji Tanuku",
      position: "Head Of Operations",
      bio: "Viswa oversees all operational aspects of SuperLens, ensuring smooth delivery of our services to clients worldwide."
    },
    {
      name: "To be hired",
      position: "Chief Data Scientist",
      bio: ""
    },
    {
      name: "To be hired",
      position: "Principal Data Engineer",
      bio: ""
    },
    {
      name: "To be hired",
      position: "Lead Platform Engineer",
      bio: ""
    },
    {
      name: "To be hired",
      position: "Senior Data Analyst",
      bio: ""
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">About Us</h1>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where every business decision is powered by intelligent data analysis, without the complexity and cost barriers.
              </p>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                To democratize advanced data analytics and make AI-powered insights accessible to organizations of all sizes.
              </p>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-superlens-blue font-medium mb-3">{member.position}</p>
                  {member.bio && <p className="text-gray-600">{member.bio}</p>}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
