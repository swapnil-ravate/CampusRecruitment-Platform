import { Link } from "react-router-dom";
import { FaInbox } from "react-icons/fa";

const EmptyState = ({
    message = "No data available",
    actionLabel,
    actionLink,
    icon: Icon = FaInbox
}) => {
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-base-100 rounded-lg border border-base-200 text-center h-64">
            <Icon className="text-4xl text-gray-400 mb-4" />
            <p className="text-lg text-gray-600 font-medium mb-4">{message}</p>
            {actionLabel && actionLink && (
                <Link to={actionLink} className="btn btn-primary btn-sm">
                    {actionLabel}
                </Link>
            )}
        </div>
    );
};

export default EmptyState;
