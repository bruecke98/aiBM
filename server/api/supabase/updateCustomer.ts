
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hshpecbqficiqhdjauja.supabase.co'



export const updateCustomer = async (email : string, date : Date) => {
  const config = useRuntimeConfig()
  const supaKey : string = config.private.supabaseKey;
  const supabase = createClient(supabaseUrl, supaKey as string)
  
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