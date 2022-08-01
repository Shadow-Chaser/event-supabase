import { createClient } from '@supabase/supabase-js'
// import 'dotenv/config'
// require('dotenv').config()


// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY
const supabaseUrl = "https://onamztluetpchimnfxpe.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uYW16dGx1ZXRwY2hpbW5meHBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkyNzQ2MTksImV4cCI6MTk3NDg1MDYxOX0.FBvxKCkql5uCiBP8zhnALA_7FS6RICIHq9a7qQN_4Jc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)