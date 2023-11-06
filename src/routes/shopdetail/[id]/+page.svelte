<script>
    import { Exit} from 'radix-icons-svelte'
    import {page} from '$app/stores'
    
    $:id = $page.params.id
  
    export let data
    $:datas = data.dt
    
    $: product = datas[Number(id)-1]

    $:console.log(product)
    
</script>


<div class="flex flex-col gap-7  mx-auto mt-20 mb-10 "> 
    <div>
        <a href="/shop" class="flex relative left-0 top-0"><Exit/></a> 
    </div>
<div class="relative w-[400px] flex flex-col top-0 gap-5">
    <h3>{product.title}</h3>
<p>{product.description}</p>
<img src="{product.images[2]}" alt="img" srcset="" class="w-[250px] h-[250px]"/>
</div>
<div class="flex text-sm text-gray-700 gap-5 relative -bottom-0">
   <p>{product.brand}</p>
   <p>${product.price}</p>
   <p>Rating: {product.rating}</p>
   <p>Stock: {product.stock}</p>
   
</div>

</div>


