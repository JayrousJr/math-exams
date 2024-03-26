import { redirect } from "react-router-dom";

export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname;
    const isLogged = localStorage.getItem("user");

    if (!isLogged) {
        const response = redirect(
            `/login?message=You must Login first.&redirect=${pathname}`
        );
        response.body = true;
        throw response;
    }
}
