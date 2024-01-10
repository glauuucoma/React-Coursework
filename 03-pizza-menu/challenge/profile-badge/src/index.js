import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillsData = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "Gulp",
    level: "beginner",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="./avatar.png" alt="My face" />;
}
function Intro() {
  return (
    <div>
      <h1 className="intro-title"> Davyd Kuleba</h1>
      <p className="intro-desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        magni repudiandae suscipit voluptates rerum eligendi quod commodi
        assumenda. Suscipit qui error quam? Fuga recusandae omnis commodi
        ducimus error voluptate labore?
      </p>
    </div>
  );
}
function SkillList() {
  const skills = skillsData;
  return (
    <div className="skillsList">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <div className="skill-name">
        {skill}
        {(level === "intermediate" && " 🤓") ||
          (level === "advanced" && " 💪") ||
          (level === "beginner" && " 👶")}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
