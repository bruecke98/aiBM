
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qbqwusuvioifcqhsgqwu.supabase.co'
// import { useProjectNameStore } from '~/stores/projectName'

export default defineEventHandler(async (event) => {
    // const projectName = useProjectNameStore().projectName

  const config = useRuntimeConfig()
  const supaKey : string = config.private.supabaseKey;
  const supabase = createClient(supabaseUrl, supaKey as string)
  const customerData = event.context.query?.data ? event.context.query?.data : 0;

  const body = await readBody(event)

  const data = await supabase
      .from('comments')
      .insert([
        {
          project: body.projectName,
          comment: body.comment,

       }
      ])


   
    return {data: data.data}
  })