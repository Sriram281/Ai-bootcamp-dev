import React from 'react';
import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who have successfully transformed their careers through our AI Bootcamp program.
            </p>
          </div>
        </div>
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;