import React from 'react';
import { Linkedin, Twitter, Github, Star } from 'lucide-react';

const Instructors = () => {
  
  const instructors = [
    {
      name: "Dr. Sarah Chen",
      designation: "AI Research Scientist, Google",
      bio: "PhD in Machine Learning from Stanford. 10+ years experience in AI research and development.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
      expertise: ["Deep Learning", "NLP", "Computer Vision"],
      students: "1,200+",
      rating: 4.9,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Mark Rodriguez",
      designation: "Senior ML Engineer, Tesla",
      bio: "Former Apple ML engineer with expertise in autonomous systems and real-time AI applications.",
      image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg",
      expertise: ["MLOps", "Computer Vision", "Robotics"],
      students: "950+",
      rating: 4.8,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Dr. Aisha Patel",
      designation: "Data Science Director, Microsoft",
      bio: "Leading data science teams at Microsoft Azure. Expert in scalable ML systems and cloud AI.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
      expertise: ["Data Science", "Cloud AI", "Big Data"],
      students: "800+",
      rating: 4.9,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="instructors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn from
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Industry Experts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our world-class instructors bring years of experience from top tech companies 
            and research institutions to guide your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-3">
                    <a href={instructor.social.linkedin} className="text-white hover:text-blue-400 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={instructor.social.twitter} className="text-white hover:text-blue-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={instructor.social.github} className="text-white hover:text-blue-400 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {instructor.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {instructor.designation}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {instructor.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {instructor.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-semibold">{instructor.rating}</span>
                    <span className="ml-1">Rating</span>
                  </div>
                  <div>
                    <span className="font-semibold">{instructor.students}</span>
                    <span className="ml-1">Students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to Meet Our Instructors?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to learn more about our program and meet our expert instructors.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;