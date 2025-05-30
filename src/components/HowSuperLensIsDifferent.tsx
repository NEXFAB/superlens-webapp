
import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle, LineChart, Zap, Users, Database } from 'lucide-react';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const HowSuperLensIsDifferent: React.FC = () => {
  const [api, setApi] = useState<any>();
  
  // Set up auto-rotation effect
  useEffect(() => {
    if (!api) return;
    
    // Auto-rotate every 5 seconds
    const autoRotationInterval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(autoRotationInterval);
  }, [api]);
  
  return (
    <section id="how-superlens-is-different" className="py-16 bg-superlens-mutedBlue relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-superlens-textBlue mb-4">HOW SUPERLENS IS DIFFERENT</h2>
          <p className="text-xl text-superlens-textBlue/80 max-w-3xl mx-auto">
            Ask any question, get AI generated narrative and take action on your enterprise data!
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {/* Card 1 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-blue-50 rounded-lg shadow-lg p-8 h-full transition-transform hover:translate-y-[-5px]">
                  <div className="w-14 h-14 bg-superlens-richBlue/10 rounded-full flex items-center justify-center mb-6">
                    <MessageCircle className="h-7 w-7 text-superlens-richBlue" />
                  </div>
                  <h3 className="text-xl font-semibold text-superlens-textBlue mb-3">
                    Conversational Analytics
                  </h3>
                  <p className="text-superlens-textBlue/80 mb-6">
                    Ask questions in natural language and get instant visual insights without needing to write complex queries or understand data structures.
                  </p>
                  <Button variant="link" className="text-superlens-richBlue p-0 hover:no-underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CarouselItem>
              
              {/* Card 2 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-green-50 rounded-lg shadow-lg p-8 h-full transition-transform hover:translate-y-[-5px]">
                  <div className="w-14 h-14 bg-superlens-richBlue/10 rounded-full flex items-center justify-center mb-6">
                    <LineChart className="h-7 w-7 text-superlens-richBlue" />
                  </div>
                  <h3 className="text-xl font-semibold text-superlens-textBlue mb-3">
                    Automated Insights
                  </h3>
                  <p className="text-superlens-textBlue/80 mb-6">
                    SuperLens automatically discovers key drivers, trends, and anomalies in your data and presents them without you having to search for them.
                  </p>
                  <Button variant="link" className="text-superlens-richBlue p-0 hover:no-underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CarouselItem>
              
              {/* Card 3 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-yellow-50 rounded-lg shadow-lg p-8 h-full transition-transform hover:translate-y-[-5px]">
                  <div className="w-14 h-14 bg-superlens-richBlue/10 rounded-full flex items-center justify-center mb-6">
                    <Zap className="h-7 w-7 text-superlens-richBlue" />
                  </div>
                  <h3 className="text-xl font-semibold text-superlens-textBlue mb-3">
                    Actionable Intelligence
                  </h3>
                  <p className="text-superlens-textBlue/80 mb-6">
                    Go beyond just viewing data to take immediate action based on insights, all within the same platform without context switching.
                  </p>
                  <Button variant="link" className="text-superlens-richBlue p-0 hover:no-underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CarouselItem>

              {/* Card 4 - Human in the Loop card */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-purple-50 rounded-lg shadow-lg p-8 h-full transition-transform hover:translate-y-[-5px]">
                  <div className="w-14 h-14 bg-superlens-richBlue/10 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-7 w-7 text-superlens-richBlue" />
                  </div>
                  <h3 className="text-xl font-semibold text-superlens-textBlue mb-3">
                    Human in the Loop
                  </h3>
                  <p className="text-superlens-textBlue/80 mb-6">
                    SuperLens uses Reinforcement Learning from Human Feedback (RLHF) to continuously improve. Your feedback shapes our AI, ensuring more accurate and relevant results over time with every interaction.
                  </p>
                  <Button variant="link" className="text-superlens-richBlue p-0 hover:no-underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CarouselItem>
              
              {/* Card 5 - NEW Domain Rich Model card */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-orange-50 rounded-lg shadow-lg p-8 h-full transition-transform hover:translate-y-[-5px]">
                  <div className="w-14 h-14 bg-superlens-richBlue/10 rounded-full flex items-center justify-center mb-6">
                    <Database className="h-7 w-7 text-superlens-richBlue" />
                  </div>
                  <h3 className="text-xl font-semibold text-superlens-textBlue mb-3">
                    Domain Rich Model
                  </h3>
                  <p className="text-superlens-textBlue/80 mb-6">
                    SuperLens incorporates domain-specific knowledge to enhance query accuracy for your industry. Our AI understands your unique business terminology, providing insights tailored to your domain.
                  </p>
                  <Button variant="link" className="text-superlens-richBlue p-0 hover:no-underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
            
            {/* Positioned carousel controls on either side */}
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12" />
          </Carousel>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-superlens-richBlue/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-24 bg-superlens-richBlue/5 rounded-tr-full"></div>
    </section>
  );
};

export default HowSuperLensIsDifferent;
