import { Form, useActionData, useNavigation } from "react-router-dom";
import feature from "../assets/features.png";
import getAxiosUser from "../api/api";
import { useRef, useState, useEffect } from "react";
export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const message = formData.get("message");
    const name = formData.get("name");
    // console.log(name, email, message);
    const payload = {
        email,
        name,
        message,
    };
    try {
        const { data } = await getAxiosUser.post("message", payload);
        return { ok: true };
    } catch (error) {
        return error;
    }
    return null;
}
function Contact() {
    const { state } = useNavigation();
    const actionData = useActionData();

    // Resetting form inputs after submission starts here
    const form = useRef(null);
    useEffect(() => {
        if (actionData?.ok) {
            form.current?.reset();
        }
    }, [actionData]);
    console.log(actionData);
    //   Resetting form input after submission ends here

    const error = actionData?.response?.data?.errors;
    return (
        <div className="contact main-grid">
            <div className="section-header">
                <h2 className="author section-title-centered">Contact us</h2>
                <p className="author-details">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="contact-body">
                <div className="page-details">
                    <h2 className="section-title">Get intouch with us</h2>
                    <p className="section-sub">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Assumenda magnam non minus.
                    </p>
                </div>
                <div className="contact-location">
                    <h2>Main Office Location, CA 94043</h2>
                    <p>14 Kariakoo, Dar es Salaam</p>
                    <p>+255 765 813 534</p>
                    <p>+255 620 743 534</p>
                    <p>
                        email:
                        <a href="mailto:info@legolas.tech">
                            {" "}
                            info@legolas.tech
                        </a>
                    </p>
                    <p>
                        web:
                        <a href="https://www.legolas.tech"> www.legolas.tech</a>
                    </p>
                </div>
            </div>
            <div className="form ">
                <Form method="POST" ref={form}>
                    {state === "submitting" && (
                        <span className="processing">Sending Message ... </span>
                    )}
                    <div className="form-group">
                        <input
                            name="name"
                            type="text"
                            className={`form-input ${
                                error && error.name && "error-input"
                            }`}
                            placeholder="Your full Name"
                        />
                        <span className="inputs-errors">
                            {error && error?.name}
                        </span>
                    </div>
                    <div className="form-group">
                        <input
                            name="email"
                            type="email"
                            className={`form-input ${
                                error && error.email && "error-input"
                            }`}
                            placeholder="Email Address"
                        />
                        <span className="inputs-errors">
                            {error && error?.email}
                        </span>
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            rows="5"
                            type="text"
                            className={`form-input ${
                                error && error.message && "error-input"
                            }`}
                            placeholder="Your Message"
                        />
                        <span className="inputs-errors">
                            {error && error?.message}
                        </span>
                    </div>
                    <div className="button-group">
                        <button
                            className="btn-submit"
                            disabled={state === "submitting"}
                        >
                            Send Message
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Contact;
