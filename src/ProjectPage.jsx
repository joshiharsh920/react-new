import React from "react";

function ProjectsPage() {
  const projects = [
    {
      title: "Application 1",
      description: "A personal portfolio built using React and Bootstrap.",
      link: ""
    },
    {
      title: "Application 2",
      description: "A sample SAP UI5 app showing OData integration.",
      link: ""
    },
    {
      title: "Application 3",
      description: "Weather forecast app using OpenWeather API.",
      link: ""
    }
  ];

  return (
    <div style={{ 
      display: "flex", 
      flexWrap: "wrap", 
      justifyContent: "center", 
      gap: "20px", 
      padding: "40px" 
    }}>
      {projects.map((proj, index) => (
        <div
          key={index}
          style={{
            width: "250px",
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "20px",
            textAlign: "center",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3 style={{ color: "#007bff" }}>{proj.title}</h3>
          <p>{proj.description}</p>
          <a 
            href={proj.link} 
            target="_blank" 
            rel="noreferrer"
            style={{ 
              color: "white", 
              backgroundColor: "#007bff", 
              padding: "8px 12px", 
              borderRadius: "5px", 
              textDecoration: "none"
            }}
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProjectsPage;