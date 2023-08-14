import "./styles.css";
import pfp from "./pfp.jpg";

const Avatar = () => {
  return (
    <div>
      <img className="avatar" src={pfp} alt="profile pic" />
    </div>
  );
};
export default Avatar;