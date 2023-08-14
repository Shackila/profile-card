import Skill from "./Skill.js";
import "./styles.css";

const skillsData = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

const SkillList = () => {
  return (
    <div className="skill-list">
      {skillsData.map((newSkills) => (
        <Skill
          className="skill-bg"
          skillsObj={newSkills}
          key={newSkills.name}
        />
      ))}
    </div>
  );
};

export default SkillList;
