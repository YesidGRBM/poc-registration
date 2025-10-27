import type { APIRoute } from "astro";

export const GET: APIRoute = async ({params}) => {
    const { id } = params
    const url = `https://poc-registration-services-production.up.railway.app/api/user/${id}/meta`
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const res = await response.json()
    return new Response(JSON.stringify(res), {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
        }
    })
}