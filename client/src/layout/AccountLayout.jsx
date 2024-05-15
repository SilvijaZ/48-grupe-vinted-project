import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { PageLogin } from "../pages/register/PageLogin";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


export function AccountLayout(){
    const { loginStatus } = useContext(GlobalContext)

    return (
        <>
            <Header />
            {loginStatus ? <Outlet /> : <PageLogin />}
            <Footer />
        </>
    );
}