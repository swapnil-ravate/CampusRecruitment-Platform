const trimTrailingSlash = (value) => value.replace(/\/+$/, "")

export const getApiBaseUrl = () => {
    const configuredApiUrl = import.meta.env.VITE_API_URL
    if (configuredApiUrl) {
        return trimTrailingSlash(configuredApiUrl)
    }

    // Default to same-origin API path (works in Vercel when frontend rewrites/proxies are configured).
    return "/api/v1"
}
