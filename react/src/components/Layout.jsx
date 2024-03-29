import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import logo from "../assets/legolas.png";
import Footer from "./Footer";
import { RiMenu4Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { RiSunLine } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";
import { useState } from "react";
function Layout() {
    const { user, token } = useStateContext();
    const [nav, setNav] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem("COLORMODE"));
    const toggleNav = () => {
        setNav((prev) => !prev);
    };
    const togglecolorMode = () => {
        setDarkMode((prev) => !prev);
        localStorage.setItem("COLORMODE", darkMode);
    };
    const handleLogout = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("user");
        const response = redirect("/home");
        response.body = true;
        throw response;
    };

    return (
        <div className={`${darkMode ? "dark" : null}`}>
            <header>
                <nav className="main-grid">
                    <div className="nav-top">
                        <div className="nav-logo">
                            <a href="/">
                                <img className="site-logo" src={logo} />
                            </a>
                        </div>
                        <div className="color-mode" onClick={togglecolorMode}>
                            {darkMode ? <RiSunLine /> : <RiMoonFill />}
                        </div>
                        <button
                            aria-label="open"
                            className="menu"
                            onClick={toggleNav}
                        >
                            <RiMenu4Line />
                        </button>
                        {!token ? (
                            <div className="nav-login">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-login-active" : null
                                    }
                                    to="login"
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-login-active" : null
                                    }
                                    to="signup"
                                >
                                    Signup
                                </NavLink>
                            </div>
                        ) : (
                            <div className="user">
                                <span className="user-name">
                                    Hello{" "}
                                    <strong>
                                        {user && user.name.split(" ")[0]}
                                    </strong>
                                </span>
                                <Link
                                    className="account-btn"
                                    onClick={handleLogout}
                                >
                                    LogOut
                                </Link>
                            </div>
                        )}
                    </div>
                    <div
                        className={`main-navigation ${
                            nav ? "nav-open" : null
                        } `}
                    >
                        <button
                            aria-label="close"
                            className="close"
                            onClick={toggleNav}
                        >
                            <RiCloseLine />
                        </button>
                        <img
                            className="site-logo"
                            src={logo}
                            onClick={toggleNav}
                        />
                        <NavLink
                            onClick={toggleNav}
                            className={({ isActive }) =>
                                isActive ? "nav-main-active" : null
                            }
                            to="."
                        >
                            Home
                        </NavLink>

                        <NavLink
                            onClick={toggleNav}
                            className={({ isActive }) =>
                                isActive ? "nav-main-active" : null
                            }
                            to="about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            onClick={toggleNav}
                            className={({ isActive }) =>
                                isActive ? "nav-main-active" : null
                            }
                            to="contact"
                        >
                            Contact
                        </NavLink>
                        {token && (
                            <NavLink
                                onClick={toggleNav}
                                className={({ isActive }) =>
                                    isActive ? "nav-main-active" : null
                                }
                                to="exams"
                            >
                                Exams
                            </NavLink>
                        )}
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
