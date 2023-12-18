import { Link } from "react-router-dom"

type NavData = {
    label: string
    to: string
}

type Props = {
    data: NavData
}

function ComponentsNavigationButton ({data} : Props) {
    return (
        <Link to={data.to} className="border rounded-md bg-slate-50">
            {data.label}
        </Link>
    )
}

export default ComponentsNavigationButton