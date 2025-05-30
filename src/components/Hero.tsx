
import React, { useState, useEffect, useRef } from 'react';
import HeroTitle from './hero/HeroTitle';
import ChatInterface from './hero/ChatInterface';
import { queries, typingSpeed, displayDuration, transitionDuration } from './hero/HeroData';

const Hero: React.FC = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showChart, setShowChart] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isAutoTyping, setIsAutoTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const heroRef = useRef<HTMLElement>(null);
  
  // Clear all timeouts when component unmounts or when paused
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  // Pause auto-cycling when user scrolls away from hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isVisible && !isPaused) {
          setIsPaused(true);
          // Clear existing timeouts
          timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
          timeoutRefs.current = [];
        } else if (isVisible && isPaused) {
          setIsPaused(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPaused]);
  
  // Handle manual typing
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
    
    if (isAutoTyping) {
      // If auto-typing is in progress, disable it and start manual mode
      setIsAutoTyping(false);
      setTypedText(value);
      setIsPaused(true); // Pause auto-cycling when user interacts
      // Clear existing timeouts
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
      timeoutRefs.current = [];
    } else {
      setTypedText(value);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // When user presses Enter, show the chart for their query
    if (e.key === 'Enter' && userInput.trim() !== '') {
      setIsTyping(false);
      setShowChart(true);
      
      // Reset after some time but don't continue auto cycle
      const timeout = setTimeout(() => {
        setUserInput("");
        setTypedText("");
        setShowChart(false);
        // Don't restart auto-typing after manual input
      }, displayDuration);
      
      timeoutRefs.current.push(timeout);
      e.preventDefault();
    }
  };

  // Reset and start typing the next query in auto mode
  useEffect(() => {
    if (!isAutoTyping || isPaused) return; // Skip if manual mode is active or paused
    
    const setupNextQuery = () => {
      setTypedText("");
      setShowChart(false);
      setIsTyping(true);
      
      let currentIndex = 0;
      const currentQuery = queries[activeQueryIndex].text;
      setUserInput(""); // Don't set complete query now, we'll build it up gradually
      
      const interval = setInterval(() => {
        if (currentIndex < currentQuery.length && !isPaused) {
          setTypedText(prev => prev + currentQuery.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          if (!isPaused) {
            setIsTyping(false);
            const timeout1 = setTimeout(() => {
              if (!isPaused) {
                setShowChart(true);
                
                // Set timer for next query
                const timeout2 = setTimeout(() => {
                  if (!isPaused) {
                    setUserInput("");
                    setActiveQueryIndex((prevIndex) => (prevIndex + 1) % queries.length);
                  }
                }, displayDuration);
                
                timeoutRefs.current.push(timeout2);
              }
            }, transitionDuration);
            
            timeoutRefs.current.push(timeout1);
          }
        }
      }, typingSpeed);
      
      return () => clearInterval(interval);
    };
    
    setupNextQuery();
  }, [activeQueryIndex, isAutoTyping, isPaused]);

  return (
    <section ref={heroRef} className="bg-white py-10 md:py-16 relative overflow-hidden min-h-[80vh]">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center min-h-[60vh]">
          {/* Title and buttons section (left side) */}
          <div className="lg:w-1/2 flex items-center">
            <HeroTitle />
          </div>
          
          {/* Chat interface section (right side) */}
          <div className="lg:w-1/2 flex items-center">
            <ChatInterface 
              typedText={typedText}
              isTyping={isTyping}
              showChart={showChart}
              activeQueryIndex={activeQueryIndex}
              activeQuery={queries[activeQueryIndex]}
              userInput={userInput}
              onInputChange={handleUserInput}
              onKeyDown={handleInputKeyDown}
            />
          </div>
        </div>
      </div>
      
      {/* Abstract Shapes */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-superlens-mutedBlue fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C57.88,9.59,98.85,26,138.93,38.89Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
