import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gunwesakazxcmglpwlch.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1bndlc2FrYXp4Y21nbHB3bGNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzE0MjEsImV4cCI6MjA2Mjg0NzQyMX0.Xx8z-khayu0K_Mj_N0lVtbJccsMjArS41akBd07ytFA';
export const supabase = createClient(supabaseUrl, supabaseKey);