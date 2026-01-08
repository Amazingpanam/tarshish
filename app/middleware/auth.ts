// Named export for route middleware
export default defineNuxtRouteMiddleware((to, from) => {
    const authToken = useCookie('auth_token') // More specific cookie name
    
    // Check if user is authenticated
    if (!authToken.value) {
        // Optional: Store the intended destination
        const returnTo = encodeURIComponent(to.fullPath)
        
        // Return the navigation
        return navigateTo(`/login`)
    }
    
    // If authenticated, continue navigation
    // No return needed - middleware will proceed automatically
})