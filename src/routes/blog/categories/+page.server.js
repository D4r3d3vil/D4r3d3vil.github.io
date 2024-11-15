import { get_uploads } from "../../../utils/uploads";

export const prerender = true;
export async function load({ params }) {
    const [uploads, categories] = await get_uploads(params.category)
    let filesystem = {}
    categories.forEach(category => {
        if(!category.path.includes('/')) filesystem[category.path] = [];
        else {
            const pathArr = category.path.split('/')
            filesystem[pathArr[pathArr.length-2]].push(category)
        }
    })
    return {uploads, filesystem, hideMenu:true}
}