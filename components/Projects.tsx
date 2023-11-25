"use client";

import React from "react";

import SectionHeading from "@/components/SectionHeading";
import Project from "@/components/Project";

import { useSectionInView } from "@/lib/hooks";

import { projectsData } from "@/lib/data";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;