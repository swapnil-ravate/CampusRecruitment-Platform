import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { BiErrorCircle } from "react-icons/bi";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
                <BiErrorCircle className="text-6xl text-error mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong!</h2>
                <p className="text-gray-600 mb-6 break-words text-sm">
                    {error?.message || "An unexpected error occurred."}
                </p>
                <button
                    onClick={resetErrorBoundary}
                    className="btn btn-primary w-full"
                >
                    Try Again
                </button>
                <button
                    onClick={() => window.location.reload()}
                    className="btn btn-ghost btn-sm mt-2 w-full"
                >
                    Reload Page
                </button>
            </div>
        </div>
    );
};

export const ErrorBoundary = ({ children }) => {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
                // Prepare for retry (e.g., reset query cache if needed)
                window.location.href = "/";
            }}
        >
            {children}
        </ReactErrorBoundary>
    );
};
