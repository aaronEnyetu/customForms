import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.BEANIE_BABY_URL,
  process.env.BEANIE_BABY_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
