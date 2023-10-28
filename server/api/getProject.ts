
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qbqwusuvioifcqhsgqwu.supabase.co'
console.log("db1")

export default defineEventHandler(async () => {
  console.log("db2")
  const config = useRuntimeConfig()
  const supaKey : string = config.private.supabaseKey;
  const supabase = createClient(supabaseUrl, supaKey as string)
  
  const data = await supabase
      .from('project')
      .select('*')
   
    console.log(data.data)
  
    return {data: data.data}
  })