import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            </div>
            <h1 className="py-20">Footer</h1>
        </div>
    );
};

export default MainLayout;