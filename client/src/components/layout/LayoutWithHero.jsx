import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Hero } from "../hero/Hero";


export function LayoutWithHero(){
    return (
        <div className="basic-layout">
            <Header />
            <Hero />
            <main className="container align-items-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}