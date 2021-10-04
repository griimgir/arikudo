import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon1 fab fa-github"></i>
            <i className="topIcon2 fab fa-twitch"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACTS</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                    src="https://cdn.discordapp.com/emojis/788002806488629259.gif?v=1" 
                    alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}
