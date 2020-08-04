import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavigationBar.scss"

export default function NavigationBar(props) {
    var tabs = [
        { name: "home", ref: "/" },
        { name: "planning", ref: "/planning" },
        { name: "investments", ref: "/investments" },
        { name: "about", ref: "/about" },
        { name: "consultation", ref: "/consultation" },
    ]
    return (
        <Navbar
            className="navigation-bar"
            expand="sm"
            variant="light"
            sticky="top"
        >
            <Navbar.Brand>
                <img
                    className="navigation-bar__logo"
                    src="../../images/logos/logo.svg"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="navigation-bar__nav">
                    {tabs.map(tab => (
                        <Link
                            className={`navigation-bar__tab-link ${
                                props.active === tab.name
                                    ? "navigation-bar__tab-link--active"
                                    : ""
                            }`}
                            key={tab.name}
                            to={tab.ref}
                        >
                            {tab.name}
                        </Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
