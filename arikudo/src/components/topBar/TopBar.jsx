import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
    // const user = true; //{user && "LOGOUT"} if there is a user, then logout is enabled
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    const ariHandle = () => {
        window.open("https://www.twitch.tv/ariverie");
    };

    return (
        <div className="top">
            <div className="topLeft">
                {/* <i className="topIcon1 fab fa-github"></i> */}
                <i className="topIcon2 fab fa-twitch" onClick={ariHandle}></i>
                <li className="topIcon1" onClick={ariHandle}>www.twitch.tv/ariverie</li>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    {/* <li className="topListItem">
                        <Link className="link" to="/about">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/contact">CONTACT</Link>
                    </li> */}
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings">
                            <img className="topImg" src={PF + user.profilePic} alt="" />
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            {/* <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li> */}
                        </ul>
                    )
                }

                {/* <i className="topSearchIcon fas fa-search"></i> */}
            </div>

        </div>
    )
}
