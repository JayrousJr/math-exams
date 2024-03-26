import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function DefaultLayout() {
    const { user, token } = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div id="defaultLayout">
            <Outlet />
        </div>
    );
}

export default DefaultLayout;
