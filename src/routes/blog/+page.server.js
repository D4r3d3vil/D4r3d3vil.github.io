import { get_uploads } from "../../utils/uploads";

export const prerender = true;
export async function load({ params }) {
  const [uploads, categories] = await get_uploads()
  return {uploads: uploads.filter(u=>!u.metadata.project), categories: categories.filter(c=>c.name != 'projects')}
}
