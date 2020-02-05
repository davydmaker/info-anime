import React, { useContext } from "react";
import Config from '../../config';

const MenuLateral = () => {
    const {estadoMenu} = useContext(Config)

    return (
        <div id="sidebar" className={"animated zoomInLeft " + (estadoMenu && "hide")}>
            <div className="sidescroll">
                <div className="sidebar-nav blc">
                    <ul>
                        <li className="lihead"><a href="!#"><span className="iconed"><i
                            className="material-icons">library_books</i></span> Anime</a></li>
                        <li className="lihead"><a href="https://github.com/DavydMaker" target="_blank" rel="noopener noreferrer"><span
                            className="iconed"><i className="material-icons">code</i></span> GitHub</a></li>
                    </ul>
                </div>
                <div className="blc" style={{ height: "400px" }}>&nbsp;</div>
            </div>
        </div>
    )
}

export default MenuLateral;


