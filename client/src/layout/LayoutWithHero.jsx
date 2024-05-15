import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";


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