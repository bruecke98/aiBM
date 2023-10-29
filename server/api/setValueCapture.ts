
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qbqwusuvioifcqhsgqwu.supabase.co'
// import { useProjectNameStore } from '~/stores/projectName'

export default defineEventHandler(async (event) => {
    // const projectName = useProjectNameStore().projectName

  const config = useRuntimeConfig()
  const supaKey : string = config.private.supabaseKey;
  const supabase = createClient(supabaseUrl, supaKey as string)

  const body = await readBody(event)

  console.log(body)

  const data = await supabase
      .from('service')
      .update({ 
        revenue: body.revenue,
        cost: body.cost,
     })
     .eq('project', body.name)


   
    return {data: data.data}
  })