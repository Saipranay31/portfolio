"use client";
import React from "react";
import "./resume.css";
import Navbar from "@/Components/navbar";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <section className="resume-section">
        <h1 className="resume-title">Thadakamalla Sai Pranay</h1>
        <p className="resume-subtitle">Software Developer | Hyderabad, India | 21eg105c61@gmail.com</p>

        <div className="resume-block">
          <h2>Career Objective</h2>
          <p>
            To work in an environment which encourages me to succeed and grow professionally where I can utilize my skills and knowledge appropriately.
          </p>
        </div>

        <div className="resume-block">
          <h2>Academic Qualifications</h2>
          <ul>
            <li><strong>B.Tech (CSE)</strong> - Anurag University (2021–2025) – CGPA: 7.79</li>
            <li><strong>Intermediate (MPC)</strong> - Narayana Junior College(2019–2021) – 90.3%</li>
            <li><strong>SSC</strong> - Narayana  High School (2018–2019) – CGPA: 9.8</li>
          </ul>
        </div>

        <div className="resume-block">
          <h2>Skills</h2>
          <ul>
            <li><strong>Programming:</strong> C, Java, JavaScript</li>
            <li><strong>Web:</strong> HTML, CSS, React.js, Node.js, Express.js, MongoDB</li>
            <li><strong>Tools:</strong> Git, GitHub, VS Code</li>
            <li><strong>Other:</strong> DSA, Problem Solving</li>
          </ul>
        </div>

        <div className="resume-block">
          <h2>Certifications</h2>
          <ul>
        
            <li>Java Programming </li>
            <li>Python for Data Science</li>
            <li>Skill up in Java from Infosys Springboard.</li>
            <li>HTML5- The language from Infosys Springboard.</li>
            <li>Web Design Basics from Infosys Springboard.</li>
          </ul>
        </div>

        <div className="resume-block">
          <h2>Projects</h2>
          <ul>
            <li><strong>Portfolio Website:</strong> Built with Next.js and MongoDB to showcase my work and skills.</li>
            <li><strong>Animart (Anime Streaming Website):</strong> UI-rich web app for browsing and watching anime.</li>
            <li><strong>ODOP:</strong> Government initiative support platform featuring products from every district.</li>
            <li><strong>Healio:</strong> Mental health platform with journaling, AI chat assistant, and community forum.</li>
          </ul>
        </div>

        <div className="resume-block">
          <h2>Accomplishments</h2>
          <ul>
            <li>I served as the CSE Department Coordinator for “DAKSHA3.o 2k24”, our universities technical fest, overseeing departmental activities, logistics, and promoting participation..</li>
           
          </ul>
        </div>

        <div className="resume-block">
          <h2>Personal Strengths</h2>
          <ul>
            <li>Quick learner</li>
            <li>Effective team player</li>
            <li>Time management</li>
          </ul>
        </div>

        <div className="resume-block">
          <h2>Personal Details</h2>
          <p><strong>Date of Birth:</strong> 17/01/2004</p>
          <p><strong>Languages Known:</strong> English, Telugu, Hindi</p>
        </div>

        <div className="resume-block declaration">
          <h2>Declaration</h2>
          <p>
            I hereby declare that the above information is true to the best of my knowledge.
          </p>
        </div>
      </section>
    </>
  );
}
