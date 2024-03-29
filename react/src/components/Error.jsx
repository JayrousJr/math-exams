import React from "react";
import { HiOutlineArrowNarrowLeft, HiEmojiSad } from "react-icons/hi";
import { Link, useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    return (
        <div className="error-page main-grid">
            <div className="error-container">
                <div className="page-contents">
                    <Link to=".." relative="path">
                        <HiOutlineArrowNarrowLeft /> Go Back to Home Page
                    </Link>
                    <div className="error-message">
                        UnExpected Application Error has Occured!!
                        <hr />
                    </div>
                    <div className="error-mesage">
                        {error?.response?.data?.message}
                    </div>
                </div>
                <pre className="error-status">
                    {error?.request?.status} - {error?.request?.statusText}
                </pre>
                <HiEmojiSad className="error-icon" />
            </div>
        </div>
    );
}
