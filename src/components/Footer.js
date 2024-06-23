import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {
    const {user} = useContext(UserContext);
    return(
        <div className="footer">This Site is Developed By Amaan &#10084;</div>
    )
  }
  
  export default Footer;