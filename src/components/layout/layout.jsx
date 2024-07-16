import { Outlet } from "react-router-dom";
import { Header, Footer } from '../'

const Layout = () => {
    return (
        <>
            <Header/>
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export { Layout }