import { get_uploads } from "../../utils/uploads"

export const prerender = true
export const load = async () => { return {projects: (await get_uploads('projects'))[0]} }