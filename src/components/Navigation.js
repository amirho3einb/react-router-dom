import { Link, NavLink, withRouter } from "react-router-dom";

const items = [
    { name: "Home", to: "/", exact: true},
    { name: "About Us", to: "/about-us" },
    { name: "Profile", to: "/profile" },
]
const Navigation = (props) => {
   
    console.log(props);
    return ( 
            <nav>
                <ul>
                    {items.map((item)=> {
                        return(
                            <li key={item.to}>
                                <NavLink 
                                    to={item.to}
                                    activeClassName = "activeLink"
                                    exact={item.exact || false}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        )
                        
                    })}
                </ul>
            </nav>
    );
}
 
export default withRouter(Navigation);