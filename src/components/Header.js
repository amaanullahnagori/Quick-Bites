import { useState , useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import cart from "../images/cart.png";


const loggedInUser = () => {
   return true;
}

export const Title =  () => (
    <a href="/">
    <img className="logo"
    alt="logo"
     src="https://play-lh.googleusercontent.com/-RNGKzBRKYs9DhfdtmaFyi_4Ff_uUMrs4pKvufIW195EXVt7wS8LUK1PUCmO6DoNGag"></img>
     </a>
  );
  
  const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();


    const {user} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);
    return(
        <>
        <div className="header sticky">
          <Title />
            <div className="nav-items">
                <ul>
                
                  <li><Link to="/">Home</Link></li>
                
               
                    <li> <Link to="/about">About</Link></li>
                 
                    <li><Link to="/contact">Contact</Link></li>
                
                  
                    <li className="cart"><Link to="/cart" data-testid="cart"><img src={cart} /><div className="cartcount">{cartItems.length}</div></Link></li>
                </ul>
            </div>
            {/*\ <h1 data-testid="online-status">{isOnline ? "🟢 Online" : "🔴"}</h1> */}
           {/*\\ <h1> {user.name}</h1>
            {
              isLoggedIn ?  (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button> 
             ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
             )}
            */}
        </div>
        </>
    );
  };

  export default Header;
