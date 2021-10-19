import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
// import sidebarPic from './purpleFlowers.jpg'

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ARI</span>
                <img
                    src="https://ariverie.carrd.co/assets/images/image01.png?v=81eb9102"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                {/* <span className="sidebarTitle">CATEGORIES</span> */}
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Creator of the site</span>
                <div className="sidebarSocial">
                    <i>Ej (Parsecs)</i>
                    {/* <i className="sidebarIcon fab fa-github"></i> */}
                </div>
            </div>
        </div>
    );
}
