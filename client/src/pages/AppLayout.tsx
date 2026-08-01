import { Outlet } from "react-router-dom"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CartSidebar from "../components/CartSidebar"
const AppLayout = () => {
  return (
    <div>
        <Banner />
        <Navbar />
        <main className="min-h-screen">
            <Outlet />
        </main>
        <Footer />
        <CartSidebar />
    </div>
  )
}

export default AppLayout