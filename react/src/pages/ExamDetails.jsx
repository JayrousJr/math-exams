import { Await, defer, useLoaderData } from "react-router-dom";
import getAxiosUser from "../api/api";
import React, { useState } from "react";
import Loader from "./Loader";
import MarkDown from "../components/MarkDoen";

// Loader Function
export async function loader() {
    return defer({ data: getAxiosUser.get("/exams/id") });
}

// Component Function
function ExamDetails() {
    const dataPromise = useLoaderData();
    const [view, setView] = useState(false);

    const renderQuestions = (data) => {
        const questionElement = data.data.data.map((question) => (
            <div className="question-card" key={question.answers}>
                <div className="question-number">
                    {question.question_number}
                </div>
                <MarkDown className="question" question={question.answers} />
            </div>
        ));
        return questionElement;
    };
    const renderAnswers = (data) => {
        const answerElements = data.data.data.map((ans) => (
            <div className="question-card" key={ans.answers}>
                <div className="question-number"></div>
                <div className="question"></div>
            </div>
        ));
        return answerElements;
    };
    const handleDisplayAnswers = () => {
        setView((prev) => !prev);
    };
    return (
        <>
            <div className="exam-single">
                <h2 className="exams-header">Questions</h2>
                <React.Suspense fallback={<Loader />}>
                    <Await resolve={dataPromise.data}>{renderQuestions}</Await>
                </React.Suspense>
            </div>
        </>
    );
}

export default ExamDetails;

{
    /* <hr />
                <button onClick={handleDisplayAnswers}>
                    {!view ? "Show Answers" : "Hide Answers"}
                </button>
                <Await resolve={dataPromise.data}>
                    {view && renderAnswers}
                </Await> */
}
