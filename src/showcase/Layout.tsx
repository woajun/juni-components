import { Outlet, useLocation } from "react-router-dom"
import BottomNav from "../components/BottomNav"
import { useEffect, useState } from "react";
import BottomDrawer from "../components/BottomDrawer";
import ComponentsNavigation from "./ComponentsNavigation";

function Layout() {
    const location = useLocation();
    const [isShowComponents, setIsShowComponents] = useState(false);

    useEffect(() => {
        setIsShowComponents(false);
    },[location]);

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
                <ComponentsNavigation />
            </BottomDrawer>
        </>
    )
}

export default Layout