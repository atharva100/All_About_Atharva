import React, { useEffect } from "react";
import { useRef } from "react";
import { PROJECTS } from "../constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
function Projects() {
  const ProjectsRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        y: 50,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ProjectsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },ProjectsRef);
    return ()=>ctx.revert()
  });
  return (
    <div className="pt-16" id="projects" ref={ProjectsRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center project-card">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-60 w-full object-cover"
                  />
                </a>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                  <div>
                    <strong>Tech Stack: </strong>
                    <ul>
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="mb-1 mr-2 mt-3 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
