import React from "react";
import {Link} from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {

    return (

        <div >
            <div className="nav-bar">
                <img alt="logo"/>
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/tienda">Tienda</Link>
                <Link className="link" to="/soporte">Soporte</Link>
                <Link className="link" to="/nosotros">Sobre Nosotros</Link>
                <button>Sing in</button>
            </div>
        </div>
        )
}