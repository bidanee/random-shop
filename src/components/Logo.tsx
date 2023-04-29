import { Link } from "react-router-dom";
import { Image } from "../styledComponents/SignUpIn";
import logo from "../assets/random.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <Image className={"logoImg"} src={logo} />
    </Link>
  );
};
export default Logo;
