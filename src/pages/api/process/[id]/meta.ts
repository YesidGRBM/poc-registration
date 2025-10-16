import type { APIRoute } from "astro";

export const GET: APIRoute = async ({params}) => {
    const { id } = params
    const response = await fetch(`http://localhost:8000/api/user/${id}/meta`)
    const res = await response.json()
    return new Response(JSON.stringify(res))
}