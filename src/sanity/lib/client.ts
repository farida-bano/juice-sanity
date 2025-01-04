import { createClient } from 'next-sanity';

export const client = createClient({
  projectId:"1wk9u625",
  dataset:"production",
  apiVersion:"2025-01-02",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
