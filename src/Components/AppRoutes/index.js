import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashboard";
import Inventory from "../../Pages/Inventory";
import ManufactureOrder from "../../Pages/ManufactureOrder";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/inventory" element={<Inventory />}></Route>
            <Route
                path="/manufactureOrder"
                element={<ManufactureOrder />}
            ></Route>
            <Route path="/customers" element={<Customers />}></Route>
        </Routes>
    );
}
export default AppRoutes;
