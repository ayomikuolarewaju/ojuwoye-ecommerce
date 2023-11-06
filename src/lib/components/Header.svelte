<script>
    import {Heart} from 'radix-icons-svelte';
    import { cartList } from '$lib/components/stores';
    $: cartL = $cartList.length
    
</script>
  

<div class="flex justify-center items-center sticky top-0 z-50 bg-slate-800">
    <nav class="flex justify-between">

      <div>
        <ul class="flex justify-between gap-10 text-2xl m-5">
          <li><a href="/">Home</a></li>
            <li><a href="/shop"> Ojuwoye </a></li>
      
        </ul>
      </div>
      <div class="text-5xl m-5">
        <a href="/cartlist"><img src="/shop.png" alt="shop" srcset=""></a>
          {#if $cartList.length === 0}
            <p class="text-xs">0</p>
            {:else}
            <p class="text-xs">{Number(cartL)}</p>
          {/if}
      </div>
    </nav>
  </div>