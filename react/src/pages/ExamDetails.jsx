import {
    Await,
    Link,
    defer,
    useLoaderData,
    useLocation,
} from "react-router-dom";
import getAxiosUser from "../api/api";
import React, { useState } from "react";
import Loader from "./Loader";
import MarkDown from "../components/MarkDoen";
import { HiEmojiSad } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
// Loader Function
export async function loader({ params }) {
    // console.log(params); passing the params object fetches the quesry paramenter passed in the specified link and in this the link has id
    return defer({ data: getAxiosUser.get(`/exams/${params.id}/questions`) });
}

// Component Function
function ExamDetails() {
    const location = useLocation();
    const search = location.state?.search || "";
    const type = location.state?.typeFilter || "All";
    const dataPromise = useLoaderData();
    const [view, setView] = useState(true);

    const renderQuestions = (data) => {
        const numbers = data.data.data.length;
        const questionElement =
            numbers < 1 ? (
                <div className="page-contents">
                    <Link to="/exams">
                        <HiArrowNarrowLeft /> Go Back
                    </Link>
                    <div className="question-number">No data found</div>
                    <HiEmojiSad className="sad-icon" />
                </div>
            ) : (
                <>
                    <div className="exams-header">
                        <Link to={`/exams${search}`} relative="path">
                            <HiArrowNarrowLeft /> Back to {type} exams
                        </Link>
                        <h2>Questions</h2>
                    </div>
                    {data.data.data.map((question) => (
                        <div className="question-card" key={question.answers}>
                            <div className="question-number">
                                {question.question_number}
                            </div>
                            <MarkDown
                                className="question"
                                question={question.questions}
                            />
                        </div>
                    ))}
                    <Link
                        className="answer-btn"
                        to="../answers"
                        relative="path"
                    >
                        Go to answers
                    </Link>
                </>
            );
        return questionElement;
    };
    return (
        <>
            <div className="exam-single">
                <React.Suspense fallback={<Loader />}>
                    <Await resolve={dataPromise.data}>{renderQuestions}</Await>
                </React.Suspense>
            </div>
        </>
    );
}

export default ExamDetails;

// <hr />
{
    /* <button onClick={handleDisplayAnswers}>
    {!view ? "Show Answers" : "Hide Answers"}
</button> */
}
