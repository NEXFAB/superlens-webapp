
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-superlens-richBlue relative">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your decision making?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Start your free 3 months trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo">
              <Button size="lg" className="bg-white text-superlens-richBlue hover:bg-blue-50 font-medium px-8">
                Book a Demo
              </Button>
            </Link>
            <Link to="/free-trial">
              <Button size="lg" variant="outline" className="border-white text-superlens-richBlue bg-white hover:bg-blue-50 hover:text-superlens-richBlue font-medium px-8">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
