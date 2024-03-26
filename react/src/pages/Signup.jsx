import { Link, Form, useNavigation, useActionData } from "react-router-dom";
import logo from "../assets/owner.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import getAxiosUser from "../api/api";
import { HiMiniXMark } from "react-icons/hi2";
export async function action({ request }) {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const password_confirmation = formData.get("password_confirmation");
    const payload = {
        name,
        email,
        password,
        password_confirmation,
    };

    try {
        const { data } = await getAxiosUser.post("/signup", payload);
        localStorage.setItem("ACCESS_TOKEN", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        const response = redirect("/home");
        response.body = true;
        throw response;
    } catch (error) {
        const response = error.response;
        if (response && response.status === 422) {
            console.log(response.data.errors);
            return response.data.errors;
        }
    }
    return null;
}
function Signup() {
    const { setUser, setToken } = useStateContext();
    const { state } = useNavigation();
    const errors = useActionData();
    console.log(errors);

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
                    {errors && (
                        <div className="alert">
                            {Object.keys(errors).map((key) => (
                                <div className="error">
                                    <span>
                                        <HiMiniXMark />
                                    </span>
                                    <p key={key}>{errors[key][0]}</p>
                                </div >
                            ))}
                        </div>
                    )}
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="form-input"
                            name="name"
                        />
                    </div>
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
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="form-input"
                            name="password_confirmation"
                        />
                    </div>
                    <div className="button-group">
                        <button className="btn btn-block btn-submit">
                            SignUp
                        </button>
                    </div>
                    <div className="new-account">
                        Do you have an account? <Link to="/login">Log in</Link>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Signup;
