import React, { useState } from 'react';
import { Clock, BarChart, ArrowRight, Filter } from 'lucide-react';

const Courses = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const filters = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const courses = [
    {
      title: "Machine Learning Fundamentals",
      description: "Master the core concepts of ML including supervised and unsupervised learning algorithms.",
      duration: "4 weeks",
      level: "Beginner",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Deep Learning & Neural Networks",
      description: "Dive deep into neural networks, CNNs, RNNs, and modern architectures like Transformers.",
      duration: "3 weeks",
      level: "Intermediate",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Natural Language Processing",
      description: "Learn to process and understand human language with advanced NLP techniques and models.",
      duration: "2 weeks",
      level: "Advanced",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Computer Vision",
      description: "Build applications that can see and interpret visual data using modern CV techniques.",
      duration: "2 weeks",
      level: "Advanced",
      color: "from-red-500 to-red-600"
    },
    {
      title: "AI Ethics & Deployment",
      description: "Understand responsible AI practices and learn to deploy models in production environments.",
      duration: "1 week",
      level: "Intermediate",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Capstone Project",
      description: "Apply everything you've learned in a comprehensive AI project for your portfolio.",
      duration: "2 weeks",
      level: "Advanced",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const filteredCourses = selectedFilter === 'All' 
    ? courses 
    : courses.filter(course => course.level === selectedFilter);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}AI Curriculum
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our carefully crafted curriculum covers all aspects of modern AI and machine learning, 
            from fundamentals to advanced applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <button className="flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors group-hover:translate-x-2 transform duration-200">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our next cohort and transform your career with cutting-edge AI skills.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              View Full Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

