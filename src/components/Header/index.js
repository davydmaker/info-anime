import React, { useContext } from "react";
import Config from '../../config';

const Header = () => {
    const {estadoMenu, setEstadoMenu} = useContext(Config);

    return (
        <div className="fixed-top">
            <div className="row block" style={{ position: "relative" }}>
                <div className="logo-wrapper">
                    <a id="show-sidebar" onClick={() => setEstadoMenu(!estadoMenu)} href="#!" title="Show sidebar">
                        <i className="material-icons">&#xE5D2;</i>
                    </a>
                    <a href="#!" title="" className="logo">
                        <h1 style={{ fontWeight: "bold" }}>Info Anime</h1>
                    </a>
                    <br style={{ clear: "both" }} />
                </div>
                <div className="header">
                </div>
            </div>
        </div>
    )
}

export default Header;