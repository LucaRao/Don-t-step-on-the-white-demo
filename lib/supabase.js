import { createClient } from 'supabase-wechat-stable'

const url = ""
const public_key = ""
export const supabase = createClient(url, public_key)