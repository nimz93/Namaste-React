import {useState} from "react";

const Title = () => (
    <a href="/" >
      <img src="https://static.wixstatic.com/media/61c9e6_3eff204dd26643af9eafa907535d9495~mv2.jpeg/v1/fit/w_2500,h_1330,al_c/61c9e6_3eff204dd26643af9eafa907535d9495~mv2.jpeg" alt ="logo" height ="100px" width = "100px"/>
    </a>
); 
const Header = () => {
    const [isLoggin, setIsLoggin] = useState(false);
    
    return (
    <div className="header">
        { <Title /> }
        <div className="nav-items">
            <ul >
                <li>Home</li>
                <li>Offers</li>
                <li>Help</li>
                <li>Sign In</li>
                <li><a href="/"><i className="fa fa-shopping-cart"></i></a></li>
            </ul>
        </div>
        {isLoggin ? <button className="auth-btn" onClick={() =>setIsLoggin(false) }>Logout</button> :
            <button className="auth-btn" onClick={() =>setIsLoggin(true) }>Login</button>
        }
    </div>
   ); 
}
export default Header;