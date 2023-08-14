import "./styles.css";
import Avatar from "./Avatar.js";
import Intro from "./Intro.js";
import SkillList from "./SkillList.js";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <br />
        <SkillList className="skillList" />
      </div>
    </div>
  );
}

export default App;
