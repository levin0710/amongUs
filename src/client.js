import { createClient } from "@supabase/supabase-js";

const URL = "https://jcfuxmerblmvqsgstnlf.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjZnV4bWVyYmxtdnFzZ3N0bmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTYzMDAsImV4cCI6MTk5NjIzMjMwMH0.DuCWSBLF8-Jjde051H-f4ny5PFRtpLfu2cFHLSZlomA";

export const supabase = createClient(URL, API_KEY);
