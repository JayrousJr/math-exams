import owner from "../assets/owner.jpg";
import feature from "../assets/features.png";
function About() {
    return (
        <div className="about main-grid">
            <div className="section-header">
                <h2 className="author section-title-centered">
                    About the author
                </h2>
                <p className="author-details">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="about-image">
                <img
                    src={feature}
                    className="author-image"
                    alt="Author Image"
                />
            </div>
            <div className="page-content">
                <div className="page-details">
                    <h2 className="section-title">Section title</h2>
                    <p className="section-sub">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Assumenda magnam non minus sapiente repudiandae
                        eaque, voluptates accusantium, a natus placeat commodi,
                        sequi accusamus vero dolores. Accusantium facilis modi.
                    </p>
                </div>
                <div className="page-details">
                    <h2 className="section-title">Section title</h2>
                    <p className="section-sub">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Assumenda magnam non minus sapiente repudiandae
                        eaque, voluptates accusantium, a natus placeat commodi,
                        sequi accusamus vero dolores. Accusantium facilis modi.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
