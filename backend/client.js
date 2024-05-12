import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hfoisuvplpddqxgqdqwl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmb2lzdXZwbHBkZHF4Z3FkcXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNTYyNjIsImV4cCI6MjAyODczMjI2Mn0.q0r3X4SU5Nvti7AkP3ysncF4w1pw0QnaFozghBjmIpU'

export const supabase = createClient(supabaseUrl, supabaseKey)