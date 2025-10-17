import type { APIRoute } from "astro";
import { URL_SERVER } from 'astro:env/server'

export const GET: APIRoute = async ({params}) => {
    const { id } = params
    console.log({id, URL_SERVER})
    const response = await fetch(`${URL_SERVER}/api/user/${id}/meta`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    console.log({status: response.status, ok: response.ok, statusText: response.statusText})
    const res = await response.json()
    console.log({res})
    return new Response(JSON.stringify(res), {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
        }
    })
}