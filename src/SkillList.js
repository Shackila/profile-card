import Skill from "./Skill.js";
import "./App.css";
const SkillList = () => {
  return (
    <div className="skill">
      <Skill className="skill-bg" skillTitle="Html5" emoji="💪" color="blue" />
      <Skill skillTitle="CSS" emoji="💪" color="orange" />
      <Skill skillTitle="JS" emoji="💪" color="red" />
      <Skill skillTitle="ReactJS" emoji="👼" color="yellow" />
    </div>
  );
};

export default SkillList;
