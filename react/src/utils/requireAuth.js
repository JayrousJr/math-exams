import { redirect } from "react-router-dom";

export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname;
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("ACCESS_TOKEN");
    console.log(pathname);
    if (!user && !token) {
        const response = redirect(
            `/login?message=You must Login first.&redirect=${pathname}`
        );
        response.body = true;
        return response;
    }
}
