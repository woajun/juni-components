import { Outlet } from "react-router-dom"
import BottomNav from "../components/BottomNav"
import { useState } from "react";
import BottomDrawer from "../components/BottomDrawer";

function Layout() {
    const [isShowComponents, setIsShowComponents] = useState(false);

    const navItems = [
        {
            label: '컴포넌트',
            onClick: () => {
                setIsShowComponents(true);
            }
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
            <BottomDrawer show={isShowComponents} onCloseClick={() => setIsShowComponents(false)}>
                aa
            </BottomDrawer>
        </>
    )
}

export default Layout