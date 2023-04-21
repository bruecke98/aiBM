export default  defineNuxtRouteMiddleware(async () => {
  const user = useSupabaseUser();
  if (!user) {
    return navigateTo('/login')
  }else{
  // Check if the user has an active subscription
    const stripeData = await $fetch(
      '/api/stripe/isActive',
      {
        method: 'POST',
        body : {mail : user.value?.email}
      } 
    );
    console.log("check-subscription.ts", stripeData.body.isActive)
    //  if stripe subscription is active navigate to / -> so the user cant pay twice
    if (stripeData.body.isActive === true) {
      return navigateTo('/main')
    }
  }
});