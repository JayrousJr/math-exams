import { HiEmojiSad } from "react-icons/hi";
function NotFound() {
    return (
        <div className="not-found">
            <div className="page-contents">
                <h2 className="not-found-header">404 - Page Not Found</h2>
                <HiEmojiSad className="sad-icon" />
            </div>
        </div>
    );
}

export default NotFound;
