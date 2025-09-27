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
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;