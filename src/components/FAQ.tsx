import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need prior coding experience to join the bootcamp?",
      answer: "While some programming experience is helpful, it's not required. We start with fundamentals and gradually build up to advanced concepts. We recommend basic familiarity with Python, which you can learn through our pre-course materials."
    },
    {
      question: "Is the bootcamp conducted online or in-person?",
      answer: "Our bootcamp is offered in a hybrid format. You can choose to attend live online sessions or join us at our physical locations in major cities. All sessions are recorded and available for review."
    },
    {
      question: "What kind of job support do you provide?",
      answer: "We offer comprehensive career support including resume review, mock interviews, portfolio development, networking opportunities, and direct connections with our hiring partners. Our job placement rate is 95% within 6 months of graduation."
    },
    {
      question: "What is the time commitment for the bootcamp?",
      answer: "The bootcamp requires 20-25 hours per week over 12 weeks. This includes live sessions (3 evenings per week), self-study time, and project work. We offer both full-time and part-time schedules to accommodate working professionals."
    },
    {
      question: "Do you offer payment plans or financing options?",
      answer: "Yes, we offer several financing options including income share agreements, monthly payment plans, and partnerships with education loan providers. We also provide scholarships for underrepresented groups in tech."
    },
    {
      question: "What projects will I build during the bootcamp?",
      answer: "You'll work on 4-5 major projects including a recommendation system, computer vision application, NLP chatbot, and a capstone project of your choice. All projects are designed to be portfolio-worthy and demonstrate real-world applications."
    },
    {
      question: "How is this different from online courses or university programs?",
      answer: "Our bootcamp combines the intensity and practical focus of a bootcamp with the rigor of academic programs. You get hands-on mentorship, live instruction, peer collaboration, and immediate application of concepts through projects."
    },
    {
      question: "What happens if I need to miss classes or fall behind?",
      answer: "All sessions are recorded and available for review. We also provide additional support sessions and one-on-one mentoring for students who need extra help. Our goal is to ensure every student succeeds."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Here are the most common questions about our AI bootcamp.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our admissions team is here to help you find the right path for your AI career.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;