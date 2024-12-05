// components/Projects.js
import React from "react";

function Projects() {
  const projects = [
    { title: "Project 1", description: "A web app for managing tasks." },
    { title: "Project 2", description: "An e-commerce platform for small businesses." },
    { title: "Project 3", description: "A personal blog built with React.js." },
  ];

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>My Projects</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "15px", width: "200px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
