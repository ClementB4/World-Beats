import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Index</a></li>
                        <li><a href="/feuille_de_perso">Feuille de Perso</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};