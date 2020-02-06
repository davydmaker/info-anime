import React, { useContext } from "react";
import Config from '../../config';

const Header = () => {
    const { estadoMenu, setEstadoMenu } = useContext(Config);

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
                    <div className="searchWidget">
                        <form action="" method="get" id="searchform" autoComplete="off">
                            <div className="search-holder">
                                <span className="search-button">
                                    <button type="submit" className="legitRipple">
                                        <i className="material-icons"></i>
                                    </button>
                                </span>
                                <div className="form-control-wrap">
                                    <input id="searchformin" type="text" className="form-control input-lg empty" name="s" defaultValue="" placeholder="Buscar animes (coloque apenas o nome do anime!)" />
                                </div>
                            </div>
                        </form>
                        <div id="suggest-results"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;