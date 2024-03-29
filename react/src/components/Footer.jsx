import logo from "../assets/legolas.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
function Footer() {
    const date = new Date().getFullYear("Y");
    return (
        <footer className="footer main-grid">
            <div className="footer-main">
                <img src={logo} alt="" className="footer-logo" />
                <p className="footer-text">
                    Doing Online Examinations especially of mathematics will
                    help you buils the confidence to tackle various questions
                    and make you ready for youe NECTA
                </p>
                <p className="footer-fineprint">&copy; {date} Mathematics </p>
            </div>
            <ul className="social-list">
                <li className="social-item">
                    <a href="#" className="social-link">
                        <RiFacebookCircleLine />
                    </a>
                </li>
                <li className="social-item">
                    <a href="#" className="social-link">
                        <RiInstagramLine />
                    </a>
                </li>
                <li className="social-item">
                    <a href="#" className="social-link">
                        <RiTwitterXLine />
                    </a>
                </li>
                <li className="social-item">
                    <a href="#" className="social-link">
                        <RiWhatsappLine />
                    </a>
                </li>
            </ul>
            <a href="https://legolas.tech" className="site-designer">
                Designed by Legolas Technologies
            </a>
        </footer>
    );
}

export default Footer;
