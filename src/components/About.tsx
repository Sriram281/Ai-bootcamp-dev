import React from 'react';
import { CheckCircle, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Hands-on Projects",
      description: "Build real-world AI applications from day one"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Industry Mentors",
      description: "Learn from experts working at top tech companies"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Career Support",
      description: "Lifetime job placement assistance and networking"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Career with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}AI Excellence
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our intensive 12-week AI bootcamp is designed to take you from beginner to job-ready 
              AI professional. With a curriculum crafted by industry leaders and hands-on project 
              experience, you'll master the skills that top companies are looking for.
            </p>
            
            <div className="space-y-6 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Learn More About Our Program
            </button>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Bootcamp?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Comprehensive AI curriculum</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Live coding sessions & workshops</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Personal portfolio development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Job interview preparation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Lifetime access to community</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;