import { get_uploads } from "../utils/uploads"

export const prerender = true
export const load = async ({params}) => {
        let posts = await import.meta.glob('../uploads/pages/**');
        let metadata = await Promise.all(Object.entries(posts).map(async (post) => {
            let meta = (await post[1]()).metadata;
            meta['path'] = post[0];
            return meta;
        }));
        metadata = metadata.filter(p=>!p.project).sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    return {projects: (await get_uploads('projects'))[0], posts: metadata} 
}