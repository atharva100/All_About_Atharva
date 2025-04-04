import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import gsap from "gsap";

const useTypewriter = (phrases, typingSpeed = 100, deletingSpeed = 50, delayBetweenPhrases = 2000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const typeNextCharacter = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        // Deleting text
        setDisplayedText(prev => prev.slice(0, -1));
        
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          timeout = setTimeout(typeNextCharacter, delayBetweenPhrases);
          return;
        }
        
        timeout = setTimeout(typeNextCharacter, deletingSpeed);
      } else {
        // Typing text
        if (displayedText === currentPhrase) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            typeNextCharacter();
          }, delayBetweenPhrases);
          return;
        }
        
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        timeout = setTimeout(typeNextCharacter, typingSpeed);
      }
    };

    timeout = setTimeout(typeNextCharacter, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayedText, currentPhraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases]);

  return displayedText;
};

function Hero() {
  const heroRef = useRef(null);
  const phrases = ["Data Engineer", "Business Intelligence"];
  const typewriterText = useTypewriter(phrases, 100, 50, 2000); // typing speed, deleting speed, delay between phrases

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 0.8 },
      });
  
      // Hero Title Animation
      tl.from(".hero-title", {
        opacity: 0,
        rotationX: 80,
        transformOrigin: "0% 50%",
        y: -100,
        scale: 0.8,
        filter: "blur(10px)",
        stagger: 0.2,
      })
      // Hero Text Animation
      .from(".hero-text", {
        opacity: 0,
        x: -50,
        rotationY: 30,
        transformOrigin: "left center",
        filter: "blur(5px)",
        duration: 0.9,
        ease: "back.out(1.7)",
      }, "-=0.4")
      // Hero Button Animation
      .from(".hero-btn", {
        opacity: 0,
        scale: 0,
        rotation: -180,
        transformOrigin: "center center",
        ease: "elastic.out(1, 0.3)",
        duration: 1.2,
      }, "-=0.6")
      // Hero Image Animation
      .from(".hero-img", {
        opacity: 0,
        scale: 1.5,
        rotation: 15,
        x: 100,
        filter: "brightness(0.5) blur(20px)",
        ease: "power2.out",
        duration: 1,
        clearProps: "all", // Ensures clean up after animation
      }, "-=0.8");       
  
    }, heroRef);
  
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6"
      ref={heroRef}
    >
      <div className="mt-16 lg:mt-20">
        <h1 className="hero-title text-4xl uppercase lg:text-7xl font-bai">
          {PROFILE.name}
        </h1>
        <h2 className="hero-subheading mt-2 bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent font-poppins">
          {typewriterText}
          <span className="inline-block w-[2px] h-6 ml-1  bg-purple-300 animate-[blink_1s_steps(2)_infinite]"></span>
        </h2>
      </div>
      <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl font-space">
        {PROFILE.subheading}
      </p>
      <a
        href="/Atharva_resume_April2025.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="hero-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter"
      >
        <span>Download Resume</span>
        <RiArrowRightUpLine />
      </a>
    
    </section>
  );
}

export default Hero;
