import React, { useRef,useEffect } from "react";
import { RiLinkedinBoxFill, RiGithubFill } from "@remixicon/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-me", {
        opacity: 0,
        duration: 1,
        stagger:0.2,
        y: 50,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, contactRef);
    return () => ctx.revert();
  }, []);


  return (
    <div className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center contact-me">
        <h2 className="mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
        <p className="mb-4 text-lg lg:text-xl">
          Feel free to reach out to me via email : {" "}
          <a href="mailto:sonivarun927@gmail.com" className="border-b">
            sonivarun927@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/varun-soni-97796b179/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            arial-label="Visit my LinkedIn profile"
          >
            <RiLinkedinBoxFill />
          </a>
          <a
            href="https://github.com/varunsoni3404"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            arial-label="Visit my Github profile"
          >
            <RiGithubFill />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
