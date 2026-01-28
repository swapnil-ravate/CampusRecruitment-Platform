import { BiErrorCircle } from "react-icons/bi";

const ErrorState = ({ message, onRetry }) => {
    return (
        <div className="alert alert-error shadow-lg my-4">
            <BiErrorCircle className="text-2xl" />
            <div>
                <h3 className="font-bold">Error</h3>
                <div className="text-xs">{message || "Failed to load data."}</div>
            </div>
            {onRetry && (
                <button onClick={onRetry} className="btn btn-sm btn-ghost">
                    Retry
                </button>
            )}
        </div>
    );
};

export default ErrorState;
