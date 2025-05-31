'use client';
import './home.css';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from '@/Components/navbar';
export default function HomePage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-KYrjV8ZP+uyTrYqTyAKNqz5D5l4PUi5oYp1mpybeFYuJzvlX9pN3lOZqp3D7HnCV3iN+Ahzr6ONa/s3cLChsNw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <Navbar/>
      <section className="home">
        <div className="home-img">
          <img src="/main.jpg" alt="profile" />
        </div>

        <div className="home-content">
          <h1>Hi, I am <span>Saipranay</span></h1>
          <h3 className="typing-text">I'm a <span></span></h3>
          <p>
            Hello! I'm a Full Stack Developer and Software Engineer with a passion for building efficient,
            scalable, and user-friendly web applications. With a strong foundation in both frontend and backend
            development, I specialize in creating seamless digital experiences using modern technologies like
            JavaScript, React.js, Node.js, Express.js, and MongoDB (MERN Stack).
            <br /><br />
            I'm also well-versed in Java programming and Data Structures & Algorithms, which allows me to write clean,
            optimized code and solve complex problems with ease. I enjoy turning ideas into reality through code.
            <br /><br />
            Currently, I'm focused on developing real-time projects, continuously learning new tools, and preparing myself
            for cloud-native development using platforms like AWS.
          </p>
          
          <div className="social-icons">
            <a href="https:www.linkedin.com/in/saipranay-t-739b1a268"><FaLinkedin /></a>
            <a href="https://github.com/Saipranay31"><FaGithub /></a>
            
          </div>

   <a href="/home/resume" className="btn">
  View Resume
</a>


         <a
  href="mailto:saipranaytexample.com?subject=Freelance Opportunity&body=Hi Saipranay,%0D%0AI saw your portfolio and I'm interested in working with you."
  className="btn"
>
  Hire Me
</a>

        </div>
      </section>
    </>
  );
}
