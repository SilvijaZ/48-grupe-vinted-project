import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { PagesLinks } from "../PagesLinks/PagesLinks";


export function LayoutPages(){
    return (
        <div className="basic-layout">
            <Header />
            <PagesLinks />
            <main className="container align-items-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}