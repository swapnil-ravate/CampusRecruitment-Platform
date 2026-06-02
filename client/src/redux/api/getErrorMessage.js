/**
 * Normalize RTK Query / fetch errors into a user-facing string.
 */
export const getErrorMessage = (error, fallback = "Something went wrong. Please try again.") => {
    if (!error) return fallback

    if (typeof error === "string") return error

    if (error.status === "FETCH_ERROR") {
        return "Cannot reach the server. Check your internet connection, VITE_API_URL, and API CORS (CLIENT_URL)."
    }

    if (error.status === "PARSING_ERROR") {
        return "Invalid response from server. The API may be misconfigured or unavailable."
    }

    if (error.data?.message) return error.data.message

    if (typeof error.error === "string") {
        // Avoid showing raw "TypeError: Failed to fetch" without context
        if (error.error.includes("Failed to fetch") || error.error.startsWith("TypeError")) {
            return "Cannot reach the server. Check VITE_API_URL and API CORS (CLIENT_URL)."
        }
        return error.error
    }

    return fallback
}
