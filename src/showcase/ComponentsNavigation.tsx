import ComponentsNavigationButton from "./ComponentsNavigationButton"

function ComponentsNavigation () {
    const data = [
        {
            label: 'bottom drawer',
            to: '/bottom-drawer'
        },
        {
            label: 'dim',
            to: '/dim'
        },
        {
            label: 'chart',
            to: '/chart'
        },
        {
            label: 'picker',
            to: '/picker'
        },
        {
            label: 'modal',
            to: '/modal'
        },
        {
            label: 'card-bundle',
            to: '/card-bundle'
        },
    ]
    return (
        <div className="grid grid-cols-3 text-center md:grid-cols-5 gap-2" >
            {data.map((e) => (
                <ComponentsNavigationButton data={e}/>
            ))}
        </div>
    )
}

export default ComponentsNavigation