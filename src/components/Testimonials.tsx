import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, TrendingUp, Users, Award } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Emily Johnson",
      role: "ML Engineer at Netflix",
      company: "Netflix",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg",
      content: "The AI Bootcamp completely transformed my career. I went from having zero ML experience to landing my dream job at Netflix. The hands-on projects and mentorship were invaluable.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "AI Research Scientist",
      company: "OpenAI",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      content: "This program gave me the foundation I needed to transition into AI research. The curriculum is cutting-edge and the instructors are world-class. Couldn't recommend it more!",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Data Scientist at Uber",
      company: "Uber",
      image: "https://images.pexels.com/photos/3763111/pexels-photo-3763111.jpeg",
      content: "The practical approach and real-world projects helped me build a portfolio that stood out to employers. I received multiple job offers after completing the program.",
      rating: 5
    }
  ];

  const metrics = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "95%",
      label: "Job Placement Rate",
      color: "text-green-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "500+",
      label: "Graduates Hired",
      color: "text-blue-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "$120K",
      label: "Average Starting Salary",
      color: "text-purple-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our graduates are making an impact at the world's leading tech companies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 ${metric.color}`}>
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="absolute top-8 left-8">
            <Quote className="h-12 w-12 text-white/30" />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              {[...Array(currentTest.rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 inline-block mx-1 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              "{currentTest.content}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <img
                src={currentTest.image}
                alt={currentTest.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">{currentTest.name}</div>
                <div className="text-white/80">{currentTest.role}</div>
                <div className="text-white/60">{currentTest.company}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Our graduates work at leading companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Netflix', 'Tesla', 'Microsoft', 'Apple', 'Meta', 'OpenAI', 'Uber'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;