<script>
    import {page} from '$app/stores'
    $: images = $page.data.dt

    $:image = images.map((img)=>img.images[0])
    let count = 0
    
    setInterval(()=>{
      if(count < image.length){
        count = count + 1
      }else{
        count = 0
      }
    },2000)
    $: console.log(image.length,count,image[5])
</script>


<div class="flex flex-col justify-between h-screen">
    
    <div class="w-[100%] h-[400px] my-auto rounded-lg border p-5 pb-5 text-center">
        <p class="text-center p-5">Feel our range of product and shop <a href="/shop"><strong class="text-xl font-bold">here</strong></a></p>
     <img src="{image[count]}" alt="" srcset="" class="w-[400px] h-[300px]">
    </div>
</div>
