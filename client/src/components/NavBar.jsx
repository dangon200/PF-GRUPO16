import React from "react";
import {Link} from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {

    return (

        <div >
            <div className="nav-bar">
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/tienda">Tienda</Link>
                <Link className="link" to="/Soporte">Soporte</Link>
                <Link className="link" to="/Nosotros">Sobre Nosotros</Link>
                <button>Sing in</button>
            </div>
        </div>
        )
}