import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://bamaksvwpwabpljkkpts.supabase.co';
const supabaseKey = 'sb_publishable_ZdgWf1Pl1-NdT14K4AzFCg_BLhGstfz';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);