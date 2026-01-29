// Named export for route middleware
export default defineNuxtRouteMiddleware((to, from) => {
    const authToken = useCookie('user') // More specific cookie name
    
    
    // Check if user is authenticated
    if (!authToken.value) {
        // Optional: Store the intended destination
        const returnTo = encodeURIComponent(to.fullPath)
        console.log("hello")
        
        // Return the navigation
        return navigateTo(`/signup`)
        
    }
    
    // If authenticated, continue navigation
    // No return needed - middleware will proceed automatically
})