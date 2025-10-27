import React from "react";
import header from "./componets/header/header.jsx";
import footer from "./componets/footer/footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <header />
            
                <Outlet />
            
            <footer />
        </>
    );
}