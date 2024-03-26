import {
    Link,
    Form,
    redirect,
    useActionData,
    useNavigation,
} from "react-router-dom";
import getAxiosUser from "../api/api";
export async function loader({ request }) {
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
        return redirect("/");
    } catch (error) {
        return "No account found with such credentials";
    }

    return null;
}
function Login() {
    const { state } = useNavigation();
    const error = useActionData();
    return (
        <>
            {state === "submitting" && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}
            <div className="login-signup animated main-grid cards">
                <h2 className="form-header">Create Account</h2>

                <Form className="form" method="POST" replace>
                    {error && <div className="alert"> {error}</div>}
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
                            Create Account
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
