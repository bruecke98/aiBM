import {updateCustomer}  from '../server/api/supabase/updateCustomer';
export default defineNuxtRouteMiddleware(async() => {
    const user = useSupabaseUser();
    const config = useRuntimeConfig();
    
    if (!user.value) {
      return navigateTo('/');
    }else{
      const supaClient = useSupabaseClient();
      const email : string = user?.value.email ?? '';
      const date: Date = new Date()
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
          const stripeData = await $fetch(
            '/api/stripe/isActive',
            {
              method: 'POST',
              body : {mail : email}
            } 
          );
          if (data.length == 0) {
            // check if stripe active
            

            if(stripeData.body.isActive == true){
              console.log(stripeData.body.isActive, 'create new entry in customer table')
              const { data: newCustomer, error } = await supaClient
                .from('customer')
                .insert([ { mail: email, checked_time: date } ] as any)
                .single()
            }else{
              console.log(stripeData.body.isActive, 'navigate to /payment')
              return navigateTo('/payment');
            }

          } else if(  data[0].checked_time == null || hoursDiff > 0.02) {
            // update timestamp
            if(stripeData.body.isActive == true){
              const update = await updateCustomer(email, date, config.supabaseKey);
            }else { 
              console.log(stripeData.body.isActive, 'navigate to /payment')
              return navigateTo('/payment');
            }
          }
          return;
        }
      }
    }
  });