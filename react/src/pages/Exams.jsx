import {
    Await,
    Link,
    defer,
    useLoaderData,
    useSearchParams,
} from "react-router-dom";
import getAxiosUser from "../api/api";
import React from "react";
import Loader from "./Loader";
import { requireAuth } from "../utils/requireAuth";

export async function loader({ request }) {
    // await requireAuth({ request });
    return defer({ data: getAxiosUser.get("/exams") });
}
function Exams() {
    const dataPromise = useLoaderData();
    // Query Settings starts down here
    const [searchparam, setSearchParams] = useSearchParams();
    const typeFilter = searchparam.get("paper_type");
    const handleSearchFilter = (key, value) => {
        setSearchParams((prevParam) => {
            if (value == null) {
                prevParam.delete(key);
            } else {
                prevParam.set(key, value);
            }
            return prevParam;
        });
    };
    // Query Settings Ends here
    function renderExams(data) {
        const examsList = data.data.data;
        const displayedExams = typeFilter
            ? examsList.filter(
                  (exam) => exam.paper_type.toLowerCase() === typeFilter
              )
            : examsList;
        const examelement = displayedExams.map((exam) => (
            <Link
                key={exam.name}
                className="single-paper"
                to={`${exam.id}`}
                state={{
                    typeFilter,
                    search: `?${searchparam.toString()}`,
                }}
            >
                <span>{exam.id} </span>
                {exam.name}
            </Link>
        ));
        return (
            <>
                <h2 className="exams-header">Examination List</h2>
                <div className="filter">
                    <button
                        className={`filter-link ${
                            typeFilter === "paper one" ? "selected" : ""
                        }`}
                        onClick={() =>
                            handleSearchFilter("paper_type", "paper one")
                        }
                    >
                        Paper One
                    </button>
                    <button
                        className={`filter-link ${
                            typeFilter === "paper two" ? "selected" : ""
                        }`}
                        onClick={() =>
                            handleSearchFilter("paper_type", "paper two")
                        }
                    >
                        Paper Two
                    </button>
                    <button
                        className={`filter-link ${
                            typeFilter === "bam" ? "selected" : ""
                        }`}
                        onClick={() => handleSearchFilter("paper_type", "bam")}
                    >
                        BAM
                    </button>
                    {typeFilter && (
                        <button
                            className="filter-link clear"
                            onClick={() =>
                                handleSearchFilter("paper_type", null)
                            }
                        >
                            Clear
                        </button>
                    )}
                </div>
                {examelement}
            </>
        );
    }

    return (
        <div className="exams">
            <React.Suspense fallback={<Loader />}>
                <Await resolve={dataPromise.data}>{renderExams}</Await>
            </React.Suspense>
        </div>
    );
}

export default Exams;
