import type { APIRoute } from "astro";
import { URL_SERVER } from 'astro:env/server'

export const GET: APIRoute = async ({params}) => {
    const { id } = params
    console.log({id})
    const response = await fetch(`${URL_SERVER}/api/user/${id}/meta`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const res = await response.json()
    console.log(res)
    return new Response(JSON.stringify(res), {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
        }
    })
}