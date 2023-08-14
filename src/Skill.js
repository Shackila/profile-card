import "./App.css";

const Skill = (props) => {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skillTitle}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

export default Skill;
