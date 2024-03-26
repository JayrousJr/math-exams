import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Home from "../pages/Home";
import Exams, { loader as examsLoader } from "../pages/Exams";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import GuestLayout /*{ loader as guestLoader }*/ from "../components/GuestLayout";
import Login, {
    action as loginAction,
    loader as loginLoader,
} from "../pages/Login";
import Signup, { action as signinAction } from "../pages/Signup";
import Layout from "../components/Layout";
import ExamDetails, { loader as examDetailLoader } from "../pages/ExamDetails";
import Error from "../components/Error";
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />} errorElement={<Error />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/" element={<DefaultLayout />}>
                    <Route
                        path="login"
                        action={loginAction}
                        loader={loginLoader}
                        element={<Login />}
                    />
                    <Route
                        path="signup"
                        action={signinAction}
                        element={<Signup />}
                    />
                </Route>
                <Route
                    path="/"
                    element={<GuestLayout />}
                    // loader={guestLoader}
                >
                    <Route
                        path="exams"
                        loader={examsLoader}
                        element={<Exams />}
                    />
                    <Route
                        path="exams/:id"
                        loader={examDetailLoader}
                        element={<ExamDetails />}
                    />
                </Route>
                <Route path="*" element={<NotFound />}>
                    404 - Page Not Found
                </Route>
            </Route>
        </>
    )
);

export default router;
