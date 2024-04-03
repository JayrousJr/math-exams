import {
    Link,
    Form,
    redirect,
    useActionData,
    useNavigation,
    useLocation,
} from "react-router-dom";
import getAxiosUser from "../api/api";
export async function loader({ request }) {
    const url = new URL(request.url);
    // console.log(url.pathname);

    return null;
}
export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const payload = { email, password };
    try {
        const { data } = await getAxiosUser.post("/login", payload);
        localStorage.setItem("ACCESS_TOKEN", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.replace("/");
    } catch (error) {
        const response = error.response;
        console.log(error);
        if (response.status === 500) {
            return "There is a server error";
        }
        return response.data.message;
    }

    return null;
}
function Login() {
    const { state } = useNavigation();
    const error = useActionData();
    console.log(error);
    const mesg = useLocation(); //return message from Guestlayout
    // console.log(mesg);
    return (
        <>
            {state === "submitting" && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}
            <div className="login-signup animated main-grid cards">
                <h2 className="form-header">Login</h2>

                <Form className="form" method="POST" replace>
                    {error && <div className="alert"> {error}</div>}
                    {mesg.state && (
                        <div className="alert"> {mesg?.state?.message}</div>
                    )}
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="form-input"
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-input"
                            name="password"
                        />
                    </div>
                    <div className="button-group">
                        <button className="btn btn-block btn-submit">
                            SignUp
                        </button>
                    </div>
                    <div className="new-account">
                        Do not have an account? <Link to="/signup">Signup</Link>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Login;
