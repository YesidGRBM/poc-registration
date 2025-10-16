<script lang="ts">
    import { onMount } from 'svelte'
    import { decrypt } from '../utils/decrypt'
    
    let { id } = $props()

    let data: object | undefined = undefined;
    let loading = $state(true)
    let error = $state(false)
    onMount(async() => {
        try {
            const response = await fetch(`/api/process/${id}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const dataEncrypt = await response.json()
            data = await decrypt(dataEncrypt.data, dataEncrypt.iv);
        } catch (_) {
            error = true;
        } finally {
            loading = false;
        }
    })

    const handlerEnrollment = () => {
        console.log(data)
    }
</script>

{#if error}
    <button class="flex justify-center items-center min-h-12 bg-[#000] py-2 px-6 font-bold text-base text-[#FAFAFA] rounded-sm w-full">
        Oh noo
    </button>
{:else}
    <button onclick={handlerEnrollment} class="flex justify-center items-center min-h-12 bg-[#3A4B53] py-2 px-6 font-bold text-base text-[#FAFAFA] rounded-sm w-full">
        {#if loading}
            ¨Preparando proceso...
        {:else}
            Continuar
        {/if}
    </button>
{/if}
