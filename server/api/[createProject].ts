
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qbqwusuvioifcqhsgqwu.supabase.co'


export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const supaKey : string = config.private.supabaseKey;
  const supabase = createClient(supabaseUrl, supaKey as string)
  const name = event.context.params?.createProject ? event.context.params?.createProject : 0;

  
  const data = await supabase
      .from('project')
      .insert([
        { projectName: name},
      ])
   
    console.log(data.data)
  
    return {data: data.data}
  })