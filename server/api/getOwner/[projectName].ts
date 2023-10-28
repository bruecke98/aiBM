
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qbqwusuvioifcqhsgqwu.supabase.co'


export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const supaKey : string = config.private.supabaseKey;
  const supabase = createClient(supabaseUrl, supaKey as string)
  const name = event.context.params?.projectName ? event.context.params?.projectName : 0;

  console.log("Name", name,)
  const data = await supabase
      .from('owner')
      .select('*')
      .eq('project', name)
   
    return {data: data.data}
  })