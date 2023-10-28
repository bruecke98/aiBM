
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qbqwusuvioifcqhsgqwu.supabase.co'


export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const supaKey : string = config.private.supabaseKey;
  const supabase = createClient(supabaseUrl, supaKey as string)
  const name = event.context.params?.projectName ? event.context.params?.projectName : 0;

  
  const data = await supabase
      .from('project')
      .update({bm: "platform"})
      .eq('projectName', name)
   
    return {data: data.data}
  })