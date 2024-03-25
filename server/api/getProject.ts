
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qbqwusuvioifcqhsgqwu.supabase.co'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const supaKey : string = config.private.supabaseKey;
  const supabase = createClient(supabaseUrl, supaKey as string)
  
  const data = await supabase
      .from('project')
      .select('*')
   
  
    return {data: data.data}
  })