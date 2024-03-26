import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { requireAuth } from "../utils/requireAuth";

// export async function loader({ request }) {
//     await requireAuth(request);
//     return null;
// }
function GuestLayout() {
    const { user, token } = useStateContext();
    if (!token) {
        return <Navigate to="login" />;
    }
    return (
        <div id="guestLayout">
            <Outlet context={user} />
        </div>
    );
}

export default GuestLayout;
