import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = true; //{user && "LOGOUT"} if there is a user, then logout is enabled
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon1 fab fa-github"></i>
                <i className="topIcon2 fab fa-twitch"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/about">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/contact">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className="topImg"
                            src="https://cdn.discordapp.com/emojis/788002806488629259.gif?v=1"
                            alt="" />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }

                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}
