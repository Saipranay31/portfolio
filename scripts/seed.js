import { connectToDatabase } from "../src/lib/mongodb.js";
import Project from "../src/models/project.js";
async function seed() {
  try {
    await connectToDatabase();
    console.log('Connected to DB');

    // Clear existing projects (optional)
    await Project.deleteMany({});

    // Sample project data to insert
    const projects = [
      {
        title: 'Portfolio Website',
        description: 'A clean and responsive portfolio website showcasing your skills, projects, and experience with a modern design. It highlights your personal brand and makes it easy for recruiters and clients to connect with you..',
        githubUrl: 'https://github.com/saipranay/portfolio',
        image: '/portfolio.jpg'
      },
      {
        title: 'Animart-AnimeStreaming Website',
        description: 'Animart is a vibrant anime streaming website offering a wide collection of subbed and dubbed anime series and movies. With a sleek, user-friendly interface, it ensures smooth browsing, personalized watchlists, and high-quality streaming for anime lovers.',
        githubUrl: 'https://github.com/saipranay/portfolio',
        image: '/Animart.png'
      },
      {
        title: 'One District One Product',
        description: 'One District One Product (ODOP) is a government initiative aimed at promoting unique and specialized products from each district across India. It supports local artisans, boosts regional economies, and helps preserve traditional crafts by providing marketing, branding, and export assistance.',
        githubUrl: 'https://github.com/Saipranay31/ODOP_Mini_Project',
        image: '/odop.png'
      },
       {
        title: 'Healio-AI Mental Health Platform',
        description: 'Healio is a mental health care web application designed to support emotional well-being through features like journaling, mood tracking, a supportive community forum, and an AI-powered assistant. It offers a safe and user-friendly space for users to reflect, connect, and seek guidance on their mental health journey.',
        githubUrl: 'https://github.com/Saipranay31/healio',
        image: '/healio.png'
      },
     
    ];

    // Insert sample projects
    await Project.insertMany(projects);
    console.log('Sample projects inserted');

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
