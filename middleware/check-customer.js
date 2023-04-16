// middleware/check-customer.js
export default async function ({ app, redirect }) {
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();

  const email = user.value.email
  console.log(email)
  const { data: customers, error } = await supabase
    .from('customer')
    .select('customerID, mail')
    .eq('mail', email)
  // if customer does not exist, create a new customer
  if (customers.length === 0) {
    const { data: newCustomer, error } = await supabase
      .from('customer')
      .insert([{ mail: email, customerID: '' }])
      .single()
    return navigateTo('/payment');
  } else if(customers.customerID === '') {
    return navigateTo('/payment');
    
  }else{
    // check stripe payment
    const { data: customer, error } = await supabase
      .from('customer')
      .select('customerID')
      .eq('mail', email)
      .single()
  }

}