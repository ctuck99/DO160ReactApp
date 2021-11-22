import Header from "./Header";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import PowerInputCatDropdown from './PowerInput/PowerInputCatDropdown';

export default function PowerInput() {
    return (
        <div>
            <Header />
            <h1>Test Section</h1>
            <p>Power Input</p>
            <PowerInputCatDropdown />
            <p>{"\n"}</p>
            <nav>
                <Link to="PowerInputAC">AC Power Input<br></br></Link>
                <Link to="PowerInputDC">DC Power Input<br></br></Link>
            </nav>
            {"\n"}
            <Outlet />
        </div>
    )
    // Maybe add checkbox functionality later to check if both AC and DC tests are applicable
}