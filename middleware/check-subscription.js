import getSubscriptionStatus from '~/server/api/stripe/utils'
export default  defineNuxtRouteMiddleware(async () => {
  const user = useSupabaseUser();
  if (!user) {
    return navigateTo('/login')
  }

  // Check if the user has an active subscription
  
  if (status ) {
    console.log(status)
    if(status === true){
    // User has an active subscription, allow access to the protected route
    return navigateTo('/main')
    }
  } 
});