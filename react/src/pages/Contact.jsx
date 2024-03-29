import { Form } from "react-router-dom";
import feature from "../assets/features.png";
export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const message = formData.get("message");
    const name = formData.get("name");
    console.log(name, email, message);
    return null;
}
function Contact() {
    function onchange(event) {
        event.preventDefault();
    }
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
                <Form method="POST">
                    <div className="form-group">
                        <input
                            name="name"
                            type="text"
                            className="form-input"
                            onChange={onchange}
                            placeholder="Your full Name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="email"
                            type="email"
                            className="form-input"
                            onChange={onchange}
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            rows="5"
                            type="text"
                            className="form-input"
                            onChange={onchange}
                            placeholder="Your Message"
                        />
                    </div>
                    <div className="button-group">
                        <button className="btn-submit">Send Message</button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Contact;
