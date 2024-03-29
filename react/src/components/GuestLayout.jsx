import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
// import { requireAuth } from "../utils/requireAuth";

// export async function loader({ request }) {
//     // await requireAuth(request);
//     return null;
// }
function GuestLayout() {
    const { user, token } = useStateContext();
    console.log(token);
    if (!token) {
        return (
            <Navigate
                to="/login"
                state={{ message: "You must be logged in first" }}
            />
        );
    }
    return (
        <div id="guestLayout">
            <Outlet context={user} />
        </div>
    );
}

export default GuestLayout;
