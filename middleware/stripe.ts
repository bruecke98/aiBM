export default defineNuxtRouteMiddleware(async() => {
    const user = useSupabaseUser();
    
    if (!user.value) {
      return navigateTo('/');
    }else{
      const supaClient = useSupabaseClient();
      const email : string = user?.value.email ?? '';
      const date = new Date()
      // create a new entry in the supabase table customer
      // search for mail in customre table
      // check on api/stripe/active if customer is active
      // insert current darte at checked_time if active, else navigate to /payment
      if (email != '') {
        const { data, error } = await supaClient.from('customer').select('mail, checked_time').eq('mail', email);
        const time_check = new Date(data && data[0] && data[0].checked_time ? data[0].checked_time : '2023-04-17 00:00:00');
        // calculate the time difference between the given date and the current date in milliseconds
        const timeDiff = date.getTime() - time_check.getTime(); 
        // calculate the number of hours in the time difference
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        console.log(hoursDiff) 
        if (error) {
          console.log(error);
        } else {
          if (data.length == 0 || data[0].mail == email || data[0].checked_time == null || hoursDiff > 24 ) {
            // check if stripe active
            const data = await $fetch('/api/stripe/isActive');
            if(data){
              console.log(data.isActive, 'create new entry in customer table')
            }

          } else {
            // check if customer is active
          }
        }
      }






      

    }
  });