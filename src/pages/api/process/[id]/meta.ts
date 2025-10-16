import type { APIRoute } from "astro";
import { URL_SERVER } from 'astro:env/server'

export const GET: APIRoute = async ({params}) => {
    const { id } = params
    const response = await fetch(`${URL_SERVER}/api/user/${id}/meta`)
    const res = await response.json()
    return new Response(JSON.stringify(res))
}