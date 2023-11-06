<script lang="ts">
import { cartList } from '$lib/components/stores';
import {Trash} from 'radix-icons-svelte'
$:carts = $cartList

const cart =()=>{
   $cartList.length
}
$: cartT = $cartList.map((dt)=> dt.price)
$: x = cartT.reduce((a, c) => a + c,0)

$: total = x
</script>





<div>
   <div class="flex flex-col justify-start items-start h-[500px] gap-1">
    {#each carts as cart}
      <div class="flex justify-between w-full gap-32">
        <p class="inline text-start text-sm">{cart.title}</p>
        <p class="inline text-end text-sm">${cart.price}</p>
        <button on:click={async()=>{
          let ctb = $cartList.find((crt)=>crt === cart)
          
          $cartList = $cartList.filter((c)=>c !== ctb)
        }}>
          <Trash/>
        </button>
      </div>
   {/each}
   </div>
   <a href="/payment">
    <div class="flex p-3 border gap-32 mb-2 hover:bg-green-200/30">
      <p class=" inline">Total cart:</p>
      <p><strong class="inline text-green-700 font-semibold">${total}</strong></p>
    </div>
  </a>
</div>