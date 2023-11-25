"use client";

import SectionHeading from "@/components/SectionHeading";

import { useSectionInView } from "@/lib/hooks";

import { motion } from "framer-motion";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After leaving my career as a car mechanic, I embraced my passion for programming. I underwent intensive training at a coding bootcamp, delving into <span className="font-medium">full-stack web development</span>. <span className="italic">Problem-solving is what excites me the most in programming</span> — I thrive on the satisfaction of cracking a challenging puzzle. My toolkit includes <span className="font-medium">React</span>, <span className="font-medium">Next.js</span>, <span className="font-medium">Node.js</span>, and <span className="font-medium">MongoDB</span>, with proficiency in <span className="font-medium">TypeScript</span> and <span className="font-medium">Prisma</span>. I'm constantly eager to explore new technologies. Currently on the lookout for a <span className="font-medium">full-time position</span> as a <span className="font-medium">software developer</span>.
      </p>

      <p>
        <span className="italic">Outside of coding</span>I relish spending time with my family, going for runs, fishing, and hitting the gym. My appetite for learning is insatiable—I'm currently delving into <span className="font-medium">computer science</span> and <span className="font-medium">mathematics</span>. Additionally, I'm honing my skills on various musical instruments.
      </p>
    </motion.section>
  );
}

export default About;