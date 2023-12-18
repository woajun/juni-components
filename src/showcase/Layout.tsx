import { Outlet } from "react-router-dom"
import BottomNav from "../components/BottomNav"

function Layout() {
    const navItems = [
        {
            to: '/',
            label: '컴포넌트'
        },
        {
            to: '/',
            label: '홈'
        },
        {
            to: '/',
            label: '설정'
        },
    ]
    return (
        <>
            <Outlet />
            <BottomNav navItems={navItems}/>
        </>
    )
}

export default Layout