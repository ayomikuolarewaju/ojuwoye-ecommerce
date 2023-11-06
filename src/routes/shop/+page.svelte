<script lang="ts">
export let data
$:datas = data.res
import Button from '$lib/components/ui/button/button.svelte';
import { cartList } from '$lib/components/stores';
</script>




<div class="flex flex-col gap-5 justify-center items-center z-10">
    <div class="mb-10 flex top-0 bg-slate-900 w-full p-5 text-center justify-center items-center"><h1 class="text-3xl text-center">Products</h1></div>
    <div class="grid md:grid-cols-4 gap-10 grid-cols-2 justify-center items-center mx-auto p-5 ml-10 ">
        {#each datas as data (data.id)} 
        <ul>
            <li class="flex flex-col gap-3 mb-5">
                <img src="{data.thumbnail}" alt="" srcset="" class="w-[150px] h-[150px]"> 
                <a href="/shopdetail/{data.id}"> {data.title} </a>  
            </li>
            <div>
                <Button on:click={
                    async()=>{
                        const ndt =  await datas.find((dt)=>dt === data)
                        $cartList =  [ndt,...$cartList]
                    }
                } class="flex gap-2">
                <img src="/shop.png" alt="shop" srcset="">
                Add to Cart
                </Button>
            </div>
        </ul>
        {/each}
    </div>
</div>

