"use client";

import React, { useEffect, useState } from "react";
import styles from "./projects.module.css";
import { FaGithub } from "react-icons/fa";
import Navbar from "@/Components/navbar";
import Image from 'next/image';


export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        console.log("Fetched projects data:", data); // Debug
        // If your API returns { projects: [...] }, update this line:
        setProjects(Array.isArray(data) ? data : data.projects || []);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <>
    <Navbar />
    <div className={styles.projectsContainer}>
      
      {!projects || projects.length === 0 ? (
        <p>Loading projects...</p>
      ) : (
        projects.map((project, index) => (
          <div
            key={project._id}
            className={styles.projectCard}
            style={{
              animation: `${styles.fadeInCard} 0.5s ease forwards`,
              animationDelay: `${index * 0.15}s`,
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
           <Image
  src={project.image}
  alt={project.title}
  className={styles.projectImage}
  width={500}   // adjust width as needed
  height={300}  // adjust height as needed
  style={{ objectFit: 'cover' }} // optional, if you want styling like CSS background-size: cover
/>

            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        ))
      )}
    </div>
    </>
  );
}
