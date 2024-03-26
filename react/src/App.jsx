import Footer from "./components/Footer";
import { ContextProvider } from "./contexts/ContextProvider";
import Grid from "./pages/Grid";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
function App() {
    return (
        <ContextProvider>
            <RouterProvider router={router} />
            {/* <Grid /> */}
        </ContextProvider>
    );
}

export default App;
