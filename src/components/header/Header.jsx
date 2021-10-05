import "./header.css"
import headerPic from './header.jpeg'
// import { Component } from "react";

// const picPath = process.env.PUBLIC_URL + "./assets/pics/";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Happy birthday to our very special</span>
                <span className="headerTitleLg">Ariverie</span>
            </div>
            <img 
                className="headerImg"
                // src={`${picPath}purpleFlowers.jpg`} 
                // src="https://cdn2.webdamdb.com/1280_2Ynj3cqRffO0.jpg?1624377590" 
                src = {headerPic}
                alt="" 
            />
        </div>
    )
}
