import { Await, Link, defer, useLoaderData } from "react-router-dom";
import getAxiosUser from "../api/api";
import React from "react";
import Loader from "./Loader";

export async function loader() {
    return defer({ data: getAxiosUser.get("/exams") });
}
function Exams() {
    const dataPromise = useLoaderData();

    function renderExams(data) {
        const examelement = data.data.data.map((exam) => (
            <Link key={exam.name} className="single-paper" to={`${exam.id}`}>
                {exam.name}
            </Link>
        ));
        return examelement;
    }

    return (
        <div className="exams">
            <h2 className="exams-header">Examination List</h2>
            <React.Suspense fallback={<Loader />}>
                <Await resolve={dataPromise.data}>{renderExams}</Await>
            </React.Suspense>
        </div>
    );
}

export default Exams;
