import React from 'react'
import { FaUsers, FaQuestionCircle, FaQuoteLeft } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Us</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Discover our story, meet our team, and learn more about our mission to provide exceptional service.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="max-w-3xl mx-auto text-gray-600">
            <p className="mb-6">
              Founded with a vision to revolutionize the industry, we've grown from a small startup to a leading provider of innovative solutions. Our commitment to excellence and customer satisfaction drives everything we do.
            </p>
            <p>
              We believe in creating lasting relationships with our clients and delivering products that make a real difference in people's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Team Member {member}</h3>
                <p className="text-gray-600">Position</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What services do you offer?",
                answer: "We offer a comprehensive range of services including..."
              },
              {
                question: "How can I get started?",
                answer: "Getting started is easy! Simply..."
              },
              {
                question: "What makes you different?",
                answer: "Our unique approach combines..."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((testimonial) => (
              <div key={testimonial} className="bg-gray-50 p-6 rounded-lg">
                <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />
                <p className="text-gray-600 mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Client Name</h4>
                    <p className="text-gray-600">Position, Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
