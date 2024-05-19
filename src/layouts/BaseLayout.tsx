import Navbar from "../components/baseLayout/Navbar"
import Sidebar from "../components/baseLayout/Sidebar"

const BaseLayout = () => {
    return (
        <div>
            <Navbar />
            <Sidebar
                id="menu-item"
                id1="menu-items"
                activeClassName="admin-dashboard"
            />
        </div>
    )
}

export default BaseLayout