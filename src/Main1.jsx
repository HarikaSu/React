// import React, { Component } from "react";
// import "./Main1.css";

// class Main1 extends Component {
//   render() {
//     return (
//       <div className="sd">
//         <div className="md">
//           <ul className="md1">
//             <li><a href="#profilesummary">ProfileSummary</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#education">Education</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#certifications">Certifications</a></li>
//           </ul>
//         </div>

//         <div className="sd1" id="profile-summary">
//           <h2>ProfileSummary</h2>
//           <p>
//             "A highly motivated and detail-oriented recent graduate with a
//             strong foundation in HTML, CSS, and JavaScript, eager to apply my
//             passion for creating user-friendly and responsive web interfaces to
//             contribute to innovative front-end development projects,
//             particularly with a keen interest in learning modern frameworks like
//             React and Angular."
//           </p>
//         </div>

//         <div className="sd2" id="education">
//           <h2>Education</h2>
//           <ul>
//             <li>Lakireddy Bali Reddy College of Engineering 2020-2024</li>
//             <li>B.Tech (Civil Engineering CGPA 9.14)</li>
//           </ul>
//         </div>

//         <div className="sd3" id="skills">
//           <h2>Skills</h2>
//           <h3>Technical Skills</h3>
//           <ul>
//             <li>Programming Languages: C, Basics of Python, Java.</li>
//             <li>Front-End Technologies: HTML, CSS, JavaScript.</li>
//             <li>Frameworks: Bootstrap.</li>
//             <li>Developer Tools: VS Code, Git, GitHub, AWS.</li>
//           </ul>
//           <h3>Soft Skills</h3>
//           <ul>
//             <li>Problem Solving</li>
//             <li>Leadership Management</li>
//             <li>Time Management</li>
//             <li>Adaptability</li>
//             <li>Consistency</li>
//           </ul>
//         </div>

//         <div className="sd4" id="projects">
//           <h2>Projects</h2>
//           <p>
//             Automated Irrigation System using IoT for surveillance of Crop |
//             Arduino IDE, Embedded Python.
//           </p>
//           <ul>
//             <li>
//               Developed an Automated Irrigation System using IoT for Surveillance of Crops, leveraging technologies like Arduino UNO and IoT protocols.
//             </li>
//             <li>
//               Designed and integrated sensors to monitor soil moisture, temperature, humidity, light, rain sensor, and crop health in real-time.
//             </li>
//             <li>
//               Implemented automated irrigation scheduling and surveillance capabilities, resulting in optimized water usage and increased crop yield.
//             </li>
//           </ul>
//         </div>

//         <div className="sd5" id="certifications">
//           <h2>Certifications</h2>
//           <ul>
//             <li>Certified in IoT Professional Certification and Python by NPTEL</li>
//             <li>Certified in Air Pollution Professional Certification by NPTEL.</li>
//             <li>Certified in National Service Scheme (NSS) Certification at LBRCE.</li>
//             <li>Certified in Microsoft Azure Certification at LBRCE.</li>
//             <li>Certified in STEP English Professional Certification at LBRCE.</li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Main1;


import React, { useState, useEffect } from "react";
import "./Main1.css";

const Main1 = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".sd1, .sd2, .sd3, .sd4, .sd5");
    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sd">
      <div className="md">
        <ul className="md1">
          <li>
            <a
              href="#profile-summary"
              className={activeSection === "profile-summary" ? "active" : ""}
            >
              ProfileSummary
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeSection === "education" ? "active" : ""}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              className={activeSection === "certifications" ? "active" : ""}
            >
              Certifications
            </a>
          </li>
        </ul>
      </div>

      <div className="sd1" id="profile-summary">
        <h2>ProfileSummary</h2>
        <p>
          A highly motivated and detail-oriented graduate with a strong
          foundation in HTML, CSS, and JavaScript, eager to apply my passion for
          creating user-friendly web interfaces and contribute to front-end
          development projects.
        </p>
      </div>

      <div className="sd2" id="skills">
        <h2>Skills</h2>
        <h3>Technical Skills</h3>
        <ul>
          <li>Programming Languages: C, Python (Basics), Java</li>
          <li>Front-End Technologies: HTML, CSS, JavaScript</li>
          <li>Frameworks: Bootstrap</li>
          <li>Developer Tools: VS Code, Git, GitHub, AWS</li>
        </ul>
        <h3>Soft Skills</h3>
        <ul>
          <li>Problem Solving</li>
          <li>Leadership Management</li>
          <li>Time Management</li>
          <li>Adaptability</li>
          <li>Consistency</li>
        </ul>
      </div>

      <div className="sd3" id="education">
        <h2>Education</h2>
        <ul>
          <li>Lakireddy Bali Reddy College of Engineering (2020-2024)</li>
          <li>B.Tech in Civil Engineering, CGPA: 9.14</li>
        </ul>
      </div>

      <div className="sd4" id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            Automated Irrigation System using IoT for Crop Surveillance |
            Arduino IDE, Embedded Python
          </li>
          <li>
            Designed a system with sensors for monitoring soil moisture,
            temperature, and humidity.
          </li>
        </ul>
      </div>

      <div className="sd5" id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>IoT Professional Certification (NPTEL)</li>
          <li>Python Basics Certification (NPTEL)</li>
        </ul>
      </div>
    </div>
  );
};

export default Main1;
