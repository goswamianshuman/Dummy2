import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vizarakjvvweounawipz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpemFyYWtqdnZ3ZW91bmF3aXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI3Mjk1MTMsImV4cCI6MTk2ODMwNTUxM30.1usQ8DMbEEcgIv8E7kWbPLhzZXo8U-wzMY-yAFkHHuQ";
export const supabase = createClient(supabaseUrl, supabaseKey);
