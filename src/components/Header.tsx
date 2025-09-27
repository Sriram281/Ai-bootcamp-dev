import React, { useState, useEffect } from 'react';
import { Menu, X, Code, ChevronDown, BookOpen, Brain, Eye, MessageSquare, Shield, Briefcase } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coursesList = [
    {
      title: "Beginner AI Bootcamp",
      description: "Perfect for those new to AI and machine learning",
      icon: <Brain className="h-4 w-4" />,
      duration: "12 weeks"
    },
    {
      title: "Advanced AI Bootcamp",
      description: "Deep dive into cutting-edge AI technologies",
      icon: <BookOpen className="h-4 w-4" />,
      duration: "16 weeks"
    },
    {
      title: "Corporate Training",
      description: "Custom AI training solutions for teams",
      icon: <Briefcase className="h-4 w-4" />,
      duration: "Flexible"
    }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs', hasDropdown: true },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Blog/Resources', href: '#blog' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Bootcamp
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsCoursesHovered(true)}
                onMouseLeave={() => link.hasDropdown && setIsCoursesHovered(false)}
              >
                <a
                  href={link.href}
                  className={`flex items-center transition-colors duration-200 hover:text-blue-600 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                      isCoursesHovered ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>
                
                {/* Courses Dropdown */}
                {link.hasDropdown && (
                  <div className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform ${
                    isCoursesHovered 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-4'
                  }`}>
                    <div className="p-4">
                      <div className="text-sm font-semibold text-gray-900 mb-3 px-2">
                        Our Programs
                      </div>
                      <div className="space-y-1">
                        {coursesList.map((course, index) => (
                          <a
                            key={index}
                            href="#programs"
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="flex-shrink-0 text-blue-600 mt-1 group-hover:text-purple-600 transition-colors">
                              {course.icon}
                            </div>
                            <div className="ml-3 flex-1">
                              <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {course.title}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {course.description}
                              </div>
                              <div className="text-xs text-blue-600 mt-1 font-medium">
                                {course.duration}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <a
                          href="#programs"
                          className="block text-center text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors"
                        >
                          View All Programs →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Enroll Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;