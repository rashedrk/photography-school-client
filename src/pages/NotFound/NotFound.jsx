import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center">
            404 page not found
            <Link className="btn primary-btn " to='/'>Go to Homepage</Link>
        </div>
    );
};

export default NotFound;