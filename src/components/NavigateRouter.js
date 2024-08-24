import React from "react";
import { Outlet, useNavigate } from 'react-router-dom';

export function NavigateRouter() {
    const navigate = useNavigate();

    return (
        <div>
            <header className="header">
                <nav>
                    <ul>
                        <li>
                            <div className="nav-btn" onClick={() => navigate("/home")}>Home</div>
                        </li>
                        <li>
                            <div className="nav-btn" onClick={() => navigate("/about")}>About</div>
                        </li>
                        <li>
                            <div className="nav-btn" onClick={() => navigate("/basket")}>Basket</div>
                        </li>
                        <li>
                            <div className="nav-btn" onClick={() => navigate("/contacts")}>Contacts</div>
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