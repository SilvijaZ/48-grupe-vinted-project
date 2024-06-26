import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";


export function BasicLayout(){
    return (
        <div className="basic-layout">
            <Header />
            <main className="container align-items-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}