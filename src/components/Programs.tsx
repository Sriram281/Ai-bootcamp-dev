import React, { useState } from 'react';
import { Clock, Users, Award, CheckCircle, Star, ArrowRight, Calendar, BookOpen, Briefcase } from 'lucide-react';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(0);

  const programs = [
    {
      id: 'beginner',
      title: 'Beginner AI Bootcamp',
      subtitle: 'Perfect for AI newcomers',
      duration: '12 weeks',
      schedule: 'Part-time: 15-20 hrs/week',
      price: '$2,499',
      originalPrice: '$3,199',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-600',
      level: 'Beginner',
      students: '300+',
      rating: 4.8,
      description: 'Start your AI journey with our comprehensive beginner-friendly program. No prior experience required.',
      highlights: [
        'Zero to AI professional in 12 weeks',
        'Hands-on projects from day one',
        'Personal mentor assigned',
        'Job placement assistance'
      ],
      curriculum: [
        'Python Programming Fundamentals',
        'Mathematics for AI (Linear Algebra, Statistics)',
        'Machine Learning Basics',
        'Data Analysis & Visualization',
        'Introduction to Deep Learning',
        'AI Ethics & Best Practices',
        'Portfolio Development',
        'Career Preparation'
      ],
      features: [
        '3 Real-world Projects',
        'Weekly 1-on-1 Mentoring',
        'Live Interactive Sessions',
        'Career Services Support',
        'Certificate of Completion',
        '6 Months Job Placement Support',
        'Access to Alumni Network',
        'Lifetime Course Updates'
      ],
      outcomes: [
        'Build 3 AI applications',
        'Master Python for AI',
        'Understand ML algorithms',
        'Create professional portfolio'
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced AI Bootcamp',
      subtitle: 'For experienced developers',
      duration: '16 weeks',
      schedule: 'Full-time: 40+ hrs/week',
      price: '$4,999',
      originalPrice: '$6,499',
      icon: <Award className="h-8 w-8" />,
      color: 'from-blue-500 to-purple-600',
      level: 'Advanced',
      students: '200+',
      rating: 4.9,
      description: 'Deep dive into cutting-edge AI technologies and advanced machine learning techniques.',
      highlights: [
        'Advanced AI specializations',
        'Research-level projects',
        'Industry partnerships',
        'Guaranteed job placement'
      ],
      curriculum: [
        'Advanced Deep Learning Architectures',
        'Natural Language Processing',
        'Computer Vision & Image Processing',
        'Reinforcement Learning',
        'MLOps & Production Deployment',
        'AI Research Methodologies',
        'Advanced Mathematics for AI',
        'Capstone Research Project'
      ],
      features: [
        '6 Advanced Projects',
        'Research Mentorship',
        'Industry Partner Projects',
        'Conference Presentation Opportunity',
        'Advanced Certification',
        '12 Months Premium Job Support',
        'Research Publication Support',
        'Lifetime Expert Community Access'
      ],
      outcomes: [
        'Publish research paper',
        'Master advanced AI techniques',
        'Lead AI projects',
        'Secure senior AI roles'
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Training',
      subtitle: 'Custom solutions for teams',
      duration: 'Flexible',
      schedule: 'Customizable schedule',
      price: 'Custom Quote',
      originalPrice: null,
      icon: <Briefcase className="h-8 w-8" />,
      color: 'from-orange-500 to-red-600',
      level: 'All Levels',
      students: '50+ Companies',
      rating: 4.9,
      description: 'Tailored AI training programs designed specifically for your organization\'s needs and goals.',
      highlights: [
        'Customized curriculum',
        'On-site or remote delivery',
        'Team-based projects',
        'Ongoing support included'
      ],
      curriculum: [
        'Custom Curriculum Design',
        'Industry-Specific Use Cases',
        'Team Collaboration Projects',
        'Leadership AI Strategy',
        'Implementation Planning',
        'Change Management',
        'ROI Measurement',
        'Ongoing Consultation'
      ],
      features: [
        'Tailored Content',
        'Dedicated Training Manager',
        'Flexible Scheduling',
        'Team Projects',
        'Executive Briefings',
        'Implementation Support',
        'Progress Tracking',
        'Ongoing Consultation'
      ],
      outcomes: [
        'Upskill entire teams',
        'Implement AI solutions',
        'Drive digital transformation',
        'Achieve measurable ROI'
      ]
    }
  ];

  const currentProgram = programs[selectedProgram];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect AI bootcamp program that matches your experience level and career goals.
          </p>
        </div>

        {/* Program Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program, index) => (
            <button
              key={index}
              onClick={() => setSelectedProgram(index)}
              className={`flex items-center px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                selectedProgram === index
                  ? `bg-gradient-to-r ${program.color} text-white shadow-lg transform scale-105`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="mr-3">
                {program.icon}
              </div>
              <div className="text-left">
                <div className="font-bold">{program.title}</div>
                <div className="text-sm opacity-90">{program.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Program Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Program Info */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${currentProgram.color} p-4 rounded-2xl text-white mr-4`}>
                  {currentProgram.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{currentProgram.title}</h3>
                  <p className="text-lg text-gray-600">{currentProgram.description}</p>
                </div>
              </div>

              {/* Program Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{currentProgram.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{currentProgram.level}</div>
                  <div className="text-sm text-gray-600">Level</div>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{currentProgram.students}</div>
                  <div className="text-sm text-gray-600">Graduates</div>
                </div>
                <div className="text-center">
                  <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{currentProgram.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                {currentProgram.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Curriculum Overview</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProgram.curriculum.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Pricing & Features */}
          <div className="space-y-8">
            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="text-sm text-gray-600 mb-2">{currentProgram.schedule}</div>
                {currentProgram.originalPrice ? (
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-gray-900">{currentProgram.price}</span>
                      <div className="text-left">
                        <div className="text-lg text-gray-500 line-through">{currentProgram.originalPrice}</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold text-sm">
                      Save ${parseInt(currentProgram.originalPrice.replace('$', '').replace(',', '')) - parseInt(currentProgram.price.replace('$', '').replace(',', ''))}
                    </div>
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-gray-900 mb-4">{currentProgram.price}</div>
                )}
                
                <button className={`w-full bg-gradient-to-r ${currentProgram.color} text-white py-4 px-8 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 mb-4`}>
                  {currentProgram.id === 'corporate' ? 'Request Quote' : 'Enroll Now'}
                </button>
                
                <p className="text-xs text-gray-500">30-day money-back guarantee</p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h5 className="font-bold text-gray-900 text-lg">What's Included:</h5>
                {currentProgram.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h5 className="font-bold text-gray-900 text-lg mb-4">Learning Outcomes:</h5>
              <div className="space-y-3">
                {currentProgram.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Not Sure Which Program is Right for You?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Schedule a free consultation with our admissions team to discuss your goals and find the perfect program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-200">
                Download Program Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;