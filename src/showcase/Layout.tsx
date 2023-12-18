import { Outlet } from "react-router-dom"
import BottomNav from "./BottomNav"

function Layout() {
    return (
        <>
            <Outlet />
            <BottomNav/>
        </>
    )
}

export default Layout