import "./styles.css";

const Skill = ({skillsObj}) => {
  return (
    <div className="skill" style={{ backgroundColor: skillsObj.color }}>
      <span>{skillsObj.skill}</span>
      {/* <span>{skillsObj.level}</span> */}
      <span>
        {skillsObj.level === "advanced" && "💪"}
        {skillsObj.level === "intermediate" && "⏳"}
        {skillsObj.level === "beginner" && "👼"}
      </span>
    </div>
  );
};

export default Skill;
