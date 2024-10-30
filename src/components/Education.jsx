import React, { useEffect } from "react";
import { useRef } from "react";
import { EDUCATION } from "../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Education() {
  const educationRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, educationRef);
    return () => ctx.revert();
  });
  return (
    <div className="py-16" id="education" ref={educationRef}>
      <div className="mx-auto max-w-full px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Education
        </h2>
        <div className="flex flex-col space-y-8">
          {EDUCATION.map((edu, idx) => (
            <div
              key={edu.id}
              className="rounded-xl border border-purple-300/20 p-6 education-item"
            >
              <h3 className="mb-2 text-lg lg:text-2xl">{edu.degree}</h3>
              <h4 className="text-lg font-medium lg:text-xl">
                {edu.institution}
              </h4>
              <p className="mt-4 text-sm lg:text-base">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
