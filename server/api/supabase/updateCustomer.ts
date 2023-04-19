
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hshpecbqficiqhdjauja.supabase.co'

export const updateCustomer = async (email : string, date : Date, supabaseKey : string) => {
  const supabase = createClient(supabaseUrl, supabaseKey as string)
  console.log("updateCustomer")
    const { data: updatedCustomer, error: updateError } = await supabase
      .from('customer')
      .update({ checked_time: date })
      .eq('mail', email)
      .single()
    if (updateError) {
      throw updateError
    }
  
    return {data: true}
  }