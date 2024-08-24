import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Router() {
    return (
        <div>
            <header className="header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/basket">Basket</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="body">
                <Outlet />
            </div>
        </div>
    );
}