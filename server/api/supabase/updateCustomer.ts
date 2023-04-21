
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hshpecbqficiqhdjauja.supabase.co'
const key = useRuntimeConfig()


export const updateCustomer = async (email : string, date : Date) => {
  console.log("updateCustomer", key)
  const supaKey : string = key.private.supabaseKey;
  const supabase = createClient(supabaseUrl, supaKey as string)
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