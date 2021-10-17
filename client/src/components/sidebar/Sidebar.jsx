import "./sidebar.css"
// import sidebarPic from './purpleFlowers.jpg'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
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
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Entree 1</li>
                    <li className="sidebarListItem">Entree 2</li>
                    <li className="sidebarListItem">Entree 3</li>
                    <li className="sidebarListItem">Entree 4</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">THE CREATOR</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-github"></i>
                </div>
            </div>    
        </div>
    );
}
